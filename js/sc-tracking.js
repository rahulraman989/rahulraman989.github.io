var trkint;
var ga;
var gaCliendId;
var trkSessId;
var ub;

navigator.getAgent= (function(){
    var N= navigator.appName, ua= navigator.userAgent, tem;
    var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
    return M;
	})();

function getSegment(){
	var s = String(document.location).split('/')[4];
	if(s == 'priority'){
		return 'priority';
		}
	else if(s == 'sme'){
		return 'sme';
		}
	else if(s == 'saadiq'){
		return 'saadiq';
		}
	else if(s == 'staff'){
		return 'staff';
		}
	else{
		return 'personal';
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
$('a').live('mousedown', function(e){
	//alert($(this).text().trim())
	var lgitem = new Object();
	lgitem._ac = 'cl';
	lgitem._el = $(this).attr('id');
	lgitem._tg = $(this).attr('href');
	
	var lgitemstr = JSON.stringify(lgitem);
	ub._lg.push(lgitemstr);
	
	$.cookie('_ub', JSON.stringify(ub), { expires: 7, path: '/' });
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
	lgitem._cn = get_market() == true?'':get_market();
	lgitem._se = getSegment();
	lgitem._cp = getPagePath();
	lgitem._pt = document.title;
	lgitem._qs = getUrlParams();
	
	var lgitemstr = JSON.stringify(lgitem);
	ub._lg.push(lgitemstr);
	
	$.cookie('_ub', JSON.stringify(ub), { expires: 7, path: '/' });
	sendClickEventCall('page_load', 'user_behaviour', JSON.stringify(ub), 0);
	}
function createUbCookie(){
	ub = new Object();
	var dt = new Date;
	trkSessId = dt.getTime();
	
	ub._gi = gaCliendId;
	ub._vi = trkSessId;
	ub._re = document.referrer;
   /* var md = new MobileDetect(window.navigator.userAgent);
	var dev;
	if(md.tablet()){
		dev = 'tablet';
		}
	else if(md.phone()){
		dev = 'phone';
		}
	else{
		dev = 'pc';
		}
	ub._de = dev;*/
	ub._de = is_mobile_device == true ? 'phone' : 'pc';
	ub._br = navigator.getAgent;
	
	ub._lg = new Array();
	
	insertPageLoadTrk();
	}
function initLocalTrack(){
	if(ga != undefined){
    	var trackers = ga.getAll();
		var i, len;
		for (i = 0, len = trackers.length; i < len; i += 1) {
			if (trackers[i].get('trackingId') ==="UA-46697978-2") {
				gaCliendId  = trackers[i].get('clientId');
				}
			}
		clearInterval(trkint);
		if($.cookie('_ub')){
			var a = $.cookie('_ub');
			ub = JSON.parse(a);
			insertPageLoadTrk();
			//alert($.cookie('_ub'))
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

