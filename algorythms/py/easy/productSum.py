# Write a function that takes in a "special" array and returns its product sum.
#
# A "special" array is a none-empty array that contains either integers or other special arrays. The product
# sum of a special array is the sum of its elements, where special arrays inside it are summed themselves and 
# then multiplied by their level of depth.
#
# The depth of a special array is how far nested it is. For instance, the depth of [] is 1; the depth of the 
# inner array in [[]] is 2; the depth of the innermost array in [[[]]] is 3.
#
# Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2 * (y + z); the product
# sum of [x, [y, [z]]] is x + 2 * (y + 3z)

def productSum(array):
    def helper(arr, depth):
        total = 0
        for item in arr:
            if isinstance(item, list):
                total += helper(item, depth + 1)
            else:
                total += item
        return total * depth

    return helper(array, 1)
