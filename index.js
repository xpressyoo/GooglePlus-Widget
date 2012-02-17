//Widget type
$('#which').live('click', function() {
var widgett = $("#which").val();console.log(widgett);
if (widgett === '2'){
$("#selgpages").css('display','none');
$("#selgpeople").empty();
$("#selgpeople").css('display','block');
$("#selgpeople").append('<iframe src="http://api.xpressyoo.com/widget.php?pid=111297306144520956414&nbp=3&bkg=fff&bor=eee&txt=0c0c0c&lin=36c&pad=13&rad=0&wid=290&fav=yes&hea=yes&gwi=yes&pag=no&api=AIzaSyDPjdO8VEkTOe1G2uNrasRF9d-9yAEN5DE" frameborder="0" scrolling="no" allowtransparency="true" height="500" width="316"></iframe>');
}
else {
$("#selgpeople").css('display','none');
$("#selgpages").empty();
$("#selgpages").css('display','block');
$("#selgpages").append('<iframe src="http://api.xpressyoo.com/widget.php?pid=111072607476419622963&nbp=3&bkg=fff&bor=eee&txt=0c0c0c&lin=36c&pad=13&rad=0&wid=290&fav=yes&hea=yes&gwi=yes&pag=yes&api=AIzaSyDPjdO8VEkTOe1G2uNrasRF9d-9yAEN5DE" frameborder="0" scrolling="no" allowtransparency="true" height="500" width="316"></iframe>');
}
});

$('.tooltip').mouseover(function(){
            $(this).children('span').show();
          }).mouseout(function(){
            $(this).children('span').hide();
          })
$("input").focus(function() {
$(this).val('');
});
//textarea
$("#pid").focus(function() {$("#pid").css("background","#ffb4b4");$("#err1").empty();$("#err1").append('Enter your PID&nbsp; <a href="#" class="tooltip" id="pidp">?<span>Click on the \'profile\' tab to view your own profile. Look at the URL in the address bar and copy the long numerical string in the URL before \'/posts\'.</span></a>');});

$("#api").focus(function() {$("#api").css("background","#ffb4b4");$("#err3").empty();$("#err3").append('<a href=\"https://code.google.com/apis/console#access\" target=\"_blank\" rel=\"nofollow\">Get your API here</a>&nbsp; <a href="#" class="tooltip">?<span>To Get your Google+ API key: follow the link, then login and click \"Create Project\". Under service list, click "off" button next to "Google+ API" to turn it on. Accept the agreement. From the left menu, go to "API Access" and copy your API key.</span></a><p class="sma"><span class="tip">To Get your Google+ API key: <a href=\"https://code.google.com/apis/console#access\" target=\"_blank\" rel=\"nofollow\">follow this link</a>, then login and click \"Create Project\". Under service list, click "off" button next to "Google+ API" to turn it on. Accept the agreement. From the left menu, go to "API Access" and copy your API key.</span></p>');});

