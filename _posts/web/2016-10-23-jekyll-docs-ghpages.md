---
layout: post
title: RedDocs Researcher Documentation
tags: "web-docs,env-docker,web"
categories: web
image: "/assets/img/posts/web/template-jekyll-docs.png"
snippet: "Template for lab and code documentation, easily deployed to github pages."
---

<p class="message">
Template for lab and code documentation
</p>

![/assets/img/posts/web/template-jekyll-docs.png](/assets/img/posts/web/template-jekyll-docs.png)

{% include toc.html %}

## TLDR

The RedDocs template is intended for researchers to use to easily deploy lab and code documentation! This is a [Jekyll](https://jekyllrb.com/docs/installation/) site, meaning that it is incredibly easy to contribute to. How easy?

- adding a news item means adding a markdown document to the `_posts/news` folder
- the core docs, which are rendered automatically along with navigation, are also markdown files in the `_docs` folder
- the site renders automatically on a push to the `gh-pages` branch of the repo, no additional building or continuous integration is necessary. This also means you can serve the docs in the same repo as the code.

[RedDocs](https://www.github.com/researchapps/template-jekyll-docs) is a template you can easily customize for your code and lab documentation, and publish on Github pages. You can <a href="https://researchapps.github.io/template-jekyll-docs" target="_blank">preview</a> the theme, or go directly to <a href="https://github.com/reseearchapps/template-jekyll-docs">download</a>.


### QuickStart
Clone, make changes to files in `_docs` and `_config.yml` and push to Github! More specifically:


{% highlight bash %}
      git clone https://github.com/researchapps/template-jekyll-docs
      cd template-jekyll-docs
{% endhighlight %}


1. Option 1: Docker

Download [docker](https://docs.docker.com/engine/installation/), download the template to a folder, and run a container:

{% highlight bash %}
      docker run --label=jekyll --volume=$(pwd):/srv/jekyll -it -p 127.0.0.1:4000:4000 jekyll/jekyll
{% endhighlight %}

Then go to `127.0.0.1:4000/template-jekyll-docs` in your browser to see the site! Make changes, add the files to your github folder (either the `master` branch of your user or organization repo (a repo named in the format `myusername.github.io`) or the `gh-pages` branch of another repo, which will appear at `myusername.github.io/reponame`.


2. Option 2: Run Locally

Install [Jekyll](https://jekyllrb.com/docs/installation/) and then run with:

{% highlight bash %}
      jekyll serve
{% endhighlight %}


### Need help?
Check out the [demo](https://researchapps.github.io/template-jekyll-docs), and for feature requests please submit an [issue](https://github.com/researchapps/template-jekyll-docs/issues). This is a work in progress, and much change is expected. Specifically:

- What functions or content formatting would you like to see for examples?
- What third party integrations would be useful?
- What can we describe better for setting up or changing content?

### Special Thanks
Huge props to [mkdocs-material](https://github.com/squidfunk/mkdocs-material) by squidfunk the base material design template that we converted to Jekyll, and to @killian for getting us started with the hugo version!
