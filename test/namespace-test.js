"use strict";

var Document = require("../dom");

describe("namespaces", function s() {

    it("round trips namespaced attribute", function t() {

        var document = new Document();
        document.documentElement = document.createElement("HTML");

        var element = document.createElementNS("http://example.com");

        element.setAttributeNS("http://example.com", "foo", "bar");
        var value = element.getAttributeNS("http://example.com", "foo");

        expect(value).toBe("bar");

        var spurious = element.getAttribute("foo");
        expect(spurious).not.toBe("bar");

    });

    it("removes by namespace", function t() {

        var document = new Document();
        document.documentElement = document.createElement("HTML");

        var element = document.createElementNS("http://example.com");

        element.setAttribute("foo", "bar");

        element.setAttributeNS("http://example.com", "foo", "bar");
        element.removeAttributeNS("http://example.com", "foo");
        var value = element.getAttributeNS("http://example.com", "foo");

        expect(value).toBe(null);

        expect(element.getAttribute("foo")).toBe("bar");

    });

});
