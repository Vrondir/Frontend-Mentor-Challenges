# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![image](https://github.com/Vrondir/blog-preview-card-main/assets/7314229/c055f605-fb73-47bb-819b-6f24b9c9523f)


### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/blog-preview-card-using-flexbox-and-clamp-c1OOOEYIrM)
- Live Site URL: [GitHub Pages](https://vrondir.github.io/blog-preview-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

Responsive design using the ```clamp()``` function.

```html
.card-date {
  font-size: clamp(12px, 1.5vw, 14px); // clamp(minimum value, preferred value, maximum value);
}
```

### Useful resources

- [MDN docs for clamp() function](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) - This helped me for making the responsive design without media queries.

## Author

- Frontend Mentor - [@Vrondir](https://www.frontendmentor.io/profile/Vrondir)
