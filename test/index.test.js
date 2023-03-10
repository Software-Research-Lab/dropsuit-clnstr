//#region clnstr test

const assert = require("assert");
const dropsuit_clnstr = require("../index.js");

let input =
  "  ,.  ,!- ,hello,!bot  ,  ,, so  ,How long           DOes,,&&&swift  - +-   -delivery   service,,,,,,----TYPE:: ,.:/-- :-class     8457'' take?? ? ?,?thank  you !??!,?!.. . .!..  ...  ";
let expected_output_clnstr_txt =
  "hello bot so how long does swift delivery service type class take thank you";
let expected_output_clnstr_nmb =
  "hello bot so how long does swift delivery service type class 8457 take thank you";
let expected_output_clnstr_pnc =
  "hello, bot, so, how long does, swift - delivery service, type: class 8457' take? thank you!";

console.log("\n\nInput:", [input]);

describe("dropsuit-clnstr", () => {
  describe("clnstr()", () => {
    it("should return the cleaned string with txt()", () => {
      let dsclnstr = new dropsuit_clnstr(input, true);
      let clnstr_txt_output = dsclnstr.clnstr(null).txt();
      console.log("\n\nOutput clnstr().txt():", [clnstr_txt_output], "\n\n");
      assert.equal(clnstr_txt_output, expected_output_clnstr_txt);
    });

    it("should return the cleaned string with nmb()", () => {
      let dsclnstr = new dropsuit_clnstr(input, false);
      let clnstr_nmb_output = dsclnstr.clnstr(null).nmb();
      console.log("\n\nOutput clnstr().nmb():", [clnstr_nmb_output], "\n\n");
      assert.equal(clnstr_nmb_output, expected_output_clnstr_nmb);
    });

    it("should return the cleaned string with pnc()", () => {
      let dsclnstr = new dropsuit_clnstr(input, false);
      let clnstr_pnc_output = dsclnstr.clnstr(null).pnc();
      console.log("\n\nOutput clnstr().pnc():", [clnstr_pnc_output], "\n\n");
      assert.equal(clnstr_pnc_output, expected_output_clnstr_pnc);
    });
  });
});

//#endregion
