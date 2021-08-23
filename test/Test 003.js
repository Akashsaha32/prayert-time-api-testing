const axios = require("axios");
const { expect, assert } = require("chai");

describe("Testing",async function(){

    it("Test 003", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.lengthOf(response.results, 10);
        });
    });
});