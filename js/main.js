require.config({
	paths: {
		"jquery": "lib/jquery/dist/jquery.min",
		"script": "script"
	}
});

require(['script'], function(behavior) {
	new behavior;
});