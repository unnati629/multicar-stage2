class Form{
    constructor(){
        this.title= createElement('h1');
        this.input=createInput("ENTER YOUR NAME");
        this.button=createButton('play');
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(300,100);
        this.input.position(300,300);
        this.button.position(300,350);
        this.button.mousePressed(()=>{
            player.name=this.input.value();
            playerCount = playerCount + 1;
            player.index= playerCount;
            player.update();
            player.updateCount(playerCount);
            this.input.hide();
            this.button.hide();
            var greeting = createElement('h2');
            greeting.position(300,300);
            greeting.html("Welcome " + name + " to the Game ");
        });
        
    }
}