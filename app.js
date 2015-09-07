function fizzbuzz(num) {

	var output = [];

	for(var i = 1; i <= num; i++)
		{
			if(i%3 === 0 && i%5 === 0)
			{
				output[i-1] = "fizzbuzz";
			}

			else if(i%3 === 0)
			{
				output[i-1] = "fizz";
			}

			else if(i%5 === 0)
			{
				output[i-1] = "buzz";
			}

			else
			{
				output[i-1] = i;
			}		
		}

	return output;

}

$(document).ready(function(){

	$("button").on("click", function(){

		var upperLimit = parseInt($(":text").val());
		
		var fzbz = fizzbuzz(upperLimit);

		$(".fizzbuzz").append("<p>" + fzbz + "</p>");
	});

});