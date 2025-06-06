# Given a non-empty string of lowercase letters and a non-negative integer representing
# a key, write a function that returns a new string obtained by shifting every letter
# in the input string by k positions in the alphabet, where k is the key.
#
# Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.

def caesarCipherEncryptor(string, key):
    encrypted_string = ""
    for letter in string:
        encrypted_string += chr(ord(letter) + key)
    return encrypted_string