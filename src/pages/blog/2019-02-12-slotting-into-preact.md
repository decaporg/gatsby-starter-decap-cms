---
templateKey: blog-post
title: Slotting into Preact
date: 2019-02-12T11:43:03.517Z
description: 'or: How I learned the root of all things'
tags:
  - development
  - web components
  - preact
---
Preact is an excellent UI library and web components make a fantastic building block. But, I have found one stumbling block that relates to the `<slot>` element in browsers without the shadow DOM and using the a polyfill.

### The issue

The issue is after an update content appears twice, once as expected and then the same DOM content but usually styled slightly differently.

What is happening is the polyfill will move content so it no longer matches the VDOM internal to Preact.

### What is happening

When you use a web component using shadow DOM and has a slot you would write something like this:

```html
<custom-element>
  <h2>Some heading</h2>
</custom-element>
```

The next step is for the web components polyfill to initialise the custom element and add in the additional DOM. 

```html
<custom-element>
  <div class="custom-element__wrapper">
    <slot>
  </div>
  <h2>Some heading</h2>
</custom-element>
```

The polyfill then moves the child elements fro the custom element node and places them inside the additional DOM of the custom element.

```html
<custom-element>
  <div class="custom-element__wrapper">
    <h2>Some heading</h2>
  </div>  
</custom-element>
```

When an update occurs in Preact this is where the issue occurs. Preact will diff it's derived V-DOM against the actual DOM and find that the the custom elements child content is missing from it's root and will then insert it.

```html
<custom-element>
  <div class="custom-element__wrapper">
    <h2>Some heading</h2>
  </div> 
  <h2>Some heading</h2>
</custom-element>
```

What appears in the actual DOM and the screen is the content of the custom element doubling up, usually with different styling.

### The solution(s)

There are a number of ways to mitigate the impact this has, first:

#### Move the slot

If you have control over the web component then to try and have slots in the root of the components template. If the content does not need moving then the component's output and Preact's VDOM will match in terms of structure.

This is not always possible, for example your design system button will want to use an actual button under the hood to take advantage of it's semantic meaning.

#### Targeted updates

Using the component life-cycle method `shouldComponentUpdate` lets you control when changes occur. This means when an update is triggered higher in the tree of the application you can check to see if the props passed to the custom element have changed and then if they are the same then stop the update process. Stopping the VDOM and actual DOM diffing against each other.

Then when you do need to update then it's best to:

#### Blow it away

If an update does need to occur then it is best to rerender the entire component rather than try and update the child elements.

The easiest way to do this to define the element within the render method, or if you are using an external Preact component to bind the component within the render method.

```js
import { ExistingComponent } from "./excistingComponent";
const RerenderComponent = ExistingComponent.bind(null);
```
