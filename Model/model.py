from gensim.models import KeyedVectors
from gensim.test.utils import datapath
import os
#import function from Front-end


model = KeyedVectors.load_word2vec_format(
os.path.abspath("glove.6B.50d.txt"), binary=False, no_header=True)

result = model.most_similar(positive=[], negative=["man"], topn=2)

print('Most similar word to King and Woman: ',  result)