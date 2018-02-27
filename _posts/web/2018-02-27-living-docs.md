---
layout: post
title: Living Documentation
tags: "web-docs,web"
categories: web
snippet: "add quick edit and support links to your Github pages docs"
editable: web
---

<p class="message">
Edit and support links for Github pages
</p>

It's important that the readers of your code documentation have easy access to ask for help, or suggest a change.
Toward this goal, we've [written up a post](https://vsoch.github.io/2018/interactive-posts/) on living documentation,
and provided a few [simple examples](https://www.github.com/researchapps/living-docs). We will review them here,
and suggest that you follow the links for more complete information.


## Static Files Solution
To see the example live, go to [https://researchapps.github.io/living-docs/no-jekyll](https://researchapps.github.io/living-docs/no-jekyll). This solution will add a dropdown with links to one or more static pages (not using Jekyll, and anywhere like Github pages that has a web server). To deploy these docs for your own site, do the following:

 1. Clone the repository `git clone https://www.github.com/researchapps/living-docs`
 2. Copy the content of docs/no-jekyll and place in your own docs folder
 3. Add the style and css files to each page you want rendered
 4. Push to Github to add the content, and of course write some docs!
 5. Make sure to enable Github Pages for the docs folder.

The static content that you include will have a snippet that looks like this:

```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="living-doc.js"></script>
<link rel="stylesheet" href="living-doc.css">
```

And at the top of the file `living-doc.js` make sure to edit the variable with your Github url:

```
var github = "https://www.github.com/researchapps/living-docs"
```

## Jekyll Solution
To see the jekyll solution, browse to [https://researchapps.github.io/living-docs/](https://researchapps.github.io/living-docs/). This is a very simple site that has minimal configuration, so we just use a global Github pages theme. This is in the `_config.yaml`, and you should edit these fields appropriately:

```
title: "Living Documentation"
description: docs with easy to click edit buttons
url: https://researchapps.github.io/living-docs
repo: https://github.com/researchapps/living-docs
theme: jekyll-theme-minimal
```

And then in each page that you want to render the dropdown helpers, add the snippet to include the `editable.html`. This referes to a file called `_includes/editable.html`. You can do the same as above with respect to cloning and copying files, but do so for the content of docs and feel free to ignore the docs/no-jekyll folder.
