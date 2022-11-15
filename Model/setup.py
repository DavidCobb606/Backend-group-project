from gensim.models import KeyedVectors
from gensim.test.utils import datapath
from gensim.models import Word2Vec

import os
import json

model = KeyedVectors.load_word2vec_format(
os.path.abspath("glove.6B.50d.txt"), binary=False, no_header=True)
model.save_word2vec_format('modelTest.txt', binary=False)


print(model)