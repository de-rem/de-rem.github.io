import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import warehouse from './warehouse.js';
import * as dat from './dat.gui.module.js';
import { OutlinePass } from './OutlinePass.js';
import { EffectComposer } from './EffectComposer.js';
import { RenderPass } from './RenderPass.js';
import { ShaderPass } from './ShaderPass.js';
import { FXAAShader } from './FXAAShader.js';
import { GLTFLoader } from './GLTFLoader.js';

let camera, controls, scene, renderer, gui, composer, outlinePass, effectFXAA;
// const scale = [2, 2, 2];

const floorHeight = 2.8;

const containerSizes = {
	"low": [4, 2.4, 2.5],
	"normal": [4, 2.8, 2.5],
	"long": [6, 2.8, 2.5]
}

const stairSize = [2, floorHeight, floorHeight];
const catwalkHeight = 0.2;
const beamWidth = 0.2;

const raycaster = new THREE.Raycaster();
const mousePos = new THREE.Vector2();

const doMatrixAutoUpdate = true;

function onMouseMove(event) {
	mousePos.x = (event.clientX / window.innerWidth) * 2 - 1;
	mousePos.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('click', onObjClick, false);

function onObjClick(event) {
	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera(mousePos, camera);

	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects(scene.children);

	if (intersects[0].object.geometry.type !== "PlaneGeometry") {
		console.log(intersects[0].object);

		gui.destroy();
		gui = new dat.GUI();
		const cubeFolder = gui.addFolder('Cube')
		cubeFolder.add(intersects[0].object.position, 'x', 0, 100)
		cubeFolder.add(intersects[0].object.position, 'y', 0, 100)
		cubeFolder.add(intersects[0].object.position, 'z', 0, 100)
		cubeFolder.add(intersects[0].object.rotation, 'x', 0, Math.PI * 2)
		cubeFolder.add(intersects[0].object.rotation, 'y', 0, Math.PI * 2)
		cubeFolder.add(intersects[0].object.rotation, 'z', 0, Math.PI * 2)
		cubeFolder.open()


		outlinePass.selectedObjects = [intersects[0].object]
		controls.target = new THREE.Vector3(...intersects[0].object.position);

		// const cameraFolder = gui.addFolder('Camera')
		// cameraFolder.add(camera.position, 'z', 0, 10)
		// cameraFolder.open()
	}

	// for (let i = 0; i < intersects.length; i++) {
	// 	if (intersects[i].object.geometry.type !== "PlaneGeometry")
	// 		console.log(intersects[i].object);
	// }
}

function createGUI() {
	gui = new dat.GUI();

}

function createContainer(container) {
	const geometry = new THREE.BoxGeometry(...containerSizes[container.type]);
	// const material = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x111111, shininess: 5 });
	// material.receiveShadow = true;
	// material.castShadow = true;
	// const material = new THREE.MeshStandardMaterial({ color: 'blue' });
	const material = new THREE.MeshNormalMaterial({ color: 'blue', wireframe: false });
	const mesh = new THREE.Mesh(geometry, material);
	mesh.position.x = container.position[0];
	mesh.position.y = ((containerSizes[container.type][1]) + ((container.floor ?? 0) * floorHeight)) / 2;
	mesh.position.z = container.position[1];
	if (container.rotation)
		mesh.rotateY(THREE.Math.degToRad(container.rotation));
	mesh.updateMatrix();
	mesh.matrixAutoUpdate = doMatrixAutoUpdate;
	scene.add(mesh);
}

function createFullStairs(stair) {
	const numOfStairs = 10;
	const stepSize = stairSize[1] / numOfStairs;
	const material = new THREE.MeshBasicMaterial({ color: 'gray', wireframe: true });
	const stairGroup = new THREE.Group();
	stairGroup.position.x = stair.position[0];
	stairGroup.position.z = stair.position[1];

	for (let i = 0; i < numOfStairs; i++) {
		const geometry = new THREE.BoxGeometry(stairSize[0], stepSize, stairSize[2] - (i * stepSize));
		const mesh = new THREE.Mesh(geometry, material);
		mesh.position.x = 0;
		mesh.position.y = ((stair.floor ?? 0) * stairSize[1]) + (i * stepSize) + (stepSize / 2);
		mesh.position.z = - (i * stepSize / 2);
		mesh.updateMatrix();
		mesh.matrixAutoUpdate = doMatrixAutoUpdate;
		stairGroup.add(mesh);
	}

	if (stair.rotation)
		stairGroup.rotateY(THREE.Math.degToRad(stair.rotation));

	scene.add(stairGroup);
}

function createStairs(stair) {
	const numOfStairs = 10;
	const stepSize = stairSize[1] / numOfStairs;
	const material = new THREE.MeshBasicMaterial({ color: 'gray', wireframe: true });
	const stairGroup = new THREE.Group();
	stairGroup.position.x = stair.position[0];
	stairGroup.position.z = stair.position[1];

	for (let i = 0; i < numOfStairs; i++) {
		const geometry = new THREE.BoxGeometry(stairSize[0], stepSize, stepSize);
		const mesh = new THREE.Mesh(geometry, material);
		mesh.position.x = 0;
		mesh.position.y = ((stair.floor ?? 0) * stairSize[1]) + (i * stepSize) + (stepSize / 2);
		mesh.position.z = - (i * stepSize);
		mesh.updateMatrix();
		mesh.matrixAutoUpdate = doMatrixAutoUpdate;
		stairGroup.add(mesh);
	}

	if (stair.rotation)
		stairGroup.rotateY(THREE.Math.degToRad(stair.rotation));

	scene.add(stairGroup);
}

function createCatwalk(catwalk) {
	const catwalkGroup = new THREE.Group();
	catwalkGroup.position.x = catwalk.position[0];
	catwalkGroup.position.z = catwalk.position[1];

	const material = new THREE.MeshNormalMaterial({ color: 'gray' });

	const topPartGeometry = new THREE.BoxGeometry(catwalk.size[0], catwalkHeight, catwalk.size[1]);
	const topPart = new THREE.Mesh(topPartGeometry, material);

	topPart.position.x = 0;
	topPart.position.y = floorHeight - (catwalkHeight / 2);
	topPart.position.z = 0;
	topPart.updateMatrix();
	topPart.matrixAutoUpdate = doMatrixAutoUpdate;

	catwalkGroup.add(topPart);

	const beamXOffset = catwalk.size[0] / 2;
	const beamYOffset = catwalk.size[1] / 2;
	const beamPositions = [
		[-beamXOffset + beamWidth, -beamYOffset + beamWidth],
		[-beamXOffset + beamWidth, beamYOffset - beamWidth],
		[beamXOffset - beamWidth, -beamYOffset + beamWidth],
		[beamXOffset - beamWidth, beamYOffset - beamWidth]]
	const beamGeometry = new THREE.BoxGeometry(beamWidth, floorHeight - (catwalkHeight / 2), beamWidth);
	for (const beamPosition of beamPositions) {
		const beam = new THREE.Mesh(beamGeometry, material);
		beam.position.x = beamPosition[0];
		beam.position.y = beamGeometry.parameters.height / 2;
		beam.position.z = beamPosition[1];
		catwalkGroup.add(beam);
	}

	scene.add(catwalkGroup);
}

function createObjects() {
	for (const container of warehouse.containers) {
		createContainer(container);
	}
	for (const stair of warehouse.stairs) {
		createStairs(stair);
	}
	for (const catwalk of warehouse.catwalks) {
		createCatwalk(catwalk);
	}
}

export function showScene() {
	init();
	//render(); // remove when using next line for animation loop (requestAnimationFrame)
	createGUI();
	createObjects();
	animate();
	console.log(scene)
}

function init() {
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xcccccc);
	// scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

	var axesHelper = new THREE.AxesHelper(5);
	scene.add(axesHelper);

	renderer = new THREE.WebGLRenderer();
	// renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio * 1.5);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;

	document.body.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.set(0, 20, 0);

	createControls();
	addPostProcessing();
	addPlane();
	addLights();
}

