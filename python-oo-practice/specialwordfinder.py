from wordfinder import WordFinder

"""Special Word Finder: finds random words from a dictionary but excludes blank lines and lines that begin with # symbol.

>>> swf = SpecialWordFinder("specialwords.txt")
    4 words read

    >>> swf.random() in ["kale", "parsnip", "apple", "mango"]
    True

    >>> swf.random() in ["kale", "parsnip", "apple", "mango"]
    True

    >>> swf.random() in ["kale", "parsnip", "apple", "mango"]
    True
    """

class SpecialWordFinder(WordFinder):

    def __init__(self, path):
        super().__init__(path)
       

    def is_word(self, word):
        """Checks if word starts with # or an '' or if word is not a word."""
        if word.startswith('#') or word.strip() == '' or not super().is_word(word):
            return False
        return True