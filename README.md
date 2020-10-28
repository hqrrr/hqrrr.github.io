# curriculum vitae 个人简历

[hqrrr.github.io](https://hqrrr.github.io/)

## EN
### Use simple html code below to create the box under section of your curriculum vitae
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
<span lang="en">Educational background</span>
<span lang="de">Hochschulbildung</span>
<span lang="chn">教育背景</span>
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



### Demo code:
```
<div class="box box_print">
	<p class="box_time box_time_print">
		<span lang="en">04/2019 until now</span>
		<span lang="de">04/2019 bis jetzt</span>
		<span lang="chn">04/2019 至今</span>
	</p>
	<p><strong>
		<span lang="en">Environmental Engineering (M.Sc.)</span>
		<span lang="de">Umweltingenieurwissenschaften (M.Sc.)</span>
		<span lang="chn">环境工程 (M.Sc.)</span>
	</strong><br/>
		<span lang="en">Energy and environmental in building and construction<br/>
			RWTH Aachen, Germany</span>
		<span lang="de">Energie und Umwelt im Bauwesen<br/>
			RWTH Aachen, Deutschland</span>
		<span lang="chn">建筑能源与环境<br/>
			亚琛工业大学, 德国</span>
	</p>
	<ul>
	<li>
		<span lang="en">Project thesis</span>
		<span lang="de">Projektarbeit</span>
		<span lang="chn">项目</span>
		<ul>
			<li>
				<span lang="en">Digital planning methods in building technology</span>
				<span lang="de">Digitale Planungsmethoden in der Gebäudetechnik</span>
				<span lang="chn">建筑技术中的数字规划方法</span>
				<ul>
					<li>
						<span lang="en">Specialist planning of fastening technology</span>
						<span lang="de">Fachplanung Befestigungstechnik</span>
						<span lang="chn">紧固技术专业设计</span>
					</li>
					<li>
						<span lang="en">Score: 1.3</span>
						<span lang="de">Note: 1.3</span>
						<span lang="chn">分数: 1.3</span>
					</li>
				</ul>
			</li>
			<li>
				<span lang="en">building construction design</span>
				<span lang="de">Hochbau-Entwurf</span>
				<span lang="chn">建筑结构设计</span>
				<ul>
					<li>
						<span lang="en">Specialist planning of TGA</span>
						<span lang="de">Fachplanung TGA</span>
						<span lang="chn">建筑技术设备的专业设计</span>
					</li>
					<li>
						<span lang="en">Score: 2.0</span>
						<span lang="de">Note: 2.0</span>
						<span lang="chn">分数: 2.0</span>
					</li>
				</ul>
			</li>
		</ul>
	</li>
	</ul>
</div>
```

## 简中
### 使用以下简单的html代码即可创建个人简历每一个板块中的方块
```
<div class="box box_print">
	<p class="box_time box_time_print">xx/20xx - xx/20xx</p>	<!-- 时间 -->
	<p><strong>Title</strong><br/>	<!-- 标题, <br/>回车 -->
	Text abc 123</p>	<!-- 文本内容 -->
	<ul>
		<li>List 1</li>	<!-- 列表示例 -->
		<ul>
			<li>Sublist 1</li>
			<li>Sublist 2</li>
		</ul>
		<li>List 2</li>
	</ul>
</div>
```

### 使用以下代码创建新的板块
```
<div class="clear"></div> <!-- 清除上下格式 -->
<h3>Section XXX</h3> <!-- 板块名字 -->
<hr /> <!-- 分割线 -->
```

### 将favicon文件夹下的favicon.ico和favicon.jpeg替换为您的favicon，并更改html中meta数据的内容：
```
<meta itemprop="name" content="hqrrr"/> <!-- replace the content with your name -->
...
<meta name="description" itemprop="description" content="hqrrr.github.io"/> <!-- replace the content with the URL of your website -->
```

### 使用下面的span标签创建多语言版本：
```
<span lang="en">Educational background</span>
<span lang="de">Hochschulbildung</span>
<span lang="chn">教育背景</span>
```

### 如果需要其他语言，请在javascript / language.js和index.html中修改代码：
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

### 演示代码：
```
<div class="box box_print">
	<p class="box_time box_time_print">
		<span lang="en">04/2019 until now</span>
		<span lang="de">04/2019 bis jetzt</span>
		<span lang="chn">04/2019 至今</span>
	</p>
	<p><strong>
		<span lang="en">Environmental Engineering (M.Sc.)</span>
		<span lang="de">Umweltingenieurwissenschaften (M.Sc.)</span>
		<span lang="chn">环境工程 (M.Sc.)</span>
	</strong><br/>
		<span lang="en">Energy and environmental in building and construction<br/>
			RWTH Aachen, Germany</span>
		<span lang="de">Energie und Umwelt im Bauwesen<br/>
			RWTH Aachen, Deutschland</span>
		<span lang="chn">建筑能源与环境<br/>
			亚琛工业大学, 德国</span>
	</p>
	<ul>
	<li>
		<span lang="en">Project thesis</span>
		<span lang="de">Projektarbeit</span>
		<span lang="chn">项目</span>
		<ul>
			<li>
				<span lang="en">Digital planning methods in building technology</span>
				<span lang="de">Digitale Planungsmethoden in der Gebäudetechnik</span>
				<span lang="chn">建筑技术中的数字规划方法</span>
				<ul>
					<li>
						<span lang="en">Specialist planning of fastening technology</span>
						<span lang="de">Fachplanung Befestigungstechnik</span>
						<span lang="chn">紧固技术专业设计</span>
					</li>
					<li>
						<span lang="en">Score: 1.3</span>
						<span lang="de">Note: 1.3</span>
						<span lang="chn">分数: 1.3</span>
					</li>
				</ul>
			</li>
			<li>
				<span lang="en">building construction design</span>
				<span lang="de">Hochbau-Entwurf</span>
				<span lang="chn">建筑结构设计</span>
				<ul>
					<li>
						<span lang="en">Specialist planning of TGA</span>
						<span lang="de">Fachplanung TGA</span>
						<span lang="chn">建筑技术设备的专业设计</span>
					</li>
					<li>
						<span lang="en">Score: 2.0</span>
						<span lang="de">Note: 2.0</span>
						<span lang="chn">分数: 2.0</span>
					</li>
				</ul>
			</li>
		</ul>
	</li>
	</ul>
</div>
```
