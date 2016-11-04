---
layout: post
title: "Recipe: Experiment Factory for Stanford"
tags: "web,experiment,docker,mysql"
categories: experiments
image: "/assets/img/posts/experiments/expfactory-stanford/tol.png"
snippet: "Deploying a local experiment with a MySQL database on AFS"
---

<p class="message">
Deploying a local experiment with a MySQL database on AFS
</p>

![/assets/img/posts/experiments/expfactory-stanford/tol.png](/assets/img/posts/experiments/expfactory-stanford/tol.png)

{% include toc.html %}

## About

While the current verison of [The Experiment Factory](https://www.expfactory.org) is great for those with a login (util the second version is released) there are limited options for researchers to deploy these web based experiments.

To ease development, with help from some of our open source collaborators (thanks <a href="https://github.com/tangi75" target="_blank">@tangi75</a>! 
we have a simple version that can be deployed to a local MySQL database, and integrated into the Concerto platform (for details about Concerto deployment, <a href="http://expfactory.readthedocs.io/en/latest/deployment.html?highlight=concerto#expfactory-server" target="_blank">see here</a>. While this recipe will include details for Stanford researchers to deploy experiments to the Stanford static web server, the general workflow can be used for any static location and MySQL database.


### Requirements

- Python (version 2.7) for generating your static files
- a MySQL database with read/write access
- a web server to put static files with Php

## Instructions

### 0. Get your space.
At Stanford, you can use your personal or group <a href="https://uit.stanford.edu/service/afs">AFS folder</a>. You will need to <a href="https://uit.stanford.edu/service/cgi/personal" target="_blank">follow the instructions here for personal</a> (or <a href="https://uit.stanford.edu/service/cgi/group" target="_blank">group</a>) to enable the cgi-bin</a>. This is an overly silly way of saying "make the language PhP work in this folder called `cgi-bin`"


### 1. Create your database
You can also ask for your own <a href="https://uit.stanford.edu/service/sql">MySQL database</a> with just a few clicks! Click on "Request MySQL Service." Note that you must have affiliation with a Department, Group, Service, or Class. If you don't have one, this basically means getting a faculty or staff to join forces and <a href="https://uit.stanford.edu/service/web/centralhosting/howto_group" target="_blank">create a group</a>.

![/assets/img/posts/experiments/expfactory-stanford/mysql-request.png](/assets/img/posts/experiments/expfactory-stanford/mysql-request.png)
 
Make sure to click the box that says "Additional read only database account" if you are interested in adding some kind of reading client or application. Once you click submit, it's going to give you a big list of read and write credentials that looks something like this:

```bash
MySQL Username	xxxxxxxx
Initial Password	xxxxxxx
Read-Only Username	xxxxxx
Read-Only Account Password	xxxxxxx
MySQL Server Name	mysql-user.stanford.edu
Database Name	xxxxxxxxxx
DNS address	xxxxx
```

Keep a link to the <a href="http://tools.stanford.edu/phpmyadmin/" target="_blank">MySQL console</a> handy, because without any other query tool, you will find it easiest to go here to look at and export data. I like to have a hidden file called `.secrets` that is always in my `.gitignore` file associated with the repo I use to generate the experiments on my local machine only to keep them safe.


### 2. Get your experiments!
You will need to install and use the experiment factory python functions to generate your experiment. To make things even easier, I've made a <a href="https://www.github.com/researchapps/template-experiment-mysql">simple repo</a> to get you started! Note that Python 3 is currently not supported. If you are new to Python, check out <a href="http://vsoch.github.io/2016/python-install/" target="_blank">some options for installation here</a>, and then go forth: 


```bash
pip install expfactory
git clone https://www.github.com/researchapps/template-experiment-mysql
cd template-experiment-mysql
```

Add in the `MySQL Username` and `Initial Password` into the corresponding fields `DATABASEUSER` and `USERPASSWORD`, along with the DNS address to replace `localhost` in the file `database_connect.php`:

```php
<?php

$dbc = mysql_connect('localhost', 'DATABASUSER', 'USERPASSWORD');  // host, user, password
mysql_select_db('DATABASETABLE', $dbc); // databasename

// get the table name
$data_table = 'expfactory';
?>
```

Then you can <a href="http://expfactory.github.io/table.html" target="_blank"> 
choose your experiments</a> and make sure to remember the experiment ID (`exp_id`) of the ones that you want to add. For example, my favorite is the Tower of London, so I'll remember `tower_of_london`.

### 3. Generate the static files
Now that you have expfactory installed, and have decided on your experiments, you should generate the static content. First, do a double check that you are running some flavor of Python 2.*:

```bash
$ python --version
Python 2.7.12 :: Anaconda 4.2.0 (64-bit)
```

For this example, I'm going to write output to a folder on my Desktop, because then I can easily move it to the group webspace and delete it.

```bash
cd template-experiment-mysql
python setup_battery_for_webserver.py --output /home/vanessa/Desktop/tol --experiments tower_of_london
```

If you have more than one experiment, you can separate them with commas. You'll see some output about downloading repos and generating the files:

```bash
Downloading expfactory repos...
Generating base...
WARNING: config.json is missing field name: volatile_bandit
WARNING: config.json is missing field reference: volatile_bandit

.
.
.

Generating experiment and battery templates...
Battery generated in /home/vanessa/Desktop/tol
```

And then you should have your static content ready in the output folder specified, in this case `/home/vanessa/Desktop/tol`

### 4. Generate the table!
Before we upload files or test your experiment, we need to create the table! 
First log in to the <a href="http://tools.stanford.edu/phpmyadmin/" target="_blank">MySQL console.</a> You will see this screen, the phpMyAdmin console:

![/assets/img/posts/experiments/expfactory-stanford/phpadmin.png](/assets/img/posts/experiments/expfactory-stanford/phpadmin.png)

where you can log in with the username and password you generated. Once you see the console, you will need to select your database in the left column, which should be some amalgomation of your group name and the table name you selected when you created the database. Once you have selected the database, then click on the `SQL` tab to run a command. What command?

If you look at the file `create_expfactory_table.sql` this code is your command. You need to replace `DATABASENAME` with the name of your database:

```bash
CREATE TABLE `expfactory` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `test_time` TIMESTAMP,
  `subject` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `experiment` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `json` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
```

Note that if you run this command from one level up (when logged in, but not connected to the database) you would need to specify the address of the (database).(table):

```bash
CREATE TABLE `DATABASENAME`.`expfactory` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `test_time` TIMESTAMP,
  `subject` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `experiment` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `json` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
```

Details, details, my good Watson! You should then be able to click on the table name in the left column, and see all the new fields! And that it's empty.

![/assets/img/posts/experiments/expfactory-stanford/table.png](/assets/img/posts/experiments/expfactory-stanford/table.png)

Now let's move on to deploying our experiment to connect to it!

### 5. Upload your files
You will want to use some flavor of FTP/sFTP to upload your files to AFS. There is <a href="https://uit.stanford.edu/service/afs/file-transfer">very good documentation</a> about options for that. They **don't** have very good documentation if you are using standard Linux, so in this case I am going to use scp.

```bash
cd /home/vanessa/Desktop
scp -r /home/vanessa/Desktop/tol username@corn.stanford.edu:/afs/ir.stanford.edu/group/YOURGROUPNAME/cgi-bin
```

This will move the folder `tol` and the entirety of its contents into `cgi-bin`, meaning there is a folder called `cgi-bin/tol`.


### 6. Test your experiment!
You should now be able to go to the static folder address, in this case my experiment is deployed at <a href="http://web.stanford.edu/group/langlotzlab/cgi-bin/tol/" target="_blank">tol on my lab webspace (http://web.stanford.edu/group/langlotzlab/cgi-bin/tol/)</a> and participate in the experiment! If you want to do a test, don't specify an ID, and this will go in the database as an id of 0:

```bash  
http://web.stanford.edu/group/langlotzlab/cgi-bin/tol
```

if you want to have a participant run through it (for realsies) then you can have them complete a link with the `uid` parameter appended:

```bash  
http://web.stanford.edu/group/langlotzlab/cgi-bin/tol/?uid=123456789
```

<p class="message">
PROTIP: Do not include identifying information in your experiments, or the uid! Use a number that corresponds to a subject that has other meta-data stored in a HIPAA certified location.
</p>

We can now finish the experiment, making sure to press enter until you see a blank white screen, and then look at the database console to see the result:

![/assets/img/posts/experiments/expfactory-stanford/result.png](/assets/img/posts/experiments/expfactory-stanford/result.png)

If we look closer, we see that the main portion of the result, the experiment field, is just a json string:

![/assets/img/posts/experiments/expfactory-stanford/mysql-request.png](/assets/img/posts/experiments/expfactory-stanford/mysql-request.png). This means that you can give the read only address to someone else in your lab (RAs, students, etc) and they can use it to connect to the data via their software of choice (Python, R, etc.) and work with the data. Pretty darn neat, right?

You should be sure to back up your data, and we strongly reccommend adding some <a href="https://uit.stanford.edu/service/web/centralhosting/userauth" target="_blank">user authentication</a> and asking users to log in before completing your experiments.


### 7. Get help!
Do you need help? Support? Research Applications at Stanford is here for you! Please <a  target="_blank" href="https://github.com/researchapps/template-experiments-mysql/issues">post an issue </a> if you have a feature request or question, and don't hesitate to <a href="https://researchapps.github.io/pages/support">reach out to us</a>.


## Papers

- [The Experiment Factory: Standardizing Behavioral Experiments, Frontiers](http://journal.frontiersin.org/article/10.3389/fpsyg.2016.00610/full)
