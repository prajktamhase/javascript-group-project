

function increaseScore(ind)
{
    const scoreElement = document.getElementById(`score${ind}`);
    const scoreValue = parseInt( scoreElement.innerText);
    scoreElement.innerText = scoreValue +1;
    if(scoreElement.innerText == 11)
    {
        alert("Awesome! You are winner");
    }
}

function decreaseScore(ind)
{
    
    const scoreElement = document.getElementById(`score${ind}`);
    const scoreValue = parseInt( scoreElement.innerText);
    if(scoreElement.innerText == 0)
    {
        alert("Oop! Try your best");
       return;
    }
    scoreElement.innerText = scoreValue -1;
    
}