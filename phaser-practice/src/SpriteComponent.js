import React from 'react'

export default function SpriteComponent() {
    
    function preload() {
        this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png')
      }
      
      function create() {
        // Create a sprite game object here!
        this.add.sprite(50, 80, 'codey')
      
      }



    
    
    return (
        <div>
            
        </div>
    )
}
