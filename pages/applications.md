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
  right: 7px;
  color:white;
  font-weight:800;
  font-size:20px;
  margin:7px;
}

.boxxy-text:hover {
  color:yellow;
  font-weight:800;
  color: yellow;
}

.showing {
  background: #f92672;
  color:white;
}

.hiding {
  background: #CCC;
  color: #999;
}

.btn {
  border-radius:30px;
  border: none !important;
  float:left;
  margin:3px;
  padding:5px;
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

<div>
{% for category in site.categories %}
{% if category | first %}
<button id="toggle-{{ category | first }}" class="btn btn-sm btn-secondary showing toggle-button">{{ category | first }}</button>
{% endif %}
{% endfor %}
</div><br>

{% for category in site.categories %}
{% if category | first %}
<div class="boxxy showing box-{{ category | first }}" style="background:#43add4">
  <small class="boxxy-meta">{{ category | first }}</small>
</div>
{% else %}
{% endif %}

{% for posts in category %}
{% for post in posts %}
{% if post.title %}
<div class="boxxy box-{{ category | first }}">
  <a class="boxxy-text" style="color:#666" href="{{ post.url }}">{{ post.title }}</a>
</div>
{% endif %}
{% endfor %}
{% endfor %}
{% endfor %}

<script>
$('.toggle-button').click(function(){
   if ($(this).hasClass('showing')) {
       $(this).removeClass('showing');
       $(this).addClass('hiding');
   } else {
       $(this).removeClass('hiding');
       $(this).addClass('showing');
   }
   var toggleclass = "." + $(this).attr('id').replace('toggle','box')
   $(toggleclass).toggle();
})
</script>
