# Form Posting Practice

A barebones Node.js app using [Express 4](http://expressjs.com/).

You can read the documentation on Express, if you want to change what the backend code is doing. The file in this directory called `index.js` is where everything happens. If you feel up to it, you can create a free Github account and I can add you to this repo as a contributor. Then you can make changes and push to the repo; I'll have an Action in place to automatically deploy the app to Heroku for you.

In order to use this, all you have to do is set up an HTML file on your computer that has a `form` element in it that looks like so:

```html
<form action="https://afternoon-reaches-59564.herokuapp.com/sean" method="post">
    <input type="text" name="something" />
    <button type="submit">Submit</button>
</form>
```

When the form is submitted, it will return HTML that gives you some analytics about the form. There are other ways to submit form data using JS though. For that, I would look into the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/fetch) and [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData).

Everything in the public folder is being ignored. It was set up to use what's called a **templating engine**, but we aren't rendering HTML pages, so it's not needed...yet.
