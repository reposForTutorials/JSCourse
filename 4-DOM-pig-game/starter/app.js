/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*Exercise of JavaScript tutorial*/

var puntos=[0,0];

var turno=0;
var dado;
var puntosTemp=0;

var jugando = true;
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(jugando)
    {
        dado=Math.floor(Math.random()*6+1)
        console.log(dado);
        if(dado != 1)
        {
        puntosTemp+=dado;
        document.querySelector('#current-'+turno).textContent=puntosTemp;
        }
        else
        {
            if(puntos[turno]+puntosTemp >= 20)
            {
                document.querySelector('#name-'+turno).textContent="Winner!";
                document.querySelector('.player-'+turno+'-panel').classList.remove('active');
                document.querySelector('.player-'+turno+'-panel').classList.add('winner');
                jugando=False;
            }
            puntosTemp=0;
            changer();
        }
    }
}
    
    //ahora cargo en el elemento el valor
)


document.querySelector('.btn-hold').addEventListener('click',changer);


function changer()
{
    puntos[turno] += puntosTemp;
    puntosTemp=0;
    document.querySelector('#score-' + turno).textContent=puntos[turno];
    document.querySelector('#current-'+turno).textContent = 0;
    if(turno ===0)
    {
        turno =1;
        console.log(turno);
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
    
    //document.querySelector()
    }  
    else
    {
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        turno =0;
        console.log(turno);
    }
}
