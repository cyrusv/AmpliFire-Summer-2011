///////////////////

//    player    //

//////////////////



// // // // // // // // (function($) {
	// // // // // // // // // plugin definition
	// // // // // // // // $.fn.gVideo = function(options) {		
		// // // // // // // // // build main options before element iteration		
		// // // // // // // // var defaults = {
			// // // // // // // // theme: 'simpledark',
			// // // // // // // // childtheme: ''
		// // // // // // // // };
		// // // // // // // // var options = $.extend(defaults, options);
		// // // // // // // // // iterate and reformat each matched element
		// // // // // // // // return this.each(function() {
			// // // // // // // // var $gVideo = $(this);
			
			// // // // // // // // //create html structure
			// // // // // // // // //main wrapper
			// // // // // // // // var $video_wrap = $('<div></div>').addClass('ghinda-video-player').addClass(options.theme).addClass(options.childtheme);
			// // // // // // // // //controls wraper
			// // // // // // // // var $video_controls = $('<div class="ghinda-video-controls"><a class="ghinda-video-play" title="Play/Pause"></a><div class="ghinda-video-seek"></div><div class="ghinda-video-timer">00:00</div><div class="ghinda-volume-box"><div class="ghinda-volume-slider"></div><a class="ghinda-volume-button" title="Mute/Unmute"></a></div></div>');						
			// // // // // // // // $gVideo.wrap($video_wrap);
			// // // // // // // // $gVideo.after($video_controls);
			
			// // // // // // // // //get new elements
			// // // // // // // // var $video_container = $gVideo.parent('.ghinda-video-player');
			// // // // // // // // var $video_controls = $('.ghinda-video-controls', $video_container);
			// // // // // // // // var $ghinda_play_btn = $('.ghinda-video-play', $video_container);
			// // // // // // // // var $ghinda_video_seek = $('.ghinda-video-seek', $video_container);
			// // // // // // // // var $ghinda_video_timer = $('.ghinda-video-timer', $video_container);
			// // // // // // // // var $ghinda_volume = $('.ghinda-volume-slider', $video_container);
			// // // // // // // // var $ghinda_volume_btn = $('.ghinda-volume-button', $video_container);
			
			// // // // // // // // $video_controls.hide(); // keep the controls hidden
						
			// // // // // // // // var gPlay = function() {
				// // // // // // // // if($gVideo.attr('paused') == false) {
					// // // // // // // // $gVideo[0].pause();					
				// // // // // // // // } else {					
					// // // // // // // // $gVideo[0].play();				
				// // // // // // // // }
			// // // // // // // // };
			
			// // // // // // // // $ghinda_play_btn.click(gPlay);
			// // // // // // // // $gVideo.click(gPlay);
			
			// // // // // // // // $gVideo.bind('play', function() {
				// // // // // // // // $ghinda_play_btn.addClass('ghinda-paused-button');
			// // // // // // // // });
			
			// // // // // // // // $gVideo.bind('pause', function() {
				// // // // // // // // $ghinda_play_btn.removeClass('ghinda-paused-button');
			// // // // // // // // });
			
			// // // // // // // // $gVideo.bind('ended', function() {
				// // // // // // // // $ghinda_play_btn.removeClass('ghinda-paused-button');
			// // // // // // // // });
			
			// var seeksliding;			
			// var createSeek = function() {
				// if($gVideo.attr('readyState')) {
					// var video_duration = $gVideo.attr('duration');
					// $ghinda_video_seek.slider({
						// value: 0,
						// step: 0.01,
						// orientation: "horizontal",
						// range: "min",
						// max: video_duration,
						// animate: true,					
						// slide: function(){							
							// seeksliding = true;
						// },
						// stop:function(e,ui){
							// seeksliding = false;						
							// $gVideo.attr("currentTime",ui.value);
						// }
					// });
					// $video_controls.show();					
				// } else {
					// setTimeout(createSeek, 150);
				// }
			// };

			// createSeek();
		
			// var gTimeFormat=function(seconds){
				// var m=Math.floor(seconds/60)<10?"0"+Math.floor(seconds/60):Math.floor(seconds/60);
				// var s=Math.floor(seconds-(m*60))<10?"0"+Math.floor(seconds-(m*60)):Math.floor(seconds-(m*60));
				// return m+":"+s;
			// };
			
			// var seekUpdate = function() {
				// var currenttime = $gVideo.attr('currentTime');
				// if(!seeksliding) $ghinda_video_seek.slider('value', currenttime);
				// $ghinda_video_timer.text(gTimeFormat(currenttime));							
			// };
			
			// $gVideo.bind('timeupdate', seekUpdate);	
			
			// var video_volume = 1;
			// $ghinda_volume.slider({
				// value: 1,
				// orientation: "vertical",
				// range: "min",
				// max: 1,
				// step: 0.05,
				// animate: true,
				// slide:function(e,ui){
						// $gVideo.attr('muted',false);
						// video_volume = ui.value;
						// $gVideo.attr('volume',ui.value);
					// }
			// });
			
			
			
			
			// var muteVolume = function() {
				// if($gVideo.attr('muted')==true) {
					// $gVideo.attr('muted', false);
					// $ghinda_volume.slider('value', video_volume);
					
					// $ghinda_volume_btn.removeClass('ghinda-volume-mute');					
				// } else {
					// $gVideo.attr('muted', true);
					// $ghinda_volume.slider('value', '0');
					
					// $ghinda_volume_btn.addClass('ghinda-volume-mute');
				// };
			// };


