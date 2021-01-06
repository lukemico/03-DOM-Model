# Scrabble Score
#
# Write a program that, given a word, computes the scrabble score for that word.
#
# scrabble("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.
#
# Letter Values
#
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Extensions
#
# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.


# PSEUDOCODE
# Write a program that, given a word, computes the scrabble score for that word.

# I want an input where user can enter the word they have.
p "What is your word?"
word = gets.chomp

# I want to create some arrays that have a score value assigned to them
one_point: [ "A", "E", "I", "O", "U", "L", "N", "R", "S","T"],
two_point: [ "D", "G" ]

one_point = { # Keys stored as symbols!
    score: 1,
}





# Will run for keys and values
# serge.each do |all|
#     puts all
# end
#
# # Will run for each key and value pair
# one_point.each do | "A", 1|
#     puts "Key: #{key} and Value: #{value}"
# end
#
#
# # Letter                           Value
#
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
