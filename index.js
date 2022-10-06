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
    var gameOver = false;
    var currectGuess = false;
    
    $("#blanks").empty();
    let span = `<span class = "rep_input" >_____</span>`
    $("#blanks").append(span)
   
    $(".clickable").click(function () {
    var id = $(this).attr("id");
    var life = parseInt($("#life").text());
     for (var i = 0; i< randomWord.word.length; i++){
        $("#hint").eq(i).html(randomWord.category)
        if(randomWord.word.charAt(i).toLowerCase() == id){
         if(life > 0 && ($(".rep_input").eq(i).html() == "_" || $(".rep_input").eq(i).html() == "id")) {
             $(".rep_input").eq(i).html(id);
             currectGuess = true;

             life -= 1;

             if ($("#blanks").text() === randomWord.word.toLowerCase())
             {
               $("#result").text("YOU WIN !!");
               currectGuess = true;
               gameOver = true;
             }
         }
        }
     }
    
    })


}