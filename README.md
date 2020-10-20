# curriculum vitae 个人简历

[hqrrr.github.io](https://hqrrr.github.io/)

**EN**
use simple html code below to create the box under section of your curriculum vitae
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

use code below to create new section
```
<div class="clear"></div>
<h3>Section XXX</h3>
<hr />
```

replace favicon.ico and favicon.jpeg under folder "favicon" with your favicon and change the content of the meta data in html:

```
<meta itemprop="name" content="hqrrr"/> <!-- replace the content with your name -->
...
<meta name="description" itemprop="description" content="hqrrr.github.io"/> <!-- replace the content with the URL of your website -->
```

**简中**
使用以下简单的html代码即可创建个人简历每一个板块中的方块
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

使用以下代码创建新的板块
```
<div class="clear"></div> <!-- 清除上下格式 -->
<h3>Section XXX</h3> <!-- 板块名字 -->
<hr /> <!-- 分割线 -->
```

将favicon文件夹下的favicon.ico和favicon.jpeg替换为您的favicon，并更改html中meta数据的内容：
```
<meta itemprop="name" content="hqrrr"/> <!-- replace the content with your name -->
...
<meta name="description" itemprop="description" content="hqrrr.github.io"/> <!-- replace the content with the URL of your website -->
```
