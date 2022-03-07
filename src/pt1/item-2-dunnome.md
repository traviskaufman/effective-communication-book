# Item 2: Assume that People Don't Know What You Mean

I once worked on the UI of an extremely complex internal tool at a very large
technology company. One of our larger org's UX designers at the time was working
on mockups for a new feature we were launching. During a design review, the
Senior-most engineer – one whom might be called the "principal architect" – on
the team gave feedback that an aspect about it should change. When the designer
inquired as to find out more information about this change, the principal
architect explained it to them. During the explanation, another engineer on the
team questioned an assumption that the architect had made. This lead to a
nuanced technical discussion on the internal implementation of the tool's
backend which lasted for the rest of the meeting. The UX designer said nothing
during that entire time. I wound up meeting with the UX designer again,
separately (I was the UI person) and worked out the mocks. I then took it back
to my team to verify. What happened there? Is there anything that we could've
done better? If you ask me, there is:

**When talking to people not directly involved in the day-to-day development of
your product, assume that they have little to no idea about what it is or how it
works**. (Explain more about this)

So what do you do if you can't assume that others know what you're talking
about? You have to explain it. This may be an uncomfortable thing to do at
first; you may feel that this is a cynical attitude. You may not want to be
perceived as a know-it-all or an overexplainer. You may not want to spend the
time and energy trying to fill in the correct background knowledge. But, it is
very necessary, and what you'll find is that you can do it in an informative,
respectful, and engaging way. Furthermore, you will find that meetings will go
much, much, _much_ more smoothly when you do. This goes double for any sort of
"cross-functional" work you will have to do with others outside of the
engineering discipline.

You can identify when an explanation might be needed using a very simple
heuristic: if you're in a meeting and you're about to say a word that the other
person has a >50% of hearing from you for the first time, you probably need an
explanation. For example in that design review section, when the principal
architect said that the mock needed to change, they began to explain using a
bunch of domain-specific terms and technical jargon related to internal
engineering tools and our codebase, something that is out of the wheelhouse of
most non-expert engineers, let alone UX who are part-time doing mockups for us.
What I believe they _should_ have done is provided some background. But again,
for reaasons I said above, it might not be clear how to do that without sounding
cynical, condescending, or loquatious. I am very lucky to have a partner that's
an engineering manager and a stellar communicator, and she has helped me develop
an "algorithm" if you will, for explaining concepts that tries to avoid this,
based on my necessary experience having to do so. It goes like this.

1. Before you use that first technical term, _ask_: "Should I explain the term
   `<term>`?"
2. If no, continue until you hit probable next unknown term.
3. If yes, determine if there is a **substitution** – different word or way you
   can phrase it – which will explain it simply and you are at least 95%
   confident the person has heard of the word(s) or phrase(s).
4. If there is, use that instead and go back to step 2.
5. If there is not, say: "let me briefly explain `<term>`, because I think it it
   is necessary to for the discussion". And then briefly – *briefly* – explain
   the term.

That "briefly" part might sound complicated, but there is a secret ninja hack
that simplifies it: _use a concrete example of where it is used vs. try and
explain the general underlying concept_. For example: ...TODO give an example 😂
It turns out people learn better this way (more on this in [Item
10](./item-10-examples-over-suggestions.md) and [Item
19](../pt2/item-19-hyperspecific.md)).

This algorithm has a few key benefits, namely:

- It _gives the other person the opportunity_ as to whether or not an
  explanation is needed. This avoids over-explaining or being outright
  condescending (FOOTNOTE: There is a risk that the person can get offended by
  you _asking_ if they know of the term, but you can justify that by saying that
  you asked for the _sole purpose_ of aiding in the discussion. Hard to argue
  with IMO).
- It uses a multi-tiered efficiency method: first, substituting the term (the
  "fast path"), and then, falling back on the more expensive explanation
  operation if substitution doesn't work.
- It grounds the explanation with a _clear goal_: explaining the unfamiliar
  term. This keeps the explanation focused, and (hopefully) expedient.

(CITATIONS NEEDED FOR THIS WHOLE PART) The science behind this is actually quite
fascinating: repitition patterns. Again, evolutionary biology and cognitive
science. Our brains are lazy af (BIBLIO: Khaneman), and got really, _really_
good at learning patterns. When you use patterns a lot, you can think
_intuitively_ (I'm sure this is nowhere near how it actually works) of what the
brain does as essentially load those patterns into an L1/L2 cache so that
they're quick and easy to access. It turns out communication is one of those
patterns. The problem is that, especially when you communicate with others
outside of your immediate circle, you've learned different patterns, but you
haven't realized that you've learned different patterns, because, again, your
brain is lazy and you just think "oh yeah this is work let me keep using these
patterns".

If and when you employ these methods, you will be amazed – *amazed* – at not
only how much more productive you are in working with others, but also how many
assumptions people make when they talk to one another! It takes time and
practice, but the payoff is massive.
