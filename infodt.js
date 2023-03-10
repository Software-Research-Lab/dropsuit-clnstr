//#region Dysplay info data

function displayInfoData() {
  const liblink =
    "DropSuit: https://github.com/ladooniani/DropSuit#readme\n" +
    "Copyright © 2016-" +
    getYear() +
    " Lado Oniani - DropSuit. All Rights Reserved.\n\n";
  const libName = "DropSuit NLP module library function:\n";
  const line =
    "\n———————————————————————————————————————————————————————————\n\n";
  const divider =
    "\n-----------------------------------------------------------\n";
  const libraryInformation = line + liblink + libName;
  const functionDescription = `${libraryInformation}
clnstr(null/string)
Input: 'myInputString' raw string, or null (to process the constructor input)

Output:
txt(): Trim. Remove punctuation marks. Remove numbers. Convert to lower case.
nmb(): Trim. Remove punctuation marks. Keep numbers. Convert to lower case.
pnc(): Trim. Keep punctuation, deleting extra punctuation marks. Keep numbers. Convert to lower case.
${divider}`;

  const displayInfoData = {
    descript: functionDescription,
    line: line,
  };

  return displayInfoData;
}

function getYear() {
  return new Date().getFullYear();
}

//#endregion

//#region Modules

module.exports = {
  displayInfoData,
};

//#endregion
