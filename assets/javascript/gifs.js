//Array of topics to turn into buttons
const topics = ["Clueless", "Girls Trip", "Crazy Rich Asians", "When Harry Met Sally", "Moana", "Bridget Jones Diary", "Bridesmaids", "Moonstruck",  "Bend It Like Beckham", "To Wong Foo With Love From Julie Newmar"];

//Make buttons
for(let i=0; i<topics.length; i++){
    let buttons = $('<button>')
    .addClass('movies')
    .attr('data-type', topics[i])
    .text(topics[i]);

//Append buttons to .buttonSpace
    $('.buttonSpace').append(buttons)
}




//Click button to get static gifs
function getGifs(){
    let queryURL = 
}
//Ajax query
//Turn gifs on
//Turn gifs off
//Show rating below each gif


//Make a form for users to input new topics
//Add input to topics array
//Clear .buttonSpace 
//Make new buttons from array