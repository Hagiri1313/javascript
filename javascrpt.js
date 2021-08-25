

class Validator {
    constructor(name, surname,mail,login,password) {
        this.name=name;
        this.surname=surname;
        this.mail=mail;
        this.login=login;
        this.password=password;
    }
    mailCheck(mail){
        if (mail.length<5){
            false
        }else {
            true
        }
           let regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            let address = mail;
            if(regMail.test(address) == false) {
                console.log('Введите корректный e-mail');
                return false;

        }

}
    passwordCheck(password) {
        if (password.length < 6){
            console.log("Ненадежный пароль")
        }else if (password.length > 10) {
            console.log("А ты запомниешь его ? ")
        }else{
          true
        }
            let regPassword = /^([A-Za-z0-9_\-])/;
        let passCheck = password;
        if (regPassword.test(passCheck) == false) {
            console.log('Введите корректный password');
            return false;
        }
    }
}
let val= new Validator("asd","asdas","a","asas",131);
val.mailCheck("aaaa.gmail.com");
val.passwordCheck("Vasil31231131")

class Vector {

    constructor(razmer, [x,y,z]) {
        this.razmer=razmer;
        [this.x=x, this.y=y, this.z=z];
    }

    addition(anotherVector){
        let vec=[this.x+anotherVector.x,
            this.y+anotherVector.y,
            this.z+anotherVector.z];
        let vectorrazmer=  this.razmer+anotherVector.razmer;
        return new Vector (vectorrazmer,vec)

    }

    subtraction(anotherVector) {
        let vec = [this.x - anotherVector.x,  this.y - anotherVector.y, this.z - anotherVector.z];
        let vectorrazmer = this.razmer - anotherVector.razmer;
        return new Vector( vectorrazmer, vec)
    }

    multipliedbyNumber(number){
        let vec=[this.x* number, this.y*number,this.z*number];
        let vectorrazmer=  this.razmer* number;
        return new Vector (vectorrazmer,vec)

    }
    scalarProduct(anotherVector){
        let scalarProductValue=[this.x* anotherVector.x, this.y*anotherVector.y,this.z*anotherVector.z];
        return scalarProductValue
    }
}
let vector1= new Vector(10, [10,5,5]);
console.log(vector1)
let vector2= new Vector(20, [20,10,10]);
console.log(vector2)
console.log(vector1.addition(vector2));
console.log(vector1.subtraction(vector2));
console.log(vector1.multipliedbyNumber(5));
console.log(vector1.scalarProduct(vector2));

// class Clock {
//     timer;
//     constructor ({template}){
//         this.template = template;
//
//     }
//     render( ){
//         let date= new Date;
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//     stop (){
//         clearInterval(this.timer)
//     }
//     start(){
//         this.render;
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
// let clock = new Clock({template: 'h:m:s'});
// clock.start();
//


// class Clock {
//     timer;
//     constructor({template}) {
//         this.template = template;
//     }
//
//     render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     stop() {
//         clearInterval(this.timer);
//     }
//
//     start() {
//         this.render();
//         this.timer = setInterval(this.render.bind(this), 1000);
//     }
// }
// let clock = new Clock({template: 'h:m:s'});
// clock.start();
//
// class Animal {
//
//     constructor(name) {
//         this.name = name;
//     }
//
// }
//
// // class Rabbit extends Animal {
// //     constructor (name, created) {
// //         super (name);
// //         this.created = Date.now();
// //     }
// // }
// // let rabbit = new Rabbit("Белый кролик");
// // console.log(rabbit.name);
// // console.log(rabbit.created);


//
// class Clock {
//     timer;
//     constructor ({template}){
//         this.template = template;
//
//     }
//     render( ){
//         let date= new Date;
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs)
//
//
//         console.log(output);
//     }
//     stop (){
//         clearInterval(this.timer)
//     }
//     start(){
//         this.render;
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
//
// class ExtendedClock extends Clock {
//       render() {
//           let date2 = new Date
//           let hours = date2.getHours();
//           if (hours < 10) hours = '0' + hours;
//
//           let mins = date2.getMinutes();
//           if (mins < 10) mins = '0' + mins;
//
//           let secs = date2.getSeconds();
//           if (secs < 10) secs = '0' + secs;
//
//           let milliseconds = date2.getMilliseconds();
//           if (milliseconds < 2000) milliseconds = '0' + milliseconds;
//
//           let output = this.template
//               .replace('h', hours)
//               .replace('m', mins)
//               .replace('s', secs)
//               .replace('ms', milliseconds)
//
//               console.log(output);
//
//       }
//     start(){
//         this.render;
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
//
// let clock = new ExtendedClock({template: 'h:m:s:ms'});
// clock.start();


// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }
//
//     static compare(articleA, articleB) {
//         return articleA.date - articleB.date;
//     }
// }
//
// // использование
// let articles = [
//     new Article("HTML", new Date(2019, 1, 1)),
//     new Article("CSS", new Date(2019, 0, 1)),
//     new Article("JavaScript", new Date(2019, 11, 1))
// ];
//
// articles.sort(Article.compare);
//
// console.log((articles[0].title));




