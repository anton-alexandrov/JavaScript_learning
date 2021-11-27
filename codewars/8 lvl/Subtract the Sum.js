//https://www.codewars.com/kata/56c5847f27be2c3db20009c3/train/javascript
/*
Complete the function which get an input number n such that n >= 10 and n < 10000, then:
Sum all the digits of n.
Subtract the sum from n, and it is your new n.
If the new n is in the list below return the associated fruit, otherwise return back to task 1.
*/

//basic problem: sum of number digits


function SubtractSum(n) {

    let sum = 0;
    let new_number = n;

    while (true) {
        res = new_number;
        sum = 0;
        while (res > 0) {
            sum += Math.floor(res % 10);
            res = Math.floor(res / 10);
        }
        console.log("Sum" + sum);
        console.log(`${new_number} - ${sum} is ${new_number - sum}`);
        new_number -= sum
        if (new_number < 100) {
            break;
        }
    }

    switch (new_number) {
        case (1): return ("kiwi"); break; case (1): return ("kiwi"); break;
        case (2): return ("pear"); break;
        case (3): return ("kiwi"); break;
        case (4): return ("banana"); break;
        case (5): return ("melon"); break;
        case (6): return ("banana"); break;
        case (7): return ("melon"); break;
        case (8): return ("pineapple"); break;
        case (9): return ("apple"); break;
        case (10): return ("pineapple"); break;
        case (11): return ("cucumber"); break;
        case (12): return ("pineapple"); break;
        case (13): return ("cucumber"); break;
        case (14): return ("orange"); break;
        case (15): return ("grape"); break;
        case (16): return ("orange"); break;
        case (17): return ("grape"); break;
        case (18): return ("apple"); break;
        case (19): return ("grape"); break;
        case (20): return ("cherry"); break;
        case (21): return ("pear"); break;
        case (22): return ("cherry"); break;
        case (23): return ("pear"); break;
        case (24): return ("kiwi"); break;
        case (25): return ("banana"); break;
        case (26): return ("kiwi"); break;
        case (27): return ("apple"); break;
        case (28): return ("melon"); break;
        case (29): return ("banana"); break;
        case (30): return ("melon"); break;
        case (31): return ("pineapple"); break;
        case (32): return ("melon"); break;
        case (33): return ("pineapple"); break;
        case (34): return ("cucumber"); break;
        case (35): return ("orange"); break;
        case (36): return ("apple"); break;
        case (37): return ("orange"); break;
        case (38): return ("grape"); break;
        case (39): return ("orange"); break;
        case (40): return ("grape"); break;
        case (41): return ("cherry"); break;
        case (42): return ("pear"); break;
        case (43): return ("cherry"); break;
        case (44): return ("pear"); break;
        case (45): return ("apple"); break;
        case (46): return ("pear"); break;
        case (47): return ("kiwi"); break;
        case (48): return ("banana"); break;
        case (49): return ("kiwi"); break;
        case (50): return ("banana"); break;
        case (51): return ("melon"); break;
        case (52): return ("pineapple"); break;
        case (53): return ("melon"); break;
        case (54): return ("apple"); break;
        case (55): return ("cucumber"); break;
        case (56): return ("pineapple"); break;
        case (57): return ("cucumber"); break;
        case (58): return ("orange"); break;
        case (59): return ("cucumber"); break;
        case (60): return ("orange"); break;
        case (61): return ("grape"); break;
        case (62): return ("cherry"); break;
        case (63): return ("apple"); break;
        case (64): return ("cherry"); break;
        case (65): return ("pear"); break;
        case (66): return ("cherry"); break;
        case (67): return ("pear"); break;
        case (68): return ("kiwi"); break;
        case (69): return ("pear"); break;
        case (70): return ("kiwi"); break;
        case (71): return ("banana"); break;
        case (72): return ("apple"); break;
        case (73): return ("banana"); break;
        case (74): return ("melon"); break;
        case (75): return ("pineapple"); break;
        case (76): return ("melon"); break;
        case (77): return ("pineapple"); break;
        case (78): return ("cucumber"); break;
        case (79): return ("pineapple"); break;
        case (80): return ("cucumber"); break;
        case (81): return ("apple"); break;
        case (82): return ("grape"); break;
        case (83): return ("orange"); break;
        case (84): return ("grape"); break;
        case (85): return ("cherry"); break;
        case (86): return ("grape"); break;
        case (87): return ("cherry"); break;
        case (88): return ("pear"); break;
        case (89): return ("cherry"); break;
        case (90): return ("apple"); break;
        case (91): return ("kiwi"); break;
        case (92): return ("banana"); break;
        case (93): return ("kiwi"); break;
        case (94): return ("banana"); break;
        case (95): return ("melon"); break;
        case (96): return ("banana"); break;
        case (97): return ("melon"); break;
        case (98): return ("pineapple"); break;
        case (99): return ("apple"); break;
        case (100): return ("pineapple"); break;
    }
}

console.log(SubtractSum(325));
console.log(SubtractSum(10));