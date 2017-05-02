---
layout: page
title: Applications
---

{% include toc.html %}

<style>
.boxxy {
  background: #CCC;
  width: 200px;
  position: relative;
  height: 200px;
  margin: 5px;
  float: left;
  padding:15px;

}
.boxxy-meta {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color:white;
}

.boxxy-text:hover {
  color:yellow;
  font-weight:800;
  color: yellow;
}


a {
  text-decoration: none !important;
}

a:hover, 
a:active,
a:focus, {
  text-decoration: none !important;
}

</style>
Explore some of our completed and in-progress applications.

{% for category in site.categories %}
{% if category | first %}
<div class="boxxy" style="background:#ac4142">
  <small class="boxxy-meta">{{ category | first }}</small>
</div>
{% else %}
{% endif %}
{% for posts in category %}
{% for post in posts %}
{% if post.title %}
<div class="boxxy">
  <a class="boxxy-text" style="color:#666" href="{{ post.url }}">{{ post.title }}</a>
</div>
{% endif %}
{% endfor %}

{% endfor %}
{% endfor %}

