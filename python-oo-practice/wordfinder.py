from random import choice

"""Word Finder: finds random words from a dictionary."""


class WordFinder:
    """A machine that produces a random word from provided list
    
    >>> wf = WordFinder("simple.txt")
    3 words read

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True
    """

    def __init__(self, path):
        self.path = path
        self.words = [] 
        self.read_words()
        
        
    def read_words(self):
        """Opens and reads word file then appends each word to word list"""
        list = open(self.path, "r")
        num_of_words = 0

        for word in list:
            if self.is_word(word):
                num_of_words = num_of_words + 1
                self.words.append(word.rstrip('\n'))

        list.close()

        print(f"{num_of_words} words read")
    
    def is_word(self, word):
        """Returns True for each word"""
        return True

    def random(self):
        """Returns a random word from the list of words"""
        return choice(self.words)
