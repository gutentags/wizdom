
# Wizdom

> The only true wisdom is knowing you know nothing.
> — Socrates

Wizdom implements a very small subset of the Document Object Model.
A Wizdom Document has element, text, and comment nodes, all of which maintain
their parent, child, and sibling references through the appendChild,
insertBefore, and removeChild methods.
Each node has an attributes NamedNodeMap and the getAttribute, setAttribute, and
removeAttribute methods.
The NamedNodeMap implements getNamedItem, setNamedItem, removeNamedItem, item,
and maintains its length property so you can enumerate attributes.
Unlike a native implementation, wizdom nodes do nothing to protect their
integrity and its entire reference graph is mutable properties, which afford a
certain simplicity.

```js
"use strict";
var Document = require("wizdom");
var document = new Document();
document.documentElement = document.createElement("HTML");
```

Wizdom is useful for any project that calls for a light-weight fully linked
mutable hierarchy.

## Parsing

The parse5 HTML parser package provides a utility for driving a DOM builder.
For the convenience of constructing Wizdom documents from text, Wizdom provides
a module that accepts a string of HTML, a document (any valid document), and a
parse5 SimpleApiParser (or facsimile thereof), and drives the population of that
document from the string.

```js
var Document = require("wizdom");
var parseInto = require("wizdom/parse5");
var parse5 = require("parse5");

var document = new Document();
parseInto("<!doctype><html></html>", document, parse5.SimpleApiParser);
```

## Stringifying

Wizdom provides functions for serializing a document as either HTML or text
(stripping out the tags).

```js
var Document = require("wizdom");
var getInnerText = require("wizdom/inner-text");
var getInnerHtml = require("wizdom/inner-html");
var getOuterHtml = require("wizdom/outer-html");

var document = new Document();
var body = document.createElement("body");
body.appendChild(document.createTextNode("Guten Tag, Welt!"));

expect(getInnerText(body)).toBe("Guten Tag, Welt!");
expect(getInnerHtml(body)).toBe("Guten Tag, Welt!");
expect(getOuterHtml(body)).toBe("<body>Guten Tag, Welt!</body>");
```

## License and Copyright

Copyright 2015 by Kristopher Michael Kowal and contributors.
All rights reserved.
MIT License.

