var dataLayer = dataLayer || [];
var _gaq = _gaq || [];
var current_url = window.location.href;
var debugConsole = true;
var eventName = "track_element";
var href = "";
var i, len;
var cID;
var q;
var ampExists;
var trkint;
var ga;
var gaCliendId;
var trkSessId;
var ub;
ub = new Object();
var ub1;
var ub2;
var loggedInAt;
var loggedOutAt;
var totalTimeSpent;
loggedInAt = new Date().getTime(); 
var mktar=new Array;
//All upper case charactrers being made to lower case to avoid a mixture of both in the GA UI. This will also help in data stadardization
String.prototype.toTitleCase = function() {
	var i, j, str, lowers, uppers;
	if (!this.length) {
		return "";
	}
	str = this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
	// Certain minor words should be left lowercase unless 
	// they are the first or last words in the string
	lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
		'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
	for (i = 0, j = lowers.length; i < j; i++)
		str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
				function(txt) {
					return txt.toLowerCase();
				});
	// Certain words such as initialisms or acronyms should be left uppercase
	uppers = ['Id', 'Tv'];
	for (i = 0, j = uppers.length; i < j; i++)
		str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
				uppers[i].toUpperCase());
	return str;
}

//funtion to update or append query parameters onclick of Apply Now and persist the parameters thorugh the user's journey
function update_apply_now_links(){
	var url_querystring=window.location.search.substr(1);
	if(url_querystring!==""){
	  $('a[href]').each(function () {
		if($(this).html().toLowerCase()==="apply now"){
		  var old_href_value= $(this).attr('href');
		  var link_has_querystring = old_href_value.indexOf("?");
		  if(link_has_querystring!==-1){
			$(this).attr('href',old_href_value +'&' + window.location.search.substr(1));
		  }else{
			$(this).attr('href',old_href_value+"?"+window.location.search.substr(1));
		  }
		}
	  });
	}
}
//Function to push data to Google Analytics. Data will be sent via a dataLayer.push() which is Google's JS object. 
function sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue) {
	var eventLabel = eventLabel || "";
	var eventValue = eventValue || 0;

	if (debugConsole == true) {
		console.log('eventCategory : ' + eventCategory + '\n' + 'eventAction : ' + eventAction + '\n' + 'eventLabel : ' + eventLabel + '\n' + 'eventValue : ' + eventValue);
	}
	var data = {};
	data['event'] = eventName;
	data['form_field_category'] = eventCategory;
	data['form_field_action'] = eventAction;
	if (eventLabel !== "") {
		data['form_field_label'] = eventLabel;
	}
	if (eventValue !== 0) {
		data['form_field_value'] = eventValue;
	}
	dataLayer.push(data);
}

