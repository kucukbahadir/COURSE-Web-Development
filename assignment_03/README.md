# Vrije Universiteit Amsterdam

# A3: Assignment "A RESTful HTTP API"

**Due** Monday by 10:00 **Points** 100 **Submitting** a file upload
**File types** zip **Available** after 6 Jan at 10:

```
Re-submit Assignment
```
# Assignment "A RESTful HTTP API"

In the first two assignments, you have **used** the web service at
[http://wt.ops.few.vu.nl/api20/.](http://wt.ops.few.vu.nl/api20/.) It provides web access to a product inventory
database over an HTTP API. In this assignment, your job is to **create** such a
web service yourself, running on your own computer (e.g. on
[http://localhost:3000).](http://localhost:3000).) Your server will also store the product data in a
database on your computer. The assignment consists of two parts: you need to
first **document** your API and then **implement** it.

Your web service needs to provide web clients with the following functionality:

```
1. to retrieve the full data set (all rows currently stored in your local product
inventory database);
In addition, it should provide the so-called minimal CRUD (Create, Retrieve,
Update and Delete) interface on single rows. That is, it should be possible:
2. to add data for a new product item (Create),
3. to list the data of a specific item (Retrieve),
4. to change data of a specific item (Update), and
5. to remove data of a specific item (Delete);
```
To realize this functionality, your web service has to allow web developers to
manipulate the data in the product inventory over a RESTful HTTP 1.1 API. To
be truly RESTful, it needs to meet the following requirements:


```
a. The API uses the most appropriate HTTP 1.1 method for each function it
provides.
b. Every HTTP GET method should be guaranteed safe ;
c. except for POST, all other HTTP methods should be idempotent ;
d. in all HTTP responses, the response body is served in the format that is
currently most popular under web developers: JSON. Your service should
also accept JSON data as input (i.e. to create or update an item), this data
should be sent in the request body (and not in the URL query parameters);
e. all responses deploy the most appropriate HTTP headers (including one
indicating the appropriate MIME type of the data returned);
f. all responses deploy the most appropriate HTTP response codes , not only
on successful, but also on failed requests.
```
## Documentation part

The documentation of your API should be published in a single HTML5 file. It
should only explain the **use** of the API for developers of a Web client
application that will use your API, and thus contain **no installation
instructions** for installing and starting up your server. Instead, it should focus
on the minimal information developers of web client applications need to know
to use your service. It should cover the functionality listed above, and for each
function define its key REST elements: the endpoint URI of the resource
involved, the HTTP method(s) that can be applied to this resource (along with
the relevant response codes), and the format in which the resource is served,
along with a concrete and illustrative example.

Installation instructions are **not necessary** if your web service follows the
"npm install, npm start" conventions. Only in case your server needs other
instructions to be started: please add a short, plain text README file that
explains how to start your server and or how to setup your database, so it is
easy for the person grading your assignment to install, start and test your
service. Make sure you have read the ZyBook chapters on RESTful Web APIs


```
A3: rubrik
```
and the **lecture 10 preparation** part dealing with REST API documentation
examples.

## Implementation part

Your web service needs to be implemented using the **node.js** framework. It
needs to run correctly on any computer with a recent version of node and npm
installed, it may only depend on additional modules that are correctly listed as
dependency in your **package.json** file so that they can be installed by using
" **npm install** ". All your code should be in a single file named server.js. Make
sure that your server can be started by using the " **npm start** " command.

Your web server should use SQLite to connect to a (given) product database,
and then allow this database to be manipulated by handling incoming HTTP
requests appropriately. Note that SQLite is not described in the zybook, but all
you need to know about this module is documented on the **SQLite tutorial
website (https://www.sqlitetutorial.net/sqlite-nodejs/)**.

Note: We strongly advise you to start by making a first draft of the
documentation of your Web service, as this will help you during the
implementation. Please ask your TA to look at your documentation before you
start implementing, this avoids you implement the wrong thing!


```
Total points: 100.
```
```
Criteria Ratings Pts
```
```
30.0 pts
```
```
20.0 pts
```
```
35.0 pts
```
```
15.0 pts
```
```
0.0 pts
```
Understand REST
You can receive maximum 30 points if you show (in your
documentation, implementation, or, ideally, both) that you
understand how to apply the key REST concepts to realize the
product inventory API. You need to show that you understand
how to use (safe and idempotent) HTTP methods where
appropriate (20 points) and how to use appropriate response
codes (10 points);

Documentation
You can receive maximum 20 points if you adequately document
the requests your web service expects to receive (including
endpoint URIs, HTTP methods, and, if applicable, parameters
and posted data); along with the format of its responses
(including response codes);

Implementation
You can receive maximum 35 points if you correctly implement
the required functionality;

Design & style
You can receive maximum 15 points for good design and general
style. This includes easy to use and remember URI and
parameter schemes, layout and readability of your documentation
and code, etc.

Bonus
Bonus: maximum 10 extra points if you make your assignment 2
submission work with your own server instead of using our
server, and extend the user interface to support all CRUD
operations (including update, delete). Submit also your
assignment 2 files if you do this.




This is a offline tool, your data stays locally and is not send to any server!
Feedback & Bug Reports
