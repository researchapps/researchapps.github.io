---
sectionid: tutorial-general-hpc
sectionclass: h1
title: HPC Computing
number: 1000
---

Do you want to learn more about Linux, running jobs on an HPC research cluster, or about web applications? You've come to the right place!

{% include toc.html %}

## Learning Resources

We are putting together tutorials and templates for researchers, right now manifested as a collection of simple <a href="/pages/applications">application templates</a>. Please stay tuned for updates, and <a href="/support">reach out</a> if you are looking for consulting for a site or application.

## Linux and Unix 

### Getting Started
While the material may initially seem daunting, don't be discouraged.  If you've been able to pick up R or SAS to do any work, you'll be able to easily figure out how to use Linux.  Here we have provided a list of resources that may suite your needs.

* [Interactive Crash Course](http://linuxsurvival.com/): If you pass all four quizzes, you got it! <em>(45min)</em>
* The Cornell Center for Advanced Computing has a great <a href="https://cvw.cac.cornell.edu/Linux" target="_blank">Linux Tutorial</a> that we recommend to new users. This is a tutorial that is typical for any specific Linux system (<a href="https://portal.tacc.utexas.edu/documents/13601/1080823/LinuxIntro-20141009-eijkhout+%281%29.pdf/bcdcefad-47c5-4741-ab9f-c3380e63df93" target="_blank">PDF</a>).
* [Unix Tutorial](https://marylou.byu.edu/documentation/unix-tutorial)
* [Learn about shell](https://swcarpentry.github.io/shell-novice/): from Software Carpentry
* [Comprehensive Linux Manual](http://www.stanford.edu/~chekh/lxes-en-manual-cc.pdf)
* [Mac and Linux via Lynda.com](http://www.lynda.com/Mac-OS-X-10-6-tutorials/Unix-for-Mac-OS-X-Users/78546-2.html): Stanford gives us Lynda for free, go for it!
* [Self-paced EdX Course](https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-2)

### Code Editors
A code editor is a personal, sensitive decision for the most wordly of geeks. You might try a few, and decide which one that you like.
* [nano tutorial](http://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/)
* [vim tutorial](http://www.openvim.com/): This is an interactive tutorial for the editor `vim`


## Scientific Computing

Read the "<a href="http://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1001745" target="_blank">Best Practices for Scientific Computing</a>" a paper written by biologists for biologists in 2014

* [Software carpentry](https://software-carpentry.org/lessons.html) further expouses some of the concepts learned above.
* A great and accessible intro to using `git` [is here](http://www-cs-students.stanford.edu/~blynn/gitmagic/).
* [Intro to Programming Course](https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6)
* [Apache Spark Tutorial](http://www.tutorialspoint.com/apache_spark/index.htm)

## Programming GPUs
* [Introduction to GPU Accelerated Computing with C and C++](https://developer.nvidia.com/how-to-cuda-c-cpp)
* [NVIDIA Developer Zone](https://devtalk.nvidia.com/)

## Machine learning

* [Tensorflow](https://www.tensorflow.org/)
* [AWS Machine Learning](https://github.com/amznlabs/amazon-dsstne): Deep Scalable Sparse Tensor Network Engine
* [http://neuralnetworksanddeeplearning.com/chap1.html](Neural Networks Tutorial)
* [Tensor Flow Neural Network Playground](http://playground.tensorflow.org/#activation=tanh&amp;batchSize=10&amp;dataset=gauss&amp;regDataset=reg-plane&amp;learningRate=0.03&amp;regularizationRate=0&amp;noise=0&amp;networkShape=4,2&amp;seed=0.90975&amp;showTestData=false&amp;discretize=false&amp;percTrainData=50&amp;x=false&amp;y=true&amp;xTimesY=false&amp;xSquared=false&amp;ySquared=false&amp;cosX=false&amp;sinX=false&amp;cosY=false&amp;sinY=false&amp;collectStats=false&amp;problem=classification)
* [Tensor Flow Libraries on Github](https://github.com/jtoy/awesome-tensorflow/?imm_mid=0e3906&amp;cmp=em-data-na-na-newsltr_20160511)

For both scientific computing and general machine learning, you will likely want to run an analysis massively in parallel, or perhaps concept to a machine that has significantly more memory than your laptop. To aid with the tasks of getting many users connected to these machines, we have job managers.

## Job Scheduling
What in the world is a job scheduler? When you go on a cluster like Sherlock, you will likely want to run an analysis massively in parallel, or perhaps concept to a machine that has significantly more memory than your laptop. To aid with the tasks of getting many users connected to these machines, we have job managers.

<ul>
<li>
    <a href="http://slurm.schedmd.com/tutorials.html" target="_blank">SLURM Scheduler</a> official tutorials.</a>
</li>
<li>
    <a href="https://wikis.utexas.edu/display/CCBB/sge-tutorial" target="_blank">SGE Tutorial</a></a>
</li>
</ul>

## HPC Architecture

<ul>
<li>
    <a href="http://insidehpc.com/hpc101/hpc-architecture-for-beginners/" target="_blank">HPC Architecture for beginners</a>
</li>
</ul>

## Clusters Available

### Stanford University
Stanford offers several on and off campus options for Stanford Researchers to do scientific computing, including <a href="http://sherlock.stanford.edu">Sherlock</a> and <a href="http://farmshare.stanford.edu">Farmshare</a>. You should consult each of the respective sites for full documentation.


### XSEDE
XSEDE is an "Extreme Science and Engineering Discovery Environment", an amazing resource that offers a set of <a href="https://portal.xsede.org/course-calendar/" target="_blank"> courses</a> to learn about everything from MPI programming to Apache Spark.
