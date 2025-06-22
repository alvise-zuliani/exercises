# Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a
# function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The competitions array has
# elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters reoresenting the name of the team. The results
# array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner
# of competitions[i], where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won.
#
# It's guaranteed that exactly one team will win the tournament and that each team will  compete against all other teams exactly once. It's also
# guaranteed that the tournament will always have at least two teams.

def tournamentWinner(competitions, results):
    # home won 1
    # away won 0
    best_team = ""
    teams = {best_team: 0}
    for index, competition in enumerate(competitions):
        if results[index] == 1:
            winner = competition[0]
        else:
            winner = competition[1]
        if not winner in teams:
            teams[winner] = 3
        else:
            teams[winner] += 3
        if teams[winner] > teams[best_team]:
            best_team = winner
    return best_team
