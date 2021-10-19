const containerSizes = {
	"low": [4, 2.4, 2.5],
	"normal": [4, 2.8, 2.5],
	"long": [6, 2.8, 2.5]
}

const containerWidth = 2.5;

export default {
    "stairs": [
        // {
        //     "position": [20,10],
        //     "rotation": 90
        // }
    ],
    "catwalks": [
        // {
        //     "position": [20,5],
        //     "size": [3,5]
        // }
    ],
    "containers": [
        //#region left
        {
            "id": 0,
            "type": "long",
            "position": [20, 20]
        },
        {
            "id": 0,
            "type": "long",
            "position": [20, 17.5]
        },
        {
            "id": 0,
            "type": "long",
            "position": [26, 20]
        },
        {
            "id": 0,
            "type": "long",
            "position": [26,17.5]
        },
        {
            "id": 0,
            "type": "low",
            "position": [19, 20],
            "floor": 2,
        },
        {
            "id": 0,
            "type": "low",
            "position": [23, 20],
            "floor": 2
        },
        {
            "id": 0,
            "type": "long",
            "position": [29, 15]
        },
        {
            "id": 0,
            "type": "long",
            "position": [29,12.5]
        },
        {
            "id": 0,
            "type": "long",
            "position": [32, 10]
        },
        {
            "id": 0,
            "type": "long",
            "position": [32,7.5]
        },
        {
            "id": 0,
            "type": "long",
            "position": [26, 10]
        },
        {
            "id": 0,
            "type": "long",
            "position": [26,7.5]
        },
        //#endregion
        //#region right
        {
            "id": 0,
            "type": "long",
            "position": [20, 30]
        },
        {
            "id": 0,
            "type": "long",
            "position": [20, 27.5]
        },
        {
            "id": 0,
            "type": "long",
            "position": [26, 30]
        },
        {
            "id": 0,
            "type": "long",
            "position": [26, 27.5]
        },
        {
            "id": 0,
            "type": "long",
            "position": [20, 32.5]
        },
        {
            "id": 0,
            "type": "long",
            "position": [20, 35]
        },
        {
            "id": 0,
            "type": "long",
            "position": [26, 32.5]
        },
        {
            "id": 0,
            "type": "long",
            "position": [26, 35]
        },
        {
            "id": 0,
            "type": "low",
            "position": [19, 28.75],
            "floor": 2,
        },
        {
            "id": 0,
            "type": "low",
            "position": [23, 28.75],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [19, 32.25],
            "floor": 2,
        },
        {
            "id": 0,
            "type": "low",
            "position": [23, 32.25],
            "floor": 2
        },
        //#endregion
    ]
}