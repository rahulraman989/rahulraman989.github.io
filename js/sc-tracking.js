var trkint;
var ga;
var gaCliendId;
var trkSessId;
var ub;

!function(){function t(){var t=0,e=0;this.output="",this.readByte=function(r){return"string"==typeof r&&(r=r.charCodeAt(0)),0>t?e|=r>>-t:e=r<<t&248,t>3?(t-=8,1):(4>t&&(this.output+=i[e>>3],t+=5),0)},this.finish=function(r){var n=this.output+(0>t?i[e>>3]:"")+(r?"$":"");return this.output="",n}}function e(){var t=0,e=0;this.output="",this.readChar=function(r){"string"!=typeof r&&"number"==typeof r&&(r=String.fromCharCode(r)),r=r.toLowerCase();var n=s()[r];"undefined"!=typeof n&&(n<<=3,e|=n>>>t,t+=5,t>=8&&(this.output+=String.fromCharCode(e),t-=8,e=t>0?n<<5-t&255:0))},this.finish=function(e){var r=this.output+(0>t?i[bits>>3]:"")+(e?"$":"");return this.output="",r}}function r(e){var r=new t,n=r.update(e,!0);return n}function n(t){var r=new e,n=r.update(t,!0);return n}function u(t,e){"undefined"==typeof f&&(f=require("crypto"));var n=f.createHash("sha1");if(n.digest=function(t){return function(){return r(t.call(this,"binary"))}}(n.digest),e){if("string"==typeof t||Buffer.isBuffer(t))try{return e(null,u(t))}catch(i){return e(i,null)}return t.on("data",function(t){n.update(t)}),void t.on("end",function(){e(null,n.digest())})}return t?n.update(t).digest():n}var i="0123456789abcdefghjkmnpqrtuvwxyz",o={o:0,i:1,l:1,s:5},s=function(){for(var t={},e=0;e<i.length;e++)t[i[e]]=e;for(var r in o)o.hasOwnProperty(r)&&(t[r]=t[""+o[r]]);return s=function(){return t},t};t.prototype.update=function(t,e){for(var r=0;r<t.length;)r+=this.readByte(t[r]);var n=this.output;return this.output="",e&&(n+=this.finish()),n},e.prototype.update=function(t,e){for(var r=0;r<t.length;r++)this.readChar(t[r]);var n=this.output;return this.output="",e&&(n+=this.finish()),n};var f,a;u.file=function(t,e){return"-"==t?(process.stdin.resume(),u(process.stdin,e)):("undefined"==typeof a&&(a=require("fs")),a.stat(t,function(r,n){return r?e(r,null):n.isDirectory()?e({dir:!0,message:"Is a directory"}):u(require("fs").createReadStream(t),e)}))};var d={Decoder:e,Encoder:t,encode:r,decode:n,sha1:u};"undefined"!=typeof window&&(window.base32=d),"undefined"!=typeof module&&module.exports&&(module.exports=d)}();

navigator.getAgent= (function(){
    var N= navigator.appName, ua= navigator.userAgent, tem;
    var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
	
	if(M[0] == 'Firefox'){
		return 'f';
		}
	else if(M[0] == 'Chrome'){
		return 'c';
		}
	else if(M[0] == 'MSIE'){
		return 'i';
		}
	else if(M[0] == 'Safari'){
		return 's';
		}
	else{
		return 'o';
		}
	})();

function getSegment(){
	var s = String(document.location).split('/')[4];
	if(s == 'priority'){
		return 'pr';
		}
	else if(s == 'private'){
		return 'pv';
		}
	else if(s == 'sme'){
		return 's';
		}
	else if(s == 'saadiq'){
		return 'sq';
		}
	else if(s == 'staff'){
		return 'sf';
		}
	else{
		return 'ps';
		}
	}
function getUrlParams(){
	var l = String(document.location);
	if(l.indexOf('#') > -1){
		return l.split('#')[1];
		}
	else{
		if(l.indexOf('?') > -1){
			return l.split('?')[1];
			}
		else{
			return '';
			}
		}
	}
