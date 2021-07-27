"use strict"
const $RESULT_DIV = $("#resultDiv");
const $GET_CARD_BUTTON = $('#get-card-button');
const DECK_ID = [];

/**
 * PART 1 :)
 */
// async function getNumFact() {
//     let resp = await axios.get("http://numbersapi.com/4?json");
//     let fact = resp.data["text"];
//     $resultDiv.append(`<p>${fact}</p>`);
// }

// async function getMultipleNumFacts() {
//     let resp = await axios.get("http://numbersapi.com/1..3,10");
    
//     for (let num in resp.data) {
//         let fact = resp.data[num];
//         $resultDiv.append(`<p>${fact}</p>`);
//     }
// }

// async function getMultipleFactsOneNum() {
//     let p1 = axios.get("http://numbersapi.com/4?json");
//     let p2 = axios.get("http://numbersapi.com/4?json");
//     let p3 = axios.get("http://numbersapi.com/4?json");
//     let p4 = axios.get("http://numbersapi.com/4?json");

//     let results = [await p1, await p2, await p3, await p4];

//     for (let resp of results) {
//         let fact = resp.data['text'];
//         $resultDiv.append(`<p>${fact}</p>`)
//     }
// }

// getNumFact();
// getMultipleNumFacts();
// getMultipleFactsOneNum();

async function getNewDeckId() {
    let newDeck =  await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    DECK_ID.push(newDeck.data.deck_id);
}

async function cardButtonClick() {
    
    let deckId = DECK_ID[0];
    try {
        let resp = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        let imgLink = resp.data.cards[0].image;
        $RESULT_DIV.append(`<img src = ${imgLink}>`)
    } catch (e) {
        if (e instanceof TypeError) {
            $GET_CARD_BUTTON.off("click", cardButtonClick);
        }
    }
}


$GET_CARD_BUTTON.on("click", cardButtonClick);

getNewDeckId();