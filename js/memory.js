class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    let j, aux = 0 
    for(let i = this.cards.length - 1; i>= 1; i--){
      j = Math.round(Math.random() * i)
      aux = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = aux
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1 === card2) {
      this.pairsGuessed += 1
      return true
    }
    return false
  }

  isFinished() {
    
  }
}