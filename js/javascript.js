$(document).ready(function () {

    $('#leer').click(function (e) {
        e.preventDefault();

        $.getJSON("http://api.icndb.com/jokes/random",
            function (data) {
                console.log(data);
                $.each(data, function (i, data) {
                    $('#res').html(`<p>${data.id} / ${data.joke} </p>`);
                });

            });

    });

});

