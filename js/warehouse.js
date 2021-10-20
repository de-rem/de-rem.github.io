const containerSizes = {
	"low": [4, 2.4, 2.5],
	"normal": [4, 2.8, 2.5],
	"long": [6, 2.8, 2.5]
}

const containerWidth = 2.5;

export default {
    "stairs": [
        {
            "position": [16.5, 15.25],
            "rotation": 90,
            "rails": "left"
        }
    ],
    "catwalks": [
        {
            "position": [24.5, 13.75],
            "size": [3, 5]
        },
        {
            "position": [21.1, 15.25],
            "size": [3.9, 2]
        },
        {
            "position": [7.25, 31.25],
            "size": [2.5, 10]
        }
    ],
    "rails": [
        {
            "position": [11.1, 16.35],
            "length": [8]
        },
        {
            "position": [11.1, 18.75],
            "length": [2.45],
            "rotation": 90
        },
        {
            "position": [19, 14.25],
            "length": [4]
        },
        {
            "position": [23, 14.25],
            "length": [5.5],
            "rotation": 90
        },
        {
            "position": [-5.9, 26.3],
            "length": [20],
        },
        {
            "position": [-5.9, 27.55],
            "length": [1.25],
            "rotation": 90
        },
        {
            "position": [-5.9, 33.75],
            "length": [1.25],
            "rotation": 90
        },
        {
            "position": [6, 36.2],
            "length": [2.5],
        },
        {
            "position": [34.9, 18.75],
            "length": [2.5],
            "rotation": 90
        },
        {
            "position": [34.9, 11.25],
            "length": [2.5],
            "rotation": 90
        }
    ],
    "containers": [
        //#region left
        {
            "id": 38,
            "type": "normal",
            "position": [13, 20]
        },
        {
            "id": 9,
            "type": "long",
            "position": [14, 17.5]
        },
        {
            "id": 37,
            "type": "normal",
            "position": [17, 20]
        },
        {
            "id": 10,
            "type": "long",
            "position": [20, 17.5]
        },
        {
            "id": 36,
            "type": "normal",
            "position": [21, 20]
        },
        {
            "id": 11,
            "type": "long",
            "position": [26, 17.5]
        },
        {
            "id": 33,
            "type": "normal",
            "position": [25, 20]
        },
        {
            "id": 32,
            "type": "normal",
            "position": [29, 20]
        },
        {
            "id": 31,
            "type": "normal",
            "position": [33, 20]
        },
        {
            "id": 12,
            "type": "long",
            "position": [32, 17.5]
        },
        {
            "id": 46,
            "type": "low",
            "position": [13, 20],
            "floor": 2,
        },
        {
            "id": 45,
            "type": "low",
            "position": [17, 20],
            "floor": 2,
        },
        {
            "id": 44,
            "type": "low",
            "position": [21, 20],
            "floor": 2
        },
        {
            "id": 49,
            "type": "low",
            "position": [25, 20],
            "floor": 2,
        },
        {
            "id": 48,
            "type": "low",
            "position": [29, 20],
            "floor": 2,
        },
        {
            "id": 47,
            "type": "low",
            "position": [33, 20],
            "floor": 2
        },
        {
            "id": 51,
            "type": "long",
            "position": [29, 15]
        },
        {
            "id": 50,
            "type": "long",
            "position": [33.5, 15]
        },
        {
            "id": 56,
            "type": "long",
            "position": [29, 12.5]
        },
        {
            "id": 55,
            "type": "long",
            "position": [33.5, 12.5]
        },
        {
            "id": 54,
            "type": "low",
            "position": [26.5, 15],
            "floor": 2
        },
        {
            "id": 53,
            "type": "low",
            "position": [30.5, 15],
            "floor": 2
        },
        {
            "id": 52,
            "type": "low",
            "position": [34.5, 15],
            "floor": 2
        },
        {
            "id": 59,
            "type": "low",
            "position": [34.5, 12.5],
            "floor": 2
        },
        {
            "id": 61,
            "type": "low",
            "position": [26.5, 12.5],
            "floor": 2
        },
        {
            "id": 60,
            "type": "low",
            "position": [30.5, 12.5],
            "floor": 2
        },
        {
            "id": 57,
            "type": "long",
            "position": [32, 10]
        },
        {
            "id": 43,
            "type": "long",
            "position": [32, 7.5]
        },
        {
            "id": 58,
            "type": "long",
            "position": [26, 10]
        },
        {
            "id": 42,
            "type": "long",
            "position": [26, 7.5]
        },
        {
            "id": 62,
            "type": "low",
            "position": [25, 7.5],
            "floor": 2
        },
        {
            "id": 63,
            "type": "low",
            "position": [29, 7.5],
            "floor": 2
        },
        {
            "id": 64,
            "type": "low",
            "position": [33, 7.5],
            "floor": 2
        },
        //#endregion
        //#region right
        //#region 1
        {
            "id": 121,
            "type": "long",
            "position": [-3, 30]
        },
        {
            "id": 0,
            "type": "long",
            "position": [-3, 27.5]
        },
        {
            "id": 119,
            "type": "long",
            "position": [-3, 32.5]
        },
        {
            "id": 120,
            "type": "long",
            "position": [3, 30]
        },
        {
            "id": 0,
            "type": "long",
            "position": [3, 27.5]
        },
        {
            "id": 118,
            "type": "long",
            "position": [3, 32.5]
        },
        {
            "id": 0,
            "type": "low",
            "position": [-4, 28.75],
            "floor": 2,
        },
        {
            "id": 0,
            "type": "low",
            "position": [0, 28.75],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [4, 28.75],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [-4, 31.25],
            "floor": 2,
        },
        {
            "id": 0,
            "type": "low",
            "position": [0, 31.25],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [4, 31.25],
            "floor": 2
        },
        {
            "id": 117,
            "type": "long",
            "position": [-3, 35]
        },
        {
            "id": 116,
            "type": "long",
            "position": [3, 35]
        },
        {
            "id": 0,
            "type": "low",
            "position": [0, 35],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [4, 35],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [-4, 35],
            "floor": 2
        },
        //#endregion
        //#region 2
        {
            "id": 101,
            "type": "long",
            "position": [17.5, 30]
        },
        {
            "id": 106,
            "type": "normal",
            "position": [10.5, 27.5]
        },
        {
            "id": 105,
            "type": "normal",
            "position": [14.5, 27.5]
        },
        {
            "id": 104,
            "type": "normal",
            "position": [18.5, 27.5]
        },
        {
            "id": 102,
            "type": "long",
            "position": [11.5, 30]
        },
        {
            "id": 100,
            "type": "long",
            "position": [17.5, 32.5]
        },
        {
            "id": 103,
            "type": "long",
            "position": [11.5, 32.5]
        },
        {
            "id": 0,
            "type": "low",
            "position": [10.5, 28.75],
            "floor": 2,
        },
        {
            "id": 0,
            "type": "low",
            "position": [14.5, 28.75],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [18.5, 28.75],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [10.5, 31.25],
            "floor": 2,
        },
        {
            "id": 0,
            "type": "low",
            "position": [14.5, 31.25],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [18.5, 31.25],
            "floor": 2
        },
        {
            "id": 99,
            "type": "long",
            "position": [11.5, 35]
        },
        {
            "id": 98,
            "type": "long",
            "position": [17.5, 35]
        },
        {
            "id": 0,
            "type": "low",
            "position": [10.5, 35],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [14.5, 35],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [18.5, 35],
            "floor": 2
        },
        //#endregion
        //#region 3
        {
            "id": 35,
            "type": "long",
            "position": [26, 30]
        },
        {
            "id": 41,
            "type": "normal",
            "position": [25, 27.5]
        },
        {
            "id": 102,
            "type": "long",
            "position": [32, 30]
        },
        {
            "id": 40,
            "type": "normal",
            "position": [29, 27.5]
        },
        {
            "id": 0,
            "type": "normal",
            "position": [33, 27.5]
        },
        {
            "id": 14,
            "type": "long",
            "position": [26, 32.5]
        },
        {
            "id": 103,
            "type": "long",
            "position": [32, 32.5]
        },
        {
            "id": 0,
            "type": "low",
            "position": [25, 28.75],
            "floor": 2,
        },
        {
            "id": 0,
            "type": "low",
            "position": [29, 28.75],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [33, 28.75],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [25, 31.25],
            "floor": 2,
        },
        {
            "id": 0,
            "type": "low",
            "position": [29, 31.25],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [33, 31.25],
            "floor": 2
        },
        {
            "id": 28,
            "type": "long",
            "position": [26, 35]
        },
        {
            "id": 0,
            "type": "long",
            "position": [32, 35]
        },
        {
            "id": 0,
            "type": "low",
            "position": [25, 35],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [29, 35],
            "floor": 2
        },
        {
            "id": 0,
            "type": "low",
            "position": [33, 35],
            "floor": 2
        },
        //#endregion
         //#endregion
    ]
}