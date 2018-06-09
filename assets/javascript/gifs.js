//Array of topics to turn into buttons
const topics = ["Clueless", "Girls Trip", "Crazy Rich Asians", "When Harry Met Sally", "Moana", "Bridget Jones Diary", "Bridesmaids", "Moonstruck", "Bend It Like Beckham", "To Wong Foo With Love From Julie Newmar"];

//Make buttons
for (let i = 0; i < topics.length; i++) {
    let buttons = $('<button>')
        .addClass('movies')
        .attr('data-type', topics[i])
        .text(topics[i]);

    //Append buttons to .buttonSpace
    $('.buttonSpace').append(buttons)
}




//Click button to get static gifs
$('.movies').on('click', function () {
    const name = $(this).attr('data-type');
    // const key = "cqSSpY4XuKE5YrQJnI8qVFRtFBMTJvg4";
    const queryURL = `http://api.giphy.com/v1/gifs/search?q=${name}&api_key=cqSSpY4XuKE5YrQJnI8qVFRtFBMTJvg4&limit=10`


    //empty the gif space each time you click a button
    $('.gifSpace').empty()

    //Ajax query
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        let stillUrl;
        let movingUrl;


        for (let i = 0; i < response.data.length; i++) {


            stillUrl = response.data[i].images.fixed_height_still.url;
            movingUrl = response.data[i].images.fixed_height.url;

            let movieImg = $("<img>")
                .addClass('gifImg')
                .attr('src', stillUrl)
                .attr('alt', 'gif of a movie scene')
                .attr('data-state', 'still')
                .attr('animater', movingUrl)

            $('.gifSpace').prepend(movieImg);


            startGif();


        }

        
    })

});


//Turn gifs on

function startGif() {
    $('.gifImg').on('click', function () {


        if ($(this).attr('data-state') === 'still') {
            
            $(this).attr('data-state', 'animate')
            
            let a = $(this).attr('animater')
            $(this).attr('src', a)
        } 

        console.log('this ' + $(this).attr('data-state'))
        console.log('source ' + $(this).attr('src'))

    });

}







    


//Turn gifs off
//Show rating below each gif


//Make a form for users to input new topics
//Add input to topics array
//Clear .buttonSpace 
//Make new buttons from array