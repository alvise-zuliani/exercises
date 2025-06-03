# Write a function that takes in a non-empty list of non-empty strings and returns a list of characters
# that are common to all strings in the list, ignoring multiplicity.
#
# Note that the strings are not guaranteed to only contain alphanumeric characters. The list you return
# can be in any order.

def commonCharacters(strings):
    first_string_letters = set(strings[0])
    for index, string in enumerate(strings):
        if index == 0:
            continue
        else:
            current_string_letters = {set(string)}
            first_string_letters.intersection_update(current_string_letters)
        
    return first_string_letters

def commonCharacters(strings):
    return set.intersection(*map(set, strings))