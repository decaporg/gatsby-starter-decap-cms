---
templateKey: blog-post
title: A Question About Module Dependencies
date: 2014-08-30 19:25:00
tags:
- Web Development
- JavaScipt
---
After writing some custom Grunt tasks, and getting my feet wet with node, then following this up with some work using [browserify][1]. I had a feeling there would be a trend in front-end development for micro libraries (in the style of node) on the horizon.

I have yet to figure out if this will be a good thing for the front-end.

One of the strengths of node modules is how it deals with the dependencies for each module; and that is to keep each module and the modules it is dependant on in a separate package.

## That's a lot of utility libraries

This can lead to duplication in a project. As two modules can both have a dependency to the same module but each package for those original two modules will have it's own version of the dependency included.

![module example](/images/modules.png)

This can result in duplication in the final version of the product being produced.

As of writing (28th August 2014) there are 91 472 packages on [npm][2]; and of the top ten most depended on packages underscore and lodash (two utility libraries that have a common API) are depended on by 11 647 packages (6937 and 4710 respectively). So just over 12% of the packages share this dependency and each package includes it's own version of underscore/lodash.

![npmjs.org](/images/npm2014-08-28.png)

## Version was an important word

One of the advantages of each package having it's own dependencies is the version of the depended on module does not matter. e.g. moduleA could require lodash 1.1.1; while the newer moduleB uses lodash 2.4.1.

## In the node world this way is working!

Server side this works great. Everything is kept clean and separated. The advantages of this approach at the server (and local development) side greatly outweigh the costs of duplication.

## Will this work for the front-end

In the front-end world of concatination and minification. The costs of duplication seem higher. More data being passed down the wire, more for the browser to process.

As with many things in the development world its striking that balance between the advantages a technology brings versus the costs.

So long term another technique could be used for smart reusable clean modules.

To use this node style technique in front-end development, while trying to minimise the costs of duplication, will require restraint from developers. Restraint from front-end devs to decide on a case by case basis of the costs of adding a new module.


[1]: http://browserify.org/
[2]: https://www.npmjs.org/