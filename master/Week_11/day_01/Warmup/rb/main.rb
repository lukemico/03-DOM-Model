# Take any positive integer n. If n is even, divide it by 2 to get n / 2.
# If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.
# Repeat the process indefinitely.

class Collatz
  def initialize num
    @collection = [ num ]
    p num

# iterate through the collection
# Call itself repeatedly until it reaches 1

  def get_collection num

      if num > 1
        # next_index = num.even? ? ( um / 2 0 : ( num * 3 + 1 )

        if num.even?
            next_index = num / 2
        else
          next_index = (num*3 + 1)
      end

      @collection.push( next_index )
      get_collection( next_index )
    end
  end

  def answer
    puts "You program ran #{ @collection.length } times."
    puts "The steps you took were #{ @collection }"

end
  Collatz.new( 34 )
