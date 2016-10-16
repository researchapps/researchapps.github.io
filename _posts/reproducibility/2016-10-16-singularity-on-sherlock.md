---
layout: post
title: Singularity (containers) on Sherlock
tags: "hpc,containers,reproducibility"
categories: reproducibility
image: "/assets/img/posts/singularity.png"
snippet: "Have you heard the news? You can run container-based workflows on Sherlock!"
---

<p class="message">
Have you heard the news? Sherlock supports containers!
</p>

![/assets/img/posts/singularity.png](/assets/img/posts/singularity.png)

Quick start! Here is a <a href="https://github.com/cjprybol/reproducibility-via-singularity" target="_blank">GitHub repo</a> with Singularity demos with an emphasis on reproducibility-via-singularity.

{% include toc.html %}

Docker-like functionality is now available via <a href="http://singularity.lbl.gov" target="_blank">Singularity</a> and the corresponding modules (`singularity/2.0`, `singularity/2.1`, `singularity/2.1.2`).

## What is Singularity?
Singularity allows for the creation of container images in a variety of environments. These can then be imported and executed on Sherlock as a dependency-free, portable and autonomous environment. Singularity literally enables BYOE (Bring-Your-Own-Environment) supercomputing.

Some key features of Singularity:

* Encapsulation of the environment
* Containers are image based
* No user contextual changes or root escalation allowed
* No root owned daemon processes

Reproducibility in scientific research is one of the most powerful uses of Singularity, in addition to portability of workflows and code.


## Running on Sherlock

To run on Sherlock enter:

 
{% highlight bash %}
module load singularity
{% endhighlight %}

Then:

{% highlight bash %}
singularity
{% endhighlight %}

Simplest way to run your container:

{% highlight bash %}
singularity run your_container.img
{% endhighlight %}

