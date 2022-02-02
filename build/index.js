"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Olumide";
console.log(name);
let count = 10;
name = 'Paul';
console.log(name);
count = 5;
const tools_1 = __importStar(require("./tools"));
/*const person1 = new Person(
    "Fathia"
    ,"Saludeen",
     "female",
      1.75,
      ["singing", "dancing", "baking"],
       new Date("2002-01-09"),
        true);
const pronoun = person1.gender === "female"? "She" : "He";
*/
let person1Data = {
    firstName: "Olumide",
    lastName: "Olaoye",
    gender: "male",
    height: 1.9,
    hobbies: ["eating", "playing soccer", "playing video games"],
    birthday: new Date("2004-09-23"),
    isAlive: true
};
const person1 = new tools_1.Person(person1Data);
(0, tools_1.default)(`The first person is ${person1Data.firstName} ${person1Data.lastName}, ${person1Data.gender === "male" ? "She" : "He"} likes ${person1Data.hobbies.join(",")}. ${person1Data.birthday.toLocaleDateString("en-NG")}`);
let person2Data = {
    firstName: "Kamby",
    lastName: "Udeani",
    gender: "female",
    height: 1.9,
    hobbies: ["eating", "playing video games"],
    birthday: new Date("2003-11-06"),
    isAlive: true
};
const person2 = new tools_1.Person(person2Data);
(0, tools_1.default)(`The second person is ${person2Data.firstName} ${person2Data.lastName}, ${person2Data.gender === "female" ? "She" : "He"} likes ${person2Data.hobbies.join(",")}. ${person2Data.birthday.toLocaleDateString("en-NG")}`);
//# sourceMappingURL=index.js.map