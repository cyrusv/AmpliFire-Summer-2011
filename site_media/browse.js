	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	
	  
  ///////// TABS Filter/search TABS///////
$(document).ready(function() 
		{
		
		
		
		//When page loads...
		$(".tab_content").hide(); //Hide all content
		//$(".tab_container").animate({height:250},"slow"); //Hide all content
		$("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(".tab_content:first").show(); //Show first tab content
		$("ul.genrechoices").hide(); //hide genrechoices
		$(".smartchoices").hide(); //hide genrechoices
	

		//On Click Event
		$("ul.tabs li").click(function()
			{

			$("ul.tabs li").removeClass("active"); //Remove any "active" class
			$(this).addClass("active"); //Add "active" class to selected tab
			$(".tab_content").hide(); //Hide all tab content

			var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
			$(activeTab).fadeIn(); //Fade in the active ID content
			return false;
			});

		});	
	
	
	
	
	
	//////// filters ////////

$(document).ready(function() 
		{

		//browse
		$("input#genre").click(function()
			{
			$("ul.genrechoices").toggle("normal"); 
			});
		
		$("input#smartid").click(function()     //"label[for=showsmart]"
			{
			$(".smartchoices").toggle("normal");
			});
		
		
		$("input#rock").click(function()
			{
			$(".rock").toggle("normal");
			});
		$("input#pop").click(function()
			{
			$(".pop").toggle("normal");
			});
		$("input#electronic").click(function()
			{
			$(".electronic").toggle("normal");
			});
		$("input#hip-hop").click(function()
			{
			$(".hip-hop").toggle("normal");
			});

	
	//search
	

		});
	
