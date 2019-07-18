---
templateKey: blog-post
title: How to build in your tests
date: 2019-05-01T19:10:05.198Z
description: 'or: How I learned to get the most out of copying'
tags:
  - development
  - testing
---
When writing automated tests you end up with a lot of similar code. Objects repeat with slight variations each time. Using the data builder pattern can help reduce boilerplate and let those variations leap out.

It was this series of [blog posts](http://blog.ploeh.dk/2017/08/15/test-data-builders-in-c/) by Mark Seemann that introduced me to the idea of test data builders.

### What is a test data builder?

A data builder is a "copy with" tool. The data builder "copies" an object and then can update specified properties "with" new data. The pattern is simple enough to achieve with modern JavaScript and rest parameters.

```js
const baseObj = {
  count: 0,
  property: "Hi"
}
const newObj = {...baseObj, count: 1}
```

We end up with two separate objects both that are structurally the same but with a single variation between them.

### How is a data builder useful?

Lets start with a `foo` function `bigObject -> result` we want to test. We pass our bigObject into the function and get a result at the end. To test this we would have something like this:

```js
const bigObject = {   
  first: "here is the first param",
  last: "here is the last param",
  howManyParams: 5,
  subtle: "not so different",
  isBig: true  
}
expect(foo(bigObject)).toBe(expectedResult);
```

When we get to our second test we start by creating another `bigObject` this time with one parameter different. Now we are in spot the difference territory, the two tests look almost identical but with one small difference in the `secondbigObject`.   

```js
const bigObject = { 
  first: "here is the first param",
  last: "here is the last param",
  howManyParams: 5,
  subtle: "not so different",
  isBig: true 
}
const secondBigObject = { 
  first: "here is the first param",
  last: "here is the last param",
  howManyParams: 5,
  subtle: "difference",
  isBig: true 
}

expect(foo(bigObject)).toBe(expectedResult);
expect(foo(secondBigObject)).toBe(secondExpectedResult);
```

The difference between the two objects is subtle and not easy to spot. Lets see how this looks when we use our simple copy with technique:

```js
const baseObject = { 
  first: "here is the first param",
  last: "here is the last param",
  howManyParams: 5,
  subtle: "not so different",
  isBig: true 
}
const secondBigObject = { 
  ...baseObject,
  subtle: "difference"
}

expect(foo(baseObject)).toBe(expectedResult);
expect(foo(secondBigObject)).toBe(secondExpectedResult);
```

The change is so much clearer to see now. The second test is against the baseObject with a `subtle: "difference"`. The importance of being able to quickly see and compare tests can save a lot of time and mental overhead. It also makes it easier to keep the test descriptions up to date.

### Change happens

Another advantage of using the "copy with" technique is when it comes time to extend or refactor. Lets say we realise our `isBig` property is not actually boolean, but rather an enumeration. We need to change `isBig: boolean` to `sizeState: "Big" | "Small" | "Relative"`. 

In the full objects everywhere world the refactoring would involve changing every object, and making sure that each "true" became "Big" and each "false" became "Small". Having to make a change to every test that uses this object can be a source of risk. While at the same time changing tests that may not even be testing the refactored property.

In our "copy with" technique world, we change our base object. Setting `sizeState: "Big"` This will cover all the tests for one of the cases and all of the tests where the property is not used. Then anywhere where `isBig` is `false` that can be changed to `sizeState: "Small"`

Finally we can extend our tests to cover the new state `"Relative"`.

### As a function

If we want to we can wrap up the data builder into a function, with a builder pattern.

A TypeScript implementation below:

```typescript
type PartialObj<Obj extends { [key: string]: any }> = { [Prop in keyof Obj]?: Obj[Prop] };

function dataBuilderFactory<Obj extends { [key: string]: any }>(obj: Obj) {
  return {
    with: (partial: PartialObj<Obj>) => {
      const updateObj = {
        ...(obj as { [key: string]: any }),
        ...(partial as { [key: string]: any })
            } as Obj;
      return dataBuilderFactory(updateObj);
    },
    build: () => ({ ...(obj as { [key: string]: any }) } as Obj)
  };
}
```

and then some examples of how to use it:

```typescript
interface Person {
  name: string;
  dob: Date;
  tel: string;
}

const personBuilder = () => dataBuilderFactory<Person>({
  name: "test name",
  dob: new Date(2019, 3, 30),
  tel: "555-12345"
});

const adam = personBuilder()
  .with({
    name: "Adam"
  })
  .build();

const partialDoc = personBuilder()
  .with({
    name: "Doc Brown"
  });

const docBorn1985= partialDoc 
  .with({
    dob: new Date(1985, 3, 30)
  })
  .build()

const docBorn1885 = partialDoc 
  .with({
    dob: new Date(1885, 3, 30)
  })
  .build()
```

This is useful with simple objects, when you want to go one level deep. With more complex objects and structures tools for immutability become much more useful.  

### The power of test data builders

The reason I think test data builders are so important is they give you two fold, allow you to quickly focus on the difference between test; and to allow easy refactoring. These are two areas that have caused me pain when it comes to testing. So a test data builder is one of the tools I reach for early and often when it comes to writing tests.
