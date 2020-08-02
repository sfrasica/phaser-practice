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

  let selectedTurtle = 'Leonardo';

switch(selectedTurtle){
  case 'Michelangelo':
    console.log('Cowabunga');
    break;
  case 'Raphael':
    console.log('Let\'s get \'em!');
    break;
  case 'Donatello':
    console.log('I\'ll hack into the mainframe in a second.')
    break;
  case 'Leonardo':
    console.log('Follow my lead after I give the all clear.')
    break;
  default:
    console.log('This is Master Splinter.')
} 
    
function moveBobLeft () {
    // In the image, Bob looks to the right so we flip the image
    gameState.player.flipX = true;
    gameState.player.setTexture('bob-side');
    gameState.player.setVelocityX(-150) * speed;
    gameState.player.setVelocityY(0) * speed;
  }

  // A type of function that ends current Game and transition to End Scene
  endGame () {
    // Stop sprites moving
    this.physics.pause();
    // Transition to end scene w/fade
    this.cameras.main.fade(800, 0, 0, 0, false, function (camera, progress) {
      if (progress > .5) {
        this.scene.stop('GameScene');
        this.scene.start('EndScene');
      }
    });
  }

  //Setting boundaries
  // Display text showing how much cash Bob earned
  let scoreText = this.add.text(140, 610, `Earnings: $${score}`, { fontSize: '25px', fill: '#fff' });

  // Create the Bob sprite and set boundaries for it
  gameState.player = this.physics.add.sprite(240, 500, 'bob-front').setScale(.8);
  this.physics.world.setBounds(0, 0, 480, 600);  // Slightly above score
  gameState.player.setCollideWorldBounds(true);
  gameState.player.body.collideWorldBounds = true;
    return (
        <div>
            
        </div>
    )
}
