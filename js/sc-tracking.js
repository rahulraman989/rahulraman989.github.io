var trkint;
var ga;
var gaCliendId;
var trkSessId;
var ub;
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

// Generic code for Base 32 encoding 
!function(){function t(){var t=0,e=0;this.output="",this.readByte=function(r){return"string"==typeof r&&(r=r.charCodeAt(0)),0>t?e|=r>>-t:e=r<<t&248,t>3?(t-=8,1):(4>t&&(this.output+=i[e>>3],t+=5),0)},this.finish=function(r){var n=this.output+(0>t?i[e>>3]:"")+(r?"$":"");return this.output="",n}}function e(){var t=0,e=0;this.output="",this.readChar=function(r){"string"!=typeof r&&"number"==typeof r&&(r=String.fromCharCode(r)),r=r.toLowerCase();var n=s()[r];"undefined"!=typeof n&&(n<<=3,e|=n>>>t,t+=5,t>=8&&(this.output+=String.fromCharCode(e),t-=8,e=t>0?n<<5-t&255:0))},this.finish=function(e){var r=this.output+(0>t?i[bits>>3]:"")+(e?"$":"");return this.output="",r}}function r(e){var r=new t,n=r.update(e,!0);return n}function n(t){var r=new e,n=r.update(t,!0);return n}function u(t,e){"undefined"==typeof f&&(f=require("crypto"));var n=f.createHash("sha1");if(n.digest=function(t){return function(){return r(t.call(this,"binary"))}}(n.digest),e){if("string"==typeof t||Buffer.isBuffer(t))try{return e(null,u(t))}catch(i){return e(i,null)}return t.on("data",function(t){n.update(t)}),void t.on("end",function(){e(null,n.digest())})}return t?n.update(t).digest():n}var i="0123456789abcdefghjkmnpqrtuvwxyz",o={o:0,i:1,l:1,s:5},s=function(){for(var t={},e=0;e<i.length;e++)t[i[e]]=e;for(var r in o)o.hasOwnProperty(r)&&(t[r]=t[""+o[r]]);return s=function(){return t},t};t.prototype.update=function(t,e){for(var r=0;r<t.length;)r+=this.readByte(t[r]);var n=this.output;return this.output="",e&&(n+=this.finish()),n},e.prototype.update=function(t,e){for(var r=0;r<t.length;r++)this.readChar(t[r]);var n=this.output;return this.output="",e&&(n+=this.finish()),n};var f,a;u.file=function(t,e){return"-"==t?(process.stdin.resume(),u(process.stdin,e)):("undefined"==typeof a&&(a=require("fs")),a.stat(t,function(r,n){return r?e(r,null):n.isDirectory()?e({dir:!0,message:"Is a directory"}):u(require("fs").createReadStream(t),e)}))};var d={Decoder:e,Encoder:t,encode:r,decode:n,sha1:u};"undefined"!=typeof window&&(window.base32=d),"undefined"!=typeof module&&module.exports&&(module.exports=d)}();

//Get the browser and browser version that the user is on
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

// Get the segment within the sc.com website 
// Segments can be the following : Personal, Priority and SME
// Short names for each of the segments parsed from the URL
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

// Get the list of all URL parameters from the URL
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
//Get the values for each of the URL parameters that have been extracted 
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
	if($.cookie('_ub')){
		ubparam = '_ub='+$.cookie('_ub');
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
	var enTg = $(this).attr('href');
	lgitem._tg = base32.encode(enTg);
	
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
//Caling the function to send an event hit to GA on every page load 
//sendClickEventCall is the name of the function to send hits to GA
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
	var lgitemstr = JSON.stringify(lgitem);
	ub._lg.push(lgitemstr);
	
	$.cookie('_ub', JSON.stringify(ub), { expires: 7, path: '/' });
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
//Code to get the value of the client ID that google sets 
//This client id is specific to a user 
//Saving this will enable making a correlation between data collected in google analytics and data collected in our logging system 
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
//beforeunload can not only detect page unloads but can also detect users closing the browser
$(window).on('beforeunload', function(){
	insertPageUnloadTrk();
	});
$(document).ready(function(){
	trkint = setInterval(initLocalTrack, 500);  
	});
