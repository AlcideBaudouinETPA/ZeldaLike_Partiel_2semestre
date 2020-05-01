var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
scene: {
        preload : preload,
        create : create,
        update : update
    },
physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 },
        debug: false
    }
}}

var game = new Phaser.Game(config);

function preload(){
this.load.image('background','assets/ui_1.png');
this.load.image('cache','assets/cache.png');
}

function create(){

this.add.image(400, 300, 'background');
var cache = this.add.image(133,30 'cache');
cache.setAlpha(0.3);
var cursors = this.input.keyboard.createCursorKeys();

}

function update(){

   if(cursors.left.isDown && cache.position == 667,30){
    setPosition.cache.(400,30);
   }
   if(cursors.left.isDown && cache.position == 400,30){
    setPosition.cache(133,30);
   }
    if(cursors.right.isDown && cache.position ==133,30){
    setPosition.cache(400,30);
   }
   if(cursors.right.isDown && cache.position == 400,30){
    setPosition.cache(667,30);
   }


}
