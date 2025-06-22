# You're given an array of integers and an integer. Write a function that moves all instances of that
# integer in the array to the end of the array and returns the array.
#
# The function should perform this in place (it should mutate the input array) and doesn't need to
# maintain the order of the other integers

def moveElementToEnd(array, toMove):
    moving_ints = [x for x in array if x == toMove]
    array = [x for x in array if x != toMove] + moving_ints
    return array

def moveElementToEnd(array, toMove):
    i, j = 0, len(array) - 1
    while i < j:
        while i < j and array[j] == toMove:
            j -= 1
        if array[i] == toMove:
            array[i], array[j] = array[j], array[i]
        i += 1
    return array

