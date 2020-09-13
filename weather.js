$(document).ready(function() {
	$('form').submit(function() {
		$('#info').hide();
		var location = $('#location').val();
		$.get(
			'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=d6a4c9e3ab621168f3538baa54766827&q=' +
				location,
			function(weather) {
				var city = weather.name;
				var info =
					'Temperature: ' +
					weather.main.temp +
					' °F<br>' +
					'Min Temp: ' +
					weather.main.temp_min +
					' °F<br>' +
					'Max Temp: ' +
					weather.main.temp_max +
					' °F<br>';

				$('#info h2').html(city);
				$('#info p').html(info);
				$('#info').show();
			},
			'json'
		);
		return false;
	});
	var myVar;

	function myFunction() {
		myVar = setTimeout(showPage, 3000);
	}

	function showPage() {
		document.getElementById('loader').style.display = 'none';
	}
});
