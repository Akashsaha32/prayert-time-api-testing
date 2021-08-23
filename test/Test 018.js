const axios = require("axios");
const { expect, assert } = require("chai");

describe("Testing",async function(){

    it("It will be return 200", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            console.log(response.data.code);
        });
    });
});