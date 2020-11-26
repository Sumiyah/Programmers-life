import React from 'react'

function Actions({status, setStatus}) {
    const getRandomRange = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
    }
    const work = () => {
        setStatus({...status, money: status.money += 50, workHours: status.workHours +=8, energy: status.energy -= 5,happiness: status.happiness -= 5,fullness: status.fullness -= 5 ,message: `You worked for 8 hours | Happiness -5, Fullness -5, Energy -5`, image: "img/work.png"})
        if (25 <= status.workHours && status.workHours <= 60){
            setStatus({...status,level: "Intermediate", message: status.message += `, your level now is Intermediate congrats!!`, image:"img/levelup.png"})
        } else if (61 <= status.workHours && status.workHours <= 100){
            setStatus({...status,level: "Expert", message: status.message += `, your level now is Expert congrats!!`, image:"img/levelup.png"})
        }
        return checkStatus()
    }
    const feed = () =>  {
        if (status.meals === 0){
            setStatus({...status, message: "You don't have any meals go and buy some", image: "img/no.png"})
        } else {
            let num =  getRandomRange(5, 10); 
            setStatus({...status, meals: status.meals-=1, fullness: status.fullness += num,happiness: status.happiness += 5,energy:status.energy += 5,  message: status.message = `You eat delicious meal | Happiness +5, Fullness +${num}, Energy +5`, image:status.image = "img/eat.png"})
        }
        return checkStatus()
    }
    const play = () =>  {
        let num =  getRandomRange(5, 10);
        if (status.money < 20){ 
            setStatus({...status,message:  "You don't have enough money", image:"img/no.png"})
        } else {
            setStatus({...status, money: status.money -= 20, energy: status.energy -= 5,happiness: status.happiness += num ,message: `You played and had fun | Happiness +${num}, Money -20, Energy -5`, image:"img/entertainment.png"})
        }

        return checkStatus()
    }
    const sleep = () =>  {
        setStatus({...status, energy: status.energy += 15,happiness: status.happiness += 5,fullness: status.fullness -= 5 ,message: `You went to sleep | Energy +15, Happiness +5, Fullness -5`, image:"img/sleep.png"})
        return checkStatus()
    }
    const buyMeals = (amount) => {
        if (status.money < 10){
            setStatus({...status, message: "You don't have enough money", image: "img/no.png"})
        } else {
            setStatus({...status,meals: status.meals += amount, money: status.money -= amount * 10 ,message: `You bought ${amount} meals | Money -${amount * 10}`, image: "img/buyfood.png"})
        }
        
        return checkStatus()
    }
    const checkStatus = () => {
        if( status.energy >= 100 && status.fullness >= 100 && status.happiness >= 100 && status.level === "Expert") {
            setStatus({...status, message: "You wins!", image: "img/win.png"})
        } else if(status.fullness < 0) {
            setStatus({...status, message: "You are died from hunger!", image: "img/lose.png"})
        } else if(status.happiness < 0) {
            setStatus({...status, message: "You are died from boredom!", image: "img/lose.png"})
        } else if(status.energy < 0) {
            setStatus({...status, message: "You are died from tiredness!", image: "img/lose.png"})
        }
        return status;
    }
    return (
        <div className="row justify-content-center ">
            <button type="button" className="btn btn-success px-4" onClick={() => feed()} ><i className="fas fa-hamburger"></i></button>
            <button type="button" className="btn btn-primary px-4 ml-3" onClick={() => sleep()}><i class="fas fa-bed"></i></button>
            <button type="button" className="btn btn-danger px-4 ml-3" onClick={() => play()}><i class="fas fa-dice"></i></button>
            <button type="button" className="btn btn-warning px-4 ml-3" onClick={() => buyMeals(1)}><i class="fas fa-shopping-basket text-white"></i></button>
            <button type="button" className="btn btn-info px-4 ml-3" onClick={() => work()}><i class="fas fa-laptop-code"></i></button>
        </div>
    );
}

export default Actions;