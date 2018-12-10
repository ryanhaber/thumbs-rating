# thumbs-rating
A simple plugin for a thumbs up/down with optional feedback that sends results to Airtable (a simple cloud db)

## To use
You need:

* account with [Airtable cloud db](www.airtable.com)
* airtable table set up with 4 columns
* table id for the table
* airtable api key

1. Copy the HTML into the appropriate DOM element of your web page
1. Add the remaining files, preserving the current structure, into the folder that holds your web page. That is, they should stay in the folder bundle, which should live on the same level as the web page.
1. Insert your airtable table id and api key at the appropriate location in bundle/thumbs.js
1. Use a simple web server (like npm's http-server) to run the web page if it is not already being served

## MIT License

(c) Copyright 2017 Ryan Haber

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
