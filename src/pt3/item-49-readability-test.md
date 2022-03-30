# Item 49: Check Maintainability with the Readability Test

The "readability test" is a simple, yet powerful, heuristic that you can use to
get a sense of how maintainable your codebase might be. It works like this:

**Ask a brand new engineer to read a part of your codebase, without ever using
the feature/product behind it. Then, ask the engineer what the product does. The
more their answer sounds like a description someone familiar with the product
would give, the more maintainable your codebase is.** For example, if the answer sounds
like something your PM would say about the product/feature, you're doing great. If it is
confused or unsure or seems to be
