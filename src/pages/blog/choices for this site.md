---
templateKey: blog-post
title: The design choices for this site
date: 2015-08-01 19:25:00
tags:
- Web Development
- JavaScript
---

### Because anything fun starts with a disclaimer.

These are the design decisions I've made as of writing, so things may change.

### What is important for this site

One of the ideas that appeal to me is a static site. HTML, CSS and JavaScript and thats it. Simple to drop on any number of services (github pages, heroku, S3, any web host).

The key areas I want to focus on are performance and responsiveness.

### Performance

Generally performance for a web page can be split into two main areas. Data across the wire and processing.

To reduce the amount of data being downloaded there are lots of steps that can be taken:

HTML needs minification, CSS needs optimisation and minification, JavaScript needs to be minified and then finally images need optimasation and all of this will be part of build process for the site.

Then the greatest way of reducing the download size is to gzip the content and again this is can be done as part of the [build process][2].

The easiest way to keep processing down is to not have a lot to process, and that is the idea with this site. So no JavaScript (almost). Two exceptions, first is for Google Analytics, and any JavaScript from embeded sources.

### Responsiveness

CSS has numerous frameworks to give the structure for a responsive site, grid systems and media query breakpoints, but the web is responsive out of the box and then at some point a developer breaks that responsiveness.

There are very good reasons to break that default responsiveness; For layout reasons and most people do not like reading text that fits the full width of a desktop screen.

To have a layout that doesn't break a pages responsiveness the simplest way is to stick to the document model, a single column that flows top to bottom.

To fix the full scrren text in a post ie6 world. Your content can sit in it's traditional fixed width container but instead of a ```width``` being set, ```max-width``` is used. The result is very simple, large wide screens you get the traditional column of text, then shrink down below your max-width threshold and your back in the default document behavior.

[1]:http://motherfuckingwebsite.com/
[2]:https://www.npmjs.com/package/hexo-gzip