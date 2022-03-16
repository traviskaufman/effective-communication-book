# Item 38: Prefer Evolutions to Deprecations

If you've worked on any software product that's been around longer than a year,
you will have undoubtedly seen the word "deprecated" throughout the codebase. Oh
that method? It's deprecated, use X instead. That system? Deprecated. That API?
Deprecated. Oh actually we deprecated that the other week because of (obscure
reason), but the new one isn't really ready for your use-case.

The oxford dictionary actually has a special entry for the software-specific use
of the word:

> (chiefly of a software feature) be usable but regarded as obsolete and best
> avoided, typically due to having been superseded.

What's interesting, to me, is that last phrase: superseded. The software used to
not be deprecated. It probably wasn't deprecated when the authors originally
wrote the code. But then _something changed_, something about the environment,
about the knowledge of the code, etc., which caused something else to come along
and take its place. Now, that new thing that's taken its place is now a better
fit than the old thing for the task at hand.

Thing exists, something changes, new thing comes along that's a better fit given
the changes, replaces old thing. Where have we heard this before? With
evolution.

**Software does not become deprecated. Software _evolves_. Thus, looking at
something as being deprecated _is the wrong way to look at it_. Instead, the new
thing should be looked at as an evolution**. Deprecate, by nature of the word,
promotes distrust, wrongness, obsolescence. It gives the user of the code the
idea that they are doing something wrong by using it. This sows discord and
makes it harder for everyone to develop.

Evolutions, on the other hand, represent a catching up to changes in the system.
If someone needs to adapt to that change, they use the evolved code. Otherwise,
that code that's "deprecated" works just fine.

Species, along with their evolved counterparts, coexist alongside one another
for a long time (CITATION NEEDED). There is no reason why this can't be the same
for software. Eventually the deprecated software gets phased out. Let it happen
naturally, just like in nature.
