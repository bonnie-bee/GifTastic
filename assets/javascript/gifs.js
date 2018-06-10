//Array of topics to turn into buttons
const topics = ["Clueless", "Girls Trip", "Crazy Rich Asians", "When Harry Met Sally", "Moana", "Bridget Jones Diary", "Bridesmaids", "Moonstruck", "Bend It Like Beckham", "To Wong Foo With Love From Julie Newmar"];
makeBtns();

//Make buttons
function makeBtns() {
    $('.buttonSpace').empty();

    for (let i = 0; i < topics.length; i++) {
        let buttons = $('<button>')
            .addClass('movies')
            .attr('data-type', topics[i])
            .text(topics[i]);

        $('.buttonSpace').append(buttons)
    }
}


//Add user input to array
$('#submitGif').on('click', function () {
    let userGif = $('#inputGif').val().trim()
    topics.push(userGif);
    makeBtns();
})



//Click button to get static gifs
$(document).on('click', '.movies', function () {

    const name = $(this).attr('data-type');
    const queryURL = `https://api.giphy.com/v1/gifs/search?q=${name}&api_key=cqSSpY4XuKE5YrQJnI8qVFRtFBMTJvg4&limit=10`

    $('.gifSpace').empty()

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        for (let i = 0; i < response.data.length; i++) {

            let ratings = $('<p>').attr('class', 'gifRatings');
            $('.gifSpace').append(ratings);
            ratings.text('Gif rating: ' + response.data[i].rating);

            stillUrl = response.data[i].images.fixed_height_still.url;
            movingUrl = response.data[i].images.fixed_height.url;

            let movieImg = $("<img>")
                .addClass('gifImg')
                .attr('src', stillUrl)
                .attr('data-stop', stillUrl)
                .attr('data-state', 'still')
                .attr('data-animate', movingUrl)
                .attr('alt', 'gif of a movie scene');

            $(ratings).append(movieImg);
        };
        clickGif();
    });
});


//Turn gifs on and off

function clickGif() {
    $('.gifImg').on('click', function () {

        if ($(this).attr('data-state') === 'still') {

            $(this).attr('data-state', 'animate');
            let a = $(this).attr('data-animate');
            $(this).attr('src', a);

        } else {

            $(this).attr('data-state', 'still');
            let b = $(this).attr('data-stop');
            $(this).attr('src', b);

        };
    });
}
;


