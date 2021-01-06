require 'pry'
# robot = 'robot'

# robot1 = Robot.new

# puts robot1.name
# => "BX777"

# robot2 = Robot.new

# puts robot2.name
# => "SD234"
#
# puts robot2.name
# => "SD234"

# puts 'requiring pry'
#
# class Robot
#   def initialize
#     reset
#   end

#   def reset
#     @name = RandomName.next
#   end
#
#   attr_reader :name
# end

class Robot
  # init - set any values I want kept from the start

  def initialize
    @make_name
end
binding.pry

  # say my name
  def name
    @instruction_count += 1
    @name
  end

  # def make_name
  binding.pry
    name_letters = ("A..Z").to_a.sample(2)
    name_numbers = (1..9).to_a.sample(3)
    (name_letters + name_numbers).join
end

  # create a name - 2 letters, 3 numbers - joined to a string
  # instruction count - the number of instructions that hav ever been taken

  # timers ymy creation time an my time since last reset



r1 = Robot.new

binding.pry
