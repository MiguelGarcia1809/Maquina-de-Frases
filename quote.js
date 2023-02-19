$(document).ready(function () {
    
    
    showQuote();

    $("#new-quote").click(function () { 
        showQuote();
    });

    function showQuote(){
        $.ajax({
            method: 'GET',
            url: 'https://api.breakingbadquotes.xyz/v1/quotes',
            success: function(result) {
                let quote = result[0].quote;
                let author = result[0].author;
                let template = `<i class="fa fa-quote-left"> ${quote}`;
                $("#text").html(template);
                $("#author").text(author);
            }
        });
    }
});