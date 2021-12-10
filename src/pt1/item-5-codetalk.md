# Item 5: Talk About Your Code

The goal of this item is to solve the problem of the "How long would it take to change $FEATURE*X to do $Y question?" Every time I've gottent that question, it's frustrated me. It's frustrated me because not because of how I have to answer that question, but how inevitably the customers are interested in \_why* you gave the estimate you did. "Don't you just have to add another field to that form?" "Isn't it as simple as adding a new subcommand?" "Can't you just restore it from a backup?" Explaining why this won't work requires, somehow, for you to explain how your software is structured. So, before you get asked that question, try thi:

**Explain to your customers, at a very, _very_ high level, how your software is built.**. Do _NOT_ use the terms "data structure", "algorithm", "function", "method", "microservice", or any other jargon that only another software engineer would know. Instead, _translate those terms into ideas that normal human beings can understand_.

Need to explain a data structure? "Here's the _code's mental model_, if you will, that is has for `$entity`"

Class/Service? "So there's this _thing_ in the code. It knows about `$members/$classes` and it can do things like `$relevant_methods/$protocol_endpoints`

Algorithm? "So here's how the code goes about doing `$function`. Basically it takes in `$args`, and from that produces
`$retval`"

Protocol? "So the way that `$thing1` and `$thing2` talk to each other is `$description`

This has two advantages:

- It validates that the code is doing what the customer expects it to be doing: aka the right thing for the product.
- It _makes your customers feel involved in the process_

Science: Domain Driven Design (BIBLIO: DDD) But in reverse! E.g.:

A lot of this idea comes from Domain Driven Design. I read it still early on in my career, and it made so much sense to me that the software itself should use the same terminology as the products that it powers. Shouldn't it also be the other way around? At the end of the day, your customers' idea – the product – is being powered by this software. Shouldn't the customer know that software's current capabilities? I imagine you'd want to know at least what kind of gas the engine takes if you bought a car (or some analogy akin to knowing at a very high level how something's designed gives you a better understanding of it).

My caveat is that I would wait for the right time to say this. Usually, as alluded to above, the customer is talking about capabilities of a system or feature estimates. It's a great education moment, and they'll better be able to understand what it takes to do different things in a system.
