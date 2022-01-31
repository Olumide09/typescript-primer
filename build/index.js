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
const person1 = new tools_1.Person("Fathia", "Saludeen", "female", 1.75, ["singing", "dancing", "baking"], new Date("2002-01-09"), true);
(0, tools_1.default)(`The first person is ${person1.firstName} ${person1.lastName}, ${person1.gender === "female" ? "She" : "He"} likes ${person1.hobbies.join(",")}`);
//# sourceMappingURL=index.js.map