console.log('hello bby')

var Twit=require('twit');

var config = require('./config');

var T = new Twit(config);


tweetIt();
setInterval(tweetIt,1000*10);

function tweetIt()
{
var r=Math.floor(Math.random()*100);
var tweet ={
status:'test success'+r
}

T.post('statuses/update',tweet,tweeted);
function tweeted(err,data,response)
{
if(err)
   {
   console.log("erorr bby")
   }
else
{
  console.log("bhai chal gyaa")
}}}