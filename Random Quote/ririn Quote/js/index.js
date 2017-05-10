$(document).ready(function(){
  var randomQuote, randomNum, author;
  function getQuote(){
          
    /*var quotes = ["Setiap Seruan minta tolong adalah panggilan kemanusiaan","Still Fight No Tears","Dalanken uga simehulina, Tuhan si masu-masu geluhndu","Cintai apa yang ada pada dirimu karena itu akan kembali kepadamu","Apapun pergumulanmu tetap berserah kepada Allah","Cause if you want to keep me, you gotta gotta gotta love me harder","This is my fight song take back my life song","If you want it, take it","uh, love, no one's ever gonna hurt you love I'm gonna give you all of my love no matters like you","We put the good in the good in the good life, we put the bad in the past now we alright","Damn right from the buttom we rise so high now we cover sky lights we're building an empire we owe it all to each other just look at us right now destined we're so good right now legend here's to you anda I Raise'em to the sky"];
    var author1 = ["-Satgana Unai","-Repvblik","-Kenjiro Entertainment","-Sinulingga Family","-Adventish","-Arianna Grande","-Rachel","-Summery Love","-Mom Adoration","-Kehlani","-G'Eazy"];
    
     randomNum = Math.floor((Math.random()*quotes.length));
     randomQuote = quotes[randomNum];
     author = author1[randomNum];*/
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      $(".quote").html('"' + data.quoteText + '"');
      $(".author").html("-" + data.quoteText);
    });

    
    $(".quote").text(randomQuote);
    $(".author").text(author);
          }
  $("#NewQuote").on("click",function(){
    getQuote();
  });
  
  $("#tweet").on("click",function(){
    window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + randomQuote + "-" + author);
  });
});