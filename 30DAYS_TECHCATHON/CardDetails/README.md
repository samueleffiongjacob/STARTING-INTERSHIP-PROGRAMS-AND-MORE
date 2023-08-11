# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![card1](https://user-images.githubusercontent.com/74037448/186526181-e5948b57-d403-4c44-a288-33ef25d14aa9.JPG)
![card2](https://user-images.githubusercontent.com/74037448/186526197-244c95f9-4f93-403a-b48d-8a653845b6d6.JPG)



### Links

- Solution URL: (https://github.com/HenryAgu/CardDetails.git)
- Live Site URL: (https://cardetail.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I was able to learn and use ternary operators effectively on the display of errors.

To see how you can add code snippets, see below:

```js
{error && cardHolder.length <= 0 ? (
            <span className="error">Please enter right detail</span>
          ) : (
            ""
          )}
```

### Continued development

I will like to learn more about ternary operators and how to hide and display elements using reactjs.

## Author

- Website - [My portfolio](https://henry-agu-portfolio.netlify.app/)
- Frontend Mentor - [@HenryAgu](https://www.frontendmentor.io/profile/HenryAgu)
- Twitter - [@_henryi_](https://www.twitter.com/_henryi)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
