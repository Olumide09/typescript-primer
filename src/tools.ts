export class Person {
    //declare data type in TS
    firstName: string;
    lastName: string;
    gender: "male" | "female";
    height: number;
    hobbies: string[];
    birthday: Date;
    isAlive: boolean;
    constructor(firstName: string, lastName: string, gender: "male" | "female", height: number, hobbies: string[], birthday: Date, isAlive: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.isAlive = isAlive;
    }
};