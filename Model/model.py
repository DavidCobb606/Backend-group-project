from gensim.models import KeyedVectors
from gensim.test.utils import datapath
#from gensim.models import Word2Vec
import os
import sys
import json


model = KeyedVectors.load_word2vec_format(
os.path.abspath("modelTest.txt"), binary=False)
testArgOne = sys.argv[1].split(',')
testArgTwo = sys.argv[2].split(',')


def findKeyWords ():
    try:
        result = model.most_similar(positive=testArgOne, negative=testArgTwo, topn=2)
        return result
    except:
        return "404"


print(json.dumps(findKeyWords()))