//Function to identify market in online form. *This is not used. Has to be deleted. 
//These are hardcoded values and the function is not at all in use and hence it is not being called
//The function just below which is get_market() will cater to the same functionality in a smarter way
function get_market_in_onlineform(){

	var market_arr = new Array;

	market_arr["india"] = 'in';
	market_arr["singapore"] = 'sg';
	market_arr["hongkong"] = 'hk';
	market_arr["china"] = 'cn';
	market_arr["uae"] = 'ae';
	market_arr["malaysia"] = 'my';
	market_arr["taiwan"] = 'tw';
	market_arr["indonesia"] = 'id';
	market_arr["thailand"] = 'th';
	market_arr["nfsafr"] = 'ng';
	market_arr["pakistan"] = 'pk';
	market_arr["vietnam"] = 'vn';
	market_arr["srilanka"] = 'lk';
	market_arr["kenya"] = 'ke';
	market_arr["philippine"] = 'ph';

	var path = window.location.pathname.replace('/public_website/','');
	var market = path.substr(0, path.indexOf('/'));

	return market_arr[market];

}
function get_market()
{
	var host = window.location.host;
	var market;
	var parseURL;
	if((host == 'online.forms.standardchartered.com' || host == 'forms.online.standardchartered.com') 
			&& window.location.pathname.indexOf('/public_website/')>=0)
	{
		market = get_market_in_onlineform();
	}
	else if(host == 'apply.standardchartered.co.in')
	{
		market = 'in';
	}
	else if(host == 'id.online.standardchartered.com')
	{
		market = 'id';
	}
	else if(host == 'online.standardchartered.com')
	{
		market = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
		if(market == 'nfsafr')market = 'ng';
	}
	else {
	market = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
	}
	return market;
}
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
	   return _seg[s];
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
	function getTrafficSource(){
		var _ref = document.referrer;
		if (getUrlParams() == "") {
		if (_ref.toLowerCase().indexOf("google")>-1) {
			return "go"
		}
		else if (_ref.toLowerCase().indexOf("yahoo")>-1) {
			return "yo"
		}
		else if (_ref.toLowerCase().indexOf("bing")>-1) {
			return "bn"
		}
		else if (_ref.toLowerCase().indexOf("baidu")>-1) {
			return "bd"
		}
		else if (_ref == "") {
			return "direct"
		}
	  }
	  else {
		  var c = getUrlParamVal('camp_id');
		  var gclid = getUrlParamVal('gclid');
		  if (c!=undefined || c!=="")
			  return "cmp";
			  else if (gclid!=undefined || gclid!=="")
				  return "gcpc";
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
	if (get_market() == "ke" || get_market() == "kenya") {
	$('a').on('mousedown', function(e){ 
		//createUbCookie();
		ub1 = new Object();
		//ub1._gi = ub._gi;
		ub1._vi = ub._vi;
		ub1._re = ub._re;
		ub1._de = ub._de;
		ub1._br = ub._br;
		ub1._lg = new Array();
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
		ub1._lg.push(lgitemstr);
		$.cookie('_ev', JSON.stringify(ub1), { expires: 7});
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
		var gc = $.cookie("_ev");
		console.log("***SLURP LOG CLICK***");
		console.log(gc);
		var _kv = { data : gc }
		logCookieData(_kv);
		sendClickEventCall('track_element', 'user_behaviour_events', JSON.stringify(ub1), 0);
	});
	//Home Page Banner clicks 
	if ($('.bxslider li img').on('mousedown',function(e) {
		 ub3 = new Object();
		 //ub3._gi = ub._gi;
		 ub3._vi = ub._vi;
		 ub3._re = ub._re;
		 ub3._de = ub._de;
		 ub3._br = ub._br;
		 ub3._lg = new Array();
	     var lgitem = new Object();
	     lgitem._hb = jQuery(this).attr("src"); 
		 var lgitemstr = JSON.stringify(lgitem);
		 ub3._lg.push(lgitemstr);
		 $.cookie('_ev', JSON.stringify(ub3), { expires: 7});
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
		var gc = $.cookie("_ev");
		console.log("***SLURP LOG CLICK***");
		console.log(gc);
		var _kv = { data : gc }
		logCookieData(_kv);
		 sendClickEventCall('track_element', 'user_behaviour_events', JSON.stringify(ub3), 0);
	   }));
	//Produt Category pages banner tracking
	else if ($('#featured img').on('mousedown',function(e) {
	     ub4 = new Object();
	     //ub4._gi = ub._gi;
	     ub4._vi = ub._vi;
	     ub4._re = ub._re;
	     ub4._de = ub._de;
	     ub4._br = ub._br;
	     ub4._lg = new Array();
	     var lgitem = new Object();
	     lgitem._pb = jQuery(this).attr("src"); 
		 var lgitemstr = JSON.stringify(lgitem);
		 ub4._lg.push(lgitemstr);
		 $.cookie('_ev', JSON.stringify(ub4), { expires: 7});
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
		var gc = $.cookie("_ev");
		console.log("***SLURP LOG CLICK***");
		console.log(gc);
		var _kv = { data : gc }
		logCookieData(_kv);
		 sendClickEventCall('track_element', 'user_behaviour_events', JSON.stringify(ub4), 0);
	   }));
	   function insertPageUnloadTrk() {
		   //createUbCookie();
	   	ub2 = new Object();
		//ub2._gi = ub._gi;
		ub2._vi = ub._vi;
		ub2._re = ub._re;
		ub2._de = ub._de;
		ub2._br = ub._br;
	   	ub2._lg = new Array();
	   	var lgitem = new Object();
		lgitem._ac = 'ul';
		//lgitem._gi = ub._gi;
		lgitem._vi = ub._vi;
		loggedOutAt = new Date().getTime();
	    lgitem._tm = loggedOutAt - loggedInAt;
		var lgitemstr = lgitem;
		ub2._lg.push(lgitemstr);
		$.cookie('_ul', JSON.stringify(ub2), { expires: 7});
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
		var gc = $.cookie("_ul");
		console.log("***SLURP LOG UNLOAD***");
		console.log(gc);
		var _kv = { data : gc }
		logCookieData(_kv);
		sendClickEventCall('track_element', 'user_behaviour_unload', JSON.stringify(ub2), 0);
	}
	//Caling the function to send an event hit to GA on every page load 
	//sendClickEventCall is the name of the function to send hits to GA
	function insertPageLoadTrk() {
	    ub0 = new Object();
	    //ub0._gi = ub._gi;
	    ub0._vi = ub._vi;
	    ub0._re = ub._re;
	    ub0._de = ub._de;
	    ub0._br = ub._br;
	    ub0._lg = new Array();
		var lgitem = new Object();
		lgitem._ac = 'ld';
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
		ub0._lg.push(lgitemstr);
		$.cookie('_pv', JSON.stringify(ub0), { expires: 7});
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
		var gc = $.cookie("_pv");
		var _kv = { data : gc }
		logCookieData(_kv);
		sendClickEventCall('track_element', 'user_behaviour_page_view', JSON.stringify(ub0), 0);
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
		var dt = new Date;
		trkSessId = uniqId() + '-' + dt.getTime();
		//ub._gi = gaCliendId;
		ub._vi = trkSessId;
		ub._re = Conversions.base32.encode(String(document.referrer));
		ub._de = deviceInfo();
		ub._br = navigator.getAgent;
		ub._ts = getTrafficSource();
		ub._lg = new Array();
		insertPageLoadTrk();
	}
	//Code to get the value of the client ID that google sets 
	//This client id is specific to a user 
	//Saving this will enable making a correlation between data collected in google analytics and data collected in our logging system 
	function initLocalTrack() {
			if($.cookie('_pv')) {
				var a = $.cookie('_pv');
				ub = JSON.parse(a);
				insertPageLoadTrk();
			}
			else {
				createUbCookie();
			}
}
initLocalTrack();
	//beforeunload can detect page unloads 
	$(window).on('beforeunload', function(){
		insertPageUnloadTrk();
		});
}
//Function to identify page name 
function get_pagename()
{
	var current_page = decodeURIComponent(current_url.split("/").pop().split(".")[0]);

	if (current_page == '' || current_page == null)
	{
		final_page = decodeURIComponent(current_url.split("/").slice(-2, -1)[0]);
	}
	else if (current_page == 'index')
	{
		final_page = decodeURIComponent(current_url.split("/").slice(-2, -1));
	}
	else
	{
		final_page = current_page;
	}

	return final_page;
}
//Function to trim characters from page title
function trim_chars(str){

	var chars_arr = ["�","-","|"];

	for(var i=0; i<chars_arr.length; i++){
		if(str.indexOf(chars_arr[i])>=0)
  			str = str.substr(0,str.indexOf(chars_arr[i])-1);
	}
	
  	return str.trim();
  			
}
//Function to get image src as name for each user interaction on the page
function trim_img_name(imgsrc){

	if(imgsrc.lastIndexOf("/")>=0)
		imgsrc = imgsrc.substr(imgsrc.lastIndexOf("/")+1, imgsrc.length);

	return imgsrc.trim();

}
//Function to get element class for each user interaction on the page
function get_element_class(This){

	var elmCls = '';
	if(jQuery(This).attr("class")){
		elmCls = jQuery(This).attr("class");
		if(elmCls != undefined || elmCls != '')
			return elmCls.trim();
	}

	return elmCls;
}
//Function to get element Id for each user interaction on the page
function get_element_id(This){

	var elmId = '';
	if(jQuery(This).attr("id")){
		elmId = jQuery(This).attr("id");
		if(elmId != undefined || elmId != '')
			return elmId.trim();
	}

	return elmId;

}
//Function to get class/id for event user interaction on the page
function get_classid_for_eaction(This){

	var elm_cls = get_element_class(This);
	var elm_id = get_element_id(This);
	var cls_id = '';
	if(elm_cls !== "" && elm_id !== "")
		cls_id = '&' + elm_cls.replace(/\s+/g, ", ") + ' : #' + elm_id + ' : ';
	else if(elm_cls !== "")
		cls_id = '&' + elm_cls.replace(/\s+/g, ", ") + ' : ';
	else if(elm_id !== "")
		cls_id = '#' + elm_id + ' : ';	

	return cls_id;	
}

//Identify mouse left/right click
function typeofMouseClick(t) {
	var isTranslated = "";
	if (jQuery('html').hasClass('translated-ltr') || jQuery('html').hasClass('translated-rtl')) {
		isTranslated = " : _Translated";
	}
	if (t === 2) {
		return "*MiddleClick" + isTranslated;
	}
	if (t === 3) {
		return "*RightClick" + isTranslated;
	}
	return "*LeftClick" + isTranslated;
}

if (typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	};
}
if (!window.location.origin) {
	window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}
//The document.ready contains code to individually listen to clicks on pintiles, banners and buttons that are within <img> tags. 
//These cannot be tracked by the generic code written at the start since the structure of the DOM is such. 
//For example not all buttons have an a[href] tag to make it generic. 
//Neither do all images and pintiles have an id that starts with pin_ or btn_ or cta_. There is a lot of variation in different markets
(function($) {
	$(document).ready(function() {
		//Identify Page Type 
        //trkint = setInterval(initLocalTrack, 500);
		var page = get_pagename();
		var market = get_market();

		var page_name = page.toTitleCase();
		page_name = page.replace(/-/g, " ");
		page_name = page_name.toTitleCase();
		
		var page_title = $(document).find("title").text();
		page_title = trim_chars(page_title);

		eventCategory = '~'+ market +' : ^' + page_title + ' : *Click';
		eventValue = 0;

		if ( $.isFunction($.fn.live) ) {
			jQuery('a').live('mousedown', function(e){
				var link_name = "";
				link_name = jQuery(this).first().find('em:first-child').text().trim();

				if(jQuery(this).find('img').length){
	 			   link_name = jQuery(this).find('img').attr("src");
	 			   link_name = trim_img_name(link_name);
				}
				var cls_id = get_classid_for_eaction(this);
				dataLayer.push({'element_id' : 'cls_id'});

				if (link_name == '') {
					link_name = jQuery(this).text().trim();
				}
				if (link_name !== "") {
					var href = (jQuery(this).attr('href')) ? jQuery(this).attr('href').trim() : '';
					eventAction = cls_id + '-' +link_name.toTitleCase();
					eventLabel = '@' + href + ' : ' + typeofMouseClick(e.which);
					sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);
				}
			});

			jQuery('.orbit-bullets li').live('mousedown', function(e) {
				if ($('section.banner-thumbs').text().trim() !== '') {
					var cls_id = get_classid_for_eaction(this);
					var href = $("section.banner-thumbs li:nth-child(" + jQuery(this).text() + ") a").attr("href").trim();
					link_name = $("section.banner-thumbs li:nth-child(" + jQuery(this).text() + ") h5").text();
					eventAction = cls_id + '-' +link_name.toTitleCase();
					eventLabel = '@' + href +' : '+ typeofMouseClick(e.which);
					sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);
					}
				});

			$('#declineAipButton').live('mousedown',function(e) {
					var src = '';	
					var cls_id = get_classid_for_eaction(this);
					src = trim_img_name($(this).attr("src"));
					eventAction = cls_id + '-' +src.toTitleCase();	
					eventLabel = '@close : '+ typeofMouseClick(e.which);
					sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);

			});	

			//PinTiles Tracking
			$('#pinboard img').live('mousedown',function(e) {
					var img_id = get_element_id(this);
					var txt = ($('#pin_title_'+img_id).text()) ? $('#pin_title_'+img_id).text().trim() : 'Know More';
					var cls_id = get_classid_for_eaction($('#pin_link_'+img_id));
					var href = $('#pin_link_'+img_id).attr("href").trim();

					eventAction = cls_id + '-' + txt.toTitleCase();
					eventLabel = '@' + href + ' : ' + typeofMouseClick(e.which); 
					sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);
			});

			//Banner Tracking
			$('.banner-container .orbit-wrapper #featured img').live('mousedown',function(e) {
				var cur_div = $(this).attr('data-caption');
				var txt = '';
				if ($('article.orbit-caption' + cur_div).find('.info-box .subheader').length > 0) {
					txt = $('article.orbit-caption' + cur_div).find('.info-box .subheader').first().text().trim();
				} else if (typeof ($('article.orbit-caption' + cur_div).find('.info-box').find('h2').text()) !== 'undefined' && $('article.orbit-caption' + cur_div).find('.info-box').find('h2').text() !== "") {
					txt = $('article.orbit-caption' + cur_div).find('.info-box').find('h2').text().trim();
				} else if ($('article.orbit-caption' + cur_div).find('.info-box h1').length > 0) {
					txt = $('article.orbit-caption' + cur_div).find('.info-box h1').text();
				}

				var cls_id = get_classid_for_eaction($('article.orbit-caption' + cur_div + ' a'));
				var href = $('article.orbit-caption' + cur_div + ' a').attr("href");

				eventAction = cls_id + '-' + txt.toTitleCase();
				eventLabel = '@' + href + ' : ' + typeofMouseClick(e.which); 
				sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);

			});

			
			$('.bx-wrapper .bxslider li img').live('mousedown',function(e) {

				var href = '';
				if($(this).attr('onclick')){
					href = $(this).attr('onclick').split('\'')[1];
				}else if($(this).parent().attr('onclick')){
					href = $(this).parent().attr('onclick').split('\'')[1];
				}

				var cls_id = get_classid_for_eaction($(this).parent().find('a'));
				var txt = $(this).parent().find('a').text().trim();

				eventAction = cls_id + '-' + txt.toTitleCase();
				eventLabel = '@' + href + ' : ' + typeofMouseClick(e.which); 
				sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);
			});


			$('.amazingslider-slider-0 .amazingslider-img-0').live('mousedown',function(e) {
				var src = $(this).find('img').attr('src');
				var txt = src.split('/').pop().split('.')[0];

				var slide_src = '';
				var slide_txt = '';
				var href = '';
				$('.amazingslider-slides li a').each(function(){
					slide_src = $(this).find('img').attr('src');
					slide_txt = slide_src.split('/').pop().split('.')[0];
					if(txt == slide_txt){
						href = $(this).attr("href").trim() ;
					}

				});
				var cls_id = get_classid_for_eaction($(this));
				
				eventAction = cls_id + '-' + txt.toTitleCase();
				eventLabel = '@' + href + ' : ' + typeofMouseClick(e.which); 
				sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);
			});

		}else{

			jQuery('a').on('mousedown', function(e){
				var link_name = "";
				link_name = jQuery(this).first().find('em:first-child').text().trim();

				if(jQuery(this).find('img').length){
	 			   link_name = jQuery(this).find('img').attr("src");
	 			   link_name = trim_img_name(link_name);
				}
				var cls_id = get_classid_for_eaction(this);
				dataLayer.push({'element_id' : 'cls_id'});

				if (link_name == '') {
					link_name = jQuery(this).text().trim();
				}
				if (link_name !== "") {
					var href = (jQuery(this).attr('href')) ? jQuery(this).attr('href').trim() : '';
					eventAction = cls_id + '-' +link_name.toTitleCase();
					eventLabel = '@' + href + ' : ' + typeofMouseClick(e.which);
					sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);
				}
			});

			jQuery('.orbit-bullets li').on('mousedown', function(e) {
				if ($('section.banner-thumbs').text().trim() !== '') {
					var cls_id = get_classid_for_eaction(this);
					var href = $("section.banner-thumbs li:nth-child(" + jQuery(this).text() + ") a").attr("href").trim();
					link_name = $("section.banner-thumbs li:nth-child(" + jQuery(this).text() + ") h5").text();
					eventAction = cls_id + '-' +link_name.toTitleCase();
					eventLabel = '@' + href +' : '+ typeofMouseClick(e.which);
					sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);
				}
			});	

			$('#declineAipButton').on('mousedown',function(e) {
					var src = '';	
					var cls_id = get_classid_for_eaction(this);
					src = trim_img_name($(this).attr("src"));
					eventAction = cls_id + '-' +src.toTitleCase();	
					eventLabel = '@close : '+ typeofMouseClick(e.which);
					sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);

			});	


			//PinTiles Tracking - INDIA AND UAE

			$('#pinboard img').on('mousedown',function(e) {
				var img_id = get_element_id(this);
				var txt = ($('#pin_title_'+img_id).text()) ? $('#pin_title_'+img_id).text().trim() : 'Know More';
				var cls_id = get_classid_for_eaction($('#pin_link_'+img_id));
				var href = $('#pin_link_'+img_id).attr("href").trim();

				eventAction = cls_id + '-' + txt.toTitleCase();
				eventLabel = '@' + href + ' : ' + typeofMouseClick(e.which); 
				sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);
			});

			//Banner Tracking

			$('.banner-container .orbit-wrapper #featured img').on('mousedown',function(e) {
				var cur_div = $(this).attr('data-caption');
				var txt = '';
				if ($('article.orbit-caption' + cur_div).find('.info-box .subheader').length > 0) {
					txt = $('article.orbit-caption' + cur_div).find('.info-box .subheader').first().text().trim();
				} else if (typeof ($('article.orbit-caption' + cur_div).find('.info-box').find('h2').text()) !== 'undefined' && $('article.orbit-caption' + cur_div).find('.info-box').find('h2').text() !== "") {
					txt = $('article.orbit-caption' + cur_div).find('.info-box').find('h2').text().trim();
				} else if ($('article.orbit-caption' + cur_div).find('.info-box h1').length > 0) {
					txt = $('article.orbit-caption' + cur_div).find('.info-box h1').text();
				}

				var cls_id = get_classid_for_eaction($('article.orbit-caption' + cur_div + ' a'));
				var href = $('article.orbit-caption' + cur_div + ' a').attr("href");

				eventAction = cls_id + '-' + txt.toTitleCase();
				eventLabel = '@' + href + ' : ' + typeofMouseClick(e.which); 
				sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);

			});

			
			$('.bx-wrapper .bxslider li img').on('mousedown',function(e) {

				var href = '';
				if($(this).attr('onclick')){
					href = $(this).attr('onclick').split('\'')[1];
				}else if($(this).parent().attr('onclick')){
					href = $(this).parent().attr('onclick').split('\'')[1];
				}

				var cls_id = get_classid_for_eaction($(this).parent().find('a'));
				var txt = $(this).parent().find('a').text().trim();

				eventAction = cls_id + '-' + txt.toTitleCase();
				eventLabel = '@' + href + ' : ' + typeofMouseClick(e.which); 
				sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);

			});


			$('.amazingslider-slider-0 .amazingslider-img-0').on('mousedown',function(e) {
					var src = $(this).find('img').attr('src');
					var txt = src.split('/').pop().split('.')[0];

					var slide_src = '';
					var slide_txt = '';
					var href = '';
					$('.amazingslider-slides li a').each(function(){
						slide_src = $(this).find('img').attr('src');
						slide_txt = slide_src.split('/').pop().split('.')[0];
						if(txt == slide_txt){
							href = $(this).attr("href").trim() ;
						}

					});
					var cls_id = get_classid_for_eaction($(this));
					
					eventAction = cls_id + '-' + txt.toTitleCase();
					eventLabel = '@' + href + ' : ' + typeofMouseClick(e.which); 
					sendClickEventCall(eventName, eventCategory, eventAction, eventLabel, eventValue);
			});

		}
		
		//To update the apply no links with the query string params.
		update_apply_now_links();
	})
})(jQuery);
//Generic Google tag manager code snippet - Start
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHQV2K');
//Generic Google tag manager code snippet - End
