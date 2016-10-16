---
layout: post
title: Host your docs on Github pages
tags: "web-docs,env-docker,web"
categories: web
image: "/assets/img/posts/template-jekyll-github.png"
snippet: "Template for lab and code documentation, easily deployed to github pages."
---

<p class="message">
Template for lab and code documentation
</p>

![/assets/img/posts/template-jekyll-github.png](/assets/img/posts/template-jekyll-github.png)

{% include toc.html %}

## TLDR

[Stanford Docster](https://stanford-rc.github.io/template-jekyll-github) is a template you can easily customize for your code and lab documentation, and publish on Github pages. You can <a href="https://stanford-rc.github.io/template-jekyll-github" target="_blank">preview</a> the theme, or go directly to <a href="https://github.com/stanford-rc/template-jekyll-github">download</a>.

### Features
* Nice syntax highlighting
* dynamic multi-level navigation

### QuickStart
Clone, make changes to files in `_entries` and `_config.yml` and push to Github! More specifically:


{% highlight bash %}
      git clone https://github.com/stanford-rc/template-jekyll-github
      cd template-jekyll-github
{% endhighlight %}


1. Option 1: Docker

Download [docker](https://docs.docker.com/engine/installation/), download the template to a folder, and run a container:

{% highlight bash %}
      docker run --label=jekyll --volume=$(pwd):/srv/jekyll -it -p 127.0.0.1:4000:4000 jekyll/jekyll
{% endhighlight %}

Then go to `127.0.0.1:4000` in your browser to see the site! Make changes, add the files to your github folder (either the `master` branch of your user or organization repo (a repo named in the format `myusername.github.io`) or the `gh-pages` branch of another repo, which will appear at `myusername.github.io/reponame`.

2. Option 2: Run Locally

Install [Jekyll](https://jekyllrb.com/docs/installation/) and then run with:

{% highlight bash %}
      jekyll serve
{% endhighlight %}

### Documentation
Check out the [demo](https://stanford-rc.github.io/template-jekyll-github), and the [repository on Github](https://github.com/stanford-rc/template-jekyll-github) for complete documentation. 


### Need Help?
We made this for you, and we want it to fit your needs. If you want to request an improvement, please submit an [issue](https://github.com/stanford-rc/template-jekyll-github/issues). If you need help, please reach out to us.
