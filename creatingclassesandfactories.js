class Hamster{
  owner 
  constructor (name){
this.name = name
  }
  price = 15
  wheelRun( ){
    console.log ("squeak squeak")
  }
  eatFood(){
    console.log ("nibble nibble")
  }
  getPrice() {
    return this.price
  }
}

class Person {
  constructor(name){
    this.name = name
      }
age = 0
height = 0
weight = 0
mood = 0
hamsters = []
bankAccount = 0
getName() {
  return this.name
  }
getAge() {
  return this.age
      }
getWeight() {
  return this.weight 
      }

 greet() {
  console.log ("Hello", this.name)
 }

 eat() {
  this.weight ++
  this.mood ++
 }

 exercise() {
  this.weight --
 }

 ageUp() {
  this.age ++
  this.height ++
  this.weight ++
  this.mood --
  this.bankAccount +=10
 }

buyHamster(hamster) {
  this.mood +=10
  this.bankAccount -=hamster.getPrice ()
this.hamsters.push (hamster)
}
}

const timmy = new Person ("Timmy")
console.log ("instantiated person")
timmy.age = 5
timmy.eat ()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()

timmy.exercise ()
timmy.exercise ()
timmy.exercise ()
timmy.exercise ()
timmy.exercise ()

timmy.age = 9

const hamster = new Hamster ("Gus")
hamster.owner = timmy.getName()
timmy.buyHamster (hamster)
timmy.age = 15
timmy.eat ()
timmy.eat ()
timmy.exercise ()
timmy.exercise ()

console.log(`${timmy.getName()}'s age is ${timmy.getAge()}`)
console.log(`${timmy.getName()}'s bank balance is ${timmy.bankAccount}`)
console.log(`${timmy.getName()}'s weight is ${timmy.weight}`)

class Dinner {
constructor (appetizer, entree, dessert){
  this.appetizer = appetizer
  this.entree = entree
  this.dessert = dessert
}
}

class Chef {
makedinner (appetizer, entree, dessert)
{
  const dinner = new Dinner (appetizer, entree, dessert)
  return dinner
}
}

const chefRamsey = new Chef()
console.log (chefRamsey.makedinner ("shrimp cocktail", "lamb bhuna", "carrot cake"))
console.log (chefRamsey.makedinner ("cheesetray", "chicken karahi", "chocolate cake"))
console.log (chefRamsey.makedinner ("avocado toast", "chicken biryani", "fruit salad"))
