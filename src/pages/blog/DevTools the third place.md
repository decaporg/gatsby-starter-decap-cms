---
templateKey: blog-post
title: DevTools the third space
date: 2015-04-01 19:25:00
tags:
- Web Development
---

### It always comes down to coffee and development

{% img /images/origin_294145821.jpg starbucks coffee %}

I recently thought of a tenuous link between Chrome DevTools and Starbucks. Starbucks set itself an early goal to become the '[third space][1]', the space a person would spend time between work and home.

### and now for the tenuous link

In my development Devtools has become my third space. Between the source and the output. You'd write some code, check the output and based of the result, you'd go back and update your code. Back and forth a binary existence of either coding or assessing results.

With Devtools I now have a third space, and for me my most important space as this is where I do my thinking. As it gives me hooks into the three **areas** that make up a website the DOM

{% img /images/javascript-debugging.png Chrome Devtools %}

### theoretical next step

So the next step would be to start saving the changes I'm making in Devtools. Which is where [workspaces][2] come in, the ability to map the files delivered to the browser to it's location on the disk, allowing the source files to be edited.

However the files being delivered to the browser are not always the source files that need editing. Pre-processors for CSS and JavaScript are extremely helpful in development but this adds an extra layer between the source files and the workspace. This is where [source maps][3] come into play. To bridge that link between the delivered files and the source files.

### and in anger?

Reading [Remy Sharp's blog][4] source maps may not be the answer quite yet for JavaScript but I plan on testing workspaces, source maps and browserify together. Its in the 'would be nice' column to add to my workflow. The one that 'would be great' to add is CSS.

So I'll grab a coffee set up source maps and workspaces see how they work, try and blur the lines between spaces and report back.

{% raw %}
photo credit: <a href="http://www.flickr.com/photos/elpatojo/294145821/">el patojo</a> via <a href="http://photopin.com">photopin</a> <a href="http://creativecommons.org/licenses/by-nc-sa/2.0/">cc</a>
{% endraw %}

[1]: http://www.starbucks.co.uk/about-us/our-heritage
[2]: http://www.html5rocks.com/en/tutorials/developertools/revolutions2013/#toc-workspaces
[3]: http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/
[4]: http://remysharp.com/2014/05/30/commonjs-with-devtools-live-edit/
[5]: https://developer.chrome.com/devtools/docs/css-preprocessors