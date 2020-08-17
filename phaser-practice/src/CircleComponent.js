import React from 'react'

export default function CircleComponent() {
    
 let circle1 = this.add.circle(50, 100, 90, 0xFFF070);
  let circle2 = this.add.circle(95, 300, 80, 0xFF0000);
  let circle3 = this.add.circle(200, 200, 100, 0x9F00D0);
  let circle4 = this.add.circle(300, 400, 10, 0x00E030);
    
  const config = {
    width: 400,
    height: 500,
    backgroundColor: 0xffff77
  }
  
  const game = new Phaser.Game(config)

const game = new Phaser.Game(config)
    
function circleUpdate() {
    gameState.circle.y += 1

    const changeCircle = day => {
        if (day === 'Wednesday') {
          return true;
        } else {
          return false;
        }
      };
      function monitorCount(rows, columns) {
        return rows * columns;
      }
      
      function costOfMonitors(rows, columns){
        return monitorCount(rows, columns) * 200
      }

      function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 ='eggs'){
        console.log(`Remember to buy ${item1}`);
        console.log(`Remember to buy ${item2}`);
        console.log(`Remember to buy ${item3}`);
      }

      function sayThanks(name) {
        console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
      }

      function Monster(age, color, snack, hobby) {
          this.age = age,
          this.color = color,
          this.snack = snack,
          this.hobby = hobby
      };
  }

  
function create() {
    gameState.codey = this.add.sprite(30, 50, 'codey')
    gameState.cursors = this.input.keyboard.createCursorKeys()
  }

  const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('You didn\'t select a valid choice.')
    }
  };
  
  const getComputerChoice = () => {
    const computerNumber = Math.floor(Math.random() * 3);
  
   switch(computerNumber){
     case 0:
      return 'rock';
     case 1:
      return 'paper';
     case 2:
      return 'scissors';
     default:
      return 'error';
   }
  };

  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return 'You tied with the computer!'
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper') {
        return 'The computer won!'
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors'){
        return 'The computer won!'
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!'
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'bomb') {
      return 'You obliterated the computer!'
    }
  }
  
    
    return (

        <div>
           {game} 
           <ul>
            <li></li>
            <li></li>
            <li></li>
           </ul>
        </div>
    )
}
