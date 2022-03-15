# Item 28: Write Your Code in the Style of its Programming Language

An implementation of a problem in Python would look wildly different than its
implementation in a language like JavaScript, or even moreso Scala or Haskell.
This presents an issue if, for example, you're a Python developer working in a
JavaScript codebase. Or, you're a Rust developer working in a Go codebase.
Programming languages have a _massive_ influence on the design and architecture
of the codebases written using them, the same way that a spoken language has a
massive influence on the culture of the people who speak it. Things that would
work and be elegant in one language do not necessarily translate over to the
others.

Therefore, **when writing code in a certain programming language, structure it
in the same way the author's of the programming language would**. This might
mean using OOP vs. functional programming, it may mean doing `(void *)` casts,
and it may mean using loops and list comprehension instead of more functional
methods.

The most effective way to do this is to _study a lot of coding examples from
folks who are well-versed in the programming language, and try and get a sense
of how they approach problems_. I've found Stack Overflow is a great way to do
this, as is GitHub, where numerous examples of code in every programming
language abound.

Structuring the code in the style of its programming language will help avoid
bugs and nasty surprises, make it easier to integrate libraries and 3rd-party
code into the codebase, and increase maintainability and velocity by ensuring
that you're using familiar patterns wihtin the language. It's an investment that
pays off.
