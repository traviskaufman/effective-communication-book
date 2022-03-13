# Item 9: Use Customer Journeys

You may have used things like "Critical User Journeys", or "User Stories", or "Happy Paths", or something similar
in your day to day work. Or, your product manager might have used them. It turns out they're a highly effective way
to gather and validate requirements. But, you don't need it to conform to any buzzword-y methodology for it to be useful. All you have to do is this:

**Image the ideal scenario in which someone uses your software for the intended purposes. Write that down in the form of a fictional short story. Use this to drive all feature requirements**

E.g. [PROVIDE EXAMPLE OF SOME SORT OF REAL STORY]. You need a concrete person with a concrete problem. Describe in completely unambiguous terms what that person does with your software to accomplish their problem.

This accomplishes three key things:

1. **It builds empathy** by making you imagine vividly the world of your stakeholders
1. **It forces you to disambiguate** any unknown areas / workflows that you will run into building your product.
1. **It's the outline of your first E2E test**; you could theoretically take the story and turn it into either manual QA steps or an automated tests (more on automated testing later in the book).

My personal style is to write these in the following way:

> `$CUSTOMER` is a `$CUSTOMER_PROFILE`. `$CUSTOMER` has a problem where `$PROBLEM_STATEMENT`.
>
> Historically `$CUSTOMER` has solved this by `$PRIOR_WORKFLOWS_IF_ANY`.
>
> But instead, `$CUSTOMER` uses `$PRODUCT
>
> First, `$CUSTOMER` navigates to `$PRODUCT_URL`
>
> [...enumeration of steps]
>
> Now, `$CUSTOMER` has achieved a solution that `$DESCRIBE_VALUE_PROP_OF_PRODUCT`.

This works for me, but it doesn't have to be this way. _All that needs to be present is a main character, a problem, and how the main character uses your solution to solve the problem_.

Science: Just like in Item 2 we said people are bad at imagining real-world scenarios, it turns out this same thing applies to when we try and build software. If we try and build for an abstract use case, there's a higher likelihood our product won't accomplish the goals of the concrete use-case, vs. if we try and build directly for the concrete use-case.

If you've read other items, you've heard me mention this, but _don't worry if the solution you come up with to fulfill the use case is not yet "scalable"_. We will be addressing a lot of ways to overcome this later in the book.
