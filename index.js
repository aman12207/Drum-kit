function makesound(choice)
{
        switch(choice)
        {
            case "w":var tom1=new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
            case "a":var tom2=new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
            case "s":var tom3=new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
            case "d":var tom4=new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
            case "j":var snare=new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
            case "k":var crash=new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
            case "l":var kick=new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;
        };
}
function keypressed(key)
{
        currbutton=document.querySelector("."+key);
        currbutton.classList.add("pressed");
        setTimeout(function()
        {
                currbutton.classList.remove("pressed");
        },100);
}
// for button press 
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.getElementsByClassName("drum")[i].addEventListener("click",function ()
    {
        var choice=this.innerText;
        console.log(choice);
        makesound(choice);
        keypressed(choice);
    });
}

// for keyboard press
document.addEventListener("keypress",function(event){
        makesound(event.key);
        keypressed(event.key);
})