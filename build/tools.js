"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.Person = void 0;
class Person {
    constructor(firstName, lastName, gender, height, hobbies, birthday, isAlive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.isAlive = isAlive;
    }
}
exports.Person = Person;
;
const logger = (output) => {
    console.log(output);
};
exports.logger = logger;
exports.default = exports.logger;
//# sourceMappingURL=tools.js.map