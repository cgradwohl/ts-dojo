// # Web crawler prompt

// Write a program that takes a domain as input
// and crawls that domain to output a sitemap file.

// The sitemap file should list all links and images broken down by page,
// for every page on the domain.

// Your program should visit all links it finds on the same domain,
// but never visit other domains.

// Also, add a configurable `max_depth` setting,
// to limit how many steps deep the search will go.
// Setting this to around 3 is a good idea for testing.

// ## Example

// The website `https://hckrnews.com` has only a few same-domain links.
// For the input `https://hckrnews.com` the output should look like (not necesarily in this order):

// ```json
// [
//   {
//     "page_url": "https://hckrnews.com",
//     "links": [
//       "https://news.ycombinator.com/item?id=35702407",
//       "https://9to5mac.com/2023/04/25/apple-removes-bitcoin-whitepaper-from-macos/",
//       "https://news.ycombinator.com/item?id=35701116",
//       "https://hckrnews.com/about.html"
//       ...
//     ],
//     "images": []
//   },
//   {
//     "page_url": "https://hckrnews.com/about.html",
//     "links": [
//       "https://chrome.google.com/webstore/detail/hckr-news/mnlaodleonmmfkdhfofamacceeikgecp",
//       "https://hckrnews.com/ext/hckrnews.safariextz",
//       "http://alexander.kirk.at/2010/02/16/collapsible-threads-for-hacker-news/",
//       "mailto:wayne@larsen.st",
//       "https://hckrnews.com/about.html",
//       "https://hckrnews.com/",
//       "http://news.ycombinator.com"
//     ],
//     "images": [
//       "https://hckrnews.com/img/hnr_lastvisit.png",
//       "https://hckrnews.com/img/hnr_getnext.png",
//       "https://hckrnews.com/img/safari.png",
//       "https://hckrnews.com/img/hnext_new.png",
//       "https://hckrnews.com/img/hnext_close.png",
//       "https://hckrnews.com/img/firefox.png",
//       "https://hckrnews.com/img/hnext_newcomments.png",
//       "https://hckrnews.com/img/chrome.png",
//       "https://hckrnews.com/img/hnr_filter.png"
//     ]
//   },
//   ...
// ]
// ```

// ## Language & libraries

// Use any language and any library (that isn't specifically a web crawler).
// Feel free to use the docs and Google things during this interview.

// Python and JS/TS have good libraries for HTTP requests and HTML parsing
// available on CoderPad. If you want to use another language, you can
// share your screen and use your local environment.

// Python and JT/TS suggested libraries:

// - Python 3
//   - HTTP requests with [requests](https://requests.readthedocs.io/en/master/)
//   - HTML parsing with [BeautifulSoup](https://pypi.org/project/beautifulsoup4/)

// - TypeScript
//   - HTTP requests with [fetch](https://www.npmjs.com/package/isomorphic-fetch)
//   - HTML parsing with [jsdom](https://www.npmjs.com/package/jsdom)

// These snippets can be useful starting points:

// ```py
// import requests
// import bs4

// def build_site_map(starting_url: str, max_depth: int = 3) -> None:
//     # ...
// ```

// ```ts
// const jsdom = require('jsdom');
// const fetch = require("isomorphic-fetch");

// function buildSiteMap(startingUrl: string, maxDepth: number = 3): void {
//   // ...
// }
// ```
