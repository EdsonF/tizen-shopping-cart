
$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });
	
	
	$('.contents').on("click", function(){
		$('#textbox').html($('#textbox').html() == "Basic" ? "Sample" : "Basic");				
	});
});
