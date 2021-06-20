// JavaScript Document

$(function(){
     // default language: English
     var language = $('#lang :selected').val();
     $("span:lang(de)").hide();
     $("span:lang(en)").show();
	 $("span:lang(chn)").hide();
     // select language
     $('#lang').change(function(){
         language = $('#lang :selected').val();
         if(language == "en"){
             $("span:lang(en)").show();
             $("span:lang(de)").hide();
			 $("span:lang(chn)").hide();
         }
         else if(language == "de"){
             $("span:lang(en)").hide();
             $("span:lang(de)").show();
			 $("span:lang(chn)").hide();
         }
		 else{
			 $("span:lang(en)").hide();
             $("span:lang(de)").hide();
			 $("span:lang(chn)").show();
		 }
     })
 })