function addmusic(position, songname, artistname)	
		{
		songhtml='<li><div id="queue4" class="songqueue">'+songname+'<br>'+artistname+'</div></li>';
		$('#nowplaying li:nth-child('+position+')').after(songhtml);
		}

			


////////////

$(document).ready(function()
	{
	$("#play").click(function()
		{
       var mySong = document.getElementById('mysong');
       if (mySong.paused)
           {
		   mySong.play();
		   $('#play').removeClass("controlpause");
		   $('#play').addClass("controlplay");
		   }
       else
           {
		   mySong.pause();
		   $('#play').removeClass("controlplay");
		   $('#play').addClass("controlpause");
		   }
		});
	
	$('#ff').click(function()
		{
		
		var thissong = $('.playingsong');
		var nextsong = thissong.next();
		nextsong.hide();
		nextsong.play();
		$('.playingsong').removeClass("playingsong");
		nextsong.addClass("playingsong");
		});
	
	});



$("body").delegate(".songname", "click", function()
	{
	var src = $(this).attr('id');
	
	if ($('#nowplaying').children().length==0)
		{
		
		songhtml='<li><div id="queue4" class="songqueue playingsong data-url="'+$(this).attr("id")+'">'+$(this).text()+'<br>'+$($(this).parent().parent()).find(".artistname").text()+'888</div></li>';
		$("#nowplaying").append(songhtml);
		}
	else
		{
		addmusic($('#nowplaying').children().length, $(this).text(), $($(this).parent().parent()).find(".artistname").text()); //adds music to the end of the nowplaying
		}
	
	$('#mysong').attr('src', src);
	var mySong = document.getElementById('mysong');
       if (mySong.paused)
           {
		   $('#play').removeClass("controlplay");
		   $('#play').addClass("controlpause");
		   }
       else
           {
		   mySong.play();
		   $('#play').removeClass("controlpause");
		   $('#play').addClass("controlplay");
		   }
	});
	



	
	

			
			
			
			
///////////////////////////////////
///////  DRAG N DROP //////////////
//////////////////////////////////

var mouseX, mouseY, lastX, lastY = 0;
 
// This function captures the x and y positions anytime the mouse moves in the document.
$().mousemove(function(e) { mouseX = e.pageX; mouseY = e.pageY; })

 
var need_select_workaround = typeof $(document).attr('onselectstart') != 'undefined';

 
// The first order of business is to bind a function to the mousedown event
// on all TR elements inside the tbody. I am using the jQuery live() function because my content is loaded through
// ajax. simply use mousedown() if you do not need to load this on dynamic functions
 
	$('ol li').live('mousedown', function (e) {
		// Store the current location Y axis position of the mouse at the time the
		// mouse button was pushed down. This will determine which direction to move the table row
		lastX = mouseX;

		
		
		// store $(this) tr element in a variable to allow faster access in the functions soon to be declared
		var li = $(this);
 
		// This is just for flashiness. It fades the TR element out to an opacity of 0.2 while it is being moved.
		li.fadeTo('fast', 0.2);
 
 
		// jQuery has a fantastic function called mouseenter() which fires when the mouse enters
		// This code fires a function each time the mouse enters over any TR inside the tbody -- except $(this) one
		$('li', li.parent() ).not(this).mouseenter(function(){
			// Check mouse coordinates to see whether to pop this before or after
			// If mouseY has decreased, we are moving UP the page and insert tr before $(this) tr where
			// $(this) is the tr that is being hovered over. If mouseY has decreased, we insert after
			if (mouseX > lastX) {
					$(this).after(li);
			} else {
					$(this).before(li);
			}
			// Store the current location of the mouse for next time a mouseenter event triggers
			lastX = mouseX;
		});
 
		// Now, bind a function that runs on the very next mouseup event that occurs on the page
		// This checks for a mouse up *anywhere*, not just on table rows so that the function runs even
		// if the mouse is dragged outside of the table.
		$('body').mouseup(function () {
		   //Fade the TR element back to full opacity
		   li.fadeTo('fast', 1);
		   // Remove the mouseenter events from the tbody so that the TR element stops being moved
		   $('li', li.parent()).unbind('mouseenter');
		   // Remove this mouseup function until next time
		   $('body').unbind('mouseup');
 
		// Make text selectable for IE again with
		// The workaround for IE based browsers
		if (need_select_workaround)
		$(document).unbind('selectstart');
 
		   reorder(); // This function just renumbers the position and adjusts the zebra striping, not required at all
		});
 
 
 
		// This part if important. Preventing the default action and returning false will
		// Stop any text in the table from being highlighted (this can cause problems when dragging elements)
		e.preventDefault();
 
	// The workaround for IE based browers
	if (need_select_workaround)
		$(document).bind('selectstart', function () { return false; });
		return false;
 
	}).css('cursor', 'move');
 
function reorder () {
		var position = 1;
		$('ol li').each(function () {
			// Change the text of the first TD element inside this TR
			$('td:first', $(this)).text(position);
			//Now remove current row class and add the correct one
			$(this).removeClass('row1 row2').addClass( position % 2 ? 'row1' : 'row2');
 
			position += 1;
 
		});
	}
