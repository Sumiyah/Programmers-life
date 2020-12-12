import React, { useState } from 'react';
import Programmer from '../Programmer';
import ReactTooltip from 'react-tooltip';

function Actions({ status, setStatus, setMedalColor }) {
  const [gameStatus, setGameStatus] = useState("");
  const [mealAmount, setMealAmount] = useState(1);
  
  const getRandomRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  }
  const work = () => {
    setStatus({ ...status, money: status.money += 50, workHours: status.workHours += 8, energy: status.energy -= 5, happiness: status.happiness -= 5, fullness: status.fullness -= 5, message: `You worked for 8 hours | Happiness -5, Fullness -5, Energy -5`, image: "img/work.png" })

    if (gameStatus === "") {
      if (25 <= status.workHours && status.workHours <= 60 && status.level !== "Intermediate") {
        setStatus({ ...status, level: "Intermediate", message: `Your level now is Intermediate, Congrats!!`, image: "img/levelup.png" })
        setMedalColor("#B4B4B4");
      } else if (61 <= status.workHours && status.workHours <= 100 && status.level !== "Expert") {
        setStatus({ ...status, level: "Expert", message: `Your level now is Expert, Congrats!!`, image: "img/levelup.png" })
        setMedalColor('#C9B037');
      }
    }
    return checkStatus()
  }
  const feed = () => {
    if (status.meals === 0) {
      setStatus({ ...status, message: "You don't have any meals go and buy some", image: "img/no.png" })
    } else {
      let num = getRandomRange(5, 10);
      setStatus({ ...status, meals: status.meals -= 1, fullness: status.fullness += num, happiness: status.happiness += 5, energy: status.energy += 5, message: status.message = `You ate a delicious meal | Happiness +5, Fullness +${num}, Energy +5`, image: status.image = "img/eat.png" })
    }
    return checkStatus()
  }
  const play = () => {
    let num = getRandomRange(5, 10);
    if (status.money < 20) {
      setStatus({ ...status, message: "You don't have enough money", image: "img/no.png" })
    } else {
      setStatus({ ...status, money: status.money -= 20, energy: status.energy -= 5, happiness: status.happiness += num, message: `You played and had fun | Happiness +${num}, Money -20, Energy -5`, image: "img/entertainment.png" })
    }

    return checkStatus()
  }
  const sleep = () => {
    setStatus({ ...status, energy: status.energy += 15, happiness: status.happiness += 5, fullness: status.fullness -= 5, message: `You went to sleep | Energy +15, Happiness +5, Fullness -5`, image: "img/sleep.png" })
    return checkStatus()
  }
  const buyMeals = (amount) => {
    amount = parseInt(amount);
    if (amount > 0) {
      if (status.money < (amount * 10)) {
        setStatus({ ...status, message: "You don't have enough money", image: "img/no.png" })
      } else {
        setStatus({ ...status, meals: status.meals += amount, money: status.money -= amount * 10, message: `You bought ${amount} meals | Money -${amount * 10}`, image: "img/buyfood.png" })
      }
      setMealAmount(1);
    } else {
      setStatus({ ...status, message: "The number of meals should be grater than 0", image: "img/no.png" })
    }

    return checkStatus()
  }
  const checkStatus = () => {
    if (status.energy >= 100 && status.fullness >= 100 && status.happiness >= 100 && status.level === "Expert") {
      setStatus({ ...status, message: "You win!", image: "img/win.png" });
      setGameStatus('Game Over');
    } else if (status.fullness <= 0) {
      setStatus({ ...status, message: "You died from hunger!", image: "img/lose.png" });
      setGameStatus('Game Over');
    } else if (status.happiness <= 0) {
      setStatus({ ...status, message: "You died from boredom!", image: "img/lose.png" });
      setGameStatus('Game Over');
    } else if (status.energy <= 0) {
      setStatus({ ...status, message: "You died from tiredness!", image: "img/lose.png" });
      setGameStatus('Game Over');
    }
    return status;
  }

  const reset = () => {
    setStatus(new Programmer());
    setGameStatus('');
  }

  return (
    <>
      {
        gameStatus === '' ?
          <div className="row ">
            
            <div className="col ">
              <div className="row justify-content-center">

            <button data-tip='Eat a Meal' type="button" className=" btn btn-success " onClick={() => feed()} ><i className="fas fa-hamburger"></i></button>
            <ReactTooltip />
            <button data-tip='Go to Sleep' type="button" className=" btn btn-primary  ml-1" onClick={() => sleep()}><i className="fas fa-bed"></i></button>
            <ReactTooltip />
            <button data-tip='Have some Fun' type="button" className=" btn btn-danger ml-1" onClick={() => play()}><i className="fas fa-dice"></i></button>
            <ReactTooltip />
            <button data-tip='Go to Work' type="button" className="btn btn-info ml-1" onClick={() => work()}><i className="fas fa-laptop-code"></i></button>
            <ReactTooltip />
            
              <button data-tip='Enter the Number of Meals that you Want to Buy' type="button" className=" ml-1 btn btn-warning" onClick={() => buyMeals(mealAmount)}><i className="fas fa-shopping-basket text-white"></i></button>
              <ReactTooltip />
              <input type="number" className="col-2 border text-center px-0" value={mealAmount} onChange={(e) => setMealAmount(e.target.value)} />
            
              </div>
            </div>
            
          </div> :
          <div className="row justify-content-center ">
            <a data-tip='Reset' type="button" className="btn btn-dark px-4" onClick={() => reset()} ><i className="fas fa-undo-alt"></i></a>
            <ReactTooltip />
          </div>
      }
    </>
  );
}

export default Actions;