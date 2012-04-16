//Initialization

// Get parameters from data-attributes
var params = document.getElementById('gpluswidget');

var id      = 	params.getAttribute('data-id'); 		//ID
var api     = 	params.getAttribute('data-key');		//API
var loops   = 	( params.getAttribute('data-posts') *1)-1;	//Nb Posts
var hll     =	params.getAttribute('data-lang');		//Language detection (yes:no)
var bkgcss  = 	params.getAttribute('data-bkg');		//Background
var padcss  = 	params.getAttribute('data-padding');	        //Padding
var borcss  = 	params.getAttribute('data-border');		//Border color
var radcss  = 	params.getAttribute('data-radius');		//Border radius
var txtcss  = 	params.getAttribute('data-txt');		//Color Text
var widthcss = 	params.getAttribute('data-width');		//Width widget
var lincss  = 	params.getAttribute('data-link');		//Color links
var fav     = 	params.getAttribute('data-favicon');	        //Favicons? (yes:no)
var heacss  = 	params.getAttribute('data-header');		//Header? (yes:no)
var gwicss  = 	params.getAttribute('data-footer');		//Footer? (yes:no)
var pagee   = 	params.getAttribute('data-page');		//Page? (yes:no)

var url = 'https://plus.google.com/'+id; //URL Creation
localStorage.setItem('loops', loops);

if(fav === 'no'){var favcss = 'none';}
if(gwicss === 'no'){var gwicss = 'none';}

//CSS

//headergplusw
var css ='#gpluswidget{font:15px Arial,sans-serif;margin:0}#gpluswidget a{text-decoration:none;color:inherit}#gpluswidget h3 a:hover{opacity:.5}#gpluswidget a:hover img{opacity:.8}#gpluswidget #headergplusw{width:inherit}#gpluswidget #headergplusw ul{display:inline-block;margin:0;padding:0;list-style:none;width:100%}#gpluswidget li#photo{width:68px;height:65px;display:inline-block}#gpluswidget #photo img{border-radius:3px;-webkit-border-radius:3px;-khtml-border-radius:3px;-moz-border-radius:3px}#gpluswidget li#head{width:auto;height:55px;display:inline-block;text-align:left;vertical-align:top;margin-left:4%;float:top}#gpluswidget #head span{display:block;text-align:center}#gpluswidget a img{border:0;outline:none}';

//Button
if(pagee === 'yes'){
css += '#gpluswidget #head a.btn {padding:6px 10px 6px;vertical-align:middle;color:#666;font-weight:bold;font-size:12px;text-shadow:0 1px 1px #fff;background:#f4f4f4;border-radius:2px;border:1px solid #dadada}#gpluswidget #head a.btn:hover{opacity:1;background:#eee;border:1px solid #dadada}';
}
else if(pagee === 'no'){
css += '#gpluswidget #head a.btn {padding:6px 10px 6px;vertical-align:middle;color:#fff;font-weight:bold;font-size:12px;text-shadow:0 1px 1px #333;background:#da4a38;border-radius:2px;border:1px solid #c63320}#gpluswidget #head a.btn:hover{opacity:1;background:#3a8c00;border:1px solid #398b00}';
}

//POSTS
css += "#gpluswidget .fav{vertical-align:middle;margin-right:6px;}#gpluswidget .fav img{width:16px;height:16px;display:inline-block;border-radius:2px;}#gpluswidget #purl{display:block;width:50px;height:50px;overflow:hidden;}#gpluswidget h3{font-weight:normal;padding-bottom:14px;margin:3px 0 0;line-height:16px;white-space:nowrap}#gpluswidget #circles{clear:both;display:block;text-align:center;border-bottom:1px solid #'+ borcss +';border-top:1px solid #'+ borcss +';padding:10px 0;font-weight:bold;font-size:12px;border-radius:2px;width:inherit}#gpluswidget #circles .jl{background: no-repeat url(https://ssl.gstatic.com/s2/oz/images/sprites/common-full-7fa547d7c6f0ca8f00d413cee02c8f39.png) 0 0;height:18px;width:18px;display:inline-block;float:right;opacity:0.35;margin-right:2%}#gpluswidget .plus{font-style: italic;font-weight: bold;font-size:13px;float:right;margin:-15px 3% 15px 0;}#gpluswidget .posts{margin:8px 1% 0 0;clear:both;width:inherit}#gpluswidget .posts p{font-size:13px}.po{text-align:justify}#gpluswidget .posts .datez{font-size:13px;opacity:0.45;color:inherit;}#gpluswidget .txt{font-weight:normal;}#gpluswidget .posts a span.grt:hover{text-decoration:underline}#gpluswidget .img{background: no-repeat url(//ssl.gstatic.com/s2/oz/images/sprites/common-full-7fa547d7c6f0ca8f00d413cee02c8f39.png) 0 -71px;height: 18px;width: 18px;display:inline-block;vertical-align:middle}";

