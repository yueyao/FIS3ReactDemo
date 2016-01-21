<!DOCTYPE html>
{%html framework="reactdemo:static/js/libs/mod.js" class="expanded"%}
    {%* 使用head插件替换head标签，主要为控制加载同步静态资源使用 *%}
	{%head%}
	    <meta charset="utf-8"/>
    	<meta content="{%$description%}" name="description">
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    	<title>{%$title%}</title>
        {%require name="reactdemo:components/normalize.css/normalize.css"%}
        {%require name="reactdemo:components/weui/style/weui.css"%}
        {%block name="block_head_static"%}

        {%/block%}
	{%/head%}
	{%* 使用body插件替换body标签，主要为可控制加载JS资源 *%}
	{%body%}
            <div id="banff-container">
                {%block name="content"%}
                {%/block%}
            </div>
	{%/body%}
{%/html%}