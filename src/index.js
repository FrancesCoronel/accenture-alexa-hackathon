var alexa = require('alexa-app');
var app = new alexa.app();

/* app.launch provides an introductory message to our user. You can customize anything inside response.say to your own welcome message. */

app.launch(function (request, response) {
    response.say("Welcome to The 5 Love Languages Quiz. Originally created by Gary Chapman.");
    response.say("You're going to answer 30 questions to determine your primary love language.");
    response.say("Knowing your love language is powerful, but knowing how they work in your relationships - that's a game changer.");
    response.say("Let's get started!");
    response.say("Our first question: What is more meaningful to you?");
    response.say("Is it A. You receiving a loving note/text/email for no special reason from your loved one or B. You and your partner hugging.");
    response.say("Okay, you chose A. That means you prefer words of affirmation over physical touch.");
    response.say("Let's go on to the next questions!");
    response.shouldEndSession(false);
})

/* app.intent will be used by AWS Skills Portal to decipher our user’s intent (which is GetLunchSuggestions in this case) and possible things the user might say to ask Alexa for our intent. */

app.intent("StartQuiz", {
        "slots": {},
        "utterances": [
            "what's my love language",
            "how do I express my love",
            "check my love language",
            "figure out my love language",
            "start the love language quiz",
            "begin the love language quiz",
            "start love language quiz",
            "start quiz",
            "what is my love language"
        ]
    },
    function (request, response) {
        generateQuiz(response);
        return;
    }
);

/* generate_suggestions randomly picks a cuisine type under the variable food (which you can customize for your preferences) and outputs a suggestion. */

function generateQuiz(response) {
    /* Questions from Love Language Quiz */

    // A. Words of Affirmation
    // B. Quality Time
    // C. Receiving Gifts
    // D. Acts of Service
    // E. Physical Touch

    var a, b, c, d, e = 0;

    var questions = [{
            "What is more meaningful to you?": [
                "You receive a loving note/text/email for no special reason from your loved one.", // A
                "Your partner and you hug." // E
            ]
        },
        {
            "What is more meaningful?": [
                "You can spend alone time with your partner - just the two of you.", // B
                "Your partner does something practical to help you out." // D
            ]
        }
    ];

    response.say("Say A for the first choice or B for the second choice.");
    response.say(questions[0]);
    response.say("A is " + questions[0][0]);
    response.say("B is " + questions[0][1]);
    response.say("Okay, you chose A. So your primary love language is Words of Affirmation.");
    response.send();
    return;
}
// Connect to lambda
exports.handler = app.lambda();

if ((process.argv.length === 3) && (process.argv[2] === 'schema')) {
    console.log(app.schema());
    console.log(app.utterances());
}