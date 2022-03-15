# Item 23: Personify your Code

To personify is to give life to otherwise inanimate objects. When thinking about building complex codebases, it can
be hard to know where to begin, even to know how to get started thinking about the solution you're setting out to ]
build. One of the things I do to get around this is I ask myself _if people, not code, were carrying out the solution
I'm coding up, how would I describe what they were doing_? I call this _personifying my code_.

**When you initially write your code, think about how you yourself would solve the problem as a human being. Then, try
and translate that solution into code, using the same abstractions you thought of in your head.**

Here's an example: say you're building a UI for managing massive amounts of data, and your stakeholders have
expressed that the reason why they are still exporting the data out of your app and into Excel is because they
use a lot of custom formulas on the data, and can't figure out how to replicate that in your UI. Thus, your PM
queues up a task to add excel-like formulas to your data processing product.

Where do you even begin? Well, what you could do is start thinking about _how you understand an excel-like formula_
when you see it. First, you'll obviously need an example, since as we saw in [Item 2](./pt1/item-2-concrete.md), the
concrete is always easier to grasp then the abstract. So your PM gives you one:

```
COUNTIF(price, ">50") / COUNT(price)
```

Before writing any code, _think about how you as a human being understand what you are seeing here_. The first thing
I notice is that I see my mind breaking that string of characters into a bunch of different components, namely:

- `COUNTIF(price, ">50")`
- `/`
- `COUNT(price)`

Which I interpret in my head to mean, ...blah blah blah keep going with this.

The key here is to _be systematic with your thinking_. You want to begin to _think structurally_ about the messy
ambiguous solution given to you, and start to form structure by _understanding the solution thoroughly and
communicating that understanding through code_

Another key benefit of personifying your code is that it will help give you a common, easy-to-use language to discuss
implementation with your teams and your stakeholders. Everybody can relate to narratives around humans, it's the most
human thing.
