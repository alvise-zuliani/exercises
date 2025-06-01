def firstDuplicateValue(array):
    seen = set()
    for value in array:
        if value in seen:
            return value
        seen.add(value)
    return -1