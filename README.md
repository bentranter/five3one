# five3one

A simple mobile web app to track your exercise.

### Usage

```bash
$ rethinkdb # then in another window,
$ npm start
```

### Test

With RethinkDB and the server started,

```bash
$ npm test
```

### Weird Backbone Practice

To handle the views, I appended each template to the `<body>`, and toggled visibility with the router. This way, you don't lose your "session" when you're entering a new workout, and you can optimistically update things in other tabs (which you normally wouldn't be able to do, since those tabs wouldn't be attached to the DOM).

### License

MIT. See LICENSE.md