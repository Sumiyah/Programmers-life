// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function getRandomRange(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
// }

class Programmer {
    constructor() {
        this.happiness = 20;
        this.fullness = 20;
        this.energy = 50;
        this.meals = 3;
        this.money = 30;
        this.level = "Beginner";
        this.workHours = 0;
        this.message = "Welcome to Programming world";
        this.image = "img/happy.png";
    }
    // work() {
    //     this.money += 50;
    //     this.workHours +=8;
    //     this.energy -= 5;
    //     this.happiness -= 5;
    //     this.fullness -= 5
    //     this.message = `You worked for 8 hours | Happiness -5, Fullness -5, Energy -5`;
    //     this.image = "img/work.png";
    //     if (25 <= this.workHours && this.workHours <= 60){
    //         this.level = "Intermediate"
    //         this.message += `, your level now is ${this.level} congrats!!`
    //         this.image = "img/levelup.png";
    //     } else if (61 <= this.workHours && this.workHours <= 100){
    //         this.level = "Expert"
    //         this.message += `, your level now is ${this.level} congrats!!`
    //         this.image = "img/levelup.png";
    //     }
    //     return this.checkStatus()
    // }
    // feed() {
    //     if (this.meals == 0){
    //         this.message = "You don't have any meals go and buy some"
    //         this.image = "img/no.png";
    //     } else {
    //         let num =  getRandomRange(5, 10); 
    //         this.meals-= 1;
    //         this.fullness += num
    //         this.happiness += 5;
    //         this.energy += 5;
    //         this.message = `You eat delicious meal | Happiness +5, Fullness +${num}, Energy +5`;
    //         this.image = "img/eat.png";
    //     }
    //     return this.checkStatus()
    // }
    // play() {
    //     let num =  getRandomRange(5, 10);
    //     if (this.money < 20){ 
    //         this.message = "You don't have enough money"
    //         this.image = "img/no.png";
    //     } else {
    //         this.happiness += num
    //         this.money -= 20;
    //         this.energy -= 5;
    //         this.message = `You played and had fun | Happiness +${num}, Money -20, Energy -5`;
    //         this.image = "img/entertainment.png";
    //     }

    //     return this.checkStatus()
    // }
    // sleep() {
    //     this.happiness += 5;
    //     this.fullness -= 5;
    //     this.energy += 15;
    //     this.message = `You went to sleep | Energy +15, Happiness +5, Fullness -5`;
    //     this.image = "img/sleep.png";
    //     return this.checkStatus()
    // }
    // buyMeals(amount) {
    //     if (this.money < 10){
    //         this.message = "You don't have enough money"
    //         this.image = "img/no.png";
    //     } else {
    //         this.meals += amount;
    //         this.money -= amount * 10;
    //         this.message = `You bought ${amount} meals | Money -${amount * 10}`;
    //         this.image = "img/buyfood.png";
    //     }
        
    //     return this.checkStatus()
    // }
    // checkStatus(){
    //     if( this.energy >= 100 && this.fullness >= 100 && this.happiness >= 100 && this.level == "Expert") {
    //         this.message = "You wins!";
    //         this.image = "img/win.png";
    //     } else if(this.fullness < 0) {
    //         this.message = "You are died from hunger!";
    //         this.image = "img/lose.png";
    //     } else if(this.happiness < 0) {
    //         this.message = "You are died from boredom!";
    //         this.image = "img/lose.png";
    //     } else if(this.energy < 0) {
    //         this.message = "You are died from tiredness!";
    //         this.image = "img/lose.png";
    //     }
    //     return this;
    // }
}

export default Programmer;