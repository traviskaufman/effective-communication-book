# Item 41: Invest in Idea Alignment

As more and more people work on your idea, and as that idea changes, there is an
increased likelihood that the understanding of the idea will go out of sync.
This is dangerous, because it means that for anyone reading the resulting code,
the implementation will "look different" depending on who wrote it. These
differences might seem subtle and benign at first, but they eventually compound,
because since software is essentially a chain of dependencies, and software
represents ideas, those divergent understandings get built upon, and eventually
the divergence becomes very clear.

**In order to avoid unnecessary confusion in your codebase, ensure those who are
working on it all have the same understanding of the ideas behind the software.
Do this relatively frequently to ensure that understanding stays in sync.** This
is basically internal product marketing to your team, and yes it can be grueling
and you may get a lot of "why are we doing this" at first, but you will be
amazed at how it makes design decisions much easier when peoples' assumptions
are all the same (even if it may not all be correct :)).

This isn't to say that those assumptions can't be _questioned_. They can and
should. Top down rarely, if ever, works. Nature proves that to us. Plus, it's
more likely that the boots-on-the-ground folks working on the code
day-in/day-out have a more up-to-date understanding of the world, so when they
bring you that understanding, you'd do well to listen carefully to it. It is
then _on you_ to factor in that understanding to the team and communicate it
out.

The "daily stand-up" is a great place to do this. If you work at a big tech
company, or a team that does not practice agile, you probably have some sort of
"weekly sync". This is also a great place to do this.

How do you actually get alignment on the ideas around the product? In YC, we
started every batch meeting by reciting our company's two-sentence description.
This kept us, as founders, anchored on the main ideas behind the company, and
aligned on what we were doing, even in the volatile nebula of a fledgling
accelerator.

Another thing that helps is agreeing upon some sort of format for pull requests,
where in the description, you put the underlying _idea_ behind the code. This
will help make sure everyone agrees upon it as they're reviewing the PR.

Finally, this rule comes with a corollary: it's okay to make decisions which
_actively go against_ assumptions in the codebase. Say you have an engineer who
feels very strongly that one of the assumptions is wrong. As long as the risk /
exposure is minimal, it's okay for them to code it that way. For two reasons: 1)
no one likes a dictatorship. 2) They might be right :) If not, you can simply
change the code and it was a great learning experience. If so, that person just
exposed some insight that you would have never found yourself, and thus you have
benefitted from the divergence. Thus, _the thing that is usually bad for your
codbase, in a small dose, massively benefits your codebase_. We will explore
this idea much more deeply in the next item.
