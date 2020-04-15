function init() {}
	let progressNow = 0;


$('#One').click(function() {
    progressNow = progressNow + 1;
    $('#my-progress-bar').attr("style", 
    	"width: " + progressNow + "%");
});

$('#Three').click(function() {
    progressNow = progressNow + 3;
    $('#my-progress-bar').attr("style", 
    	"width: " + progressNow + "%");    
});

$('#Seven').click(function() {
    progressNow = progressNow + 7;
    $('#my-progress-bar').attr("style", 
    	"width: " + progressNow + "%");
});

$(document).ready(init);