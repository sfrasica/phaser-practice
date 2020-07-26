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

    
    return (
        <div>
            
        </div>
    )
}
