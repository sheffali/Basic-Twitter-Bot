console.log('hello bby')

var Twit=require('twit');

var config = require('./config');

var T = new Twit(config);

var params={ 
q: 'coding',//query term
count:2
};


//GET REQUEST TO UNDERSTAND https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets
T.get('search/tweets', params, gotData);//keyword and some query term along with function to print data 


function gotData (err, data, response) 
{
var tweets= data.statuses;
for(var i=0;i<tweets.length;i++)
{
console.log(tweets[i].text);
}
};