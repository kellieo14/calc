var add = function(num1, num2) {
	return num1 + num2;
}
var sub = function(num1, num2) {
	return num1 - num2;
}
var mult = function(num1, num2) {
	return num1 * num2;
}
var div = function(num1, num2) {
	return num1 / num2;
}
var perc = function(num1, num2) {
	return (num1 / 100)*num2;
}
var pow = function(num1, num2) {
	x = num1;
	for (i = 1; i < num2; i++){

  	num1 = num1 * x;
  }
  return num1;
}


$(function(event){

	
	$("button#add").click(function(event){
		var num1 = parseFloat($("#num1").val());
    	var num2 = parseFloat($("#num2").val());
		var answer = add(num1,num2);
		var history = "<li>"+num1+" + "+num2+" = "+answer+"</li>";
		$("ol").prepend(history);
		event.preventDefault();

	});
	$("button#sub").click(function(event){
		var num1 = parseFloat($("#num1").val());
    	var num2 = parseFloat($("#num2").val());
		var answer = sub(num1,num2);
		$("ol").prepend("<li>"+num1+" - "+num2+" = "+answer+"</li>");
		event.preventDefault();

	});
	$("button#mult").click(function(event){
		var num1 = parseFloat($("#num1").val());
    	var num2 = parseFloat($("#num2").val());
		var answer = mult(num1,num2);
		$("ol").prepend("<li>"+num1+" * "+num2+" = "+answer+"</li>");
		event.preventDefault();

	});
	$("button#div").click(function(event){
		var num1 = parseFloat($("#num1").val());
    	var num2 = parseFloat($("#num2").val());
		var answer = div(num1,num2);
		$("ol").prepend("<li>"+num1+" / "+num2+" = "+answer+"</li>");
		event.preventDefault();

	});
	$("button#pow").click(function(event){
		var num1 = parseFloat($("#num1").val());
    	var num2 = parseFloat($("#num2").val());
		var answer = pow(num1,num2);
		$("ol").prepend("<li>"+num1+" to the power of "+num2+" = "+answer+"</li>");
		event.preventDefault();

	});
	$("button#perc").click(function(event){
		var num1 = parseFloat($("#num1").val());
    	var num2 = parseFloat($("#num2").val());
		var answer = perc(num1,num2);
		$("ol").prepend("<li>"+num1+"% of "+num2+" = "+answer+"</li>");
		event.preventDefault();

	});
	$("button#clear").click(function(event){
		$("ol").remove();

	});
	
});