function createControls() {
	controls = new OrbitControls(camera, renderer.domElement);
	controls.listenToKeyEvents(window); // optional
	//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
	controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
	controls.dampingFactor = 0.05;

	controls.screenSpacePanning = false;

	controls.minDistance = 20;
	controls.maxDistance = 500;

	controls.maxPolarAngle = Math.PI / 2;
	controls.target = new THREE.Vector3(15, 0, 15);
}

function addPostProcessing() {
	composer = new EffectComposer(renderer);

	const renderPass = new RenderPass(scene, camera);
	composer.addPass(renderPass);

	outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
	composer.addPass(outlinePass);

	effectFXAA = new ShaderPass(FXAAShader);
	const pixelRatio = renderer.getPixelRatio();
	effectFXAA.uniforms['resolution'].value.set(1 / (window.innerWidth * pixelRatio), 1 / (window.innerHeight * pixelRatio));
	composer.addPass(effectFXAA);
}

function addPlane() {
	var geo = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
	var mat = new THREE.MeshBasicMaterial({ color: 'orange', side: THREE.DoubleSide });
	var plane = new THREE.Mesh(geo, mat);
	plane.rotateX(- Math.PI / 2);
	scene.add(plane);
}

function addLights() {
	// const light = new THREE.DirectionalLight(0xddffdd, 0.6);
	// light.position.set(1, 1, 1);
	// light.castShadow = true;
	// light.shadow.mapSize.width = 1024;
	// light.shadow.mapSize.height = 1024;

	// const d = 10;

	// light.shadow.camera.left = - d;
	// light.shadow.camera.right = d;
	// light.shadow.camera.top = d;
	// light.shadow.camera.bottom = - d;
	// light.shadow.camera.far = 1000;

	// scene.add(light);

	const dirLight1 = new THREE.DirectionalLight(0xffffff);
	dirLight1.position.set(1, 1, 1);
	scene.add(dirLight1);

	const dirLight2 = new THREE.DirectionalLight(0x002288);
	dirLight2.position.set(- 1, - 1, - 1);
	scene.add(dirLight2);

	const ambientLight = new THREE.AmbientLight(0x222222);
	scene.add(ambientLight);

	window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	composer.setSize(window.innerWidth, window.innerHeight);
	const pixelRatio = renderer.getPixelRatio();
	effectFXAA.uniforms['resolution'].value.set(1 / (window.innerWidth * pixelRatio), 1 / (window.innerHeight * pixelRatio));
}

function loadModel(path, scale = 1){
	const loader = new GLTFLoader();

	loader.load(`./js/models/${path}`, function (gltf) {
		gltf.scene.scale.x = scale;
		gltf.scene.scale.y = scale;
		gltf.scene.scale.z = scale;
		scene.add(gltf.scene);

	}, undefined, function (error) {

		console.error(error);

	});
}

function animate() {
	requestAnimationFrame(animate);
	controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

	composer.render();
	// render();
}

function render() {
	renderer.render(scene, camera);
}
