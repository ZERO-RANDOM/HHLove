var num = 1;
		setInterval(function() {
			var len = 7;//显示的长度
			num = parseInt(num, 10) + 1;
			num = num.toString();
			while(num.length < len) {
				num = '0' + num;
			}
			document.getElementById('show').innerHTML = num;
}, 2000);
$("document").ready(function() {
	$(".address").click(function () {
		$(".address2").css('display','block');
	});
	$(".wu").click(function () {
		var text=$(this).html();
		$(".address").html(text);
		$(".address2").css('display','none');
	});
	$(".prices").click(function () {
		$(".prices2").css('display','block');
	});
	$(".ph").click(function () {
		var text=$(this).html();
		$(".prices").html(text);
		$(".prices2").css('display','none');
	});
	$(".guimo").click(function () {
		$(".guimo2").css('display','block');
	});
	$(".ggm").click(function () {
		var text=$(this).html();
		$(".guimo").html(text);
		$(".guimo2").css('display','none');
	});
	$("#chaxun").click(function () {
		$(".layoutnew").css('display','block');
		$("#box3").css('display','block');
	});
	$("#colsenew").click(function () {
		$(".layoutnew").css('display','none');
		$("#box3").css('display','none');
	});
	
});		
