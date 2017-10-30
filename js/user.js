$(document).ready(function() {
	 $("#button").click(function(){
	 	$("#box").css('display','block');
	 });
	 $("#delete").click(function(){
	 	$("#box2").css('display','block');
	 });
	 
$("#closed").click(function(){
		$("#box").css('display','none');
		var uname=$("#username").val();
		var pwd=$("#password").val();
		var eamil=$("#eamil").val();
		var dizhi=$("#dizhi").val();
		$(".name").html(uname);
		$(".pwd").html(pwd);
		$(".email").html(eamil);
		$(".dizhi").html(dizhi);
		
	});
$("#closed2").click(function(){
		$("#box2").css('display','none');
		$(".three").css('display','none');
		
	});
});
