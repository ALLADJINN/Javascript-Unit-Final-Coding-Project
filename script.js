
// blueprint for creating cards for the game of war 
class Card{
    constructor(face,suit,rank){
        this.face= face; 
        this.suit= suit;
        this.rank= rank;
    }
} 



//Creation or blueprint for player , with their name, points , and hand
class Player {
    constructor(name){
        this.name = name; 
        this.points = 0;
        this.hand= [];
    }
}
//creation of cards/deck, and also creation of player 1 and player 2 names 

class Game{
    constructor(){
        this.deck = [];
        this.player1 = new Player("Player 1");
        this.player2 = new Player("Player 2");
        this.makeDeck();
    }

   

makeDeck(){

    
//variables for the creation of cards, values and suits 
let values = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']
let suits = ['Spades 🗡️', 'Hearts ❤️', 'Diamonds 💎','Clubs 🍀']

//looping through variables and assigning values and suits together and pushing values,suit, and x into new card
for(let x = 0; x< values.length; x++){
    for (let suit of suits){
        this.deck.push(new Card(values[x], suit, x+2))
    }
    
}

// shuffling of cards 
for(let i = this.deck.length - 1; i >=0; i--){
    let j =Math.floor(Math.random() * (i + 1));
    let temp = this.deck[i];
    this.deck[i] = this.deck[j];
    this.deck[j] = temp;
}
 //dealing of the cards into each hand
this.player1.hand= this.deck.splice(0,26);
this.player2.hand= this.deck.splice(0,26);



}  

// This is the comparing of both players hands and counting of points 
//cards are compared from players hands and then assigned a point value 
//after the comparison , their is a log to visually represent each players points and the cards that were played
playGame(){
    
    for(let i = 0; i < this.player1.hand.length; i++){
        if(this.player1.hand[i].rank > this.player2.hand[i].rank){
            this.player1.points ++ 
            console.log(` P1 Card: ${this.player1.hand[i].face}
                          P2 Card: ${this.player2.hand[i].face}
                          Player 1 wins a point! 
                          Current Score: p1: ${this.player1.points}, p2: ${this.player2.points}

            `)
            }else if (this.player2.hand[i].rank > this.player1.hand[i].rank){
                this.player2.points ++
                console.log(` P1 Card: ${this.player1.hand[i].face}
                              P2 Card: ${this.player2.hand[i].face}
                              Player 2 wins a point! 
                              Current Score: p1: ${this.player1.points}, p2: ${this.player2.points}

            `)
            }else{
                console.log(` P1 Card: ${this.player1.hand[i].face}
                    P2 Card: ${this.player2.hand[i].face}
                    Tie: No points awarded
                    Current Score: p1: ${this.player1.points}, p2: ${this.player2.points}

            `)
            }
        } 
        // this is a comparing of final points after the total 26 rounds 
        //after comparison the log visually shows the players who won the game
        if(this.player1.points > this.player2.points){
            console.log('Player 1 wins')
        }else if (this.player2.points > this.player1.points){
            console.log('Player 2 wins')
        }else{
            console.log('Tie')
        }
    
    }
}






let game = new Game(); 

console.log(game)
game.playGame();

