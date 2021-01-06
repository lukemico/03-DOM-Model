// The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.
//
// An Atbash cipher for the Latin alphabet would be as follows:

// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: zyxwvutsrqponmlkjihgfedcba
// It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
//
// Examples
//
// Encoding "test" gives "gvhg"
// Decoding "gvhg" gives "test"

// PSEUDOCODE
// I want to return a sting for each set of variables.
// I want a function that compares each string, then steps/iterates through each value in string and returns its alternative

// I want to return

var plain = "abcdefghijklmnopqrstuvwxyz";
var cipher = "zyxwvutsrqponmlkjihgfedcba";









// import string

// DECODE_MAP = {
//     chr(c): chr(ord('z') - c + ord('a')) for c in range(ord('a'), 1 + ord('z'))
// }
// ENCODE_MAP = {
//     chr(c): chr(ord('z') - c + ord('a')) for c in range(ord('a'), 1 + ord('z'))
// }

// def decode(s):
//     return ''.join(DECODE_MAP[c] for c in s if not c.isspace())

// def encode(s):
//     result = ''
//     i = 0
//     for c in s:
//         if c in string.punctuation or c.isspace():
//             continue

//         # Insert space every 5 characters
//         if i and i % 5 == 0:
//             result += ' '
//         i += 1

//         c = c.lower()
//         result += ENCODE_MAP.get(c, c)
//     return result




// Kane used Ruby to solve this.



// going to take an output
// split that input so I can iterate
// have an alphabet to compare
// Create an object that contains both strings
//
