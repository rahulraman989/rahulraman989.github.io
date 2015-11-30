var dataLayer = dataLayer || [];
var _gaq = _gaq || [];
var current_url = window.location.href;
var debugConsole = true;
var eventName = "track_element";
var href = "";
//alert('ss')
var trackers// = ga.getAll();

var i, len;
var cID;
var q;
var ampExists;
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
	if($.cookie('_ub')){
		ubparam = '&_ub='+$.cookie('_ub');
		}
	else{
		ubparam = '';
		}
	var url_querystring=window.location.search.substr(1);
	if(url_querystring!==""){
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

//Function to identify market (Ex: Sg, MY etc..) 
//URL is parsed and regular epressions are used. 
//We have multiple domains on the site (forms and website), as listed below so the name of the country  should be tweaked as the domain changes
function get_market()
{
	var host = window.location.host;
	var market;
	var parseURL;
	if (host == 'www.sc.com')
	{
		market = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
	}
	else if((host == 'online.forms.standardchartered.com' || host == 'forms.online.standardchartered.com') 
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
	return market;
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
