import React from 'react'

export default function SpriteComponent() {
    
    function preload() {
        this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png')
      }
      
      function create() {
        codey = this.add.sprite(30, 200, 'codey')
      }
      
   
      const config = {
          type: Phaser.AUTO,
          width: 400,
          height: 400,
          backgroundColor: "#5f2a55",
          scene: {
          preload,
          create,

          }
      }


        function update() {
            gameState.circle.y += 1
        }
  
    function gameState() {

    gameState.switchedOn = 'rect1';

    
    gameState.rect2.setInteractive();


    gameState.rect2.on('pointerup', function() {
        gameState.rect1.fillColor = gameState.offColor;
        gameState.rect2.fillColor = gameState.onColor;
    })

}
function movementUpdate() {
    if (gameState.cursors.right.isDown) {
      gameState.codey.x += 5;
    }
  
    if (gameState.cursors.left.isDown) {
      gameState.codey.x -= 5;
    }
  
    if (gameState.cursors.down.isDown) {
      gameState.codey.y += 5;
    }
  
    if (gameState.cursors.up.isDown) {
      gameState.codey.y -= 5;
    }
  }

  //additional gameState functionality
  gameState.incredibleBox = this.add.rectangle(200, 150, 300, 200, 0xdadaaa)
  gameState.awesomeBox = this.add.rectangle(200, 400, 300, 200, 0xaadada)
  gameState.incredibleText = this.add.text(150, 135, "Incredible", { fill: "#222222", font: "20px Times New Roman"})
  gameState.awesomeText = this.add.text(110, 385, "Really, really awesome", { fill: "#222222", font: "20px Times New Roman"})
  gameState.incredibleBox.setInteractive();
  gameState.awesomeBox.setInteractive();

  // add a 'pointerup' handler to incredibleBox here:
  gameState.incredibleBox.on('pointerup', function() {
    gameState.incredible.play();
  })
  
  gameState.awesomeBox.on('pointerup', function() {
    gameState.awesome.play();
  })

    
    return (
        <div>
            
        </div>
    )
}
