'use strict'; 

//class Person {
//    constructor(name, age){
//        this.name = name; 
//        this.age = age; 
//    }
//
//    speak(){
//        console.log(`${this.name} is ${this.age} years old!`); 
//
//    }
//}
//
//const kevin = new Person('kevin', 27); 
//console.log(kevin.name); 
//console.log(kevin.age); 
//kevin.speak();




//class Pet {
//
//    constructor(name, breed, age, food){
//        this.name = name; 
//        this.breed = breed; 
//        this.age = age; 
//        this.food = food; 
//    }
//
//    //method 
//    showYourDog(){
//        console.log(`${this.name} is ${this.breed}. And ${this.name} is ${this.age} years old!`);
//    }
//
//    makeSound(){
//        if(this.breed == 'westie'){
//            console.log("멍멍");
//        }else if(this.breed == 'rabbit'){
//            console.log("깡충깡충");
//        }
//    }
//
//    decreaseAge(){
//        this.age--; 
//        console.log(this.age);
//    }    
//
//    giveFood(gram){
//        this.food += gram;
//        console.log(this.food);
//    }
//}
//
//
//const rena = new Pet('rena', 'westie', 5, 900); 
//const dobby = new Pet('dobby', 'rabbit', 3, 200);
//const sandy = new Pet ('sandy', 'rabbit', 9, 300);
//const rocky = new Pet ('rocky', 'rabbit', 9, 300);
//
//
//const pets = [rena, dobby, sandy, rocky]; 
//
//pets.forEach(animal => animal.showYourDog());
//pets.forEach(animal => animal.makeSound());
//pets.forEach(animal => animal.decreaseAge());
//pets.forEach(animal => animal.giveFood('kg'));




//class Music {
//
//
//    constructor(singer, song, rate){
//        this.singer= singer; 
//        this.song = song; 
//        this.rate = rate; 
//    }
//
//    //method
//    writeOnScreen(){
//        const h2 = document.createElement('h2')
//        h2.setAttribute('class', 'h2')
//
//        h2.innerHTML =
//
//        `1. singer  : ${this.singer} <br>
//         2. title : ${this.song}<br>
//         3. rate : ${this.rate}`
//        
//         document.body.appendChild(h2); 
//         
//    }
//
//
//    comments(){
//        if(this.rate >= '★★★★'){
//            console.log(`${this.song} is pawsome`);
//        }else if(this.rate =='★★★'){
//            console.log(`${this.song} is not bad`);
//        }else{
//            console.log(`${this.song} is useless`);
//        }
//
//    }
//}
//
//const lany = new Music('LANY', 'ILYSB', '★★★★★'); 
//const stacy = new Music('stacy', 'SO BAD', '★★★★★'); 
//const idel = new Music('idel', '덤디덤디', '★'); 
//const cardiB = new Music('cardiB', 'WAP', '★★★'); 
//
//const singer = [lany, stacy, idel, cardiB];
//
//for(let i = 0; i < singer.length; i++){
//    singer[i].comments();
//    singer[i].writeOnScreen();
//}
//
//
//singer.forEach(artist => console.log(artist) );