$("input").keyup(function () {
var pid = $("#pid").val();
var hll = $("#hll").val();
var nbp = $("#nbp").val();
var bkg = $("#bkg").val();
var txt = $("#txt").val();
var lin = $("#lin").val();
var bor = $("#bor").val();
var rad = $("#rad").val();
var pad = $("#pad").val();
var wid = $("#wid").val();
var fav = $("#fav").val();
var hea = $("#hea").val();
var gwi = $("#gwi").val();
var api = $("#api").val();
var pag = $("#pag").val();
if(bkg.indexOf("#") == 0 ){$("#bkg").css("background","#ffb4b4");$("#e0").show();}
if(bkg.indexOf("#") != 0 ){$("#bkg").css("background","#fff");$("#e0").hide();}
if(bor.indexOf("#") == 0 ){$("#bor").css("background","#ffb4b4");$("#e1").show();}
if(bor.indexOf("#") != 0 ){$("#bor").css("background","#fff");$("#e1").hide();}
if(txt.indexOf("#") == 0 ){$("#txt").css("background","#ffb4b4");$("#e2").show();}
if(txt.indexOf("#") != 0 ){$("#txt").css("background","#fff");$("#e2").hide();}
if(lin.indexOf("#") == 0 ){$("#lin").css("background","#ffb4b4");$("#e3").show();}
if(lin.indexOf("#") != 0 ){$("#lin").css("background","#fff");$("#e3").hide();}

if(pid.length != 21){$("#pid").css("background","#ffb4b4");$("#err1").empty();$("#err1").append('PID not valid yet&nbsp; <a href="#" class="tooltip" id="pidp">?<span>Click on the \'profile\' tab to view your own profile. Look at the URL in the address bar and copy the long numerical string in the URL before \'/posts\'.</span></a>');}
else{$("#err1").empty();$("#err1").append('This is a valid PID&nbsp; <a href="#" class="tooltip" id="pidp">?<span>Click on the \'profile\' tab to view your own profile. Look at the URL in the address bar and copy the long numerical string in the URL before \'/posts\'.</span></a>');$("#pid").css("background","#c0ffc0");}

if(api.length != 39){var api = 'AIzaSyC3Fos8rWwIPqoGWXOPLv5uABcHirt_suo';$("#api").css("background","#ffb4b4");$("#err3").empty();$("#err3").append('<a href=\"https://code.google.com/apis/console#access\" target=\"_blank\" rel=\"nofollow\">API not valid yet</a>&nbsp; <a href="#" class="tooltip">?<span>To Get your Google+ API key: follow the link, then login and click \"Create Project\". Under service list, click "off" button next to "Google+ API" to turn it on. Accept the agreement. From the left menu, go to "API Access" and copy your API key.</span></a>');}
else{$("#err3").empty();$("#err3").append('This is a valid API&nbsp; <a href="#" class="tooltip">?<span>Congrats, this API is valid.</span></a>');$("#api").css("background","#c0ffc0");}

if(pag ==='yes'){
var page = '<!-- Place this tag in the <head> of your document-->\n<link href="https://plus.google.com/'+ pid+ '" rel="publisher"/>\n<!--Place this tag where you want the widget to render-->\n';
$("#result").css('height','180px');
}
else{var page ='<!--Place this tag where you want the widget to render-->\n';$("#result").css('height','130px');}


var code = page + "<script type=\"text/javascript\">pid='"+pid+"';nbp='"+nbp+"';hll='"+hll+"';bkg='"+bkg+"';txt='"+txt+"';lin='"+lin+"';bor='"+bor+"';rad='"+rad+"';pad='"+pad+"';wid='"+wid+"';fav='"+fav+"';hea='"+hea+"';gwi='"+gwi+"';pag='"+pag+"';api='"+api+"';<\/script><script type=\"text/javascript\" src=\"http://gplusapi.appspot.com/a.js\"><\/script>";
$("#result").val(code);
}).keyup();
if($("#pid").val() == ''){$("#pid").css("background","#ffb4b4");}
//show
$("#show").click(function() {
var pid = $("#pid").val();
var nbp = $("#nbp").val();
var hll = $("#hll").val();
var bkg = $("#bkg").val();
var txt = $("#txt").val();
var lin = $("#lin").val();
var bor = $("#bor").val();
var rad = $("#rad").val();
var pad = $("#pad").val();
var wid = $("#wid").val();
var fav = $("#fav").val();
var hea = $("#hea").val();
var gwi = $("#gwi").val();
var pag = $("#pag").val();
var api = $("#api").val();
if(hea==''){var hea='yes';}
if(api==''){var api='AIzaSyC3Fos8rWwIPqoGWXOPLv5uABcHirt_suo';}
var height = ((nbp*((290/wid)*90))+(pad*2))+135;
$("#widget0").css('display','none');
$("#widget1").css('height',height);
$("#widget1").empty();
$("#widget1").append("<iframe src='http://api.xpressyoo.com/widget.php?pid="+pid+"&nbp="+nbp+"&hll="+hll+"&bkg="+bkg+"&bor="+bor+"&txt="+txt+"&lin="+lin+"&pad="+pad+"&rad="+rad+"&wid="+wid+"&fav="+fav+"&hea="+hea+"&gwi="+gwi+"&pag="+pag+"&api="+api+"' frameborder='0' allowtransparency='true' scrolling='no' height='"+height+"' width='"+wid+"'></iframe>");
});
$("textarea").focus(function() {$('#result').select();});
//////////
$(document).ready(function() {
$('#aa').addClass("selected");
$('#form').addClass("displayed");
});
$("#home").click(function() {
$('.selected').removeClass("selected");
$('#aa').addClass("selected");
$('.displayed').addClass("hidden");
$('.displayed').removeClass("displayed");
$('#form').addClass("displayed");
$('#form').removeClass("hidden");
});
$("#more").click(function() {
$('#aa').removeClass("selected");
$('#ab').addClass("selected");
$('#form').addClass("hidden");
$('#form').removeClass("displayed");
$('#about').addClass("displayed");
$('#about').removeClass("hidden");
});
$("#aa").click(function() {
$('.selected').removeClass("selected");
$('#aa').addClass("selected");
$('.displayed').addClass("hidden");
$('.displayed').removeClass("displayed");
$('#form').addClass("displayed");
$('#form').removeClass("hidden");
});
$("#ab").click(function() {
$('.selected').removeClass("selected");
$('#ab').addClass("selected");
$('.displayed').addClass("hidden");
$('.displayed').removeClass("displayed");
$('#about').addClass("displayed");
$('#about').removeClass("hidden");
});
$("#fabout").click(function() {
$('#ab').removeClass("selected");
$('#fe').addClass("selected");
$('#about').addClass("hidden");
$('#about').removeClass("displayed");
$('#feedbacks').addClass("displayed");
$('#feedbacks').removeClass("hidden");
});
$("#fe").click(function() {
$('.selected').removeClass("selected");
$('#fe').addClass("selected");
$('.displayed').addClass("hidden");
$('.displayed').removeClass("displayed");
$('#feedbacks').addClass("displayed");
$('#feedbacks').removeClass("hidden");
});
$("#pp").click(function() {
$('.selected').removeClass("selected");
$('#pp').addClass("selected");
$('.displayed').addClass("hidden");
$('.displayed').removeClass("displayed");
$('#privacy').addClass("displayed");
$('#privacy').removeClass("hidden");
});
$("#lo").click(function() {
$('.selected').removeClass("selected");
$('#lo').addClass("selected");
$('.displayed').addClass("hidden");
$('.displayed').removeClass("displayed");
$('#logs').addClass("displayed");
$('#logs').removeClass("hidden");
});
$("#do,#do2").click(function() {
$('.selected').removeClass("selected");
$('#do').addClass("selected");
$('.displayed').addClass("hidden");
$('.displayed').removeClass("displayed");
$('#paypal').addClass("displayed");
$('#paypal').removeClass("hidden");
$('#over-quota').hide('fast');
});
$("#over-quota,#close-quota").click(function() {
$('#over-quota').hide('fast');
});
/////
(function(){var aa=document.createElement("script");aa.type="text/javascript";aa.async=true;aa.src="https://apis.google.com/js/plusone.js";var bb=document.getElementsByTagName("script")[0];bb.parentNode.insertBefore(aa,bb)})();(function(){var c=document.createElement("script");c.type="text/javascript";c.src="feedbacks.js";var bc=document.getElementsByTagName("script")[0];bc.parentNode.insertBefore(c,bc)})();var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-25744884-1"]);_gaq.push(["_trackPageview"]);(function(){var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})();
