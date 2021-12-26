const StreamUser = require("stream-user");
const config = require("./config.json");

const user = new StreamUser();

let getAccount = config.accountName;
let getPassword = config.password;
let userState = config.persona;
let gameId = config.gameId;

const logOnOptions = {
    accountName: getAccount,
    password: getPassword,
}


user.logOn(logOnOptions).catch(err => console.error("Please enter the correct account credentials!"));

user.on("loggedOn", () => {
    console.log(logOnOptions.accountName + " - Successfully logged on");
    user.setPersona(userState);
    user.gamesPlayed(gameId);
})