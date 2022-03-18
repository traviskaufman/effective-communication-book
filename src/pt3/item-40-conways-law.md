# Item 40: Respect Conway's Law

In April 1968, Melvin E. Conway, a ??? (FILL IN THE BACKSTORY ON CONWAY), wrote
a paper called "How do Committies Invent?" It's central thesis was ???? (FILL
IN). Within that paper, Conway said a pearl of wisdom that I have yet to seen
disproven at any organization I have ever worked with, whether that's two people
in a room or a massive tech company:

> Any organization that designs a system (defined broadly) will produce a design
> whose structure is a copy of the organization's communication structure.

First, given that this is a book on communication, I would be remiss not to
include a quote on communication. But really, what this means for you as a
software engineer maintaining a codebase is the following:

**Structure your teams like you structure your codebase. DO NOT try and force
the other way around**

If you have a codebase that is largely split into a massive backend layer and a
massive UI layer, with an API contract in between, then split your teams into
front-end and backend teams. _Just do it_. It doesn't matter if you want to
promote interdisciplinary knowledge sharing in your org. It doesn't _matter_ if
the front-end people don't trust the back-end people or vice versa. Because your
codebase is set up to divide the two disciplines, they will naturally gravitate
toward one another.

Meta, back when it was known as Facebook, created GraphQL. GraphQL is _perfect_
for an org structure like this. Why? Because GraphQL _forces an explicit
contract between a UI and a backend_. Everything must be defined, everything
_must_ be explicitly specified, and so the only way talhat happens is for those
teams to work together. The UI team can't just go off and hit an internal API
endpoint and mess up your SLAs. The backend team can't swap out the structure of
their API return value and thus break your UI. This, IMO, is the true power of
GraphQL, and why it works so well for orgs like this.

Contrast this to a codebase that's largely a "full-stack" product. Front-end and
back-end are very closely tied together. You have to go across the stack to
surface UI changes. In this case, _structure your teams vertically_, with teams
organized around the different logical sections of the codebase regardless of
software discipline. _Just do it_. It doesn't matter if your one backend
developer hates JavaScript and feels isolated. It doesn't _matter_ if code
reviews are being sluggish because the other front-end devs don't have context
as to what your specific product is when they review it. Because you have to
work across the stack to complete your tasks, the cross-functional communication
will happen _naturally_.

Now you may take umbridge with what I said above. Maybe you _want_ to promote
interdisciplinary knowledge sharing. Maybe there's not enough of a focus on the
actual end customer experience, which looks at the front-end and back-end in the
exact same way, and you do not see that empathy reflected in your org. Then,
once again look to Conway: **structure your codebase like you desire your teams
to be structured**. And I mean like the code lives in the same repo. In the same
parent folder. There are tests which couple the UI code to the backend code.
Now, these folks _must_ communicate, because their code is linked.

Of course, as Karl Popper showed us, "laws" only require one falsification in
order for them to be null and void. Perhaps one day, I will see an example where
the most harmonious org structure is not reflected in the codebase. But I've yet
to see it.
