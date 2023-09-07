//Multidimension array

let arr_multi = [1, 3, 5, [2, 4, 6, 8], 7, 9, [-3, -2, -1, [0], 1, 2, 3]];
//accessing element [0], step by step
let step1 = arr_multi[6];
let step2 = step1[3];
let step3 = step2[0];
console.log("After breaking step by step:\n", step3, "\n");

//accessing at a time
let val = arr_multi[6][3][0];
console.log("After accessing at a time:\n", val, "\n");

//object inside array
let arr_obj = [
    "BD",
    "South-Asia",
    {
        university: [
            {
                public : [
                    "DU", "CU", "BUET", "CUET", "SUST", "RU"
                ],
                private : [
                    "NSU", "BRAC", "IIUC", "AUST", "DIU", "UIU"
                ]
            }
        ],
        river: [
            "Padma", "Megna", "Jomuna", "kornoFuli"
        ]
    },
    "147,570sk",
    {
        postcode : {
            dhaka : 1100,
            barishal : 8200,
            feni : 3900,
            khulna : 9100,
            mymensingh : 2200,
            rajshahi : 6000,
            rangpur : 5400,
            sylhet : 3100
        }
    }
];
//accessing river
let river = arr_obj[2].river;
console.log("Accessing all river:\n", river, "\n");

//Accesing "IIUC" step by step
let part1 = arr_obj[2];
let part2 = part1.university;
let part3 = part2[0];
let part4 = part3.private;
let part5 = part4[2];
console.log("After accessing IIUC step by step:\n",part5,"\n");
//Accessing "IIUC" at a time
let varsity = arr_obj[2].university[0].private[2];
console.log("After accessing IIUC at a time:\n",varsity,"\n");

//Accessing "sylhet" post code
let sylhet_poscode = arr_obj[4].postcode.sylhet;
console.log("Sylhet PostCode is:\n",sylhet_poscode,"\n");
