import React from 'react'

export default function SpriteComponent() {
    
    function preload() {
        this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png')
      }
      
      function create() {
        codey = this.add.sprite(30, 200, 'codey')
      }
      
      // Create your update() function here
      
      const config = {
          type: Phaser.AUTO,
          width: 400,
          height: 400,
          backgroundColor: "#5f2a55",
          scene: {
          preload,
          create,
          // Include update here!
          }
      }
      
    }
    
    
    return (
        <div>
            
        </div>
    )
}
