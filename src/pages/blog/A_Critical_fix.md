---
templateKey: blog-post
title: A critical fix
date: 2016-06-08T00:00:00
tags:
- Web development
- SVG
description: 'or: How I used critcal path CSS to help speed up loading'
---

A look into how I fixed an issue with a less than optimal optimisation, or how I got critical, phantomjs, SVGs and responsiveness to play together.

### The background & the problem

I've add [critical](https://github.com/addyosmani/critical) into this blogs build pipeline. Critical's job is to generate the critical CSS for each page and then inline it.

The problem was I was getting a pop-in with the css, un-styled content at the bottom of the screen. This felt like a step back from loading the full stylesheet.

![The loading timeline with pop-in](/images/popin-timeline.png)

### The debug process

The first stop in the process to track down the issue was to check what CSS was being inlined. This was simply looking at the generated `<style>` tag in the head of the document. It was obvious that the `.nav` section of rules were missing.

So we know the issue is with the generation; and only some of the expected rules being generated.

My next target for inspection was the SVG title in the header. It seems the rules after that were not being generated. So I deleted the SVG re-ran the generation and found that had fixed the missing CSS rules.

### A picture is worth a thousand words

The next step was to see what was being generated inside of critical to get this unwanted result. So I wrote a simple phantomjs script to take render the page and see what it looked like.

<script src="https://gist.github.com/adsanderson/f2b857633b0ae930f83514334e62fbd2.js"></script>

The results were surprising.

![Large orange page](/images/zoomed-out.png)

I wanted the text in the heading to be responsive. The problem is without bounds that heading SVG got **BIG**. The above screenshot is `10000px` high, so with that critical was getting all of the above the fold content.

### The fix

I added bounds, simply set the `max-height` for the SVG's container element and re-ran the generation to get this.

![the working phantom render](/images/the-working-generation.png)

So now the page loads the critical CSS inline then the rest of the page loads. Without any visible pop-in.
