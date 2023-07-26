# 1 and 2

def print_upper_words(words):
    """Prints each word on a separate line in all uppercase
    
    print_upper_words(["hello", "hey", "goodbye", "yo", "yes"]"""

    for word in words:
        print(word.upper())


# 3
def print_upper_words2(words):
    """Prints each word that begins with 'e' or 'E' on a separate line in all uppercase

    print_upper_words2(['eddy', 'Email', 'mom'])"""

    for word in words:
        if word.startswith('e') or word.startswith('E'):
            print(word.upper())


# 4
def print_upper_words3(words, must_start_with):
    """Prints each word that begins with the passed letters on a separate line in all uppercase
    
    print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
#                    must_start_with={"h", "y"})"""

    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
                           
