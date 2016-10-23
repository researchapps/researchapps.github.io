---
layout: page
title: Applications
---

{% include toc.html %}

Explore some of our completed and in-progress applications.

{% for category in site.categories %}
<h2>{{ category | first }}</h2>
<ul>
{% for posts in category %}
  {% for post in posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
{% endfor %}
</ul>
{% endfor %}
