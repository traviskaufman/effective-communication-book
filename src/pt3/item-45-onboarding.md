# Item 45: Invest in Your Onboarding Experience

One of the biggest bottlenecks you will run into as your codebase evolves is
hiring. Not just because – at least at the time of this writing – the market for
software engineers is extremely competitive, but because once you _do_ hire that
great person, you, and probably a few others on your team, will have to onboard
them. You'll have to get them set up to develop within your codebase. You'll
have to get them the right credentials and ACLs to work with your data. You'll
have to educate them on any custom/proprietary frameworks or libraries your team
uses. You'll have to acquaint them with your process. You'll have to build trust
and rapport with other team members. You'll have to familiarize them with your
style guide. Most of all, you'll have to answer a lot of "why" questions: why is
the code structured like this? Why didn't we use this library to solve this
problem? etc.

Onboarding, and especially onboarding well, takes a _lot_ of time and effort. I
mention throughout this book how a codebase represents an idea, that can be
executed by a computer. A mature codebase, one in which people are hired to work
on, represents multiple ideas, and representations for one idea can vary based
on who wrote the code and when it was written. Consider that the code for a web
application responsible for booking flights from 1998 would look very different
from that of 2008, and even more different from that of 2018. If you're American
Airlines, and you've constantly updated and changed your site since 1998 (and
probably before), this is all intermixed throughout the codebase. This is a
_lot_ for anyone to take in, and it's easy to make incorrect assumptions about
ideas, which will cause unneeded churn and volatility. It's also _harder_ for
the new developer to provide fresh perspectives on the existing idea, because
that would imply understanding of that idea.

Furthermore, I have always personally found it very frustrating flying blind
through a new codebase. Over the years, I've learned to not be afraid to ask
(very) stupid questions when coming onto a codebase, because I know even the
weirdest stuff has either been done for an explicit reason, _or_ nobody knows
why it was done that way because the original author left. something something
Chesterton's Fence and whatnot and then transition into:

**In order to keep your team as effective as possible while rapidly growing
(WHICH I NEED TO FOCUS ON MORE), make sure that you are continually thinking
about and investing in your onboarding experience**.

One metric I like to use here is how many questions team members get asked by
newer team members per week. I will caveat this by saying that this only works
if you ensure that you have created a psychologically safe working environment,
and are actively and ongoingly encouraging question asking. If that's the case,
I've found that the more someone understands something, the less frequent
"surface-level" questions they will have.

Another metric I look for is keeping an ear out for indicators of productivity
(EXPAND UPON THIS).

One of the absolutely best ways I've found to onboard is to pair program. I
know, I know...some of your faces probably just contorted in disgust. Others are
ready to close the book and put it away. But hear me out: Imagine an onboarding
process that required you to write zero documentation, did not pull you out of
your day-to-day work of coding, minimized the amount of time you had to going
over pull requests / code reviews with new team members, and fostered trust with
your new team member and made them feel like they've a part of the team for a
while. That's pair programming. First, you can start off coding, with the new
hire simply watching and asking questions. Then, you can switch roles and have
them code something, and rather than them coming over to your desk or pinging
you on Slack every 10 minutes about something, you are setting aside time to
answer all of their questions. All the while, they are not getting confused
reading outdated documentation that you were forced to write in the first place
(either you forced yourself or someone else voluntold you to do it). Since
you've been continuously "reviewing" their code throughout the entire time
you've been pair programming, there's no need for you to do a code review. Now,
you can still _do_ a code review, but chances are it will be way less time
consuming for the other reviewer since you, a seasoned engineer on the team, did
essentially a first pass. Finally, something magical will happen: because you
are communicating, you will learn about one another. Because you learn about one
another, you will learn to either trust one another, or you will learn that the
fit is not good, and that will have saved you a lot of headache down the line.
There are (LINKS) many, many guides and resources on Pair Programming. I will
not go into detail here, but I feel Pivotal Labs in particular has perfected it.
I was lucky enough to work with them early on in my career, and am so glad I
was.

All that said, some teams – and people – hate pair programming. Some teams are
distributed across different timezones, making it very difficult for them to do.
Some teams primarily use outsourced/contract devs where pair programming doesn't
make much sense. In these cases, I've found that a _living onboarding doc_ is an
effective and hassle-minimal way to get new team members up-to-speed quickly and
correctly. I've usually done something like this: when it comes time to hire
that first candidate, I create a doc called "onboarding" and I write down all of
the steps I think I'll need to take in order to onboard them. When they join, I
follow the doc. When something goes wrong, I fix it in the doc. At the end of
the process, I ask the candidate about the onboarding experience, collect their
feedback, and incorporate it into the doc. The next time someone new joins the
team, I have that candidate I had previously onboarded onboard the next person
using the doc, and have them repeat the process of changing it when things go
out of date, and retrospecting. This means that everyone gets to onboard,
everyone _contributes_ to onboarding, and we only have to change things when
it's time to onboard another candidate.

When growing and hiring rapidly, it's important to remain fast and not slow down
development. As they say in the SEALs: "slow is fast, fast is smooth". Investing
in a smooth onboarding experience will help you remain fast in the face of rapid
growth.
