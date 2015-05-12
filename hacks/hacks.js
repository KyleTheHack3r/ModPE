// Uploading soon
var speed = 0;
var fly = 0;
var gamemode = 0;

// other stuff here

function  newLevel() {
  clientMessage("<hacks> All mods reset.");
  speed = 0;
  fly = 0;
}

// UI to enable mods here...

if (speed == 1){
  clientMessage("<hacks> Speed has been enabled.")
  ModPE.setGameSpeed(35);
}
if (fly == 1){
  clientMessage("<hacks> Flying has been enabled.")
  Player.setCanFly(1);
}
if (gamemode == 1){
  clientMessage("<hacks> Gamemode has been enabled.")
  setGamemode(1)
}
