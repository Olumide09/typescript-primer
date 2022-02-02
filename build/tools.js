"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.Person = void 0;
class Person {
    /*  constructor(firstName: string, lastName: string, gender: "male" | "female", height: number, hobbies: string[], birthday: Date, isAlive: boolean) {
           this.firstName = firstName;
           this.lastName = lastName;
           this.gender = gender;
           this.height = height;
           this.hobbies = hobbies;
           this.birthday = birthday;
           this.isAlive = isAlive;
       }
    };
    */
    /** Section on interface and classes. */
    constructor(personData) {
        this.firstName = personData.firstName;
        this.lastName = personData.lastName;
        this.gender = personData.gender;
        this.height = personData.height;
        this.hobbies = personData.hobbies;
        this.birthday = personData.birthday;
        this.isAlive = personData.isAlive;
    }
}
exports.Person = Person;
//interface is a class without methods.
// class contains properties and methods.
const logger = (output) => {
    console.log(output);
};
exports.logger = logger;
exports.default = exports.logger;
//# sourceMappingURL=tools.js.map