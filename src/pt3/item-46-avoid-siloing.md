# Item 46: Avoid Siloing Responsibilities

One of the biggest anti-patterns I see in tech is the glorification of
individual attribution. There seems to be this holdover from academia where we
want to assign large components of software systems, “ownership”, to certain
people, because that is how we delegate responsibility. I remember one time, I
got passed up for a promotion, and while I definitely wasn’t ready, one piece of
feedback I received was that the more junior engineers on the team did not have
big enough projects with individual ownership to show that they made an impact.
Since then, I have done a lot of self-reflection and interpret this to mean that
if you provide too many padded walls (I introduced a LOT of process on the
team), and don’t let the more junior folks help build those walls, they’ll never
know how to operate in the chaos themselves. However, I still contend that
assigning large swaths of a codebase to individuals — aka siloing
responsibilities — is a naive approach to this. For two reasons:

One, people quit their jobs. If I assign a major component of a system to an
engineer, and that engineer leaves, we’re pretty much fucked, and we will have
to spend a long time reverse engineering what that person did. This is called
the “hit by a bus syndrome”, and it makes code based extremely brittle.

Two, bottlenecks. Certain parts of the codebase may get more attention than
others, and it’s not fair to the engineers that have to maintain them to have to
bare that burden. It’s also not fair to the other engineers not to get to
participate.

**So, don’t silo responsibilities. Instead, treat the _team_ as the smallest
atomic unit, and assign responsibilities to teams.** This will make your
codebase extremely robust, and give your engineers a support system

But there’s a problem here: how do you square this with the tech culture of
focusing on individual impact? It’s a tricky question, but one thing I’ve found
as a strategy to have the best of both worlds is to _have all the engineers
focus on how helpful all the other engineers have been the more_ helpful the
engineer, the more impact they have had. It’s your job to make sure this shines
through in their performance review.

Hopefully though, we see a culture shift in the future that priorities the
impact of teams vs the impact of individuals, and focuses on individual
helpfulness vs big parts of the project they own. Until then, don’t let a
vestigial culture fragiliize y your codebase.
