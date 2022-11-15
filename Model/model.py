from gensim.models import KeyedVectors
from gensim.test.utils import datapath
from gensim.models import Word2Vec
import os
import sys
import json

#import function from Front-end



# message = sys.stdin.read()

# words = json.loads(message)

model = KeyedVectors.load_word2vec_format(
os.path.abspath("modelTest.txt"), binary=False)
testArgOne = sys.argv[1].split(',')
testArgTwo = sys.argv[2].split(',')
# model = KeyedVectors.load_word2vec_format(
# os.path.abspath("glove.6B.50d.txt"), binary=False, no_header=True)





#postive.push(Top5ValuesFromimportedarray) negative.push(top5valuesfromarray)

#result = model.most_similar(positive=["king", "woman"], negative=[], topn=2)

#print("Hello", flush=True)

def findKeyWords ():
    result = model.most_similar(positive=testArgOne, negative=testArgTwo, topn=2)

    return result


# for line in sys.stdin:
#     print(line)


# sys.stdout.write("Hello again")

#sys.stdout.flush()

#arrayOfNewWord = [result]


#Importing 2 arrays from F-E
# exporting an array with just new words/updated values to F-E
# 
# print(findKeyWords())
## thing you want to send back has to be the last thing in the script
print(json.dumps(findKeyWords()))