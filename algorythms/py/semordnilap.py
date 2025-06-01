# Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.
#
# A semordnilap pair is defined as a set of different strings where the reverse of one word is the
# same as the forward version of the other.
#
# The order of the returned pairs and the order of the strings within each pair does not matter.
#
# input: ["diaper", "repaid", "test", "cba", "abc"]

def semordnilap(words):
    words_set = set(words)
    pairs = []
    for word in words:
        semordnilap = word[::-1]
        is_not_palindrome = semordnilap != word
        if semordnilap in words_set and is_not_palindrome:
            pairs.append([word, semordnilap])
            words_set.remove(word)
            words_set.remove(semordnilap)
    return pairs