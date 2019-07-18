---
templateKey: blog-post
title: From Bootstrap - How to make a point with CSS
date: 2014-04-01 00:00:00
tags:
- Web Development
- CSS
- Bootstrap
---

Something I noticed while digging around in bootstrap was how they added a point to a dropdown menu. I thought I'd demo a simplified version of the steps to get there. In Bootstrap the point is created using a pseudo element and also takes advantage of ```background-clip```, but I'll be keeping things simple here.

1. Start with an element (div) and add a border
2. Each side of the border is connected at either end by a mitre joint. This is what is taken advantage of To create the pointer look.
3. The height and width of an element is the internal size of that element, the border is calculated on top of that. So the border will still be drawn even when the height and width are both set to 0. I've also increased the size of the border here.
4. Final step is to make 3 of the sides transparent and the ```background-color``` transparent. This leaves you with a pointer.


You don't have to have an equilateral triangle, by changing the widths of the 2 adjacent sides you can create a variety of triangular shapes. The demos all have a ```border-top-width``` of 20px.



 {% jsfiddle 6gy3F result,html,css %}