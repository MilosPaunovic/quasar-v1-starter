# Testing conventions

This is a list of project custom conventions for writing E2E tests which make things uniformed and easier to understand and maintain in the long run.

### Conventions for adding data-cy attributes

Everything should be in lowercase; consider we want to add this attribute to the active user icon element:

```js
// Incorrect
data-cy="ActiveUser-Icon"

// Correct
data-cy="active-user-icon"
```


