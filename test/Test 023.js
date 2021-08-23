const axios = require("axios");
const { expect, assert } = require("chai");

describe("Testing",async function(){

    it("School Test", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            let s = response.data.settings.school;
            assert.equal(response.data.settings.school, s);
        });
    });
});