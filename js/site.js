$("#contactMe").on("click", function() {
    
    $.ajax({
        url: "//formspree.io/nallely.alcaraz@gmail.com", 
        method: "POST",
        data: {message: "hello!"},
        dataType: "json"
    });
});

// $("#submitMessage")