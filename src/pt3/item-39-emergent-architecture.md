# Item 39: Avoid Forcing an Architecture

Instead, let it emerge naturally. Here's what I mean by this:

When you launch a product, obviously it won't be perfect. Your customers will
use it and tell you everything they hate about it, and then you'll have a better
idea of the direction this will need to go. This will lead to _volatility_, lots
of big changes at first. Eventually, that volatility will die down. Of course
there will always still be changes, but, _assuming that the main idea behind the
product stays relatively the same_ (and, that is a big assumption), that
volatility will die down.

Now, if you try to determine that "perfect architecture" for your codebase up
front, when your product has just launched, what will happen is you'll spend a
lot of time crafting this perfect architecture to represent the idea, then
you'll launch it, then the idea will radically lurch, and you will have to tell
your stakeholders that it's going to take another quarter to launch "v2" of the
product (plot twist: "v2" never happens).

Instead, what you want to do is build a "just good enough" version to ship, and
then _watch for stabilizations in behaviors while using the product, and watch
for repeated ideas and patterns you see **emerging** through out the codebase_.
You will then be able to start synthesizing an abstraction in your head that
represents the repeatable patterns you're seeing across the codebase. Then,
simply name that pattern, and reify it within your codebase, and there you have
it: an architecture that you _know_ works because it's already happening.

When you do "name" the architecture, ensure that others have this same
understanding. Otherwise, people will go off in all different directions. At the
same time, this isn't necessarily a terrible thing, as [ITEM XX](???) describes.

Now that you have a strategy for emergent architectures, I want to revisit the
assumption above: that the main idea behind the product stays relatively the
same. This almost never happens. Reorgs happen. Changes in the environment
happen. Changes in the customers' needs/sentiment happen. These are small,
unpredictable "butterfly-effect" changes that set off a cascade of events that
lead to some sort of radical rethinking of what your product is to customers and
how it can provide value. Let's call these events "black swan events".

_A major part of your job as a SWE maintaining a codebase is to know when these
black swan events occur, and therefore know when to "let go" of your current
architecture/approach_. If the world shifts and the fundamental idea behind your
software changes, then it's highly likely that your architecture will have to
change with it. It is now incumbent upon you to:

- Clarify to yourself, then to your team, then to your management chain /
  customers how the world has changed, from the view of your software.
- Delineate what specific changes have been made, assumptions have been
  invalidated, etc.
- Work with your team to estimate the effort required to evolve the software to
  accommodate those changes.

Note that again this goes back to the idea of "evolution". Ideas evolve,
therefore codebases must evolve, therefore architectures underpinning a codebase
must evolve. The only constant is change.

As a very wise software engineer I worked with once told me: "architecture
happens". Best let it happen naturally.
