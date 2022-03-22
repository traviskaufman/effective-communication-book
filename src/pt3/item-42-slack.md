# Item 42: Allow for Slack

We strive for perfection in codebases. Perfection, by definition, does not exist
anywhere in nature, least of all ideas. Trying to make a codebase "perfect" is
therefore a fool's errand.

**Ideas aren't perfect, people aren't perfect, nothing is perfect. Therefore you
should not only allow imperfection in your codebase, you should _embrace_ it.
That "Slack" is a necessary component of progress.**

New design pattern a dev heard about at a conference? Have a go at it in a new
file. Better date parsing library than the one we're currently using? Try it out
in this module. Like BigQuery more than RedShift but you're an AWS shop? Go make
that GCloud account.

The reason why it is so important to allow for slack is because doing so
_acknowledges that there are still unknowns that you have yet to figure out, and
it will always be this way_. In every idea, every project, there are always dark
spots. There are always pockets of knowledge that are limited, etc. Thus, it's
impossible to just "rationalize" everything or put it into perfect little tiny
boxes, as if they were sushi dishes at a nice Japanese restaurant (such as
Hutsuhana, one of the only reasons I still go to midtown by choice).

Also, trying to eliminate all slack fundamentally limits creativity. All of the
best creative works come from tinkering, trial and error, _bricolage_. Devs need
to be allowed the liberty to experiment and try out new things on real-world
projects, even if they don't work out, and even if they seem "suboptimal".

The trick to making this work, is you need to _manage the slack_. A little slack
is great. Too much and you have a mess of chaos and confusion. Warning signs you
should look out for are:

- How many dependencies does this specific bit of code have? If many, be
  cautious of too much slack because the volatility might cause a chain reaction
  of failures.
- How often is this code read/modified? If a lot, be cautious of too much slack

Also, you alre aso need to explicitly know where the slack is. It helps to call
it out specifically in code via inline comments. Especially if it's a piece of
code that would have used a familiar pattern but doesn't. It also helps to have
acceptance/rejection criteria for the slack, and limit how long it exists.
Reminders are a simple and easy way to do this. It will also mean that you can
have tiny little pieces of slack that a are temporary, vs. large jagged blobs
that stick around and begin to cause more harm than good.

Now you may be reading this and thinking, "you know what Travis, my product is
simple, not a lot of unknowns. It's been around for a while and it's in a
completely stagnant space. Nothing will ever, _ever_, **EVER** change about it.
I don't need to deal with this mess, and the engineers just want to look at
fixing something and go home. This slack seems like it'd rock the boat". To
which I have two replies:

One, hidden risks. Let's say that one day (REWRITE THIS FOR OPENSSL). You
build that one single component that does everything. It can be adaptable in
every part of the codebase. It is completely DRY. It files your expense reports,
nay, it _intercepts your credit card swipes_ and immediately logs and reimburses
your expenses for you. After decades of searching, you have found what every
programmer / "computer scientist" has been searching for: the perfect
abstraction. You implement it everywhere in your codebase, you publish a
research paper on it, and it catches on like wildfire. You are
given the title of "distinguished software engineer".

Slack will allow for novelty where you can discover amazing patterns. (ANTIFRAGILITY SECTION)

Perfect is the enemy of good. While the slack in your codebase might prevent you
from achieving perfection, when managed properly, it will almost certainly lead
to goodness.

P.S. if you're interested in this idea of "necessary slack", I cannot recommend
enough reading the work of Nassim Nicholas Taleb, specifically his _Incerto_
series. It is the progenitor to many of these ideas here.