//footergplusw
css += "#gpluswidget #footergplusw{clear:both;height:20px;display:block;margin-top:10px}#gpluswidget #footergplusw .goos{opacity:0.5;font-size:12px;margin-left:8px;vertical-align:top;}#gpluswidget #footergplusw .icon{display:inline-block;background:url(https://ssl.gstatic.com/s2/oz/images/favicon.ico) no-repeat 0 0;height:20px;width:20px;}#gpluswidget .rs{display:inline-block;margin-left:10px;background: url("//ssl.gstatic.com/s2/oz/images/sprites/common-98b7b593779b6822aeb9cb2209fb1fe3.png") transparent no-repeat -19px -58px;height:18px;width:18px;background-origin:padding-box;cursor:help;}.page{display:inline-block;margin-left:8px;background:url("//ssl.gstatic.com/s2/oz/images/pluspages/badge-1c1b02e972bf7766c5948b41765b41d9.png") transparent no-repeat 0 0;background-size: auto auto;height: 17px;width: 17px;cursor:help;}#gpluswidget .rs:hover{background: url("//ssl.gstatic.com/s2/oz/images/sprites/common-98b7b593779b6822aeb9cb2209fb1fe3.png") transparent no-repeat 0px -58px;}#gpluswidget .page:hover{background:url("//ssl.gstatic.com/s2/oz/images/pluspages/badge-1c1b02e972bf7766c5948b41765b41d9.png") transparent no-repeat -18px 0;}";

$("head").append('<style type="text/css" charset="utf-8">'+css+'</style>');

