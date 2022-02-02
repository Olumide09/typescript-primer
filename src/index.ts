let name: string = "Olumide";

console.log(name)
let count: number = 10

name = 'Paul';

console.log(name)
count = 5

import logger, {Gender, IPersonData, Person} from './tools'

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
 
let person1Data: IPersonData = {
    firstName: "Olumide",
    lastName: "Olaoye",
    gender: Gender.M,
    height: 1.9,
    hobbies: ["eating","playing soccer", "playing video games"],
    birthday: new Date("2004-09-23"),
    isAlive: true
   }
const person1 = new Person(person1Data);
logger(`The first person is ${person1Data.firstName} ${person1Data.lastName}, ${person1Data.gender === "male"? "She":"He"} likes ${person1Data.hobbies.join(",")}. ${person1Data.birthday.toLocaleDateString("en-NG")}`)    

let person2Data: IPersonData = {
    firstName: "Kamby",
    lastName: "Udeani",
    gender: Gender.F,
    height: 1.9,
    hobbies: ["eating", "playing video games"],
    birthday: new Date("2003-11-06"),
    isAlive: true
   }
const person2 = new Person(person2Data);


    logger(`The second person is ${person2Data.firstName} ${person2Data.lastName}, ${person2Data.gender === "female"? "She":"He"} likes ${person2Data.hobbies.join(",")}. ${person2Data.birthday.toLocaleDateString("en-NG")}`)    