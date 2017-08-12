/********************************************************
* to use this plugin:
*
* you need a table id and api key from Airtable cloud db
*
**********************************************************/


var userVoted = false;
var thumbSelected = false;

/********************************************************
* voteSumbitted()
*
* reads the values of the plugin's HTML form and
* submits them via ajax to the airtable db table
*
* no params accepted
*********************************************************/


function voteSubmitted() {

    var theVote = $('input[name="vote"]:checked').val();
    var theTimeStamp = new Date($.now());
    var theComments = $('input[name="comment"]').val();
    var theEmail = $('input[name="email"]').val();
    var theURL = window.location.href;

    $.ajax({
        url: "https://api.airtable.com/v0/TABLE-ID-AND-PATH-GOES-HERE",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader('Authorization', 'Bearer API-KEY-GOES-HERE');
        },
        contentType: "application/json",
        data: '{ "fields": { "timestamp": "' + theTimeStamp + '", "vote": "' + theVote + '", "comments": "' + theComments + '", "url": "' + theURL + '", "email": "' + theEmail + '" } }',
        type: "POST",
        statusCode: {
            0: function() {
                //Success message
                console.log("Error... Status 0");
            },
            200: function() {
                //Success Message
                $('#response').empty().text("Thanks for your feedback!");
                userVoted = true;
            }
        }
    });
}


/********************************************************
* reveal(elementList)
*
* unhides each jQuery obj in an array
*
* elementList - array of jQuery DOM elements
*********************************************************/

function reveal(elementList) {
    elementList.forEach( function(element) {
        console.log(element);
        element.fadeIn(150);
    });
    thumbSelected = true;
}


/********************************************************
* emptyText(element)
*
* clears the value field of a jQuery DOM element
*
* element - jQuery DOM elements
*********************************************************/

function emptyText(element) {
    element.val("");
}