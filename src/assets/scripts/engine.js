const state ={
  score:{
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById('score_points'),
  },
  cardSprites:{
    avatar: document.getElementById('card_image'),
    name: document.getElementById('card-name'),
    type: document.getElementById('card-type'),
  },
  fieldCards:{
    player: document.getElementById("player-field-card"),
    computer: document.getElementById("computer-field-card")
  },
  playerSides:{
    player1: 'player-cards',
    playerBox: document.querySelector("#player-cards"),
    computer: 'computer-cards',
    computerBox: document.querySelector("#computer-cards"),
  },
  actions:{
    button:document.getElementById('next-duel'),
  },
};

const playerSides = {
  player1: 'player-cards',
  computer: 'computer-cards'
};

const pathImages = './src/assets/image/icons/'

const cardData = [
  {
    id: 0,
    name: 'Blue Eyes White Dragon',
    type: 'Paper',
    img: `${pathImages}dragon.png`,
    WinOf:[1],
    LoseOf: [2],
  },
  {
    id: 1,
    name: 'Dark Magician',
    type: 'Rock',
    img: `${pathImages}magician.png`,
    WinOf:[2],
    LoseOf: [0],
  },
  {
    id: 2,
    name: 'Exodia',
    type: 'Scissors',
    img: `${pathImages}exodia.png`,
    WinOf:[0],
    LoseOf: [1],
  }
]

async function getRandomCardId() {
  const randomIndex = Math.floor(Math.random() * cardData.length)
  return cardData[randomIndex].id;
}

async function createCardImage(idCard, fieldSide) {
  const cardImage = document.createElement("img");
  cardImage.setAttribute("height", "100px");
  cardImage.setAttribute("src", "./src/assets/image/icons/card-back.png");
  cardImage.setAttribute("data-id", idCard);
  cardImage.classList.add("card");


  if(fieldSide === playerSides.player1){
  cardImage.addEventListener("mouseover", () => {
    drawSelectCard(idCard);
  });

  cardImage.addEventListener("click", () => { 
    setCardsField(cardImage.getAttribute("data-id"));
  });
}

  return cardImage;
}

async function setCardsField(cardId) {
  await removeAllCardsImages();

  // biome-ignore lint/style/useConst: <explanation>
  let computerCardId = await getRandomCardId();

  state.fieldCards.player.style.display = "block";
  state.fieldCards.computer.style.display = "block";
  await hiddenCardDetails();
  state.fieldCards.player.src = cardData[cardId].img;
  state.fieldCards.computer.src = cardData[computerCardId].img;

  // biome-ignore lint/style/useConst: <explanation>
  let duelResults = await checkDuelResults(cardId, computerCardId);

  await updateScore();
  await drawButton(duelResults);
}

async function hiddenCardDetails() {
  state.cardSprites.avatar.src = "";
  state.cardSprites.name.innerText = "";
  state.cardSprites.type.innerText = "";
}

async function drawButton(text) {
  state.actions.button.innerText = text.toUpperCase();
  state.actions.button.style.display = "block";
}

async function updateScore() {
  state.score.scoreBox.innerHTML = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`
}

async function checkDuelResults(playerCardId, computerCardId) {
  let duelResults = "Draw";
  // biome-ignore lint/style/useConst: <explanation>
  let playerCard = cardData[playerCardId];

  if (playerCard.WinOf.includes(computerCardId)) {
      duelResults = "Win";
      state.score.playerScore++;
  } else if (playerCard.LoseOf.includes(computerCardId)) {
      duelResults = "Lose";
      state.score.computerScore++;
  }

    await playAudio(duelResults);

    return duelResults;
  
}

async function removeAllCardsImages() {
 
  // biome-ignore lint/style/useConst: <explanation>
  let { computerBox, playerBox} = state.playerSides;
  let imgElements = computerBox.querySelectorAll("img");
  // biome-ignore lint/complexity/noForEach: <explanation>
  imgElements.forEach((img) => img.remove());

  imgElements = playerBox.querySelectorAll("img");
  // biome-ignore lint/complexity/noForEach: <explanation>
  imgElements.forEach((img) => img.remove());
}

async function drawSelectCard(index) {
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = `Attibute : ${cardData[index].type}`;
}

async function drawCards(cardNumbers, fieldSide) {
  for( let i = 0; i < cardNumbers; i++){
    const randomIdCard = await getRandomCardId();
    const cardImage = await createCardImage(randomIdCard, fieldSide);

    document.getElementById(fieldSide).appendChild(cardImage);
  }
}

async function resetDuel() {
  state.cardSprites.avatar.src = "";
  state.actions.button.style.display = "none";

  state.fieldCards.player.style.display = "none";
  state.fieldCards.computer.style.display = "none";

  init();
}
async function playAudio(status) {
  const audio = new Audio(`./src/assets/midia/audios/${status}.wav`);
  audio.play();
}

function init(){
  state.fieldCards.player.style.display = "none";
  state.fieldCards.computer.style.display = "none"

  drawCards(5, playerSides.player1);
  drawCards(5, playerSides.computer);

  const bgm = document.getElementById("bgm")
  bgm.play();
}

init();
