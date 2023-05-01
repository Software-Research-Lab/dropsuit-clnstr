[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/Terbinari-CBM-Robot/blob/main/images/dropsuit.png" />](https://github.com/ladooniani/dropsuit#readme)

<!--
[![npm version](https://img.shields.io/npm/v/dropsuit-clnstr.svg?style=flat)](https://www.npmjs.com/package/dropsuit-clnstr) [![npm](https://img.shields.io/npm/dt/dropsuit-clnstr.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-clnstr) [![License](https://img.shields.io/npm/l/dropsuit-clnstr.svg)](https://www.npmjs.com/package/dropsuit-clnstr)
-->

# Overview of [DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP and the clnstr Function

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library offering diverse functions for natural language processing and data manipulation. The clnstr function is one of its modules, designed for cleaning and formatting strings by removing marks, extra marks, and converting to lowercase. It is available under the Apache License 2.0.

## DropSuit NLP Method: clnstr - A JavaScript and Node.js function for cleaning and formatting strings

The clnstr function is a part of the DropSuit NLP library, it's a JavaScript and Node.js function that removes marks, extra marks, and converts the trimmed string to lowercase. It's open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-clnstr
```

### Usage

Import the library in your project:

```
const dropsuit_clnstr = require("dropsuit-clnstr");
```

Create an instance of the class by passing an optional input string or null, and an optional boolean value that controls whether the processing output results are displayed in the terminal or not (default is false).

```
let dsclnstr = new dropsuit_clnstr(null, false);
```

#### clnstr(input: string | null)

- **input**: A raw string input that will be processed, or null to process the input passed to the constructor.

#### Return:

- **txt()**: Trims the input, removes punctuation marks and numbers, and converts the input to lowercase.
- **nmb()**: Trims the input, removes punctuation marks and converts the input to lowercase.
- **pnc()**: Trims the input, converts the input to lowercase, and removes extra punctuation marks.

You can call the clnstr method passing an optional input string or null, to process the input passed to the constructor.

```
let out = dsclnstr.clnstr(myInputString);
console.log(out);
```

Return object instance:

```
Input:
[
 "  ,.  ,!- ,hello,!bot  ,  ,, so  ,How long           DOes,,&&&swift  - +-   -delivery   service,,,,,,----TYPE:: ,.:/-- :-class     8457'' take?? ? ?,?thank  you !??!,?!.. . .!..  ...  "
]

Output:

Return: strTxt()

1. Remove punctuation marks
2. Remove numbers
3. Trim string
4. Convert to lower case.

[
 'hello bot so how long does swift delivery service type class take thank you'
]

Return: strNmb()

1. Remove punctuation marks
2. (Keep numbers)
3. Trim string
4. Convert to lower case.

[
 'hello bot so how long does swift delivery service type class 8457 take thank you'
]

Return: strPnc()

1. (Keep punctuation, remove extra marks)
2. (Keep numbers)
3. Trim string
4. Convert to lower case.

[
 "hello, bot, so, how long does, swift - delivery service, type: class 8457' take? thank you!"
]

Object:

{
 stTxt: 'hello bot so how long does swift delivery service type class s take thank you',
 stNmb: 'hello bot so how long does swift delivery service type class 8457 s take thank you',
 stPnc: "hello, bot, so, how long does, swift - delivery service, type: class 8457's take? thank you!",
 txt: [Function: strTxt],
 nmb: [Function: strNmb],
 pnc: [Function: strPnc]
}
```

The example code shows how the input string is processed using the `clnstr()` method and the output returned by the function. The output is an object that contains three properties, `stTxt`, `stNmb`, `stPnc` which are the results of applying the methods `txt()`, `nmb()` and `pnc()` respectively.
<!--
## Links

- npm: https://www.npmjs.com/package/dropsuit-clnstr
-->
## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)