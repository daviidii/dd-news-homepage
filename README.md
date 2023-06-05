# Frontend Mentor - Product preview card component solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

_This is me taking up the product-card-component challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). An inside look on how I tackled the challenge, you will see screenshots of the finished product, and the process I took for the challenge._

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Desktop-view](/screenshots/desktop-view.png)
![Desktop-view-active-states](/screenshots/desktop-view-active.PNG)
![Mobile-view](/screenshots/mobile-viewe.png)
![Mobile-view-menu](/screenshots/mobile-view-menu.png)

### Links

- Live Site URL: [dd-news-homepage.netlify.app](dd-news-homepage.netlify.app)

## My process

**I always start with looking into the design first so I can plan ahead and come up with a solution on how to tackle the project.**

1. I built the structure of the project using HTML, adding all the necessary assets such as the stylesheet, scripts, fonts, or icons needed for the project.

- First a created a `<div>` that will serve as the main stage for the main component. The main component is a `<div>` and consists of a `<header>` inside the `<header>` is a `<div>` for the logo-box, a `<nav>` for the navigation menu, and a `<button>` for the mobile menu states.
- Inside the Main component is a `<section>` for the homepage. Inside the `<section>` are `<article>`, `<aside>`, and three `<div>`'s for the three blog posts at the bottom.

2. After I created the markup I proceed on making the design.

- I used utility classes for elements or components that needs to have a display of flex or grid, flex-direction of column, margin-bottom, or font-weight of 700.
- I made the button reusable since there is two instances of the button throughout the design, I believe this helps for scalability.

3.  After I'm done with the design, I proceed on working on the function of the component.

- I put an event listener to the buttom in the header. This is for mobile states.
- The event listener contains a function that whenever the button is clicked a class called 'open-nav' will be toggle to the `<header>` element resulting to the nav menu showing.
- Also a class of 'disable-scroll' will be toggled to the `<body>` element to disable scrolling whenever the nav menu is open.
- An overlay will also be toggled to blur the background.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS grids
- Desktop-first workflow
- [Sass](https://sass-lang.com/) - Sass preprocessor
- [Google fonts](https://fonts.google.com/) - For font-styles

### What I learned

What I learned here is how to manipulate the DOM and I learned how to use utility classes and which components can be reused.

### Continued development

- When to use or not to use grids
- Sass
- Javascript
- DOM manipulation

### Useful resources

- [Udemy](https://www.udemy.com/) - This helped me get started with web development and design and gave me a strong foundation.
- [mdndocs](https://developer.mozilla.org/en-US/) - This helped me a lot when I'm having troubles with my html, css, or even javascript. I find this really useful especially when learning new techniques.
- [chatGPT](https://openai.com/product/chatgpt) - ChatGPT is really helpful when I'm encountering errors that I have never encounterd before or if I forgot something and I need a quick recall.

## Author

- Frontend Mentor - [@daviidii](https://www.frontendmentor.io/profile/daviidii)
- GitHub - [@daviidii](https://github.com/daviidii)
