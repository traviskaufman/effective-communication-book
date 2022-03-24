# Item 44: Assume Your Software Will Fail

In the military, specifically I believe in the Navy SEALs, there is a saying:

> Two is one, one is none.

This is similar to the colloquial saying of "hope for the best, and plan for the
worst". Jocko Willink, an ex-SEAL commander turned business leader (and major
influence on me), says that he always sets two alarm clocks: one digital, and
one analog. That way, if his home town in California gets hit with an EMP, he'll
still get up on time. Or, perhaps, if the digital clock fails for some reason.
What do all of these things have in common? They all _assume failure_, and plan
for it to happen. Usually, that planning happens with known mitigations or
redundancies.

When I think about the way most software is built, it is quite the opposite of
this. Most algorithms assume success, what we call the "happy path", which we
mistake for the "expected path". Happy path software treats failure as an edge
case, relegating exception handling to generic try/catch blocks and using crude
alerting to let someone know of an error (there are of course exceptions, such
as in distributed systems design, where components are assumed to fail).
Instead, software should be designed with the _expectation_ that it will fail,
and treat the happy path as what it truly is: a best-case scenario.

**When you write code, assume that it will fail, and plan for those failures.
Treat success as an edge case**. This will help you mitigate potential negatives
as the software and the environment around you changes.

The truth of the matter is that based purely on probability, it is much much
more likely tha tyour software will break vs. that it will always remain
perfect. Consider that everything has to go right in order for your software to
work as intended. But _only one thing_ has to go wrong in order for it to break.

Fortunately, there are tactics you can use to ensure you are building your
software with failure in mind. One simple, yet not always easy, one is to
prioritize error handling from the start, and incorporate it into every feature
you build and every change you make. Engineers who work on compilers, an old and
wise branch of software systems, understand this deeply. Bob Nystrom, who – at
the time of this writing – works on the Dart programming language at Google,
authored one of my all-time favorite books on software: Crafting Interpreters.
It takes you through compiler design and execution by having you build an
interpreter from scratch. I have learned more useful patterns and techniques
from that book than almost anywhere else in my career, many of which I have put
to use professionally since then (it is quite incredible how many tricky
problems the pattern of "recursive descent" solves). If you follow along with
the book, one of the very first things you do is build error-handling
mechanisms; the interpreter knows when it errors out, and is able to report that
to the user. As the interpreter becomes more advance, the error handling becomes
more robust. When you begin to implement multi-expression parsing, the
interpreter is extended such that it can _recover_ from parse errors in a single
expression and continue execution. This is how, in modern compilers, you are
able to see multiple errors all at once, allowing you to prioritize what to fix.

I used this technique of error-first development when working on a cloud console
UI for an entireprise client. The API I was developing the UI against was
largely untested, and I knew from experience that there was a high likelihood
that things could go wrong. I also knew that my audience was developers, and
developers need as much information as possible when dealing with errors. So, I
spent a lot of time building a robust error-handling mechanism into my UI. When
a page initially rendered data, if there was an error with that data, I would
print the error, along with the stack trace, and make the whole thing copyable
in a single click. I also made sure to include a link to automatically file a
bug report, since this was an internal tool. Furthermore, I created a derivative
"error dialog" that hooked _directly_ into the API client, meaning that any API
call that failed, and wasn't handled upstream, would always surface its error
and provide users with the optimal amount of information. I also made sure that
I had a robust suite of integration tests that tested every single error state
in the application, to minimize hidden risks. When the UI launched, one of its
first users messaged me saying something was wrong. They also said, in the same
message, that they didn't even mind the failure because it was so easy to report
and diagnose. They told me they knew exactly where the problem was coming from
and were able to work directly with another engineer to fix it. Information
empowers developers, and error information is no different.

Google Chrome goes above and beyond just handling errors, and actually makes it
fun. If you've ever used the mobile version of Google Chrome, you know that they
show and ASCII dinosaur if you can't connect to the internet (show a picture).
What you may not know is if you tap on that ASCII dinosaur, it will start a
_game_ where you have to jump over cactuses and such to collect points, ending
when you collide with a cactus. This is very much turning lemons into lemonade;
there have been multiple instances where I have continued playing the
"dino-jump" (FIND THE NAME OF THIS) game well past when I could have connected
back to the internet.

Another tactic that is simple yet incredibly effective at dealing with errors is
to use redundancies: the "two is one, one is none" rule. You've all probably
heard of the phrase "single point of failure" at some point; the idea that there
is an achilles heel in a software system that, if broken, will break the rest of
the system. You want to try to avoid this as much as possible. It's as simple as
reducing probabilities. Imagine a coin toss with one coin. The probability it
lands on heads is 50%. Now for two coins, what is the probability, it is 50%
_of_ 50%. You've just multiple half by itself, _exponentially_ reducing the
probability of failure. These redundancies are incredibly helpful in minimizing
the probably of a total software failure.

There are many obvious places to introduce redundancies into your software, many
of which you probably know and already are using. You most likely have more than
one web server / container running your software. You most likely have more than
one load balancer that you (or your cloud service provider, or your PaaS company
which delegates to your cloud service provider) is using. You _hopefully_ have
more than one database, usually set up as a "master/slave" (FIND A BETTER
PHRASE) replication strategy, or in some instances a peer-to-peer replication
strategy. You probably make database backups. You probably use a "content
delivery network" to serve your web/media assets, and while this is great for
speed, it also increases a layer of redundancy.

But you can go further. Is your software stack running in multiple regions?
Under multiple cloud service providers? Do you rely on a single core library for
your entire application's functionality? What happens if there's a bug or
security risk in that library? What is your backup plan? Have you architected
your software such that it would not be a colossal effort to swap out that
library? Do you make videos of product demos before doing a live demo, just in
case something goes wrong? That last one has saved me on multiple occasions.
Once, I had to demo a proof of concept of my team's product to our org's VP.
Having worked in software for a while and knowing things tend to fail usually at
the exact wrong moment, I made a video of the demo. Sure enough, while in the
meeting, a core system was taken offline, preventing any sort of access to the
system, and my product. Thankfully, I had the demo video handy, and was able to
still move forward with the meeting. The VP was impressed, and we got the green
light to continue development. Since that day, I have always – *always* – made
back-up videos of software I planned on demoing live.

Software changes constantly, and in unpredictable ways. With that rapid change
and unpredictability comes volatility, and with that volatility comes the
fragility of your software system. Don't pretend that this isn't the case.
Instead, accept it and plan for it. As Jocko Willink states: "Discipline equals
Freedom". A little bit of discipline up front with error handling will lead to a
_lot_ of freedom down the road when you can go home to your friends/family at
6pm instead of staying up all night fighting fires.
