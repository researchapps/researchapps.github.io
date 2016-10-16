---
layout: post
title: How to use Spark on Sherlock
tags: "hpc"
categories: hpc
---

This is early documentation on how to use Apache Spark on Sherlock.

{% include toc.html %}

## Quick Start

First, get a node on sherlock. For basic interactive work, just use sdev; we will start out with 4GB of ram for two hours. Note for SDEV the max time is 2 hours on the dev queue.

{% highlight bash %}
[wlaw@sherlock-ln01 login_node ~]$ sdev -m 4GB -t 2:00:00
Load the spark module; right now we only have spark/hadoop2.6/1.6.1
[wlaw@sh-3-28 ~]$ module load spark/hadoop2.6/1.6.1 
If you haven't set up your directory structure, just run 'simple-setup-spark'
[wlaw@sh-3-28 ~]$ simple-setup-spark 
{% endhighlight %}

Spark has been setup in `/scratch/users/wlaw/spark`. 
Note most of the files are symlinks but the conf directory has been copied for you to edit

Enjoy Spark!

{% highlight bash %}
[wlaw@sh-3-28 ~]$ export SPARK_HOME=$SCRATCH/spark
[wlaw@sh-3-28 ~]$ cd $SPARK_HOME
Run spark-shell with the --executor-memory to match the memory for your job.
[wlaw@sh-3-28 /scratch/users/wlaw/spark]$ ./bin/spark-shell --executor-memory 4G
Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\ \/ _ \/ _ `/ __/  '_/
   /___/ .__/\_,_/_/ /_/\_\   version 1.6.1
      /_/

Using Scala version 2.10.5 (Java HotSpot(TM) 64-Bit Server VM, Java 1.8.0_91)
Type in expressions to have them evaluated.
Type :help for more information.
Spark context available as sc.
SQL context available as sqlContext.

scala> val textFile = sc.textFile("README.md")
{% endhighlight %}

Or, run pyspark

{% highlight bash %}
[wlaw@sh-3-28 /scratch/users/wlaw/spark]$ bin/pyspark 
Python 2.6.6 (r266:84292, Jul 23 2015, 15:22:56) 
[GCC 4.4.7 20120313 (Red Hat 4.4.7-11)] on linux2
Type "help", "copyright", "credits" or "license" for more information.
Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\ \/ _ \/ _ `/ __/  '_/
   /__ / .__/\_,_/_/ /_/\_\   version 1.6.1
      /_/

Using Python version 2.6.6 (r266:84292, Jul 23 2015 15:22:56)
SparkContext available as sc, HiveContext available as sqlContext.
>>>  textFile = sc.textFile("README.md")
  File "<stdin>", line 1
    textFile = sc.textFile("README.md")
    ^
IndentationError: unexpected indent
>>> textFile = sc.textFile("README.md")
>>> textFile.count() 
95                                                                              
>>> exit
Use exit() or Ctrl-D (i.e. EOF) to exit
>>> exit()
{% endhighlight %}
