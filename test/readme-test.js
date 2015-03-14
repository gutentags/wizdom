"use strict";

var Document = require("../dom");
var getInnerText = require("../inner-text");
var getInnerHtml = require("../inner-html");
var getOuterHtml = require("../outer-html");
var parseInto = require("../parse5");
var parse5 = require("parse5");

it("can create a document", function () {
    var document = new Document();
    document.documentElement = document.createElement("HTML");
});

it("can parse into a document", function () {
    var document = new Document();
    parseInto("<!doctype><html></html>", document, parse5.SimpleApiParser);
    expect(document.documentElement.tagName).toBe("html");
});

describe("can stringify", function () {
    var document, body, em;

    beforeEach(function () {
        document = new Document();
        body = document.createElement("body");
        em = document.createElement("em");
        body.appendChild(em);
        em.appendChild(document.createTextNode("Guten Tag, Welt!"));
    });

    it("writes inner text", function () {
        expect(getInnerText(body)).toBe("Guten Tag, Welt!");
    });

    it("writes inner HTML", function () {
        expect(getInnerHtml(body)).toBe("<em>Guten Tag, Welt!</em>");
    });

    it("writes outer HTML", function () {
        expect(getOuterHtml(body)).toBe("<body><em>Guten Tag, Welt!</em></body>");
    });

});

