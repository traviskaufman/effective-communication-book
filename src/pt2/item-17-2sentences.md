# Item 17: Describe Your System in Two Sentences

When I was in YCombinator, they would drill into our heads that we needed to be able to describe what our
company does in two sentences. (BIBLIO: YCombinator...link to blog post or something). Two clear, simple, unambiguous
sentences. Not some marketing fluff about how great our company is. Not some lofty mission statement or tagline. Just
plain facts that immediately convey the heart of your company's value. They made us begin every weekly session by
stating our companies' two-sentence descriptions, and giving critiques on them. This was incredibly useful to us
because we really had to truly, deeply, and fundamentally understand what we were building in order to convey it in a
way where the main value could be grasped by a stranger who's never heard of it (and probably doesn't care about it)
in two sentences. Now, think of the software architecture of a current project you've been working on. Imagine someone
new joins your team, and you need to bring them up to speed. Where would you begin? How would you describe _not the idea behind your solution, but the actual way it is implemented in terms of its architecture_.

**You should be able to convey, in two clear, simple, unambiguous sentences, how your software system implements the
idea which powers your product.** Notice I used the word "idea", not "ideas", here. That's because you most likely
won't be able to convey multiple ideas in two sentences. You'll need to simplify it down to the very soul of how your
architecture operates. You also may be thinking that whatever you say will be a grotesque oversimplification of all
the time, energy, and hard work of you and your team needed to realize such a complex product. That is _okay_.
_Clarity is more important than accuracy here_ (as I mentioned in a previous item, YC used to say to us to be "80%
accurate, 100% clear"). What that clarity will give you and your team is a _foundational entry point to which the
rest of your architecture can be understood_; it is your mental `main()` method of your codebase (more on that later)
. By getting everyone aligned to the central cornerstone of your architecture, you will be able to:

- Move forward with tricky programming decisions
- Use it to drive future architectural discussion
- Gut-check yourself to align your understand of the idea with what's present in the code's architecture

The philosophy behind this is: simple --> complex --> simple. Most ideas and solutions to them start out simple,
usually stemming from a lack of understanding about the problem or the domain within the idea. As more information is
acquired / requirements are gathered, the idea of a solution – and therefore the implementation of such – mushrooms
in complexity. Most understandings of ideas, and therefore codebases, stop there. They remain infinitely complex with
multiple jagged edges, weird edge-cases shoe-horned in, and dark spots that no engineer would dare ever touch,
including the original author of such code. By distilling your architecture down into two clear, unambiguous, simple
sentences, you make that third leap, from the complex back to the simple, something that only one with mastery over
both the idea and how that idea is implemented within code can have. Note that, like most founders, you will most
likely be evolving this two-sentence description frequently over the lifetime in which you develop the codebase.
Embrace that change, for it means you have a better understanding of the problem today than you did yesterday.
