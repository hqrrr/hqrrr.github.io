# CV

[hqrrr.github.io](https://hqrrr.github.io/)

## Guide
### Use code below to create the box under section of your curriculum vitae
```
<div class="box box_print">
	<p class="box_time box_time_print">xx/20xx - xx/20xx</p>
	<p><strong>Title</strong><br/>
	Text abc 123</p>
	<ul>
		<li>List 1</li>
		<ul>
			<li>Sublist 1</li>
			<li>Sublist 2</li>
		</ul>
		<li>List 2</li>
	</ul>
</div>
```

### Use code below to create new section
```
<div class="clear"></div>
<h3>Section XXX</h3>
<hr />
```

### Replace favicon.ico and favicon.jpeg under folder "favicon" with your favicon and change the content of the meta data in html:

```
<meta itemprop="name" content="hqrrr"/> <!-- replace the content with your name -->
...
<meta name="description" itemprop="description" content="hqrrr.github.io"/> <!-- replace the content with the URL of your website -->
```

### Use the span label below to create multilanguage version:
```
<span lang="en">English</span>
<span lang="de">German</span>
<span lang="chn">中文</span>
```

### If other languages are needed, change the code in javascript/language.js and index.html:
```
// language.js
$(function(){
     // default language: English
     var language = $('#lang :selected').val();
     $("span:lang(de)").hide();
     $("span:lang(en)").show();
     $("span:lang(chn)").hide();
     $("span:lang(XXX)").hide(); // add language "XXX"
     // select language
     $('#lang').change(function(){
         language = $('#lang :selected').val();
         if(language == "en"){
             $("span:lang(en)").show();
             $("span:lang(de)").hide();
	     $("span:lang(chn)").hide();
	     $("span:lang(XXX)").hide();
         }
         else if(language == "de"){
             $("span:lang(en)").hide();
             $("span:lang(de)").show();
	     $("span:lang(chn)").hide();
	     $("span:lang(XXX)").hide();
         }
	 else if(language == "chn"){  // add language "XXX"
             $("span:lang(en)").hide();
             $("span:lang(de)").hide();
	     $("span:lang(chn)").show();
	     $("span:lang(XXX)").hide();
         }
	 else{
	     $("span:lang(en)").hide();
	     $("span:lang(de)").hide();
	     $("span:lang(chn)").hide();
	     $("span:lang(XXX)").show(); // add language "XXX"
		 }
     })
 })
 
// index.html
<div id="langBox" style="text-align: right">  <!-- language switcher -->
	<select id="lang">
	<!-- <option value="browser">Indicated by the browser</option> -->
	<option value="en">English</option>
	<option value="de">Deutsch</option>
	<option value="chn">简体中文</option>
	<option value="XXX">XXXXXX</option> <!-- add language "XXX" -->
	</select>
</div> 
```
