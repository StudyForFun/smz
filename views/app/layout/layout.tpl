<!doctype html>
{% html %}
    {% head %}
    <script>
        var start_time_p = new Date().getTime();
    </script>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telphone=no, email=no" />
        <meta name="renderer" content="webkit">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="HandheldFriendly" content="true">
        <meta name="MobileOptimized" content="320">
        <meta name="screen-orientation" content="portrait">
        <meta name="x5-orientation" content="portrait">
        <meta name="msapplication-tap-highlight" content="no">
        <link rel="icon" href="favicon.ico" />
        {# title需要使用title标签包裹起来 #}
        {% title %}{{title}}{% endtitle%}
        {# 引用模块 #}
        {% require "../../lib/md.js" %}
        {% require "../../lib/zepto.js" %}
        {% require "../../lib/pagelet.js" %}
        {% require "../../lib/normalize.css" %}
        {% require "./layout.css" %}
        {% require "./font.css" %}
        {# 页面中执行的脚本 #}
        {% script %}
            // 监听页面点击事件，自动加载pagelet
            pagelet.autoload('layout');
        {% endscript %}
    {% endhead %}
    {% body %}
        {% pagelet $id="layout" class="layout" %} {# 最外层pagelet #}
               <div class="main" id="main">
                 <!-- 引用组件 -->
                 <div id="content">
                   <!-- 定义一个block，用于页面继承 -->
                   {% block content %}{% endblock %}
                 </div>
               </div>
        {% endpagelet %}
    {% endbody %}
    <!--livereload-->
{% endhtml %}
