# Item 3: Prefer Asking About Problems vs. Asking for Solutions

As software engineers, we're trained to build products, aka solutions. When
learning to code, perhaps even earlier in your career, you were given clear
problems that you've had to come up with solutions for. Perhaps your tech lead
asked you to rearchitect part of a system to solve a particular scaling issue.
Perhaps a designer has asked you to implement a mock. As you've progressed in
your career, you may have noticed something: the problems aren't so clear. Your
PM might give you some vague description of a pie-in-the-sky vision where you
it's hard to nail down concrete requirements. Other engineers you talk to might
give hyper-specific examples of things they need to do where it's not apparent
how, or why, to generalize it. Designers might bring you mocks that don't really
make any sense when you understand the product. And, worst of all, when you talk
to customers, as we've established in [Item 1](./item-1-dunno.md), _they have no
idea what they want_. Almost every single meeting I've sat in with Software
Engineers talking directly to customers (and, honestly, a lot of PMs), they've
asked some variation of: "what do you want?". "What would you like to see?" "How
would you use this?" And my personal favorite: "Does this look good to you?" We
do this because, as software engineers, we are (desperately) searching for that
solution – that elusive "spec" – that we can then build against. However, it
almost never works out, and that's because, if customers have no idea what they
want, then they'll have even _less_ of an idea of how to articulate a solution.

**Instead of probing others for solutions, probe them about their _problems_,
and try and understand their problems as deeply as possible, as if you were
them. Then, think deeply about that problem, and _tell them_ the solution to
it.** I submit to you that _this_ is the real job of a Software Engineer.

Now, you might be thinking to yourself, "this sounds like the job of a PM". To
which my answer is: "yes and no". If you're lucky enough to _have_ a PM that is
tactically involved in the day to day work of your product, they will have
(hopefully) done this exercise, or their own method, with stakeholders, and from
that determined what needs to be built. But in order for you to take the PM's
"what needs to be built" and turn it into working software, _you need to
understand the interpretation of the PM's problem deeply enough that you can
create a solution that solves the problem correctly_. It's that "correctly" part
where the issue lies. A PM can say "it needs to support tens of thousands of
rows", but it's _your_ job to figure out how to do that if each row is very
complicated and very expensive to render. Often, the beauty of an implementation
comes down to how it chooses to solve a problem given the constraints of its
environment. A deep problem understanding will inevitably help with this.

If you _don't_ have a tactical PM – which may be the case if you work on an
internal team, a smaller startup where one of the founders is also the PM (and
is spending 150% of their time fundraising), or a very technical company where
the PMs are pretty much just engineers that "enjoy product stuff" – this skill
of problem understanding becomes essential if you want to build anything
meaningful. It's the difference between your product becoming a hodgepodge
control plain spaghetti mess of functionality, and something beautiful and
usable and scalable, whether that's a backend system, a UI, or an entire
deployment fleet.

As the saying goes, "necessity is the mother of all invention". Understanding
the necessity, deeply and thoroughly, will help maximize the probability that
you build the right invention.
