var alexa = require('alexa-app');
var app = new alexa.app();

/* app.launch provides an introductory message to our user. You can customize anything inside response.say to your own welcome message. */

app.launch(function (request, response) {
    response.say("Welcome to The 5 Love Languages Quiz. Originally crated by Gary Chapman.");
    response.say("You're going to answer 30 questions to determine your primary love language.")
    response.say("Knowing your love language is powerful, but knowing how they work in your relationships - that's a game changer.");
    response.say("Let's get started!");
    response.shouldEndSession(false);
})

/* app.intent will be used by AWS Skills Portal to decipher our user’s intent (which is GetLunchSuggestions in this case) and possible things the user might say to ask Alexa for our intent. */

app.intent('Start Love Quiz', {
        "slots": {},
        "utterances": [
            "what's my love language",
            "how do I express my love",
            "check my love language",
            "figure out my love language",
            "start the love language quiz",
            "begin the love language quiz",
            "love language quiz",
            "quiz"
        ]
    },
    function (request, response) {
        generate_quiz(response);
        return;
    }
);

/* Questions from Love Language Quiz */

var questions = [
    {
        "What is more meaningful to you?" :
        [ 
            "You receive a loving note/text/email for no special reason from your loved one.", // A
            "Your partner and you hug." // E
        ]
    },
    {
        "What is more meaningful?" :
        [
            "You can spend alone time with your partner - just the two of you.", // B
            "Your partner does something practical to help you out." // D
        ]
    }
];

var 

/* generate_suggestions randomly picks a cuisine type under the variable food (which you can customize for your preferences) and outputs a suggestion. */

function generate_quiz(response) {
    // get random question
    var rand = questions[Math.floor(Math.random() * questions.length)]; 
    // say random question
    response.say(rand);
    response.send();
    return;
}
// Connect to lambda
exports.handler = app.lambda();

if ((process.argv.length === 3) && (process.argv[2] === 'schema')) {
    console.log(app.schema());
    console.log(app.utterances());
}