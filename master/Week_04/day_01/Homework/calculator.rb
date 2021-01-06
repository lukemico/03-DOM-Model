require 'pry' #gives us access to binding.pry (our debugger)
puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - Addition"
  puts "(s) - Subtraction"
  puts "(m) - Multiplication"
  puts "(d) - Division"

  puts "(q) - Quit"

  # Receive a user input
  print "Enter your choice: "
  user_choice = gets().chomp()

  # Return whatever the user typed
  return user_choice
end

choice = menu()

def addition
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

until choice == "q"

  case choice
  when "a" then addition()
  when "s" then puts "You are interested in subtraction"
  end

  choice = menu()

end

def subtraction
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

until choice == "q"

  case choice
  when "a" then subtraction()
  when "s" then puts "You are interested in subtraction"
  end

  choice = menu()

end

def multiplication
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end

until choice == "q"

  case choice
  when "a" then multiplication()
  when "s" then puts "You are interested in multiplication"
  end

  choice = menu()

end

def division
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end

until choice == "q"

  case choice
  when "a" then division()
  when "s" then puts "You are interested in division"
  end

  choice = menu()

end





puts ""
puts "Thanks for using our calculator"


#Calculator
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu

# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)

# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# Trip Calculator
# Calculate a trip time and cost given inputs for
  # distance
  # miles per gallon
  # price per gallon
  # speed in miles per hour
