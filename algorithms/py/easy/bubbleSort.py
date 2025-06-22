# Write a function that takes in an array of integers and returns a sorted version of that array.

def bubbleSort(array):
    sorted_array = []
    latest_num = None
    has_been_sorted = False
    for index, item in enumerate(array):
        if not len(sorted_array):
            sorted_array.append(item)
            latest_num = item
        else:
            if item < latest_num:
                if not has_been_sorted:
                    has_been_sorted = True
                sorted_array.insert(index - 1, item)
            else:
                sorted_array.append(item)
                latest_num = item       
    
    return sorted_array if not has_been_sorted else bubbleSort(sorted_array)