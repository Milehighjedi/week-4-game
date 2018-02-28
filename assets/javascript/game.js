//four crystals that house random results
//each crystal houses a random number from 
//a new random will generate everytime a win or loss occours
//when a crystal is clicked, its number is added to the player's total
//if the players cumulative score matches the target score, the player wins
//if not, it is a loss and the game starts over
//if a win occours, the win counter goes up by one

var randomnumber;
var losses = 0;
var wins = 0;
var total = 0;
var count = 0;
var images = ["assets/images/cub1.jpeg", "assets/images/cub2.png", "assets/images/cub3.png", "assets/images/cub4.jpeg"];
var image = $(".slideshow");


var game = function () {

    $(".cubs").empty();

    randomnumber = Math.floor(Math.random() * 75) + 25;

    console.log(randomnumber)

    $("#result").html('Target Number: ' + randomnumber);

    for (var i = 0; i < 4; i++) {

        var myNumber = Math.floor(Math.random() * 10) + 1;

        var cub = $("<div>");
        cub.attr({
            "class": 'cub',
            "data": myNumber

        });
        cub.css("background-image", "url(" + images[count++] + ")");

        setInterval(function () {
            image.fadeOut(500, function () {
                image.css("background-image", "url(" + images[count++] + ")");
                image.fadeIn(500);

            });
            if (count == images.length) {
                count = 0;
            }
        }, 5000);


        $(".cubs").append(cub);

    }
    $("#total").html("Total Score: " + total);
}

game();


$(document).on('click', ".cub", function () {
    var num = parseInt($(this).attr('data'));

    total += num;

    $("#total").html("Total Score: " + total);

    console.log(total)

    if (total > randomnumber) {
        losses++;
        $("#losses").html("Losses: " + losses);
        total = 0;
        game();
    }
    else if (total === randomnumber) {
        wins++;
        $("#wins").html("Wins: " + wins);
        total = 0;
        game();
    }


});




 