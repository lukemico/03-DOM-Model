# Welcome to Sonic Pi v2.11.1

##| play 60

##| use bpm 120

##| play :c pan:-1
##| sleep 0.5
##| play :e pan: 1
##| sleep 0.5
##| play :g, attack: 1

##| puts chord(:c, :major7)
##| play chord(:c, :major7)

##| play (:c, :e, :g)


##| def ch(octaves)
##|   chord(::f3, :minor7, num_octaves: 3)
##| end

##| live_loop :loopy do
##|   use_synth :saw
##|   play_pattern_timed (1), 0.5
##| end

##| with_fx :reverb do
##|   live_loop :eek do
##|     s = synth_names.tick
##|     puts s
##|     use_synth s
##|     play 70
##|     sleep 1
##|    end
##| end

##| puts range(40, 90)
##| live_loop :woo do
##|   play range(40, 90).tick, attack: 0.05
##|   sleep 0.1
##| end

##| puts range(40, 90)
##| live_loop :woo do
##|   play range(40, 90).sample, attack: 0.05
##|   sleep 0.1
##| end



##| puts range(40, 90)

##| chords = [ chord(:c, :major), chord(:e, minor7), chord(:g2, :augmented) ]

##| live_loop :woo do
##|   play_pattern_timed chords.sample, 0.3 attack: 0.05
##|   sleep 0.5
##| end

##| puts range(40, 90)

##| ##| chords = [ scale ]

##| live_loop :woo do
##|   play_pattern_timed scale(:c, :bartok), 0.3 attack: 0.05
##|   sleep 0.5
##| end

##| live_loop :a do
##|   play_pattern_timed [:c5, g4:, e4], 0.14, release: 0.3, attack, attack: 0.01, rrand( -1, 1)
##| end

##| live_loop :b do
##|   play_pattern_timed [:c5, g4:, e4], 0.144, release: 0.3, attack, attack: 0.1, pan: 1
##| end

live_loop :banger do
  sample :bd_klub
  sleep [0.4, 0.2].sample
end

##| live_loop :hat do
##|   sample :drum_symbol_soft, sustain: 0.3
##|   sleep 0.4 if one_in(3)
##|   sleep 0.4
##| end

##| live_loop :nang do

##|   use_synth :sine

##|   ch = chord(:g4, :sus4, num_octaves: 2)

##|   ch = ch.reverse if one_in(2)

##|   play_pattern_timed ch, 0.3, attack: 1

##|   sleep 2

##|   sleep 2 if one_in(2)
##| end













































