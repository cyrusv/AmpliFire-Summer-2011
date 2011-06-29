	
//	RECOMMENDATION ///////
	 
$(document).ready(function(){
	
	$(".recommend").ready(function()
				{				
				$.get("/ajax/recommend/",  //ask for recommendations
				{},
				function(data)
								{
								$("#rec0").replaceWith('<p id="recp"><a href="/media/'+data[0].fields.song_file+'">'+data[0].fields.song_name+'</a></p>');
								$("#rec1").replaceWith('<p id="recp"><a href="/media/'+data[1].fields.song_file+'">'+data[1].fields.song_name+'</a></p>');
								$("#rec2").replaceWith('<p id="recp"><a href="/media/'+data[2].fields.song_file+'">'+data[2].fields.song_name+'</a></p>');
								$("#rec3").replaceWith('<p id="recp"><a href="/media/'+data[3].fields.song_file+'">'+data[3].fields.song_name+'</a></p>');
								});
	
				});
			});
			
			
			