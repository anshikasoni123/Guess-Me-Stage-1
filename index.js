let words = [
    {
        "inputs":"5",
        "category":"Sports",
        "word":"Chess"
    },
    {
        "inputs":"6",
        "category":"Europeon Country Name",
        "word":"France"
    }
]

$(document).ready(function(){
    fill_blanks();
})



function fill_blanks() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    
    $("#blanks").empty();
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }

    $("#hint").html(randomWord.category)

    var gameOver = false;

    $(".clickable").click(function () {
        var currectGuess = false;
        var id = $(this).attr("id");
        var life = parseInt($("#life").text());
     
        for (var i = 0; i< randomWord.word.length; i++){
       
        if(randomWord.word.charAt(i).toLowerCase() == id){
         if(life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == "id")) {
             $(".fill_blanks").eq(i).html(id);
             currectGuess = true;

             if ($("#blanks").text() === randomWord.word.toLowerCase())
             {
               $("#result").text("YOU WIN !!");
               currectGuess = true;
               gameOver = true;
             }
         }
        }
     }

    if (life > 0 && correctGuess!=true && gameOver!=true) {           
        life = life - 1
        $("#life").text(life)
    }
    else if (life == 0) {
        $("#result").text("You Lost!!")
    }
    
    })


}