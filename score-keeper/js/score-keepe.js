

function increaseScore(ind)
{
    const scoreElement = document.getElementById(`score${ind}`);
    const scoreValue = parseInt( scoreElement.innerText);
    scoreElement.innerText = scoreValue +1;
}

function decreaseScore(ind)
{
    const scoreElement = document.getElementById(`score${ind}`);
    const scoreValue = parseInt( scoreElement.innerText);
    scoreElement.innerText = scoreValue -1;
    // if(scoreElement.innerText == 0)
    // {
    //     return;
    // }
}