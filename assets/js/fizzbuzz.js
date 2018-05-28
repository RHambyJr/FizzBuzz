//fizz if multiple of 3
//buzz if multiple of 5
//fizzbuzz if multiple of 3 and 5
function calcFB(number){
	if(number % 3 === 0 && number % 5 === 0){
		return "<span class=\"display\" id=\"fizz\">fizz</span><span class=\"display\" id=\"buzz\">buzz!</span>";
	} else if(number % 3 === 0){
		return "<span class=\"display\" id=\"fizz\">fizz</span>";
	} else if(number % 5 === 0){
		return "<span class=\"display\" id=\"buzz\">buzz</span>";
	} else{
		return "nope!";
	}
}

//Calls function when key is released
$("input").keyup(function(){
	var value = parseInt($(this).val());
		$(".display").html(calcFB(value));
});