$(function()
{

//Languages Support
if (hll === 'yes') {
var language = window.navigator.userLanguage || window.navigator.language;//detection
var lang = language.split("-");
var lan = lang[0];
if (lan === 'fr'){
var addto = 'Ajouter aux cercles';
var view = 'voir ce post sur Google+';
var footxt = 'Rejoindre';
var footxt1 = 'sur';
var isg = ' est sur';
var tryg = 'Essayer Google+';
var zyear = '1 année';
var zyears = 'année';
var zmonth = '1 mois';
var zmonths = 'mois';
var zday = '1 jour';
var zdays = 'jours';
var zhour = '1 heure';
var zhours = 'heures';
var zminute = '1 minute';
var zminutes = 'minutes';
var zseconds = 'Maintenant';
var zprefix = 'Il y a';
var zprefixfrom = null;
var zsuffixago = null;
var zsuffixfrom = 'from now';
}
else if (lan === 'de'){
var addto = 'zu Kreisen hinzufügen';
var view = 'View this Post auf Google+';
var footxt = 'Join';
var footxt1 = 'on';
var isg = ' ist auf';
var tryg = 'Google+ Versuchen';
var zyear = '1 Jahr';
var zyears = 'Jahren';
var zmonth = '1 Monat';
var zmonths = 'Monaten';
var zday = '1 Tag';
var zdays = 'Tagen';
var zhour = '1 Stunde';
var zhours = 'Stunden';
var zminute = '1 Minute';
var zminutes = 'Minuten';
var zseconds = 'Jetzt';
var zprefix = 'Vor';
var zprefixfrom = null;
var zsuffixago = null;
var zsuffixfrom = 'from now';
}
else if (lan === 'pt'){
var addto = 'Adic. a círc.';
var view = 'visualizar esta post em Google+';
var footxt = 'Join';
var footxt1 = 'on';
var isg = ' está no';
var tryg = 'Experimentar o Google+';
var zyear = '1 ano';
var zyears = 'anos';
var zmonth = '1 mês';
var zmonths = 'meses';
var zday = '1 dia';
var zdays = 'dias';
var zhour = '1 hora';
var zhours = 'horas';
var zminute = '1 minuto';
var zminutes = 'minutos';
var zseconds = 'Agora';
var zprefix = null;
var zprefixfrom = null;
var zsuffixago = 'atrás';
var zsuffixfrom = 'from now';
}
else if (lan === 'es'){
var addto = 'Añadir a círculos';
var view = 'ver este post en Google+';
var footxt = 'Join';
var footxt1 = 'on';
var isg = ' está en';
var tryg = 'Pruebe Google+';
var zyear = '1 año';
var zyears = 'años';
var zmonth = '1 mes';
var zmonths = 'meses';
var zday = '1 día';
var zdays = 'días';
var zhour = '1 hora';
var zhours = 'horas';
var zminute = '1 minuto';
var zminutes = 'minutos';
var zseconds = 'Ahora';
var zprefix = 'Hace';
var zprefixfrom = null;
var zsuffixago = null;
var zsuffixfrom = 'from now';
}
else if (lan === 'it'){
var addto = 'Aggiungi alle cerchie';
var view = 'vista questo post su Google+';
var footxt = 'Join';
var footxt1 = 'on';
var isg = ' è su';
var tryg = 'Provare Google+';
var zyear = '1 anno';
var zyears = 'anni';
var zmonth = '1 mese';
var zmonths = 'mesi';
var zday = '1 giorno';
var zdays = 'giorni';
var zhour = '1 ora';
var zhours = 'ore';
var zminute = '1 minuto';
var zminutes = 'minuti';
var zseconds = 'Ora';
var zprefix = null;
var zprefixfrom = null;
var zsuffixago = 'fa';
var zsuffixfrom = 'from now';
}
else if (lan === 'ru'){
var addto = 'Добавить в круги';
var view = 'Посмотреть эту почту на Google+';
var footxt = 'Присоединяйтесь к';
var footxt1 = 'на';
var isg = ' Джон на';
var tryg = 'Попробуйте Google+';
var zyear = '1 год';
var zyears = 'лет';
var zmonth = '1 месяц';
var zmonths = 'месяцев';
var zday = '1 день';
var zdays = 'дней';
var zhour = '1 час';
var zhours = 'часов';
var zminute = '1 минута';
var zminutes = 'минут';
var zseconds = 'Cейчас';
var zprefix = null;
var zprefixfrom = null;
var zsuffixago = 'назад';
var zsuffixfrom = 'from now';
}
else if (lan === 'zh'){
var addto = '添加到圈子';
var view = '查看这篇文章';
var footxt = 'Join';
var footxt1 = 'on';
var isg = ' 上';
var tryg = 'Try Google+';
var zyear = 'A year';
var zyears = 'years';
var zmonth = 'A month';
var zmonths = 'months';
var zday = 'A day';
var zdays = 'days';
var zhour = 'An hour';
var zhours = 'hours';
var zminute = 'A minute';
var zminutes = 'minutes';
var zseconds = 'Now';
var zprefix = null;
var zprefixfrom = null;
var zsuffixago = 'ago';
var zsuffixfrom = 'from now';
}
else if (lan === 'ja'){
var addto = 'サークルに追加';
var view = 'Google+でこのポストを参照してください';
var footxt = 'Join';
var footxt1 = 'on';
var isg = ' is on';
var tryg = 'Google+を試してください';
var zyear = 'A year';
var zyears = 'years';
var zmonth = 'A month';
var zmonths = 'months';
var zday = 'A day';
var zdays = 'days';
var zhour = 'An hour';
var zhours = 'hours';
var zminute = 'A minute';
var zminutes = 'minutes';
var zseconds = 'Now';
var zprefix = null;
var zprefixfrom = null;
var zsuffixago = 'ago';
var zsuffixfrom = 'from now';
}
else if (lan === 'el'){
var addto = 'Προσθήκη σε κύκλους';
var view = 'Δείτε αυτό το μήνυμα στο';
var footxt = 'Join';
var footxt1 = 'on';
var isg = ' είναι στο';
var tryg = 'Δοκιμάστε το Google+';
var zyear = 'A year';
var zyears = 'years';
var zmonth = 'A month';
var zmonths = 'months';
var zday = 'A day';
var zdays = 'days';
var zhour = 'An hour';
var zhours = 'hours';
var zminute = 'A minute';
var zminutes = 'minutes';
var zseconds = 'Now';
var zprefix = null;
var zprefixfrom = null;
var zsuffixago = 'ago';
var zsuffixfrom = 'from now';
}
else if (lan === 'ar'){
var addto = 'إضافة إلى دوائر';
var view = 'Google+ عرض هذا الموضوع في';
var footxt = 'Join';
var footxt1 = 'on';
var isg = ' على';
var tryg = 'Google+ محاولة';
var zyear = 'A year';
var zyears = 'years';
var zmonth = 'A month';
var zmonths = 'months';
var zday = 'A day';
var zdays = 'days';
var zhour = 'An hour';
var zhours = 'hours';
var zminute = 'A minute';
var zminutes = 'minutes';
var zseconds = 'Now';
var zprefix = null;
var zprefixfrom = null;
var zsuffixago = 'ago';
var zsuffixfrom = 'from now';
}
else {
var addto = 'Add to circles';
var view = 'view this post on Google+';
var footxt = 'Join';
var footxt1 = 'on';
var isg = ' is on';
var tryg = 'Try Google+';
var zyear = 'A year';
var zyears = 'years';
var zmonth = 'A month';
var zmonths = 'months';
var zday = 'A day';
var zdays = 'days';
var zhour = 'An hour';
var zhours = 'hours';
var zminute = 'A minute';
var zminutes = 'minutes';
var zseconds = 'Now';
var zprefix = null;
var zprefixfrom = null;
var zsuffixago = 'ago';
var zsuffixfrom = 'from now';
}

}//#if language checked
//if not
else{
var lan = 'en';
var addto = 'Add to circles';
var view = 'view this post on Google+';
var footxt = 'Join';
var footxt1 = 'on';
var isg = ' is on';
var tryg = 'Try Google+';
var zyear = 'A year';
var zyears = 'years';
var zmonth = 'A month';
var zmonths = 'months';
var zday = 'A day';
var zdays = 'days';
var zhour = 'An hour';
var zhours = 'hours';
var zminute = 'A minute';
var zminutes = 'minutes';
var zseconds = 'Now';
var zprefix = null;
var zprefixfrom = null;
var zsuffixago = 'ago';
var zsuffixfrom = 'from now';
}

//Time Ago
(function(d){d.timeago=function(g){if(g instanceof Date){return a(g)}else{if(typeof g==="string"){return a(d.timeago.parse(g))}else{return a(d.timeago.datetime(g))}}};var f=d.timeago;d.extend(d.timeago,{settings:{refreshMillis:60000,allowFuture:false,strings:{prefixAgo:zprefix,prefixFromNow:zprefixfrom,suffixAgo:zsuffixago,suffixFromNow:zsuffixfrom,seconds:zseconds,minute:zminute,minutes:"%d " + zminutes,hour:zhour,hours:"%d "+ zhours,day:zday,days:"%d "+zdays,month:zmonth,months:"%d "+ zmonths,year:zyear,years:"%d "+ zyears,numbers:[]}},inWords:function(l){var m=this.settings.strings;var i=m.prefixAgo;var q=m.suffixAgo;if(this.settings.allowFuture){if(l<0){i=m.prefixFromNow;q=m.suffixFromNow}l=Math.abs(l)}var o=l/1000;var g=o/60;var n=g/60;var p=n/24;var j=p/365;function h(r,t){var s=d.isFunction(r)?r(t,l):r;var u=(m.numbers&&m.numbers[t])||t;return s.replace(/%d/i,u)}var k=o<45&&h(m.seconds,Math.round(o))||o<90&&h(m.minute,1)||g<45&&h(m.minutes,Math.round(g))||g<90&&h(m.hour,1)||n<24&&h(m.hours,Math.round(n))||n<48&&h(m.day,1)||p<30&&h(m.days,Math.floor(p))||p<60&&h(m.month,1)||p<365&&h(m.months,Math.floor(p/30))||j<2&&h(m.year,1)||h(m.years,Math.floor(j));return d.trim([i,k,q].join(" "))},parse:function(h){var g=d.trim(h);g=g.replace(/\.\d\d\d+/,"");g=g.replace(/-/,"/").replace(/-/,"/");g=g.replace(/T/," ").replace(/Z/," UTC");g=g.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");return new Date(g)},datetime:function(h){var i=d(h).get(0).tagName.toLowerCase()==="time";var g=i?d(h).attr("datetime"):d(h).attr("title");return f.parse(g)}});d.fn.timeago=function(){var h=this;h.each(c);var g=f.settings;if(g.refreshMillis>0){setInterval(function(){h.each(c)},g.refreshMillis)}return h};function c(){var g=b(this);if(!isNaN(g.datetime)){d(this).text(a(g.datetime))}return this}function b(g){g=d(g);if(!g.data("timeago")){g.data("timeago",{datetime:f.datetime(g)});var h=d.trim(g.text());if(h.length>0){g.attr("title",h)}}return g.data("timeago")}function a(g){return f.inWords(e(g))}function e(g){return(new Date().getTime()-g.getTime())}document.createElement("abbr");document.createElement("time")}(jQuery));


//headergplusw?

if (heacss !== 'yes'){
$('#headergplusw').css('display','none');
}

//Get Name & Photo
$.ajax({
type: 'GET',
url: 'https://www.googleapis.com/plus/v1/people/' + id + '?fields=displayName%2Cimage&pp=1&key=' + api, 
dataType: 'jsonp',
success: function(a, textStatus)
{

if (a.image!=undefined){

var name = $.trim(a.displayName);//name
var namelen = name.length;
var namesep = name.split(" ");
var fname = namesep[0];//first name
var lname = namesep[1];//last name
$('#name').append(name);
$('#name').attr('title', name + isg + ' Google+');
$('a.btn').append(addto);

//Picture
var src = '<img width="50" height="50" src="' + $.trim(a.image['url']) +'" alt="' + name + '">';
$('#purl').append(src);
$('#purl').attr('title', name);

var widh3 = $('h3').width();
var widcontrol = widthcss - (2 * padcss) - 68;
var ftsi = ( widcontrol/namelen)*1.5;
if(widh3 >= widcontrol) {$('h3').css({'font-size' : ftsi, 'font-weight' : 'bolder'});}

if (gwicss === 'yes'){
$('#wrapper').append('<div id="footergplusw" class="gg"><a class="icon" href="http://gplusapi.appspot.com/" target="_blank" title="Get the Google+ widget"></a><a class="goos" title="' + tryg + '" href="https://plus.google.com/" target="_blank">' + footxt + ' ' + fname + ' ' + footxt1 + ' Google+</a></div>');
if (loops>0){$('#footergplusw').css({'border-top':'1px solid #'+borcss,'padding-top':'10px','margin-top':'6px'});}
}else{$('#wrapper').append('');}

}

//////////////////////////////////////////////////////////////////////////API limit exceeded
else if (a.image==undefined){

$.ajax({
type: 'GET',
url: 'http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22https%3A%2F%2Fplus.google.com%2F'+id+'%2Fposts%22%20AND%20xpath%3D%22%2F%2Fdiv%5B%40class%3D\'id pb g-hh\'%5D%22&format=json&callback?', 
dataType: 'jsonp',
success: function(a, textStatus)
{
	var name = a.query.results.div.span.content;//name
	var namelen = name.length;
	var fname = name.split(" ");
	var fname = fname[0];//first name
	var lname = fname[1];//last name
	$('#name').append(name);
	$('#name').attr('title', 'Visit '+name+'\'s profile');
	$('a.btn').attr('title', 'Add '+name+' to your circles');
	$('a.btn').append(addto);
var widh3 = $('h3').width();
var widcontrol = widthcss - (2 * padcss) - 68;
var ftsi = ( widcontrol/namelen)*1.5;
if(widh3 >= widcontrol) {$('h3').css({'font-size' : ftsi, 'font-weight' : 'bolder'});}

if (gwicss === 'yes'){
$('#wrapper').append('<div id="footergplusw" class="gg"><a class="icon" href="http://gplusapi.appspot.com/" target="_blank" title="Get the Google+ widget"></a><a class="goos" title="' + tryg + '" href="https://plus.google.com/" target="_blank">' + footxt + ' ' + fname + ' ' + footxt1 + ' Google+</a></div>');
if (loops>0){$('#footergplusw').css({'border-top':'1px solid #'+borcss,'padding-top':'10px','margin-top':'6px'});}
}else{$('#wrapper').append('');}

}});

$('.posts').css('display','none');$('#wrapper').append('<p>Sorry, Google+ API limit exceeded.</p><p>Ensure to generate your own <a href="https://code.google.com/apis/console#access" target="_blank" style="color:#36c">API key [?]</a>.</p>')

//Get Network
$.ajax({
type: 'GET',
url: 'http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22https%3A%2F%2Fplus.google.com%2F'+id+'%2Fposts?hl=' + lan +'%22%20AND%20xpath%3D%22%2F%2Fdiv%5B%40class%3D\'g-Em jD\'%5D%22&format=json&callback?',
dataType: 'jsonp',
success: function(p, textStatus)
{

//Photo
var src = p.query.results.div.div[0].div.div.div.div.img.src;//photo
var src = src.replace("sz=200", "sz=50");
var name = localStorage.getItem('name');
var src = '<img height="50" width="50" src="https:'+src+'" alt="'+name+'">';
$('#purl').append(src);
$('#purl').attr('title', ''+name+'');

}});

}//////////////////////////////////////////////////////////////////////////////////////////No API



}});

//FEEDS LOOP
var height = [];
var i=0;
if(loops >=0){

$.ajax({
type: 'GET',
url: 'https://www.googleapis.com/plus/v1/people/' + id + '/activities/public?key=' + api, 
dataType: 'jsonp',
success: function(h, textStatus)
{

var loops = localStorage.getItem('loops');
var items = h.items;
var countitems = 0;
for(Object in items) countitems++;
if(items <= loops){var loops = items-1;}
else{var loops = loops;}

for (i=0;i<=loops;i++){
//Date of publication
var datez = ($.timeago($.trim(h.items[i].published)))+' &ndash; '; 
//URL Post
var url = $.trim(h.items[i].object.url);
//Content Post
var txt = $.trim(h.items[i].object.content);
if (txt != ''){var txt = txt;}
else{var txt = $.trim(h.items[i].object.attachments[0].content);}
var txt = txt.replace(/(?:<b>|<em>|<u>|<\/b>|<\/u>|<\/em>|<\/span>|<i>|<\/i>)/g, '');
var txt = txt.replace(/(?:<br \/>)/g, ' ');
var txt = txt.replace(/(?:<br \/><br \/>)/g, ' ');
var txt = txt.replace('class="proflinkWrapper"><span class="proflinkPrefix">', ' ');
var txt = txt.replace('  ', ' ');
var txt = txt.replace('a href="', 'a class="httlink" target="_blank" href=" ');
var lentxt = txt.length;
if(txt.indexOf('a target="_blank"') !== -1 && lentxt>160){var txt = txt.substring(0, 190)+' ...';}
else if(txt.indexOf('a target="_blank"') == -1 && lentxt>160){var txt = txt.substring(0, 160)+' ...';}
else{var txt = txt;}

//Any attachment?
var attach = $.trim(h.items[i].object.attachments);

if(attach != ''){
//Type of Attachment
var type =$.trim(h.items[i].object.attachments[0].objectType);
//Img
if(type==='article' || type==='video')
{
var title = $.trim(h.items[i].object.attachments[0].content);
var what = $.trim(h.items[i].object.attachments[0].objectType);
var urla =$.trim(h.items[i].object.attachments[0].url);
var site = urla.split("://");
var http = site[0];
var site= site[1];
var site = site.split("/");
var site = site[0];
var type = type.toLowerCase().replace(/\b[a-z]/g, function(letter) {return letter.toUpperCase();});
var site ='https://s2.googleusercontent.com/s2/favicons?domain='+site;
var fav = '<a href="'+urla+'" title="'+type+' | '+title+'" target="_blank" rel="nofollow"><img src="'+site+'" width="16" height="16" alt="" \/></a>';
}
else if(type ==='photo')
{
var title = $.trim(h.items[i].object.attachments[0].content);
var what = $.trim(h.items[i].object.attachments[0].objectType);
var urla =$.trim(h.items[i].object.attachments[0].url);
var type = type.toLowerCase().replace(/\b[a-z]/g, function(letter) {return letter.toUpperCase();});
var fav = '<a href="'+urla+'" title="'+type+' | '+title+'" target="_blank" rel="nofollow"><span class="img"></span></a>';
}
else if(type ==='photo-album')
{
var title = $.trim(h.items[i].object.attachments[0].displayName);
var what = $.trim(h.items[i].object.attachments[0].objectType);
var urla =$.trim(h.items[i].object.attachments[0].url);
var type = type.toLowerCase().replace(/\b[a-z]/g, function(letter) {return letter.toUpperCase();});
var fav = '<a href="'+urla+'" title="'+type+' | '+title+'" target="_blank" rel="nofollow"><span class="img"></span></a>';
}

}//#attachment
else{var fav = '';}//no attachment


//Plus1
var plus = $.trim(h.items[i].object.plusoners.totalItems);
if(plus==0){var plus='';}else{var plus='+'+plus;$('.plus').attr('title', 'people +1\'d this');}

$('.posts').append('<p><span class=\"datez\">'+datez+'</span><span class=\"fav\">'+fav+'</span><a href="'+url+'" target="_blank" title="'+ view + '"><span class=\"po\">'+txt+'</span></p></a><a class=\"plus linkc\" href=\"'+url+'\" target=\"_blank\"><span>'+plus+'</span></a>');
$(".fav").css("display", favcss);
$(".gwi").css("display", gwicss);
$('.linkc,.httlink').css('color','#' +lincss);


}//#loop


}});

}//end if

//Get Network
$.ajax({
type: 'GET',
url: 'http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22https%3A%2F%2Fplus.google.com%2F'+id+'%2Fposts?hl='+ lan +'%22%20AND%20xpath%3D%22%2F%2Fdiv%5B%40class%3D\'YleYsd\'%5D%22&format=json&callback?',
dataType: 'jsonp',
success: function(b, textStatus)
{
//social network

if (b.query.results != null){
var ifinci0 = b.query.results.div.div.div;
var countinc0 = 0;
for(Object in ifinci0) countinc0++;

if (countinc0 == 0){
//$('.btn').css('margin-left','-23px');
var fol = $.trim(b.query.results.div.div[1].h4.content);$('#circles').append(fol);
}

else if (countinc0 == 4){

$('.btn').css('margin-left','-23px');
var fol = $.trim(b.query.results.div.div.h4.content);$('#circles').append(fol);

}
}

else{var inci = '';var fol = '';$('#circles,.jl').css('display','none');}

}});

});

// Generate Widget
$('#gpluswidget').append('<div style="width:'+ widthcss +'px;"><div id="wrapper" style="background-color:#'+ bkgcss +';border:1px solid #'+ borcss +';border-radius:'+ radcss +'px;padding:'+ padcss +'px;color:#'+ txtcss +';"><div id="headergplusw"><ul><li id="photo"><a id="purl" href="'+ url +'" target="_blank"></a></li><li id="head"><h3><a id="name" style="color:inherit;text-decoration:none" href="'+ url +'" target="_blank"></a></h3><span><a class="btn" href="'+ url +'" target="_blank"></a></span></li></ul><div id="circles"><span class="jl"></span></div></div><div class="posts"></div></div></div>');
