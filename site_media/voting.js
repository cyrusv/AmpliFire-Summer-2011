
///////////////////

//     VOTING    //

////////////////////

$(document).ready(function()
				{
				$.get(	"/get_top_ten/",  //ask for top ten songs of the day
						{},
						function(top_ten_data)
							{
							music_list = top_ten_data;

							var songlisttext = '';

							for (key in top_ten_data) 
								{
								songlisttext+= '<div id="song_'+top_ten_data[key].pk+'" class="fullsong '+top_ten_data[key].fields.genre+'"><div id="votes-song_'+top_ten_data[key].pk+'" class="votes"><div id="upvote-song_'+top_ten_data[key].pk+'" class="upvote"></div><div id="songscore-song_'+top_ten_data[key].pk+'" class="songscore">'+top_ten_data[key].fields.score+'</div><div id="downvote-song_'+top_ten_data[key].pk+'" class="downvote"></div>	</div>	<div id="mainsong-song_'+top_ten_data[key].pk+'" class="mainsong"><h1><a class="songname" id = "/media/'+top_ten_data[key].fields.song_file+'">'+top_ten_data[key].fields.song_name+'</a></h1><h3><a class="artistname"href = "/artist/'+top_ten_data[key].fields.artist_name+'">'+top_ten_data[key].fields.artist_name+'</a></h3><p class="details">'+top_ten_data[key].fields.genre+' posted on '+top_ten_data[key].fields.created_on+'</p></div></div>'
								}
								$("#songlist").append(songlisttext);
							});
				});

	// Filters genre
//$("body").delegate(".reloadmusic", "click", function()
//	{
	//var GENRE_CHOICES = ['hip-hop', 'rock', 'pop', 'electronic'];
	//var thisgenre=$(this).attr('id');
	//$.each(GENRE_CHOICES, function(index, value)
		//{
		//thisgenre = genre.pop
		
		
		
		//var checkifchecked = '#'+value+':checked';
		//if($(checkifchecked))
			//{
			
			//}
			
		//});	
	
	//for (key in music_list)
		//{
		//songlisttext+='<div id="song_'+music_list[key].pk+'" class="fullsong '+music_list[key].fields.genre+'"><div id="votes-song_'+music_list[key].pk+'" class="votes"><div id="upvote-song_'+music_list[key].pk+'" class="upvote"></div><div id="songscore-song_'+music_list[key].pk+'" class="songscore">'+music_list[key].fields.score+'</div><div id="downvote-song_'+music_list[key].pk+'" class="downvote"></div></div><div id="mainsong-song_'+music_list[key].pk+'" class="mainsong"><h1><a href = "/media/'+music_list[key].fields.song_file+'">'+music_list[key].fields.song_name+'</a></h1><h3><a href = "/artist/'+music_list[key].fields.artist_name+'">'+music_list[key].fields.artist_name+'</a></h3><p class="details">'+music_list[key].fields.genre+' posted on '+music_list[key].fields.created_on+'</p></div></div></div>';
		//}
	//});				
	
//if somebody clicks upvote
$("body").delegate("div.upvote", "click", function()
	{
		if ($(this).css("background-position") == "0% 0%") //if already upvote
			{
			//gets the song id number as an int
			var song_id=$(this).attr('id');
			song_id=song_id.replace("upvote-song_", "");
			song_id=parseInt(song_id);
			var thissongscore_selector='#songscore-song_'+song_id;
			var thissongscore=$(thissongscore_selector).text();
			var newsongscore=thissongscore-1;
			$(thissongscore_selector).html(newsongscore);
			$(this).css("background-position", "0% 100%");
			}
		else //if already not upvote
			{
			var song_id=$(this).attr('id');
			song_id=song_id.replace("upvote-song_", "");
			song_id=parseInt(song_id);
			var downvote="#downvote-song_"+song_id;
			if ($(downvote).css("background-position")=="0% 0%")
				{
				var thissongscore_selector='#songscore-song_'+song_id;
				var thissongscore=parseInt($(thissongscore_selector).text());
				var newsongscore=thissongscore+2;
				$(thissongscore_selector).html(newsongscore);
				$(this).css("background-position", "0% 0%");
				$(downvote).css("background-position", "0% 100%");
				}
			else
				{
				var thissongscore_selector='#songscore-song_'+song_id;
				var thissongscore=parseInt($(thissongscore_selector).text());
				var newsongscore=thissongscore+1;
		
				$(thissongscore_selector).html(newsongscore);
				$(this).css("background-position", "0% 0%");
				}
			
			}
      

    });

//if somebody clicks downvote
$("body").delegate("div.downvote", "click", function(){
      	if ($(this).css("background-position") == "0% 0%") //if already downvote
			{
			//gets the song id number as an int
			var song_id=$(this).attr('id');
			song_id=song_id.replace("downvote-song_", "");
			song_id=parseInt(song_id);
			
			var thissongscore_selector='#songscore-song_'+song_id;
			var thissongscore=parseInt($(thissongscore_selector).text());
			var newsongscore=thissongscore+1;
			$(thissongscore_selector).html(newsongscore);
			$(this).css("background-position", "0% 100%");
			}
		else //if already not downvote
			{
			
			var song_id=$(this).attr('id');
			song_id=song_id.replace("downvote-song_", "");
			song_id=parseInt(song_id);
			var upvote="#upvote-song_"+song_id;
			if ($(upvote).css("background-position")=="0% 0%")
				{
				var thissongscore_selector='#songscore-song_'+song_id;
				var thissongscore=parseInt($(thissongscore_selector).text());
				var newsongscore=thissongscore-2;
				$(thissongscore_selector).html(newsongscore);
				$(this).css("background-position", "0% 0%");
				$(upvote).css("background-position", "0% 100%");
				}
			
			else
				{
				var thissongscore_selector='#songscore-song_'+song_id;
				var thissongscore=parseInt($(thissongscore_selector).text());
				var newsongscore=thissongscore-1;
		
				$(thissongscore_selector).html(newsongscore);
				$(this).css("background-position", "0% 0%");
				}
			}
    });
