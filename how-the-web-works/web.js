// Part 1:

// What is HTTP?
// Hypertext transfer protocol are rules that state how you communicate between a browser and a web server.

// What is a URL?
// Uniform resourse locator the address of a unique resource on the web.

// What is DNS?
// domain name system is the phone book for the web. It turns hostnames into IP addresses.

// What is a query string?
// last optional part of a URL that provides 'extra info' that might be used to change the webpage, also sometimes used by JavaScript. Key-value pairs.

// What are two HTTP verbs and how are they different?
// GET-requests without side effects.(ie, don't change server data) Just trying to get info/webpage.
// POST- requests with side effects. (i.e, change data on a server)

// What is an HTTP request?
// When you point your browser to a webpage on a server.This is almost always a GET request and it contains the exact URL you want.

// What is an HTTP response?
// When the server then responds with the exact HTML text for that page. The web server will often interact with database servers during this process.

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
// Allows the client and the server to pass additional info with an HTTP request ir response. Ex: Request Headers: Host, User-Agent, Cookie Response Headers: Content-Type, Last-Modified, Set-Cookie

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// Browser “resolves” the name into an IP address using DNS. A GET request is made from the web browser to the server with the URL I want. The server interacts with database servers etc. to get the info I requested. The server sends a response with the exact HTML text for the page, or an error/redirect etc.