//lass Person {
//   constructor(name, age, job){
//       this.name = name; 
//       this.age = age; 
//       this.job = job; 
//   }
//
//
//onst form = document.querySelector("#form");
//
//orm.addEventListener("submit", (e) => {
//   e.preventDefault(); 
//   const person = new Person(form.name.value, form.age.value, form.job.value);
//   const p = document.createElement('p'); 
//   document.body.appendChild(p);
//   p.textContent = `이름 : ${person.name}, 나이 : ${person.age}, 직업 : ${person.job}`
//)
//
//
//
//
//lass Parent {
//   constructor(name){
//       this.name = name;
//   }
//
//   sayName(){
//       console.log(this.name)
//   }
//
//
//
//
//lass Child extends Parent{
//   changeName(name){
//       this.name = name; 
//   }
//   sayNameSuper(){
//       //슈퍼클래스가 가진 메소드를 두 번 호출 
//       super.sayName()
//       super.sayName()
//   }
//
//
//
//onst child = new Child('생성자 원래이름')
//hild.sayNameSuper(); 
//hild.changeName();
//
//
//et timer; 
//
//lass Clock {
//   
//   constructor(date, hours, mins, sec){
//       this.date = date;
//       this.hours= hours
//   }
//
//
//
//
//lass People {
//   constructor(name,age,job){
//       this.name = name; 
//       this.age = age; 
//       this.job = job;
//   }
//
//   //method 
//
//   writeOnScreen(){
//       if(this.job == "student"){
//           console.log(`${this.name}, You should study hard!`); 
//       }else if(this.job == "developer"){
//           console.log(`${this.name}, You should earn lots of money!`);
//       }else if(this.job == "housewife"){
//           console.log(`${this.name}, You should go to supermarket today!`);
//       }
//   }
//
//
//
//
//onst sumin = new People("sumin", 25, "student");
//onst kevin = new People("kevin", 27, "developer"); 
//onst mom = new People("mom", 59, "housewife");
//
//
//onst peoplee =  [sumin,kevin,mom];
//
//eoplee.forEach(peo => peo.writeOnScreen());
//
//
//
//lass Product{
//
//   constructor(name, weight, price){
//       this.name = name; 
//       this.weight = weight;
//       this.price = price; 
//   }
//
//   //method 
//
//   calculate(weight){
//
//       console.log(this.price *( weight / this.weight ) );
//   }
//
//   
//
//
//onst pork = new Product("삼겹살", 200, 1690); 
//
//ork.calculate(600); 
//
/// We want to be able to add clothes to our pets!
//
//lass pet {
//   // Step 1, add a new parameter in the constructor
//  // like: this.clothes = clothes.
//  // This should be an array for later!
//  constructor(name, breed, age, clothes = []) {
//    this.name = name;
//    this.breed = breed;
//    this.age = age;
//    this.clothes = clothes; 
//  }
//
//  //method 
//  showYourDog() {
//    console.log(`${this.name} is ${this.breed}. And ${this.name} is ${this.age} years old!`);
//  }
//  
//  // Step 2
//  // Make a function, addClothes, with a parameter outfit.
//  // And add this outfit to the clothes array
//
//  addClothes(outfit){
//       this.clothes.push(outfit); 
//       console.log(`${this.name} has ${outfit}`);
//  }
//
//}
//
//
//const rena = new pet('rena', 'westie', 5);
//const dobby = new pet('dobby', 'rabbit', 3);
//const sandy = new pet('sandy', 'rabbit', 9);
//const rocky = new pet('rocky', 'rabbit', 9);
//
//rena.addClothes("dress");
//dobby.addClothes("pants");
 




class pet {

    constructor(name, breed, age, clothes = []) {
      this.name = name;
      this.breed = breed;
      this.age = age;
      this.clothes = clothes;
    }
  
    //method 
    showYourDog() {
      console.log(`${this.name} is ${this.breed}. And ${this.name} is ${this.age} years old!`);
    }
    addClothes(outfit) {
      this.clothes.push(outfit);
      console.log(`${this.name} had ${outfit}!`);
    }
    // We want to print out the year the pet was born!
    // Make a method called bornYear
    // And calculate the year the pet was born
    // With this.age and the current year
    // You can get the current year through 
    // const currentYear = new Date().getFullYear()

    bornYear(){
        
        

        const currentYear= new Date().getFullYear(); 
        console.log(currentYear - this.age);
        
    }
    
  }
  
  
  const rena = new pet('rena', 'westie', 5);
  const dobby = new pet('dobby', 'rabbit', 3);
  const sandy = new pet('sandy', 'rabbit', 9);
  const rocky = new pet('rocky', 'rabbit', 9);
  
  rena.addClothes("dress");

  rena.bornYear();
  sandy.bornYear();


