---
templateKey: blog-post
title: A quick look at testing behaviour
date: 2015-08-12T00:00:00.000Z
description: 'or: how to test what it does, not how it does it'
tags:
  - Development
  - TDD
---

One of my favourite concepts of testing is the idea of testing behaviour over the implementation. And for this I think it's easiest to explain by diving into an example.

### The background

The pieces are pretty simple, we have a function createChecksum that takes an input and returns a checksum based on that input.

To get started the initial output will be the values from the input array that are joined together and separated by pipes, e.g [1, 2, 3] would return "1|2|3"

### When you're new to testing

The initial temptation with unit testing is to be as explicit as possible. Inputting [1, 2, 3] should give us exactly "1|2|3".

```
var value = createChecksum([1, 2, 3]);
expect(value).to.be.equal("1|2|3");
```

Our function runs, our test passes, everyone sleeps well that night. Until we realise that we need to change our output.

### Should we care about the exact output?

Here is where we start thinking in and testing behaviour, and not the implementation. The role of this checksum is not to give a specific output but to give us a value to be compared against (Is the checksum of array one the same as the checksum of array two?).

So that is where are tests should lead us: Do identical inputs give identical results; and do different inputs give different results.

Here is the first test to see if the checksums are consistent:

```javascript
var value = createChecksum([1, 2, 3]);
var matchingValue = createChecksum([1, 2, 3]);
expect(value).to.be.equal(matchingValue);
```

And the second test to see if different inputs give us different results:

```javascript
var value = createChecksum([1, 2, 3]);
var differentValue = createChecksum([test, test, test]);
expect(value).to.not.be.equal(differentValue);
```

### Change the output, keep the behaviour

So we have three tests Tests A, B and C. At the moment all of the tests are currently passing. But as the application develops we realise that are simple joined up checksum just isn't cutting it.

We need to use a hashing algorithm. So we updated are ```createChecksum``` function with the new hashing algorithm and run our tests again.

Test A now fails: expect (...hashed gibberish...) to equal "1|2|3". However Tests B and C are still passing.

### This is the important bit

The app is still working exactly as expected. We have a failing test but that should now be considered a bad test and be removed. The behaviour is consistent the code is up to date and free to be refactored again in the future. Because if the behaviour of the re-refactored code stays the same the tests will still pass.

### Final thoughts

Just so it's been said, sometimes a test needs to be exact and explicit. That is when the behaviour is exact and specific. I have found creating these tests along side writing the code gives me a far greater insight into the behaviours of the project I'm working on; over simply diving straight into the code itself.
