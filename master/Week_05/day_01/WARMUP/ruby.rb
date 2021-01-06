require ('pry')

# Given two strings ss and tt of equal length, the Hamming distance between ss and tt, denoted dH(s,t)dH(s,t), is the number of corresponding symbols that differ in ss and tt. See Figure 2.
#
# Given: Two DNA strings ss and tt of equal length (not exceeding 1 kbp).

# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT

# Return: The Hamming distance dH(s,t)dH(s,t).

str1 = "GAGCCTACTAACGGGAT"
str2 = "CATCGTAATGACGGCCT"
the_ham = 0

str1.each_with_index do | letter, i |
	the_ham += 1 if str1 if first_string[[i] != second_string[i]



    # dna = ("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT").read().split()
    #
    #
    # print count


binding.pry


















#
#
#     count =0
#     for i in range(adn[0].__len__()):
#         if adn[0][i] != adn[1][i]:
#             count +=1
#
#     print count
#
#
# binding.pry
#
#


































#---------------------------------------------------------------
import sys

try:
	hammingDist(sys.argv[1])
except:
	print "\nUsage: python hamming.py <name of file here>"
