# Web Technologies Assignment 01
 
 Vrije Universiteit Amsterdam
 
 [You can reach the website with this link](https://kucukbahadir.github.io/COURSE-Web-Development/Assignment_01)
 
 
 
 # A1: Assignment "HTML/CSS Markup"

**Due** Monday by 10:00 **Points** 100 **Submitting** a file upload
**File types** zip **Available** after 6 Jan at 11:

```
Submit Assignment
```
# Assignment 1: "HTML & CSS Markup"

The assignment is to create the homepage of a fictitious smartphone web shop.

The assignment consists of an HTML-centered and a CSS-centered part. Before you start,
make sure you understand the assignment's **learning goals** , **tips** and the rubric with
details on how the assignment will be graded. You will need a unique "key", this can be
**generated on request (https://wt.ops.labs.vu.nl/keys)**

.

## HTML part

Create your page with the help of a text editor such as jedit, nodepad++ or atom, as a
single HTML file named index.html. The HTML source should meet the following criteria:

```
1. The document should just contain content markup and no style markup.
2. The document should exemplify the appropriate use of all HTML constructs listed in
Appendix 1. Be creative and invent some content that is both typical for a web shop
and shows that you understand the intended usage of your HTML markup. Your page
should include at least one other table in addition to the table created under point 5
below (you will need the extra table in Assignment 2).
3. Where appropriate, the document uses the HTML representation of special characters.
4. The document should be a single, valid HTML5 document, that is parsed correctly by
the W3C Validator (http://validator.w3.org/) (with the "Document Type" option set to
"HTML5 (experimental)".
5. Include a table showing the specifications of some top selling products of your web
shop.
The table should have exactly five columns, with for each product its brand name,
model name, os (operating system), image (an image using a URI pointing to a
```

```
representative image of the product on the web), and screensize (a number stating
the screen's diagonal size in inches, integers only )
The table should have the specification of at least 3 products already filled in. An
example product item could be:
Apple, iPhone X, iOS, 5, (HTML image showing the image at URL)
https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/440px-
IPhone_X_vector.svg.png
You are free to reorder the columns in any order you like, for example if you like the
image to be in the first column.
Note that all images you use should be images publicly available on the Web. You
should link the images into your document by referring to their URLs. You are not
allowed to include your own image files in your submission.
The five table cells of the last row should be part of an interactive form which allows
(your employees) adding the data of a new product.
For the moment, submitting the form should add your new item to a database
associated with your API key. It will return an extremely simple (some say ugly) page to
confirm this (yes, this is indeed ugly and you will fix this in assignment 2!). Simply
include the following attributes in the form element (replace the question marks with
your 8-character API key generated on Link (https://wt.ops.labs.vu.nl/keys) )
<form action="https://wt.ops.labs.vu.nl/api20/????????" method="post">
```
```
This should work provided you add, in your form, the proper input elements with names
that correspond to brand, model, os, image and screensize. Think about what HTML
form-related markup would best fit the data in your table. Note that not all HTML5 form
features are supported by all browsers. If you use elements with limited browser
support, please indicate for which browsers you have found it to work (or not).
```
## CSS part

```
1. Construct, again with the help of a text editor such as jedit notepad++ or atom, two
different CSS style files, namely:
1. A standard style sheet entitled Screen that renders your HTML file on a screen in an
ordinary browser.
2. A style sheet entitled Print intended for regular printing. Think about what you would
find useful and what would make the page easier to read. Assume the printer is a
black-and-white or grayscale printer, so make sure your print style does not depend
```

on color. Think about how you would handle interactive elements when printing to
paper. Be aware that many typographic conventions are different for print and screen,
so think how you can optimize fonts, margins, text justification, heading sizes and
other properties to make your page look like a professional printed document instead
of a standard web page print out.
2. The style sheets should be defined in two separate .css files, which contain valid CSS,
that is, code parsed correctly by the **W3C CSS validator (http://jigsaw.w3.org/css-
validator/)**.
3. The HTML file you made above should use the style sheets. To this end, include the
appropriate definitions in the head element of the HTML file. The Screen style is the
main style sheet for screen display.
4. Think also of adding appropriate class attributes for the elements in the HTML file.
Such classes should represent semantic markup relevant to a web shop (e.g. a
paragraph of class "return_policy", or a list item of type "shopping_basket_content") that
provide the hooks for defining custom-tailored styles.
5. You need to appropriately use **all** properties listed in **Appendix 2**. Note that some
related CSS properties can be combined into a single **shorthand property
(http://www.w3.org/TR/CSS21/about.html#shorthand)** , for these you need to show you
master both the combined shorthand and individual versions. Note that all CSS code
should be in your .css files, CSS code embedded in your HTML file will not be graded.
6. Use images publicly available on the Web by using there URLs, do **not** include your own
image files in your submission.
7. Construct a style sheet that provides a good user experience on a small tablet or smart-
phone, that is, a device without mouse or traditional keyboard, and with a small touch
screen (not larger than 320x480 pixels) that can be used in both portrait and landscape
mode. There are two approaches you can take:
1. The easiest is to create a third style sheet, Handheld optimized for exactly one type of
handheld device. If you take this option, make sure you submit three different styles.
2. A more advanced "responsive" approach is to combine the Screen and Handheld
styles into a single style sheet. Smart use of HTML and CSS allows you to create a
single style sheet that make pages work well on a wide range of screen-based
devices. For this, you are allowed to also use **media queries from CSS
(https://www.w3.org/TR/css3-mediaqueries/)**. Make sure you have read Chaper 5 on
Mobile Web Development of the ZyBook (or Ethan Marcotte's 2010 article on
**Responsive Web Design) (http://www.alistapart.com/articles/responsive-web-**


```
design/). If you decide to use this approach, encode all device-dependent style rules
to adapt to different screen-based devices in the Screen style sheet. If you take this
option, submit only the Screen and Print styles. If you implement this approach well, it
will be rated higher than the first approach.
8. Add, at the top or bottom of your index.html file, an extra section with a short browser
compatibility report. In this report, you briefly summarize your experiences with testing
the HTML and CSS markup of your webshop in different browsers. To test, use Google
Chrome and at least one other browser. Report especially on how you tested the Print
style and the tests of the different screen sizes. Also report on HTML5 and CSS
constructs in your submission that work or worked differently in different browsers. If you
took explicit measures to make something work well across multiple browsers, please
indicate this explicitly (good examples may be awarded max 5 bonus points).
```
# Submission details

You have to submit a single zip file, your submission needs to contain your HTML and CSS
files, nothing more, nothing less.

The zip filename needs to include the assignment number and your lab group number, for
example "assign1-labCS1-45.zip". You need to submit only once per group. In case
Canvas would be down at the time of submission: this is not a valid excuse to miss the
deadline. Try again some time later, and, in case you think you might miss the deadline,
please notify us via wt.few@listserver.vu.nl.

# Appendix 1: List of HTML constructs to be used

```
Minimum set of HTML constructs
Document-level
elements
```
```
html, head, title, body, nav
```
```
Sections, headings
and paragraphs
```
```
section, h1, h2, p
```
```
Various list forms ul, ol, dl
Links (external,
within document)
```
```
a, the id attribute
```
```
Tables table, caption, tr, th, td
```

```
A1 Markup rubrik 2020
```
```
Figures figure, img, figcaption
Text types em, strong, pre
Other abbr
```
```
Forms Different variants of the type attribute on input (types other than
text), appropriate use of the required attribute.
```
# Appendix 2: List of CSS constructs to be used

Using all the CSS constructs listed below is a minimum requirement. You are encouraged
to also find effective usage for other properties from the CSS 2.1 specification. For a list of
style properties, you may consult **[http://www.w3.org/TR/CSS21/propidx.html](http://www.w3.org/TR/CSS21/propidx.html)
(http://www.w3.org/TR/CSS21/propidx.html)**.

```
Minimum set of CSS 2.1 style properties
```
```
Margins individual and shorthand notation)margin-top, margin-bottom, margin-left, margin-right, margin (both
```
```
Background individual and shorthand notation)background-color, background-image, background-repeat, background (both
```
```
Border individual and shorthand notation)border-color, border-style, border-spacing, border-width, border (both
```
```
Text text-align, text-decoration, text-indent, text-transform
Foreground color color
```
```
Fonts font-size (absolute/relative), font-weight, font-style, font-variant, font-
family, font (both individual and shorthand notation)
```
```
Lists list-style-type, list-style-position, list-style-image, list-style
(both individual and shorthand notation)
Properties for
paged media
```
```
page-break-before, page-break-after, orphans, widows
```
```
Other caption-side (in tables), float (e.g. for images), vertical-align
Link pseudo-
classes
```
```
:link :visited :hover, :active, :focus,
```

```
Criteria Ratings Pts
```
```
25.0 pts
```
```
10.0 pts
```
```
5.0 pts
```
```
5.0 pts
```
```
0.0 pts
```
```
20.0 pts
```
```
5.0 pts
```
HTML a: All items from Appendix 1
You can receive maximum 25 points if you show you can appropriately use all
HTML constructs listed in Appendix 1. If you see initially no opportunity to use a
particular construct, be creative and create one. For each construct you do not
use at all, or not according to its intended use, 2 points will be deducted!

HTML b: Interactive form
Maximum 10 additional points will be awarded for the appropriate use of the
form tag and form related elements that result in a correctly working form

HTML c: Validator check
5 additional points will be awarded to a submission that correctly validates using
the HTML5 validator. This means that there are no errors. Try to avoid warnings
too, but this is not mandatory to earn the 5 points.

HTML d: Misc
Maximum 5 points will be awarded for miscellaneous features. These may
include readable markup, good and consequent use of indentation, adding open
and closing tags beyond the requirements of the HTML5 validator, proper use of
HTML comments, correct use of file names as required in the assignment and
submission instructions, inventive use of appropriate semantic HTML markup
beyond the minimum list.

HTML e: Penalty for style and other bad markup
Maximum 10 points can be deducted for the use of style-oriented markup, for
the use of tags against their intended usage, or for HTML code that is so sloppy
that it becomes hard to read.

CSS a: All items from Appendix 2
You can receive maximum 20 points if your style files appropriately use all CSS
constructs listed in Appendix 2. Note that CSS embedded in your HTML file will
NOT be graded. If you see initially no opportunity to use a particular construct,
be creative and create one. For each construct you do not use at all, or not
according to its intended use, 1 point will be deducted.

CSS b: print style
Max 5 points for the print style sheet if it complies with the requirements of the
assignment and uses results in a rendering that is specifically suited for printed
and/or paged media.


```
Total points: 100.
```
```
Criteria Ratings Pts
```
```
5.0 pts
```
```
10.0 pts
```
```
5.0 pts
```
```
5.0 pts
```
```
5.0 pts
```
CSS c: screen style
Max 5 points for the screen style sheet if it complies with the requirements of
the assignment and results in a rendering that is specifically suited for screen
media, and if the print and screen styles are sufficiently different.

CSS d: Responsive design
Max 10 points awarded for making your site responsive to mobile devices.

CSS e: browser compatibility report
Max 5 points awarded for a good browser compatibility report that shows you
are aware of differences between browsers, and know how to deal with them.

CSS f: Misc
Max 5 points will be awarded for miscellaneous features. These may include
readable markup, good and consequent use of indentation, proper use of CSS
comments, correct use of file names as required in the assignment and
submission instructions, use of appropriate CSS properties beyond the
minimum list, good integration of semantic markup with CSS style sheet.

CSS g: validator check
5 additional points will be awarded to a submission that correctly validates using
the CSS validator. This means that there are no errors. Try to avoid warnings
too, but this is not mandatory to earn the 5 points.




