# Item 19: Code Hyper-Specific Solutions to Problems

Have you ever encountered a programming problem that you couldn’t find an
elegant general solution for, no matter how hard you tried? I’ve seen this often
happen, especially when working on new codebases. You get stuck with the
programmer version of “writer’s block”. That elegant architecture that you can
ideally plug your problem into eludes you. So what do you do? If you’re like me,
at some point, you throw your hands up in the air and write “bad” code (😱) that
does nothing more than specifically solve exactly the instance of the problem
you’re working on; no generalization at all. I submit that _this strategy_ is
the right way to approach an unfamiliar implementation.

**Write a hyper-specific, un-generalizable solution to solve the single concrete
instance of the problem you’re facing.** Then, take a step back, figure out what
you’ve learned about the problem, and rewrite it to be more general with your
newfound knowledge.

Coding hyper-specific solutions may feel unnatural (it did to me), but
hyper-specificity is how we humans learn to do most things in life. You
(probably) did not learn how to walk by reading about the theory of lateral
motion in a textbook and then applying it to your feet. You saw (most likely)
your parents with their outstretched arms beckoning you to come over to them,
and you figured it out from there. Only after you put one foot in front of the
other multiple times did you learn that what you did was called “walking” and
that there is a whole corpus of knowledge behind it. You learned by _starting
small and concrete and then generalizing by working outwards from what you
learned from your experience._

Unfortunately, the way most institutions and literature teach coding (and most
subjects, for that matter) is the polar opposite of how we learn to walk. First,
they teach the general theory, the data structures, algorithms, tools,
frameworks, etc. Then, they show how to pattern-match these concepts to
real-world problems. This means that when practicing problem-solving outside of
a professional setting, you learn to find the most accurate general theory your
problem applies to and then apply that theory to the problem. I feel like this
is what I did when I, for example, built an example HTTP server in a book
demonstrating clean code. It implicitly teaches you _first_ to learn the theory
behind a problem and _then_ apply it.

The problem is that, in the real world, you often don’t understand the theory
behind the problems you face. Worse, it may be challenging to _find_ a theory
behind the problem. Even worse, if there is a theory on it, you may not have the
time or the resources to dive in and understand it enough to apply it to your
problem elegantly. Out of every professional programming problem I have ever
worked on, I have rarely worked on something that I readily knew the theory
behind, let alone having a theory at all.

So build your own theory instead. Solve the problem any way you can. Once you’ve
done so, reflect on the solution and gain a better understanding of the problem.
Then rinse and repeat. Your elegant architecture will emerge organically with
time and reflection, and even if it doesn’t, that’s okay. You don’t need to be a
physicist to learn how to walk.
