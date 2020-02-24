  $(document).ready(function(){

    $("#txt-search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#txt-search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});

var data = [
    {

        title: "Yo!",
        album: "Underground Communication",
        lyrics: "Something like 'renacimiento es como yo vivo, yes' which is think would translate into something in the neighbourhood of 'rebirth is how I live'... the rest of the snippets are about dancing. I can hear 'bailo, bailé in da ritma', 'I dance, I danced in the rhythm' and I can distinguish 'salsa' and 'hiphop'. Also I can hear 'que tener limites', 'entrenando de puntas' both of which I can't translate but the first must have something to do with boundaries, and I think I hear 'dime si tu m'extrenas' which would mean, 'tell me if you miss me'. That's all I can make of it :S I think there might be some slang in it aswell.",
        tags: ['']
    },
    {
        title: "Verbing the Noun",
        album: "Underground Communication",
        lyrics: "Coming in Blasting! DIRTY. Some invisible force",
        tags: ['']
    },
    {
        title: "Underground Communication",
        album: "Underground Communication",
        lyrics: "Lost, now we can all get a piece of it <br> Peace never preceded the people from the peacefulness <br> Greedy illegitimate democratic republicans  <br> Sell guns for fun <br> Indigenous exterminates <br> Listen, love, one world nation <br> True clear channel with rhythm and information <br> Internet connect, network private stations <br>  Media free, underground communication",
        tags: ['']
    },
];

$('#txt-search').keyup(function(){
            var searchField = $(this).val();
			if(searchField === '')  {
				$('#filter-records').html('');
				return;
			}

            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
			  $.each(data, function(key, val){
				if ((val.album.search(regex) != -1) || (val.title.search(regex) != -1) || (val.lyrics.search(regex) != -1)) {
				  output += '<div class="col-md-6 well">';
				//   output += '<div class="col-md-3"><img class="img-responsive" src="'+val.profile_image+'" /></div>';
				  output += '<div class="col-md-7">';
				  output += '<h5>' + val.title + '</h5>';
                  output += '<p>' + val.album + '</p>';
                  output += '<p>' + val.lyrics + '</p>';
				  output += '</div>';
				  output += '</div>';
				  if(count%2 == 0){
					output += '</div><div class="row">'
				  }
				  count++;
				}
			  });
			  output += '</div>';
			  $('#filter-records').html(output);
        });
  });