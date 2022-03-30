# Item 49: Check Maintainability with the Readability Test

The "readability test" is a simple, yet powerful, heuristic that you can use to
get a sense of how maintainable your codebase might be. It works like this:

**Ask a brand new engineer to read a part of your codebase, without ever using
the feature/product behind it. Then, ask the engineer what the product does. The
more their answer sounds like a description someone familiar with the product
would give, the more maintainable your codebase is.** For example, if the answer
sounds like something your PM would say about the product/feature, you're doing
great. If they are confused or unsure or seem to be struggling to articulate it,
or just flat out say the wrong thing, then that might raise a red flag.

Why this works goes back to the pinnacle of this book: communication. If, in
your code, you have clearly communicated what the product does and why, then it
will be simple and straightforward for the engineer listening to the PM or
stakeholder to find what they're talking about, assess the complexity/ambiguity
of those changes, and then implement them.

Conversely, if it's hard to understand how the code relates to the overall
product, the engineer will have to spend a lot of time trying to deduce how
exactly what they're seeing in code maps back to the overall product. This will
lead to a decrease in efficiency and a lot more frustration and time spent
trying to figure out how to do what the stakeholders want them to do.

If you feel that outright asking an engineer to do this would be awkward, there
are other ways you can gague it. Look at the descriptions they write in their
pull request. Are they using the same lexicon that a person very familiar with
the product would be using? Are they noting concepts that would be in line with
the understanding of someone who expertly understands the product? These are
clues that what the engineers are seeing in your code represent the idea of your
product clearly.

At the end of the day, you are constantly communicating with current and future
maintainers throughout your codebase. The clearer that communication is, the
more maintainable your codebase will be.
