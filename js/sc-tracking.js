var trkint;
var ga;
var gaCliendId;
var trkSessId;
var ub;
var loggedInAt;
var loggedOutAt;
var totalTimeSpent;
loggedInAt = new Date().getTime(); 
var mktar=new Array;
mktar["P"]="Paid";mktar["O"]="Owned";mktar["E"]="Earned"
var chnar=new Array;chnar["B"]="Banner Display";chnar["E"]="Email / EDM";chnar["S"]="Search";chnar["O"]="SEO";chnar["TCH"]="TestChannel";chnar["NA"]="Not Applicable";chnar["FBA"]="Facebook";chnar["NMG"]="NationMedia";chnar["FED"]="SocialFeed";chnar["LIN"]="LINE";chnar["MOB"]="Mobile";chnar["CFM"]="CapitalFM";chnar["YUT"]="YouTube";chnar["GOO"]="Google";chnar["DQA"]="DQA";chnar["GOG"]="Google";chnar["DMO"]="DailyMonitor";chnar["YOT"]="YouTube";chnar["SPH"]="StraitsTimes";chnar["DIG"]="OnlineDigital";chnar["BRS"]="Broadsheet";chnar["BT."]="Businesstimes";chnar["ASO"]="Asiaone";chnar["GVC"]="GoldenVillage";chnar["Yah"]="Yahoo";chnar["BLS"]="BlisMedia";chnar["Goa"]="Goal.com";chnar["SCW"]="Soccerway.com";chnar["RTB"]="RealTimeBidding";chnar["LPP"]="LinkfromPromoPage";chnar["OBL"]="OnlineBankinglogin";chnar["SHW"]="Shaw";chnar["SPP"]="SponsoredPost";chnar["OOH"]="OOH";chnar["SDW"]="SocialDealwebsite";chnar["SDN"]="SocialDealeNewsletter";chnar["ADN"]="Adnear"
var schnar=new Array;
schnar["AF1"]="Affiliate 1";schnar["AF2"]="Affiliate 2";schnar["AOL"]="AOL";schnar["FBK"]="Facebook";schnar["GOG"]="Google";schnar["MSN"]="MSN";schnar["RED"]="Rediff";schnar["TWT"]="Twitter";schnar["YAH"]="Yahoo";schnar["NA"]="Not Applicable";schnar["GOM"]="Googlemobile";schnar["dnb"]="DBEDM";schnar["dub"]="Dubizzle";schnar["YTU"]="Youtube";schnar["MBP"]="MLBparkKR";schnar["NBS"]="Naverbrandsearch";schnar["C2C"]="C2CA";schnar["DIS"]="Discuss";schnar["LKD"]="LinkedIn";schnar["DDC"]="DayDayCook";schnar["UWT"]="Uwants";schnar["CAR"]="Car.com.hk";schnar["APL"]="AppleDaily";schnar["ONC"]="On.cc";schnar["AFR"]="AdsFactor";schnar["HMB"]="Hotmob";schnar["ACN"]="Accuren";schnar["Bdw"]="Broadway";schnar["TVB"]="TVB";schnar["ANT"]="Atnext";schnar["AAS"]="Aastocks";schnar["ENT"]="ETNet";schnar["PH2"]="Innity";schnar["BAI"]="Baidu";schnar["BAU"]="BaiduChina";schnar["APX"]="Appnexus";schnar["ANX"]="Appnexus";schnar["IMD"]="InviteMedia";schnar["GDN"]="GDN";schnar["tgr"]="Tigerairwayswebsite";schnar["PCE"]="Price.com.hk";schnar["ST"]="Straitstimes";schnar["LI"]="LinkedIn";schnar["AC"]="Accuen";schnar["SMM"]="SMM";schnar["A1"]="ASIAONE";schnar["YT"]="YouTube";schnar["FMB"]="FBmobile";schnar["HNS"]="HouseNews";schnar["YTB"]="Youtube";schnar["PRB"]="PrivateBanking";schnar["PFB"]="PreferredBanking";schnar["PB"]="PersonalBanking";schnar["AWS"]="Airwaves";schnar["SNP"]="Snapmobile";schnar["IMB"]="inMobi";schnar["VSV"]="vserv";schnar["GAM"]="GoogleAdMob";schnar["AMB"]="AdsMobi";schnar["NMG"]="NationMedia";schnar["CFM"]="CapitalFM";schnar["YUT"]="YouTube";schnar["DQA"]="DQA";schnar["ACC"]="Accuen";schnar["PL"]="priceline.com.hk";schnar["GSV"]="GmailSegment1verticals";schnar["GSP"]="GmailSegment2products";schnar["GSD"]="GmailSegment3domain";schnar["Mob"]="MillenialMobile";schnar["STB"]="MillenialMediaCPC";schnar["CPC"]="MillenialMediaCPC";schnar["PPC"]="MillenialMediaCPC";schnar["GV"]="GV.com";schnar["GVT"]="GVTicketingChannel";schnar["GVR"]="GV.comROS";schnar["SKP"]="Skype";schnar["28C"]="28Car.com";schnar["TNB"]="TNBT";schnar["GEO"]="Geo";schnar["TNS"]="TheNews";schnar["EXP"]="Express";schnar["TRB"]="Tribune";schnar["BBC"]="BBCUrdu";schnar["PKT"]="PaksitanToday";schnar["M18"]="Money18";schnar["JAG"]="JAGHK";schnar["HKC"]="HongKongCard.com";schnar["HKL"]="HongKongLoan.com";schnar["INT"]="Innity";schnar["GN1"]="GulfNews";schnar["001"]="Mobme";schnar["m02"]="Mobme002";schnar["AAA"]="PHDMSN1";schnar["ROS"]="StraitsTimesROS";schnar["SG"]="StraitsTimesSGWorldAsiaandMoneyNews";schnar["BSL"]="StraitsTimesBeforeSiteLoads";schnar["BTR"]="BusinessTimesROS";schnar["RZ"]="Rozee";schnar["LKN"]="Linkedin";schnar["ROW"]="ROS";schnar["HP"]="Homepage";schnar["MVP"]="MoviePages";schnar["MO1"]="Mobile";schnar["Spo"]="Sports";schnar["EuS"]="SportsEuropeFootball";schnar["Fin"]="FinanceNewsROS";schnar["New"]="NewsHomepage";schnar["YNW"]="NewsWorld";schnar["TSO"]="TheStarOnline";schnar["GOA"]="Goal";schnar["GPN"]="GoalPerformNetwork";schnar["SP5"]="Spotify";schnar["KM1"]="KOM1";schnar["KOM"]="Komli";schnar["SMT"]="SmartMarketing";schnar["HTP"]="HTTPoolAdNetwork";schnar["ICL"]="iClickSEM";schnar["MNH"]="MoneyHero";schnar["LFC"]="LiverpoolTargetedPages";schnar["RTB"]="C2CRTB";schnar["na"]="NotApplicable";schnar["OBA"]="OBLbigad";schnar["MW"]="MalaysianWireless";schnar["C02"]="C2C2";schnar["C03"]="C2C3";schnar["C04"]="C2C4";schnar["FrM"]="Framedia";schnar["OLK"]="Outlook.com";schnar["COS"]="Cosmopolitan.com";schnar["BBK"]="BabyKingdom";schnar["9GA"]="9GAG.com";schnar["MTP"]="Monsterparent.com";schnar["ZUJ"]="Zuji"
var _0x6db5=["\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x73\x65\x61\x72\x63\x68","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x26","\x73\x70\x6C\x69\x74","\x6C\x65\x6E\x67\x74\x68","\x3D","\x63\x61\x6D\x70\x5F\x69\x64","\x2D","\x3A"];
var t=window[_0x6db5[2]][_0x6db5[1]][_0x6db5[0]](1);
var n=t[_0x6db5[4]](_0x6db5[3]);
  for(var r=0;r<n[_0x6db5[5]];r++) {
    var i=n[r][_0x6db5[4]](_0x6db5[6]);if(i[0]==_0x6db5[7]){var cmpid=i[1];} ;
 };
	var cmpidarr=String(cmpid)[_0x6db5[4]](_0x6db5[8]);
	var itmobj= new Object();
	for(i=0;i<cmpidarr[_0x6db5[5]];i++) {
	   var itm=cmpidarr[i][_0x6db5[4]](_0x6db5[9]);itmobj[itm[0]]=itm[1];
	} ;
		
	var schn = schnar[itmobj['B']] == undefined ? itmobj['B'] : schnar[itmobj['B']];
	var chn = chnar[itmobj['C']] == undefined ? itmobj['C'] : chnar[itmobj['C']];
	var mkt = mktar[itmobj['M']] == undefined ? itmobj['M'] : mktar[itmobj['M']];
