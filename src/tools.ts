export enum Gender{
  //  F = "female", 
    //M = "male"
    F = 1,
    M = 2
}
export interface IPersonData {
    firstName: string,
    lastName: string,
    gender: Gender,
    //gender: "male" | "female",
    height?: number, //question mark here means optional
    hobbies: string[],
    birthday?: Date, //question mark here means optional
    isAlive: boolean
}


export class Person {
    //declare data type in TS
    // class Person definition starts here.
    firstName: string;
    lastName: string;
   // gender: "male" | "female";
   gender : Gender;
    height: number;
    hobbies: string[];
    birthday: Date;
    isAlive: boolean;


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
    constructor(personData: IPersonData) {
        this.firstName = personData.firstName;
        this.lastName = personData.lastName;
        this.gender = personData.gender;
        this.height = personData.height;
        this.hobbies = personData.hobbies;
        this.birthday = personData.birthday;
        this.isAlive = personData.isAlive;
}

}
//interface is a class without methods.
// class contains properties and methods.




export const logger = (output: string) => {
    console.log(output);
}

export default logger;