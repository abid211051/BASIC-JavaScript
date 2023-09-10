let obj = {};
obj.name = "abid";
obj.age = 23;
obj.depertment = "cse";
console.log("Object value:\n",obj["name"],obj.age, "\n");

delete obj.depertment;
console.log("After deletion:\n",obj);
console.log(obj.depertment);

//Nested object
let human_body = {
    header_part : [
        "Forehead", "Hair", "Eye", "Eyebrow", "Nose", "Ear", "Tooth", "Tongue", "Lip", "Chin", "Neck"
    ],
    middle_part : [
        "Shoulder",
        "Chest",
        {
            hand : ["Arm", "Elbow", "Finger"]
        },
        "Stomach",
        "Navel"
    ],
    lower_part : [
        "Hip",
        {
            Leg : ["Thigh", "knee", "Ankle", "foot", "Toe"]
        }
    ]
}

//Accesesing "Finger" Step by step
let step1 = human_body.middle_part;
let step2 = step1[2];
let step3 = step2.hand;
let step4 = step3[2];
console.log("After Accesesing step by step:\n",step4,"\n");

//Accessing at a time
let  ankle = human_body.lower_part[1].Leg[2];
console.log("After Accesesing at a time\n",ankle,"\n");
