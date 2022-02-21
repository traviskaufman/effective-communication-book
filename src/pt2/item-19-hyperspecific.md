# Item 19: Code Hyper-Specific Solutions to Problems

Have you ever encountered a programming problem that no matter how hard you
tried, you just couldn't find an elegant general solution for? I've seen this
happen a lot, especially when working on new codebases. You get stuck with the
programmer version of "writer's block". That elegant architecture that you can
perfectly plug your problem into eludes you. So what do you do? If you're like
me, at some point you just throw your hands up in the air and write "bad" code
(😱) that does nothing more than specifically solve exactly the instance of the
problem you're working on; no generalization at all. I submit to you that _this
strategy_ is the right way to approach an unfamiliar problem.

**Write hyper-specific, un-generalizable solutions to solve a single concrete
instance of the problem you're facing.** Then, take a step back, figure out what
you've learned about the problem, and rewrite it to be more general with your
newfound knowledge.

This may feel very unnatural (it did to me), but it is actually how us humans
learn how to do most things in life. You (probably) did not learn how to walk by
reading about the theory of lateral motion in a textbook and then applying it to
your real life. You saw (most likely) your parents with their outstretched arms
beckoning you to come over to them, and you figured it out from there. It was
only _after_ the fact that you learned that what you did was called "walking",
and there is a whole corpus of knowledge behind that. You learned by _starting
small and concrete, and then generalizing by working outwards from what you
learned from your experience_.

Unfortunately, the way we're taught to code (and most subjects at school for
that matter) is the polar opposite of how we learn to walk. First, we're taught
the general theory; the data structures, the algorithms, the tools and
frameworks etc. Then, we're taught to pattern-match these concepts to real-world
problems. This means that when practicing problem-solving outside of a
professional setting, you learn to find the most accurate general theory your
problem applies to, and then apply that theory to the problem. I feel like this
is what I did when I, for example, built an example HTTP server in a book
demonstrating clean code. I was learning the theory behind a well-studied
problem, and applying it to the problem.

The problem is that in the real world, you often don't understand the theory
behind the problems you face. Worse, it may be really difficult to find a theory
on what I am facing. Even worse, if there _is_ a theory on it, you may not have
the time or the resources to dive in and understand it enough to elegantly apply
it to your problem.. Out of every professional programming problem I have ever
worked on, I have rarely worked on something that I readily knew the theory
behind, let alone it having a theory at all.

So build your own theory instead. Solve the problem, any way you can. Once
you've done so, reflect on the solution, and in doing so gain a better
understanding of the problem. Then rinse and repeat. Your elegant architecture
will emerge organically with time and reflection, and even if it doesn't, that's
okay. You don't need to be a physicist to learn how to walk.
