//#region Info

/**
 * @file <h3>DropSuit</h3>
 * <p>
 *   DropSuit is a JavaScript(ES6) and Node.js(v14.x) module library
 *   created by Lado Oniani that offers a diverse collection of functions
 *   for natural language processing (NLP) and data manipulation.
 *   It provides a curated collection of original and classic techniques and methods
 *   for tasks such as text analysis, language understanding and generation,
 *   as well as for data manipulation tasks. Additionally,
 *   it includes unique tools and features for chatbot dialog flow logic
 *   and other specific use cases.
 *   The library is open-source and available under the Apache License 2.0.
 *   Whether you're a researcher, developer, or data scientist,
 *   DropSuit offers a range of tools to enhance your work,
 *   with a focus on diversity and experimentation.
 * </p>
 * @author Lado Oniani
 * {@link https://github.com/ladooniani GitHub}
 * @see mailto:ladooniani@gmail.com
 * @version 1.0.0
 * @see https://github.com/ladooniani/DropSuit#readme
 * @copyright 2016-2023 Lado Oniani - DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region Constructor

function Constructor(input, dsout) {
  this.input = input;
  this.dsout = dsout;
}

//#endregion

//#region clnstr

/**
 * @class clnstr
 * @description The clnstr class provides a set of methods for cleaning and
 * normalizing strings. The clnstr class accepts a raw string input and processes it
 * by removing marks, converting the trimmed string to lowercase, and removing extra punctuation marks.
 * @param {string} [input=null] - The raw string input. The input can be a sentence or word,
 * or it can be left null to process the input passed to the constructor.
 * @returns {object} - An object containing three methods:
 * - txt(): Trims the input, removes punctuation marks and numbers, and converts the input to lowercase.
 * - nmb(): Trims the input, removes punctuation marks and converts the input to lowercase.
 * - pnc(): Trims the input, converts the input to lowercase, and removes extra punctuation marks.
 */

Constructor.prototype.clnstr = function (input) {
  input = objOrFncInp(input, this.input);
  let out = clnstr_f(input, this.dsout); /// Synchronous Function
  return out;
};

//#endregion

//#region clnstr_f

/**
 * Remove marks, and extra marks, and convert the trimmed string to lowercase.
 * @param {string} input - The raw string input. This parameter is mandatory.
 * @param {boolean} [dispout=false] - A boolean flag that controls whether the processing output
 * results are displayed in the terminal or not. This parameter is optional.
 * @returns {object} - An object containing three methods:
 * - txt(): Trims the input, removes punctuation marks and numbers, and converts the input to lowercase.
 * - nmb(): Trims the input, removes punctuation marks and converts the input to lowercase.
 * - pnc(): Trims the input, converts the input to lowercase, and removes extra punctuation marks.
 * @example
 * const clnstr = require('./clnstr');
 * const input = "Hello, World! !! How are you doing today?";
 * const result = clnstr(input, true);
 * console.log(result);
 * // Output: { txt: 'hello world how are you doing today', nmb: 'hello world how are you doing today', pnc: 'hello, world! how are you doing today?' }
 */

function clnstr_f(input, dispout) {
  let inp = input.toString().replace("'", "");
  let p1 = /[^a-zA]+/g;
  let p2 = /[^a-zA-Z0-9]+/g;
  let p3 = /\s+/g;
  let regexSet = [p1, p2, p3];
  let outList = [];
  for (let i = 0; i < regexSet.length; i++) {
    var output = inp.toString().toLowerCase().replace(regexSet[i], " ").trim();
    output = extraPunctuation(output);
    outList.push(output);
  }
  let outret = return_clnstrOut(outList);
  display(dispout, input, outret); /// DISPLAY >>
  return outret;
}

function extraPunctuation(output) {
  const punctReg = /[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/g;
  const punct = ',/.,\';=-`?><:{}+_)(*&^%$#@!~][`"`"';
  for (let i = 0; i < punct.length; i++) {
    output = output
      .toString()
      .toLowerCase()
      .replace(punctReg[i], punct[i])
      .trim();
  }
  output = output.replace(/\s*([,.!?:;]+)(?!\s*$)\s*/g, "$1 ").trim();
  output = output.replace(/(?<=\d)\p{Zs}(?=\d)/g, "").trim();
  output = output.replace(/(?<=\W)(?<! )\W+/g, " ").trim();
  output = output.replace(/(^,)|(,$)/g, "").trim();
  return output;
}

function objOrFncInp(function_input, constructor_input) {
  if (function_input !== "" && function_input !== null) {
    function_input = function_input;
  } else {
    function_input = constructor_input;
  }
  return function_input;
}

function return_clnstrOut(outList) {
  const ttxtObj = {
    stTxt: outList[0],
    stNmb: outList[1],
    stPnc: outList[2],
    txt: function () {
      return this.stTxt;
    },
    nmb: function () {
      return this.stNmb;
    },
    pnc: function () {
      return this.stPnc;
    },
  };
  return ttxtObj;
}

//#endregion

//#region console log

const getdt = require("./infodt.js");
let fnctit = getdt.displayInfoData();
const line = fnctit.line;
var description = fnctit.descript;

function display(dispout, input, output) {
  if (dispout == true) {
    console.log(
      description,
      "\nInput:",
      [input],
      "\n\nOutput:",
      output,
      "\n",
      line
    );
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
