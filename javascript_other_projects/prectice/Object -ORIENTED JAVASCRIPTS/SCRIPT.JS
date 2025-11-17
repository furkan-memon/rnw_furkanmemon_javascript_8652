class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log("Hello " + this.name);
  }
}
let user = new Person("furkan" , 20)
user.sayHello()