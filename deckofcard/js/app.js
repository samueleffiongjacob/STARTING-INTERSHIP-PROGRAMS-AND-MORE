//
// BLACK JACK
//DEVELOP BY SAMUEL EFFIONG

var player = [ "Ace of spade",
"Ten of Spades",
" three of spades"

] ;

var game = ['Ace' , 'king', 'queen', 'jack',
    'ten', 'nine','Eight', 'seven','six',
    'five','four', 'Three','two'
];

function createdeck(){
    var deck=[];
    for ( var playerIdx=0; playerIdx< player.length; playerIdx++) {
    for (let gameidx = 0; gameidx < game.length; gameidx++) {
        // const element = array[playeridx]; 
    
         let card = {
        player : player[playerIdx],
        game   :  game[gameidx],
        };
     deck.push(card);
     }

    }
  return deck
   
};

function getcardstring(card){
  return card.game + ' of ' + card.player;
}
function getnextcard() {
  return deck.shift();
  
}

let deck= createdeck();

for ( let i =0; i < deck.length; i++){
    console.log(deck[i]);
}

var playercard = [ getnextcard(), getnextcard()];
console.log("Welcome to BlackJack.");

console.log("you are THE REAL DEAL: ");
console.log(" " + getcardstring(playercard[0]) );
console.log(" " + getcardstring(playercard[1]) );