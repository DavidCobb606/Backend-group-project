# Backend-group-project

## About

This is a small server that contains within it a python script to output semantically similar words when given one or more words as input. The post request accepts inputs in the following way:

{ postive, negative }

where both positive and negative should be arrays of strings. 

-- link to word2vec and some background on natural language processing. 

## How to run

-- download data set.


First, run 

``` npm run setup ``` 

To generate the dataset that will be used for the Python model. 

Then run:

``` npm run start``` 

To start the server and enable it to go live. It runs on port 8000. 

