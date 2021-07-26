"use strict"
const $resultDiv = $("#resultDiv");

async function getNumFact() {
    let resp = await axios.get("http://numbersapi.com/4?json");
    let fact = resp.data["text"];
    $resultDiv.append(fact);
}


// debugger
// resp = await axios.get("http://numbersapi.com/1..3,10");

// resp

async function getMultipleNumFacts() {
    let resp = await axios.get("http://numbersapi.com/1..3,10");
    
    for (let num in resp.data) {
        let fact = resp.data[num];
        $resultDiv.append(fact);
    }
}


