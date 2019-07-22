# Merchant's Guide to the Galaxy

## Pre-Requisites

  - NodeJs - v10.15.3 or above [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
  - Yarn - v1.15.2 or above [https://yarnpkg.com/lang/en/docs/install/#windows-stable](https://yarnpkg.com/lang/en/docs/install/#windows-stable)
  - Visual Studio Code - 1.36.1 or above [https://code.visualstudio.com/](https://code.visualstudio.com/) or any other text editor of choice.

## Setting up
The input file is present in
> api/input/input.txt

Unzip the code and go in api folder
> cd api
> yarn install
> yarn start

The app will start on port 8000, but you can change it from the .env file
For starting the app up in nodemon (with hot reload) use
> yarn dev

Use the below api url with HTTP action "Get" to invoke the api
> localhost:8000/

#### For the below input :-
> glob is I
prok is V
pish is X
tegj is L
glob glob Silver is 34 Credits
glob prok Gold is 57800 Credits
pish pish Iron is 3910 Credits
how much is pish tegj glob glob ?
how many Credits is glob prok Silver ?
how many Credits is glob prok Gold ?
how many Credits is glob prok Iron ?
how much wood could a woodchuck chuck if a woodchuck could chuck wood ?

#### The output will be :-
>[
    "pish tegj glob glob is 42",
    "glob prok Silver is 68",
    "glob prok Gold is 57800",
    "glob prok Iron is 782",
    "I have no idea what you are talking about"
]
## Testing
The solution follows TDD (Test Driven Development) and all the tests are in the tests folder.
To run the tests use the below command
> yarn test

This will also generate the code coverage in index.html in the coverage folder under test folder.
While uploading, the coverage data was-
> 100% Statements  92/92
> 83.87% Branches  26/31
> 100% Functions  16/16
> 100% Lines  90/90
## Problem Statement:-

You decided to give up on earth after the latest financial collapse left 99.99% of the earth's

population with 0.01% of the wealth. Luckily, with the scant sum of money that is left in your account,

you are able to afford to rent a spaceship, leave earth, and fly all over the galaxy to sell common

metals and dirt (which apparently is worth a lot).

Buying and selling over the galaxy requires you to convert numbers and units, and you decided to

write a program to help you.

The numbers used for intergalactic transactions follows similar convention to the roman numerals

and you have painstakingly collected the appropriate translation between them.

Roman numerals are based on seven symbols:

Symbol Value

I 1

V 5

X 10

L 50

C 100

D 500

M 1,000

Numbers are formed by combining symbols together and adding the values. For example, MMVI is

1000 + 1000 + 5 + 1 = 2006. Generally, symbols are placed in order of value, starting with the

largest values. When smaller values precede larger values, the smaller values are subtracted from

the larger values, and the result is added to the total. For example MCMXLIV = 1000 + (1000 100)

+ (50 10)

+ (5 1)

= 1944.

The symbols "I", "X", "C", and "M" can be repeated three times in succession, but no more.

(They may appear four times if the third and fourth are separated by a smaller value, such as

XXXIX.) "D", "L", and "V" can never be repeated.

"I" can be subtracted from "V" and "X" only. "X" can be subtracted from "L" and "C" only. "C"

can be subtracted from "D" and "M" only. "V", "L", and "D" can never be subtracted.

Only one smallvalue

symbol may be subtracted from any largevalue

symbol.

A number written in Arabic numerals can be broken into digits. For example, 1903 is

composed of 1, 9, 0, and 3. To write the Roman numeral, each of the nonzero

digits should

be treated separately. In the above example, 1,000 = M, 900 = CM, and 3 = III. Therefore,

1903 = MCMIII.

(Source: Wikipedia (http://en.wikipedia.org/wiki/Roman_numerals)

Input to your program consists of lines of text detailing your notes on the conversion between

intergalactic units and roman numerals.

You are expected to handle invalid queries appropriately.

Test input:

glob is I

prok is V

pish is X

tegj is L

glob glob Silver is 34 Credits

glob prok Gold is 57800 Credits

pish pish Iron is 3910 Credits

how much is pish tegj glob glob ?

how many Credits is glob prok Silver ?

how many Credits is glob prok Gold ?

how many Credits is glob prok Iron ?

how much wood could a woodchuck chuck if a woodchuck could chuck wood ?

Test Output:

pish tegj glob glob is 42

glob prok Silver is 68 Credits

glob prok Gold is 57800 Credits

glob prok Iron is 782 Credits

I have no idea what you are talking about