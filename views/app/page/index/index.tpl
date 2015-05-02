{% extends '../../layout/layout.tpl' %}

{% block content %}
<div page-id="/index/{{tab}}">
	<div class="index">
		{% require "c/m-header" %}
		{% require "c/m-imgbars" %}
	</div>
</div>
{% endblock %}