const core = require("@actions/core");
const github = require("@actions/github");

try{
    console.log("Hello");
    consolelog(github);
} catch(error){
    core.setFailed(error.message);
}