//Genenric code for Base 32 encoding 
!function(r){var a={a:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",pad:"=",encode:function(r){var a,e,t=this.a,h=this.pad,c=r.length,o="",d=0,n=0;for(i=0;i<c;i+=5)e=r.charCodeAt(i),a=248&e,o+=t.charAt(a>>3),d=7&e,n=2,i+1<c&&(e=r.charCodeAt(i+1),a=192&e,o+=t.charAt((d<<2)+(a>>6)),o+=t.charAt((62&e)>>1),d=1&e,n=4),i+2<c&&(e=r.charCodeAt(i+2),a=240&e,o+=t.charAt((d<<4)+(a>>4)),d=15&e,n=1),i+3<c&&(e=r.charCodeAt(i+3),a=128&e,o+=t.charAt((d<<1)+(a>>7)),o+=t.charAt((124&e)>>2),d=3&e,n=3),i+4<c&&(e=r.charCodeAt(i+4),a=224&e,o+=t.charAt((d<<3)+(a>>5)),o+=t.charAt(31&e),d=0,n=0);0!=d&&(o+=t.charAt(d<<n));var A=8-o.length%8;return 8==A?o:1==A?o+h:3==A?o+h+h+h:4==A?o+h+h+h+h:6==A?o+h+h+h+h+h+h:void 0},decode:function(r){var a,e,t,h=r.length,c=this.a+this.pad,o=0,d="";for(r=r.toUpperCase(),i=0;i<h;i+=1)a=c.indexOf(r.charAt(i)),a>0&&32>a&&(e=e<<5|a,o+=5,o>=8&&(t=e>>o-8&255,d+=String.fromCharCode(t),o-=8));return o>0&&(t=(e<<8-o&255)>>8-o,0!==t&&(d+=String.fromCharCode(t))),d}},e={a:"0123456789ABCDEFGHIJKLMNOPQRSTUV",pad:"=",encode:a.encode,decode:a.decode};r.base32=a,r.base32hex=e}(this.Conversions={});
//Get the device type (mobile or desktop)
function deviceInfo() {
	if (/Mobi/.test(navigator.userAgent))
	    return "m";
	else
		return "d";
}
//Get the browser and browser version that the user is on
navigator.getAgent= (function(){
    var N= navigator.appName, ua= navigator.userAgent, tem;
    var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
	if (M[0].toLowerCase().indexOf("firefox")>-1)
		return 'f' + "-" + M[1];
	else if(M[0].toLowerCase().indexOf("chrome")>-1)
		return 'c' + "-" + M[1];
	else if(M[0].toLowerCase().indexOf("safari")>-1)
		return 's' + "-" + M[1];
	else if(M[0].toLowerCase().indexOf("msie")>-1)
		return 'i' + "-" + M[1];
	else
		return M[0] + "-" + M[1];
	})();
// Get the segment within the sc.com website 
// Segments can be the following : Personal, Priority and SME
// Short names for each of the segments parsed from the URL
function getSegment(){
	var s = String(document.location).split('/')[4];
	var _seg = {
        "priority" : "pr",
        "business-banking-sme" : "bs",
        "saadiq" : "sq",
        "rmb" : "rm",
        "en" : "pv",
	    "nri" : "ni",
	    "employee-banking": "eb",
	    "staff": "st"
    };
if(s in _seg) 
   return items[s];
else 
   return "pe";
}
// Get the list of all URL parameters from the URL
function getUrlParams(){
	var l = String(document.location);
	if(l.indexOf('#') > -1){
		return l.split('#')[1];
	}
	else {
		if(l.indexOf('?') > -1){
		  return l.split('?')[1];
		}
		else {
			  return '';
		}
	}
} 
//Get the values for each of the URL parameters that have been extracted 
function getUrlParamVal(p) {
    var sPageURL = String(document.location).split('?')[1];
	if(sPageURL == undefined)
	    return '';
	sURLVariables = sPageURL.split('&')
	var sParameterName, i;
	for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === p) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}
//Random generated 64 bit UUID which is the visitor ID and it will remain constant per user. This will help identify new and returning users 
function uniqId() {
  function uid() { 
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
  return uid() + uid() + '-' + uid() + '-' + uid() + '-' + uid() + '-' + uid() + uid() + uid();
}
//Function to get the cookie on the whole and pass it to the forms platform onclick of "Apply Now"
//The cookie is passed onto the forms in the form of a URL query parameter
// As the form loads, the parameter will be saved into the XSD
function appendUbToBtn(){
	if($.cookie('_ub'))
		ubparam = '_ub='+$.cookie('_ub');
	else
		ubparam = '';
	//alert(ubparam)
	$('a[href]').each(function () {
		if($(this).html().toLowerCase()==="apply now") {
		  var old_href_value= $(this).attr('href');
		  var link_has_querystring = old_href_value.indexOf("?");
		  if(link_has_querystring!==-1) {
			$(this).attr('href',old_href_value +'&' + window.location.search.substr(1)+ubparam);
		  } else {
			$(this).attr('href',old_href_value+"?"+window.location.search.substr(1)+ubparam);
		   }
		}
	});
}
$('a').on('mousedown', function(e){
	var lgitem = new Object();
	lgitem._ac = 'cl';
	lgitem._el = $(this).attr('id');
	var enTg = $(this).attr('href');
	//lgitem._is = $(this).attr('src');
	lgitem._tg = Conversions.base32.encode(enTg);
	if(jQuery(this).find('img').length) {
	 	lgitem._is = jQuery(this).find('img').attr("src");
	}
	var lgitemstr = lgitem;
	ub._lg.push(lgitemstr);
	$.cookie('_ub', JSON.stringify(ub), { expires: 7});
	function logCookieData(obj){ 
      var data=JSON.stringify (obj);
      $.ajax({
       type: 'POST',
       url: 'https://ys5seocy27.execute-api.ap-northeast-1.amazonaws.com/prod/log',
       data: data,
       success: function(data) {},
       contentType: "application/json",
       dataType: 'json'
      });
    }
	var gc = $.cookie("_ub");
	console.log("SLURP LOG");
	console.log(gc);
	var _kv = { data : gc }
	logCookieData(_kv);
	sendClickEventCall('track_element', 'user_behaviour', JSON.stringify(ub), 0);
});


//Home Page Banner clicks 
if ($('.bxslider li img').on('mousedown',function(e) {
     var lgitem = new Object();
     lgitem._hb = jQuery(this).attr("src"); 
	 var lgitemstr = JSON.stringify(lgitem);
	 ub._lg.push(lgitemstr);
	 $.cookie('_ub', JSON.stringify(ub), { expires: 7});
	 sendClickEventCall('track_element', 'user_behaviour', JSON.stringify(ub), 0);
   }));
//Produt Category pages banner tracking
else if ($('#featured img').on('mousedown',function(e) {
     var lgitem = new Object();
     lgitem._pb = jQuery(this).attr("src"); 
	 var lgitemstr = JSON.stringify(lgitem);
	 ub._lg.push(lgitemstr);
	 $.cookie('_ub', JSON.stringify(ub), { expires: 7});
	 sendClickEventCall('track_element', 'user_behaviour', JSON.stringify(ub), 0);
   }));
 /*
function insertPageUnloadTrk() {
	var lgitem = new Object();
	lgitem._ac = 'ul';
	loggedOutAt = new Date().getTime();
    lgitem._tm = loggedOutAt - loggedInAt;
	var lgitemstr = lgitem;
	ub._lg.push(lgitemstr);
	$.cookie('_ub1', JSON.stringify(ub), { expires: 7});
	function logCookieData(obj){ 
      var data=JSON.stringify (obj);
      $.ajax({
       type: 'POST',
       url: 'https://ys5seocy27.execute-api.ap-northeast-1.amazonaws.com/prod/log',
       data: data,
       success: function(data) {},
       contentType: "application/json",
       dataType: 'json'
      });
    }
	var gc = $.cookie("_ub");
	var _kv = { data : gc }
	logCookieData(_kv);
	sendClickEventCall('page_unload', 'user_behaviour', JSON.stringify(ub), 0);
}
*/
//Caling the function to send an event hit to GA on every page load 
//sendClickEventCall is the name of the function to send hits to GA
function insertPageLoadTrk() {
	var lgitem = new Object();
	lgitem._ac = 'ld';
	loggedOutAt = new Date().getTime();
    lgitem._tm = loggedOutAt - loggedInAt;
	lgitem._cn = get_market() == undefined?'':get_market();
	lgitem._se = getSegment();
	lgitem._cp = Conversions.base32.encode(getPagePath());
	lgitem._pt = Conversions.base32.encode(String(document.title));
	lgitem._qs = getUrlParams();
	var c = getUrlParamVal('camp_id');
	//lgitem._camp_id = c == undefined?'':c;
	if (c!=undefined || c!=="") {
	  lgitem._scn = schn;
	  lgitem._chn = chn;
	  lgitem._cid = cmpid;
	  lgitem._csc = itmobj['S'];
	  lgitem._cmc = itmobj['N'];
	  lgitem._cmp = itmobj['P'];
	  lgitem._cmm = itmobj['T'];
	  lgitem._cmo = itmobj['O'];
	  lgitem._cmd = itmobj['D'];
	  lgitem._cmcid = itmobj['I'];
	  lgitem._cmc = itmobj['R'];
	  lgitem._cmmc = mkt;
    }
	var lgitemstr = lgitem;
	ub._lg.push(lgitemstr);
	$.cookie('_ub2', JSON.stringify(ub), { expires: 7});
      function logCookieData(obj){ 
      var data=JSON.stringify (obj);
      $.ajax({
       type: 'POST',
       url: 'https://ys5seocy27.execute-api.ap-northeast-1.amazonaws.com/prod/log',
       data: data,
       success: function(data) {},
       contentType: "application/json",
       dataType: 'json'
      });
    }
	var gc = $.cookie("_ub");
	var _kv = { data : gc }
	logCookieData(_kv);
	sendClickEventCall('page_load', 'user_behaviour', JSON.stringify(ub), 0);
}
//Function logic where the cookie is created 
// Names of JSON key value pairs that are stored in the cookie explained below: 
//	_vi	Visitor ID	Random generated 64 bit UUID
//	_gi	GA client id	Extracted from GA's cookie
//	_re	Referrer	Referral path extracted from document.referrer
//	_de	Device Type	Device Type ; c=desktop, m=mobile
//	_br	Browser	Browser and version
//	_ac	Action 	Action on the page ; pageload or click 
//	_se	Segment 	User Segment ; personal, priority, business, saadiq
//	_cp	Current Page	Current page path
//	_pt	Page Title	Document of the page extacted from document.title
//	_qs	Query String	Query string parameters within the URL
//	_ci	camp id	Campaign ID extracted from the query string 
//	_el	Element ID	ID of the element that was clicked 
//	_tg	Target	Href of the element that was clicked 
//	_rf	Ref code 	Captured within the _qs cookie
//	_sc	Sub chan  code 	Captured within the _qs cookie
//	_pt	Promo Type	Captured within the _qs cookie
//	_scn	Sub channel	Sub channel code 
//	_chn	Campaign Channel	-
//	_cid	Campaign ID	Full campaign ID
//	_csc	Campaign Short Code	Unique code for the campaign  with the channel
//	_cmc	Campaign Country	-
//	_cmp	Campaign Product	Ex: Credit Cards, Cash One, itunes 
//	_cmm	Campaign Media 	-
//	_cmo	Campaign Offer 	Offer related to a campaign
//	_cmd	Campaign Date 	Campaign launch date 
//	_cmcid	Campaign Creative ID	Unique Id for  particular marketing creative ie banner
//	_cmmc	Campaign marketing category	Paid or Channel
//	_cmc	Campaign Creative	Marketing asset 
function createUbCookie() {
	ub = new Object();
	var dt = new Date;
	trkSessId = uniqId() + '-' + dt.getTime();
	ub._gi = gaCliendId;
	ub._vi = trkSessId;
	ub._re = Conversions.base32.encode(String(document.referrer));
	ub._de = deviceInfo();
	ub._br = navigator.getAgent;
	ub._lg = new Array();
	insertPageLoadTrk();
}
//Code to get the value of the client ID that google sets 
//This client id is specific to a user 
//Saving this will enable making a correlation between data collected in google analytics and data collected in our logging system 
function initLocalTrack() {
	if(ga != undefined) {
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
		if($.cookie('_ub')) {
			var a = $.cookie('_ub');
			ub = JSON.parse(a);
			insertPageLoadTrk();
		}
		else {
			createUbCookie();
		}
    }
}
//beforeunload can detect page unloads 
/*
$(window).on('beforeunload', function(){
	insertPageUnloadTrk();
	});
*/
$(document).ready(function(){
	trkint = setInterval(initLocalTrack, 500);  
});
