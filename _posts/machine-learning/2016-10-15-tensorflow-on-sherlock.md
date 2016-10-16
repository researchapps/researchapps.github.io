---
layout: post
title: Tensorflow on Sherlock
tags: "hpc,machine-learning"
categories: machine-learning
---

{% include toc.html %}

We have several versions of <a href="https://www.tensorflow.org/" target="_blank">TensorFlow</a> on Sherlock, run 

{% highlight bash %}
module avail tensor 
{% endhighlight %}

to see:
 
{% highlight bash %}
tensorflow/0.5.0-cpu    tensorflow/0.5.0-gpu (g)    tensorflow/0.6.0-gpu (g)    tensorflow/0.7.1-gpu (g)    tensorflow/0.8.0-gpu (g)    tensorflow/0.9.0 (g,D)
Where:
   g:  built for GPU
   D:  Default Module
{% endhighlight %}

Here is a quick Tensor Flow example using version 0.9.0 that you can run on the Sherlock GPU (-p gpu, or if you are from H&S -p hns_gpu) partition-

Create the following python script, save as tf_test.py

{% highlight python %}
import tensorflow as tf
import numpy as np

# Create 100 phony x, y data points in NumPy, y = x * 0.1 + 0.3
x_data = np.random.rand(100).astype(np.float32)
y_data = x_data * 0.1 + 0.3

# Try to find values for W and b that compute y_data = W * x_data + b
# (We know that W should be 0.1 and b 0.3, but TensorFlow will
# figure that out for us.)
W = tf.Variable(tf.random_uniform([1], -1.0, 1.0))
b = tf.Variable(tf.zeros([1]))
y = W * x_data + b

# Minimize the mean squared errors.
loss = tf.reduce_mean(tf.square(y - y_data))
optimizer = tf.train.GradientDescentOptimizer(0.5)
train = optimizer.minimize(loss)

# Before starting, initialize the variables.  We will 'run' this first.
init = tf.initialize_all_variables()

# Launch the graph.
sess = tf.Session()
sess.run(init)

# Fit the line.
for step in range(201):
    sess.run(train)
    if step % 20 == 0:
        print(step, sess.run(W), sess.run(b))

# Learns best fit is W: [0.1], b: [0.3]
{% endhighlight %}


Batch script to submit to the SLURM scheduler

{% highlight bash %}
#!/bin/bash 
#
#all commands that start with SBATCH contain commands that are just used by SLURM for scheduling
#################
#set a job name  
#SBATCH --job-name=GPUTFRtest
#################  
#a file for job output, you can check job progress
#SBATCH --output=GPUTFtest.out
#################
# a file for errors from the job
#SBATCH --error=GPUTFtest.err
#################
#time you think you need; default is one hour
#in minutes 
# In this case, hh:mm:ss, select whatever time you want, the less you ask for the faster your job will run. 
# Default is one hour, this example will run in  less that 5 minutes.
#SBATCH --time=15:00
#################
# --gres will give you one GPU, you can ask for more, up to 8 (or how ever many are on the node/card)
#SBATCH --gres gpu:1
# We are submitting to the gpu partition, if you can submit to the hns partition, change this to -p hns_gpu.
#SBATCH -p gpu 
#################
#number of nodes you are requesting
#SBATCH --nodes=1
#################
#memory per node; default is 4000 MB per CPU
#SBATCH --mem=4000
#################
# Have SLURM send you an email when the job ends or fails, careful, the email could end up in your clutter folder
#SBATCH --mail-type=END,FAIL # notifications for job done & fail
#SBATCH --mail-user=YourSUNetID@stanford.edu

module load tensorflow/0.9.0

srun  python ./tf_test.py

{% endhighlight %}

Save the above code as tf.sbatch

Run-
{% highlight bash %}
sbatch tf.sbatch
{% endhighlight %}


Your output should look like this-

{% highlight bash %}
[mpiercy@sherlock-ln02 login_node ~/TF]$ more GPUTFtest.out
(0, array([-0.20515716], dtype=float32), array([ 0.69775534], dtype=float32))
(20, array([ 0.0134072], dtype=float32), array([ 0.349704], dtype=float32))
(40, array([ 0.08131321], dtype=float32), array([ 0.31072617], dtype=float32))
(60, array([ 0.09596738], dtype=float32), array([ 0.30231473], dtype=float32))
(80, array([ 0.09912978], dtype=float32), array([ 0.30049953], dtype=float32))
(100, array([ 0.09981222], dtype=float32), array([ 0.30010781], dtype=float32))
(120, array([ 0.09995949], dtype=float32), array([ 0.30002326], dtype=float32))
(140, array([ 0.09999126], dtype=float32), array([ 0.30000502], dtype=float32))
(160, array([ 0.09999812], dtype=float32), array([ 0.30000108], dtype=float32))
(180, array([ 0.09999961], dtype=float32), array([ 0.30000025], dtype=float32))
(200, array([ 0.09999991], dtype=float32), array([ 0.30000007], dtype=float32))
{% endhighlight %}

{% highlight bash %}
 more GPUTFtest.err
I tensorflow/stream_executor/dso_loader.cc:108] successfully opened CUDA library libcublas.so.7.5 locally
I tensorflow/stream_executor/dso_loader.cc:108] successfully opened CUDA library libcudnn.so.4 locally
I tensorflow/stream_executor/dso_loader.cc:108] successfully opened CUDA library libcufft.so.7.5 locally
I tensorflow/stream_executor/dso_loader.cc:108] successfully opened CUDA library libcuda.so locally
I tensorflow/stream_executor/dso_loader.cc:108] successfully opened CUDA library libcurand.so.7.5 locally
I tensorflow/core/common_runtime/gpu/gpu_init.cc:102] Found device 0 with properties: 
name: Tesla K20Xm
major: 3 minor: 5 memoryClockRate (GHz) 0.784
pciBusID 0000:86:00.0
Total memory: 6.00GiB
Free memory: 5.92GiB
I tensorflow/core/common_runtime/gpu/gpu_init.cc:126] DMA: 0 
I tensorflow/core/common_runtime/gpu/gpu_init.cc:136] 0:   Y 
I tensorflow/core/common_runtime/gpu/gpu_device.cc:808] Creating TensorFlow device (/gpu:0) -> (device: 0, name: Tesla K20Xm, pci bus id: 0000:86:00.0)
{% endhighlight %}

Credit for python code goes to: [tensorflow.org](https://www.tensorflow.org/versions/r0.10/get_started/index.html )

