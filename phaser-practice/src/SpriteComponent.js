import React from 'react'

export default function SpriteComponent() {
    
    function preload() {
        this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png')
      }
      
      function create() {
        // Create a sprite game object here!
        this.add.sprite(50, 80, 'codey')
      
      }


      const config = {
        type: Phaser.AUTO,
        width: 450,
        height: 600,
        backgroundColor: "#5f2a55",
        scene: {
        create,
        preload
        }
    }
    
    
    return (
        <div>
            
        </div>
    )
}
