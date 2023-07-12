# project-url-clean

This will be a great way to learn about Typescript. You need to create functions to clean URLs.

Specifically

## Get URL redirect

Write a function that takes a URL, and gives it's final destination. (A URL can redirect to another URL)

You don't need to detect all kinds of redirects though:
```
And then there are the devil's ways. These include meta refresh, the Refresh: header, and JavaScript. Although these methods work in most browsers, they are definitely not guaranteed to work, and occasionally result in strange behavior (aka. breaking the back button).

Most web crawlers, including the Googlebot, ignore these redirection methods, and so should you. If you absolutely have to detect all redirects, then you would have to parse the HTML for META tags, look for Refresh: headers in the response, and evaluate Javascript. Good luck with the last one.
``` (link)[https://stackoverflow.com/questions/704956/getting-the-redirected-url-from-the-original-url]

## Clean URL of all query parameters

This should be pretty simple

## Get the domain of an URL

for example "https://google.com" becomes "google.com".

This is more complicated than it looks, but there are lots of npm packages that do this for you. Make sure to use them. Ideally, do a little comparison, and see what package works best (looking at number of downloads for a package is a good first indicator).