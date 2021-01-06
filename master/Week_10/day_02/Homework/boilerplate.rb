require 'pry'

#ruby boilerplate.rb ddata.txt
#ARRGF will refer to data.txt
  # When we iterate through it, we ar going line by line through the file.

ARGF.each do |line|
  if line =~ /fred/
    p line
end

binding.pry

# Regular Expression Cheat Sheet

# To create a regular expression
  # /PATTERN GOES HERE/

# To test a regular expression
  # "" =~ /SOME PATTERN/

# RANGES

# [Bb] = B or b
# [chs] = c, h or s
# [A-Z] = An uppercase letter
# [a-z] = A lowercase letter
# [A-Za-z] = Any letter
# [0-9] = Any number
# [^0-9] = Anything other than a number

# CHARACTER CLASSES

# \w = Any word character
# \W = Any non-word character
# \d = Any digit
# \D = Not a digit
# \s = Any space character
# \S = Not a space character
# .  = A wildcard, anything

# QUANTIFIERS

# * = Zero or more
# + = One or more
# ? = Optional (Zero or one times)

# {2} = Exactly 2 times
# {2,} = 2 or more times
# {,2} = 2 or less times
# {2,5} = 2, 3, 4, or 5 times

# MATCHES

# (\d) = This will store any single digit in a variable for you ( $1, $2, $3 )



# Homework
# Make a program that prints each line of its input that mentions fred. (It shouldn’t do anything for other lines of input.) Does it match if your input string is Fred, frederick, or Alfred? Make a small text file with a few lines mentioning "fred flintstone" and his friends, then use that file as input to this program and the ones later in this section.






# Modify the previous program to allow Fred to match as well. Does it match now if your input string is Fred, frederick, or Alfred? (Add lines with these names to the text file.)
#
# Make a program that prints each line of its input that contains a period (.), ignoring other lines of input. Try it on the small text file from the previous exercise: does it notice Mr. Slate?
#
# Make a program that prints each line that has a word that is capitalized but not ALL capitalized. Does it match Fred but neither fred nor FRED?
#
# Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.
#
# Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.
