# Write a function that takes in a non-empty array of distinct integers and an integer representing
# a target sum. If any two numbers in the input array sum up to the target sum, the function should
# return them in an array, in any order. If no two numbers sum up to the target sum, the function
# should return an empty array.
#
# Note that the target sum has to be obtained by summing two different integers in the array; you
# can't add a single integer to itself in order to obtain the target sum.
#
# You can assume that there will be at most one pair of numbers summing up to the target sum.

def twoNumberSum(array, targetSum):
    sorted_array = sorted(array)
    left = 0
    right = len(sorted_array)
    for num in sorted_array:
        sum = sorted_array[left] + sorted_array[right]
        if sum < targetSum:
            left += 1
        elif sum > targetSum:
            right -= 1
        else:
            return [sorted_array[left], sorted_array[right]]

    return []

def twoNumberSum(array, targetSum):
    seenNums = []
    for num in array:
        complementary = targetSum - num
        if complementary in seenNums:
            return [num, complementary]
        seenNums.append(num)

    return []
