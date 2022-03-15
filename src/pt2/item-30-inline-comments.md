# Item 30: Treat Inline Comments like Footnotes

One of the first rules you learn about writing "clean code" is the DRY principle
**D**on't **R**epeat **Y**ourself. It basically says that if you are duplicating
logic in more than one place, you should refactor it into a single place. This
way, if you ever need to change the logic, you only have to do it in one place
instead of many. Almost every developer adheres to this principle, except when
they don't, when I've seen it broken in multiple circumstances: inline comments.

```
// Group items by product id
const buckets = items.reduce((byProductId, item) => {
  if (!(item.productId) in byProductId) {
    byProductId[item.productId] = [];
  }
  byProductId[item.productId].push(item);
  return byProductId;
}, {});
```

Can you spot the repetition? It's in the inline comment! If the logic of the
underlying code ever changes, the comment will go out of sync. This is an
improper use of inline comments.

**Inline comments should add additional information to the code it is located
with, like footnotes do. They should never explain outright the logic of the
code.**

(Talk about how you can rewrite the above example to not need inline comments)

The exception to the rule, of course, is performance-critical code, where you
might need to sacrifice readability for performance.
