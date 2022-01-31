let name: string = "Olumide";

console.log(name)
let count: number = 10

name = 'Paul';

console.log(name)
count = 5

import logger, {Person} from './tools'

const person1 = new Person(
    "Fathia"
    ,"Saludeen",
     "female",
      1.75,
      ["singing", "dancing", "baking"],
       new Date("2002-01-09"),
        true)


    logger(`The first person is ${person1.firstName} ${person1.lastName}, ${person1.gender === "female"? "She":"He"} likes ${person1.hobbies.join(",")}.`)    