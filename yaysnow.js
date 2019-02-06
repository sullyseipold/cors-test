


$('#search-button').on('click', function(event) {
    event.preventDefault();

    var mountain = $('#mountainInput').val();
    console.log(mountain);

    getLiftReport(mountain);

});


function getLiftReport(mountain) {

    var url = 'https://liftie.info/api/resort/' + mountain;
    $.ajax ({
        method: 'GET',
        url: url,
    }).done(function(response) {
        console.log(response);
    });

};