# Write a function that takes in a non-empty string and returns its run-length encoding.

def runLengthEncoding(string):
    encoded_string = ""
    consecutive_sames = []
    last_checked = ""
    for index, letter in enumerate(string):
        if not len(consecutive_sames):
            consecutive_sames.append(letter)
            last_checked = letter
            continue
        if last_checked == letter:
            consecutive_sames.append(letter)
        else:
            resolved_len = []
            if len(consecutive_sames) < 10:
                resolved_len.append(len(consecutive_sames))
            else:
                resolve_len(len(consecutive_sames), resolved_len)
            encoded_string += str([f"{num}{last_checked}" for num in resolved_len])
            consecutive_sames = [letter]
    return encoded_string
    

def resolve_len(len, resolved_len):
    if len > 10:
        if len - 9 < 10:
            resolved_len.extend([9, len - 9])
        else:
            resolved_len.append(9)
            resolved_len(len - 9, resolved_len)
