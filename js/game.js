class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref ('gameState');
        gamestateref.on("value", (data)=>{
          gameState = data.val (); 
        }); 
    }
}