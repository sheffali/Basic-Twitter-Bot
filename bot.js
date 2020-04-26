var Twit=require('twit');
var config = require('./config');
var T = new Twit(config);

tweetIt();

setInterval(tweetIt,1000*10);//posting tweet after given time interval
function tweetIt()
{var r=Math.floor(Math.random()*100);
var tweet ={status:'test success'+r}////string along with random number

//USING POST REQUEST
T.post('statuses/update',tweet,tweeted);
function tweeted(err,data,response)
{if(err){console.log("error here") }
else
{console.log("twit pasted")}}}