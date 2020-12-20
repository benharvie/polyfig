const polyfig = require("../index.js");
const expect = require("chai").expect;

require("chai").should();

describe("polyfig", function () {
    describe("getEasterEgg", function () {
        it("should exist as a method", function () {
            expect(polyfig.getEasterEgg).to.exist;
        });

        it("should get the easter egg", function () {
            const outcome = polyfig.getEasterEgg();
            outcome.should.equal(
                "A package with a great name, but no great meaning; yet."
            );
        });
    });

    describe("removeString", function () {
        it("should exist as a method", function () {
            expect(polyfig.removeString).to.exist;
        });

        it("should remove all occurrences of a string from another", function () {
            const item = "polyfig";
            const otherItem =
                "polyfig is a package with a great name, but no great meaning; yet.";
            const outcome = polyfig.removeString(item, otherItem);
            outcome.should.equal(
                " is a package with a great name, but no great meaning; yet."
            );
        });
    });
});