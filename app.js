$(document).ready(function(){

	$("button").on("click", function(){

		var upperLimit = $(":text").val();
		
		for(var i = 1; i <= upperLimit; i++)
		{
			if(i%3 === 0 && i%5 === 0)
			{
				$("body").append("<p>FizzBuzz</p>");
			}

			else if(i%3 === 0)
			{
				$("body").append("<p>Fizz</p>");
			}

			else if(i%5 === 0)
			{
				$("body").append("<p>Buzz</p>");
			}

			else
			{
				$("body").append("<p>" + i + "</p>");
			}		
		}

	});

});