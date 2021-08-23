const axios = require("axios");
const { expect, assert } = require("chai");

describe("Testing",async function(){

    it("Test 016", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.settings.fajr_angle), 'number');
        });
    });
});