function getUrlParamVal(p) {
    var sPageURL = String(document.location).split('?')[1];
	if(sPageURL == undefined){
		return '';
		}
	sURLVariables = sPageURL.split('&')
	var sParameterName, i;
	for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === p) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        	}
    	}
	}
function uniqId() {
  function uid() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return uid() + uid() + '-' + uid() + '-' + uid() + '-' + uid() + '-' + uid() + uid() + uid();
}
function appendUbToBtn(){
	if($.cookie('_ub')){
		ubparam = '&_ub='+$.cookie('_ub');
		}
	else{
		ubparam = '';
		}
	//alert(ubparam)
	$('a[href]').each(function () {
		if($(this).html().toLowerCase()==="apply now"){
		  var old_href_value= $(this).attr('href');
		  var link_has_querystring = old_href_value.indexOf("?");
		  if(link_has_querystring!==-1){
			$(this).attr('href',old_href_value +'&' + window.location.search.substr(1)+ubparam);
		  }else{
			$(this).attr('href',old_href_value+"?"+window.location.search.substr(1)+ubparam);
		  }
		}
	  });
	}
$('a').live('mousedown', function(e){
	//alert($(this).text().trim())
	var lgitem = new Object();
	lgitem._ac = 'cl';
	lgitem._el = $(this).attr('id');
	lgitem._tg = $(this).attr('href');
	
	var lgitemstr = JSON.stringify(lgitem);
	ub._lg.push(lgitemstr);
	
	$.cookie('_ub', JSON.stringify(ub), { expires: 7, path: '/' });
	appendUbToBtn();
	sendClickEventCall('track_element', 'user_behaviour', JSON.stringify(ub), 0);
	});
function insertPageUnloadTrk(){
	var lgitem = new Object();
	lgitem._ac = 'ul';
	
	var lgitemstr = JSON.stringify(lgitem);
	ub._lg.push(lgitemstr);
	
	$.cookie('_ub', JSON.stringify(ub), { expires: 7, path: '/' });
	sendClickEventCall('page_unload', 'user_behaviour', JSON.stringify(ub), 0);
	}
function insertPageLoadTrk(){
	var lgitem = new Object();
	lgitem._ac = 'ld';
	lgitem._cn = get_market() == undefined?'':get_market();
	lgitem._se = getSegment();
	lgitem._cp = base32.encode(getPagePath());
	lgitem._pt = base32.encode(String(document.title));
	lgitem._qs = getUrlParams();
	var c = getUrlParamVal('camp_id');
	lgitem._camp_id = c == undefined?'':c;
	
	var lgitemstr = JSON.stringify(lgitem);
	ub._lg.push(lgitemstr);
	
	$.cookie('_ub', JSON.stringify(ub), { expires: 7, path: '/' });
	sendClickEventCall('page_load', 'user_behaviour', JSON.stringify(ub), 0);
	}
function createUbCookie(){
	ub = new Object();
	var dt = new Date;
	//trkSessId = dt.getTime();
	trkSessId = uniqId() + '-' + dt.getTime();
	
	ub._gi = gaCliendId;
	ub._vi = trkSessId;
	ub._re = base32.encode(String(document.referrer));
	ub._de = is_mobile_device == true ? 'm' : 'c';
	ub._br = navigator.getAgent;
	
	ub._lg = new Array();
	
	insertPageLoadTrk();
	}
function initLocalTrack(){
	if(ga != undefined){
    	if(ga.getAll == undefined){
			return;
			}
		var trackers = ga.getAll();
		var i, len;
		for (i = 0, len = trackers.length; i < len; i += 1) {
			if (trackers[i].get('trackingId') ==="UA-46697978-2") {
				gaCliendId  = trackers[i].get('clientId');
				clearInterval(trkint);
				}
			}
		
		if($.cookie('_ub')){
			var a = $.cookie('_ub');
			ub = JSON.parse(a);
			insertPageLoadTrk();
			}
		else{
			createUbCookie();
			}
    	}
	}
$(window).on('beforeunload', function(){
	insertPageUnloadTrk();
	});
$(document).ready(function(){
	trkint = setInterval(initLocalTrack, 500);  
	});

