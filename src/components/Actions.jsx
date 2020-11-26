import React from 'react'

function Actions({status, setStatus}) {
    const getRandomRange = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
    }
    const work = () => {
        status.money += 50;
        status.workHours +=8;
        status.energy -= 5;
        status.happiness -= 5;
        status.fullness -= 5
        status.message = `You worked for 8 hours | Happiness -5, Fullness -5, Energy -5`;
        status.image = "img/work.png";
        if (25 <= status.workHours && status.workHours <= 60){
            status.level = "Intermediate"
            status.message += `, your level now is ${status.level} congrats!!`
            status.image = "img/levelup.png";
        } else if (61 <= status.workHours && status.workHours <= 100){
            status.level = "Expert"
            status.message += `, your level now is ${status.level} congrats!!`
            status.image = "img/levelup.png";
        }
        return checkStatus()
    }
    const feed = () =>  {
        if (status.meals === 0){
            setStatus({...status, message: "You don't have any meals go and buy some", image: "img/no.png"})
            // status.message = "You don't have any meals go and buy some"
            // status.image = "img/no.png";
        } else {
            let num =  getRandomRange(5, 10); 
            setStatus({...status, meals: status.meals-=1, fullness: status.fullness += num,happiness: status.happiness += 5,energy:status.energy += 5,  message: status.message = `You eat delicious meal | Happiness +5, Fullness +${num}, Energy +5`, image:status.image = "img/eat.png"})
            // status.meals-= 1;
            // status.fullness += num
            // status.happiness += 5;
            // status.energy += 5;
            // status.message = `You eat delicious meal | Happiness +5, Fullness +${num}, Energy +5`;
            // status.image = "img/eat.png";
        }
        return checkStatus()
    }
    const play = () =>  {
        let num =  getRandomRange(5, 10);
        if (status.money < 20){ 
            status.message = "You don't have enough money"
            status.image = "img/no.png";
        } else {
            
            status.happiness += num
            status.money -= 20;
            status.energy -= 5;
            status.message = `You played and had fun | Happiness +${num}, Money -20, Energy -5`;
            status.image = "img/entertainment.png";
        }

        return checkStatus()
    }
    const sleep = () =>  {
        status.happiness += 5;
        status.fullness -= 5;
        status.energy += 15;
        status.message = `You went to sleep | Energy +15, Happiness +5, Fullness -5`;
        status.image = "img/sleep.png";
        return checkStatus()
    }
    const buyMeals = (amount) => {
        if (status.money < 10){
            status.message = "You don't have enough money"
            status.image = "img/no.png";
        } else {
            status.meals += amount;
            status.money -= amount * 10;
            status.message = `You bought ${amount} meals | Money -${amount * 10}`;
            status.image = "img/buyfood.png";
        }
        
        return checkStatus()
    }
    const checkStatus = () => {
        if( status.energy >= 100 && status.fullness >= 100 && status.happiness >= 100 && status.level === "Expert") {
            
            status.message = "You wins!";
            status.image = "img/win.png";
        } else if(status.fullness < 0) {
            status.message = "You are died from hunger!";
            status.image = "img/lose.png";
        } else if(status.happiness < 0) {
            status.message = "You are died from boredom!";
            status.image = "img/lose.png";
        } else if(status.energy < 0) {
            status.message = "You are died from tiredness!";
            status.image = "img/lose.png";
        }
        return status;
    }
    return (
        <div className="row justify-content-center ">
            <button type="button" className="btn btn-success px-4" onClick={() => feed()} ><i className="fas fa-hamburger"></i></button>
            <button type="button" className="btn btn-primary px-4 ml-3" onClick={() => sleep()}><i class="fas fa-bed"></i></button>
            <button type="button" className="btn btn-danger px-4 ml-3" onClick={() => play()}><i class="fas fa-dice"></i></button>
            <button type="button" className="btn btn-warning px-4 ml-3" onClick={() => buyMeals()}><i class="fas fa-shopping-basket text-white"></i></button>
            <button type="button" className="btn btn-info px-4 ml-3" onClick={() => work()}><i class="fas fa-laptop-code"></i></button>
        </div>
    );
}

export default Actions;