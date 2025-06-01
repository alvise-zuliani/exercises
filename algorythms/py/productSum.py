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

# input = [[[[[5]]]]]

def productSum(array):
    final_expression = []
    depth = 1
    for item in array:
        if type(item) == list:
            final_expression.append(flatten(item, depth))
            depth = 1
        else:
            final_expression.append(item)
    return sum(final_expression)


def flatten(list, depth):
    depth += 1
    flat = []
    for item in list:
        if type(item) == list:
            flat.append(flatten(item, depth))
        else:
            flat.append(item * depth)
    return sum(flat)
   