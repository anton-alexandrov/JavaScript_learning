/*
https://www.codewars.com/kata/57fd696e26b06857eb0011e7/javascript
Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

Vowel Harmony Rules (simplified)

When the last vowel in the word is

a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
a back vowel (a, á, o, ó, u, ú) the suffix is -nak
*/

//basic problem: find element in array

function dative(word) {
    let front_vovels = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
    let back_vowels = ['a', 'á', 'o', 'ó', 'u', 'ú'];

    for (i = word.length - 1; i >= 0; i--) {
        if (back_vowels.includes(word[i])) {
            return word + 'nak';
        }
        else if (front_vovels.includes(word[i])) {
            return word + 'nek'
        }
    }
}

console.log(dative("űr"));