# Web Technologies Assignment 02
Vrije Universiteit Amsterdam

 
[You can reach the dynamic table with this link](https://kucukbahadir.github.io/COURSE-Web-Development/assignment_02/)


# A2: Assignment "Scripting"

**Due** Monday by 10:00 **Points** 100 **Submitting** a file upload
**File types** zip **Available** after 6 Jan at 10:

```
Submit Assignment
```
# Assignment "Scripting"

Your job is to extend, with the help of a text editor, the HTML and CSS
submitted for Assignment 1. The main goal is to use JavaScript to replace the
_static_ content in your product table with _dynamic_ content (see task 3 below).
Please make all tasks in the order given (we recommend you "warm up" by
first doing task 1 and 2 before you do 3. Task 4 is easier if you first do 3). Make
sure you understand the **learning goals** and have read the **tips section** on
Canvas before you start coding.

```
1. The product and any other tables you created for Assignment 1 should
become sortable on all columns by clicking the table headers (columns
where sorting is not meaningful do not need to be sortable).
2. You will be using the same database you used in Assignment 1 to POST
your form data to. This database might be full with data you used to test
your form. Even if it is not, it is nice to be able to reset your database to the
original state with just the two example products. To achieve this, you need
to add a reset button to your page that resets the information in the
database. This button should reset the database associated with your key,
by using AJAX to send an HTTP GET request to
https://wt.ops.labs.vu.nl/api20/????????/reset (replace the question
marks with your 8-character API from Assignment 1)
3. You should manually delete all the <tr> table rows with products in the
HTML product table you submitted for Assignment 1, so you start fresh with
```

```
A2: Rubrik
```
```
an empty table. To fill the product table, its content should be created
dynamically by using JavaScript to insert the data into the table. The data
should be requested from our web server. You should first send an AJAX
GET request to the same Web service as you used for the Assignment 1
form: https://wt.ops.labs.vu.nl/api20/????????. When this requests returns
successfully, you should insert the returned JSON data into your table using
the DOM.
4. The form to add new products that you included in Assignment 1 resulted
into an (ugly) new page when the submit button was pressed. This is the
time to fix this! You should replace the default form submission handling of
the browser by your own method. The result should be that users of your
page can add new items without leaving or reloading the entire page ,
and that the submitted form data is posted in JSON to the server using an
AJAX POST request. Note: there are alternative ways to achieve this,
discuss with your lab partner how you will handle this before you start
coding.
```
# Submission

Include URIs references to the appropriate CSS and JavaScript libraries in the
head element of the HTML file. Use of URIs referring to the original location of
the libraries on the Web is preferred. Do **not** submit files from third-party
JavaScript libraries that you have downloaded from the Web. Only in case the
original site explicitly requests not to "hotlink" their files, you may include them
in your submission. If you do so, please indicate this clearly at the top of your
HTML file, with a link to the page requesting you to refrain from hotlinking.


```
Total points: 100.
```
```
Criteria Ratings Pts
```
```
20.0 pts
```
```
15.0 pts
```
```
55.0 pts
```
```
10.0 pts
```
Sortable tables
You can receive maximum 20 points for correctly sorting all
tables. Depending on the JavaScript framework used, sorting the
dynamically build table can be much harder than the normal
static table. A correctly working static table will still be awarded
with 15 points.

Reset button
You can receive maximum 15 points for using AJAX to implement
a correctly working and well designed reset button.

Dynamic table
You can receive maximum 55 points for implementing the
dynamic table: 30 points are awarded for loading the initial
content from the server (using AJAX) and placing the content into
the table (using the DOM). Another 25 points are awarded for
correctly handling the submit button (using AJAX for sending the
form data to the server in JSON, updating the table with the new
data without reloading the entire page).

Misc.
The remaining 10 points will be awarded for using good coding
style (clean separation of HTML and JS), clear comments and
correct use of filenames as required in the submission
instructions.



