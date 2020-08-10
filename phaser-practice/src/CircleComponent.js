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
      
  }

  
function create() {
    gameState.codey = this.add.sprite(30, 50, 'codey')
    gameState.cursors = this.input.keyboard.createCursorKeys()
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
