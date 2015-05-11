/*

This is a demonstration mod that I created in under 10 min.
Note that this doesn't work on servers as it is based off of a command.

Creator: @KyleTheHack3r
If I get positive feedback, then I will improve the map and mod so that you don't need to use '/tutorial'.


*/

//Set tutorial number
var tut = 1;
//Secret portal
var secret1 = "A nether portal!\n This will be in MCPE soon.";
//Secret Lava
var secret2 = "Lava!\n This is red water. Have a swim in it :)";
//Set task complete message
var tutComplete = "You have completed the task.";
var tut1 = "Chop down 4 blocks of wood.\nType '/tutorial' when completed.";
var tut2 = "Craft the wood blocks into wooden planks. \nType '/tutorial' when completed. ";
var tut3 = "Make a crafting table. \nType '/tutorial' when completed. ";
var tut4 = "Make 4 sticks with the wooden planks. \nType '/tutorial' when completed. ";
var tut5 = "Make a pickaxe with some wooden planks and sticks. \nType '/tutorial' when completed. ";
var tut6 = "Mine 10 pieces of cobblestone from the mine. \nType '/tutorial' when completed. ";
var tut7 = "Using the cobblestone, finish building the house near the mine. \nType '/tutorial' when completed. ";
var tut8 = "You have completed the first part of the tutorial! You can now enter the castle.\nType '/tutorial' when completed. ";
var tut9 = "You can search the castle for chests and secrets.";
var tut10 = "";

function newLevel() {
//Print mod name and version
//Print tutorial 1
  clientMessage(ChatColor.GRAY + "<server> MCPE tutorial version 1.0");
  clientMessage("<tutorial> " + tut1);
}

//Print beta message (remove before release)
function modTick() {
ModPE.showTipMessage("Tutorial mod beta test version 1.0.0");
}



/*
I know that just using if is bad practice but I'm still a n00b
*/

//Tutorial command
function procCmd(cmd) {
   if(cmd=="secret portal"){
clientMessage("<tutorial> " + secret1);
}
   if(cmd=="secret lava"){
clientMessage("<tutorial> " + secret2);
}
   if(cmd=="tutorial"){
//Set var tut (default to 1) to tut+1
tut = tut+1;
clientMessage("<tutorial> " + tutComplete);
clientMessage("");
if(tut == 2){
clientMessage("<tutorial> " + tut2);
}
if(tut == 3){
clientMessage("<tutorial> " + tut3);
}
if(tut == 4){
clientMessage("<tutorial> " + tut4);
}
if(tut == 5){
clientMessage("<tutorial> " + tut5);
}
if(tut == 6){
clientMessage("<tutorial> " + tut6);
}
if(tut == 7){
clientMessage("<tutorial> " + tut7);
}
if(tut == 8){
clientMessage("<tutorial> " + tut8);
}
}
}
