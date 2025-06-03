# It's photo day ath the local school, and you're the photographer assigned to take class photos. The class.
# that you'll be photographing has an even numbver of students, and all these students are wearging blue shirts.
# You're responsible for arranging students in two rows before taking the photo. Each row should contain the same
# number of students and should adhere to the following guidelines:
#
# 1. All students wearing red shirts must be in the same row.
# 2. All students wearing blue shirts must be in the same row.
# 3. Each student in the back row must be strictly taller than the studen directly in front of them in the front row.
# 
# You're given two input arrays: one containing the heights of all the students with red shirts and another one containing
# the heights of all the students with blue shirts. These arrays will always have the same length, and each height will be
# a positive integer. Write a function that returns whether or not a class photo that follows the state guidelines can be taken.
#
#Note: you can assume that each class has at least 2 students.

def classPhotos(redShirtHeights, blueShirtHeights):
    sorted_red = sorted(redShirtHeights, reverse=True)
    sorted_blu = sorted(blueShirtHeights, reverse=True)

    first_row = sorted_red if sorted_red[0] < sorted_blu[0] else sorted_blu
    second_row = sorted_red if first_row == sorted_blu else sorted_blu

    for index, first_rower in enumerate(first_row):
        if  first_rower >= second_row[index]:
            return False
    return True