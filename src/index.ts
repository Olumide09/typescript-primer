let name: string = "Olumide";

console.log(name)
let count: number = 10

name = 'Paul';

console.log(name)
count = 5

import logger, {IPersonData, Person} from './tools'

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
    firstName: "Pius",
    lastName: "Onobhayedo",
    gender: "male",
    height: 1.5,
    hobbies: [],
    birthday: new Date(1900,10,10),
    isAlive: true
   }
const person1 = new Person(person1Data);

    logger(`The first person is ${person1Data.firstName} ${person1Data.lastName}, ${person1Data.gender === "female"? "She":"He"} likes ${person1Data.hobbies.join(",")}. ${person1Data.birthday.toLocaleDateString}`)    