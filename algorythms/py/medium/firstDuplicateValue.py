# Given an array of integers between 1 and n, inclusive, where n is the length of the array, write
# a function that returns the first integer that appears more than once (when the array is read
# from left to right).
#
# In other words, out of all the integers that might occur more than once in the input arrayk, your
# function should return the one whose first duplicate value has the minimum index.
#
# If no integer appears more than once, your function should return -1.
#
# Note that you are allowed to mutate the input array.

def firstDuplicateValue(array):
    seen = set()
    for value in array:
        if value in seen:
            return value
        seen.add(value)
    return -1

def firstDuplicateValue(array):
    for value in array:
        absValue = abs(value)
        if array[absValue - 1] < 0:
            return absValue
        array[absValue - 1] *= -1
    return -1