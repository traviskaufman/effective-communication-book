# Item 12: Use the Pause/Summary/Explanation Model to Answer Questions

Usually when we get asked a question, we don't have an answer readily prepared.
Instead, what happens is a _lot_ of information about very complex and broad
topics comes into our minds, and we have to – in real time – make sense of all
of it and distill it into an aswer that everyone can understand. Many times in
my career, I have seen (and done) the behavior of simply saying all of my
thoughts as they come to mind in an attempt to answer the question. (ELABORATE
WITH AN EXAMPLE HERE). While this may be comprehensive, it presents two main
problems. First, because there is so much information being given to the other
party, it's highly likely that the signal of the answer will get lost in the
noise of all of the other information. Second, and worse, the fact that so much
additional information is being conveyed increases the chances that the customer
will latch onto something tangential or unimportant, and derail the
conversation. Often it adds more confusion than clarity. However, it may also be
necessary to convey background information to provide context for the answer. So
how do you answer a question in a way that amplifies the signal but also conveys
all of the necessary information?

**First, pause after the question is asked to collect your thoughts. Second,
state a one-sentence "summary" of the answer. Finally, follow up with the
background explanation**. Following this model of answering questions will
ensure that the conversation stays centered around the right topic, the asker
gets all the information they need, and you have time to organize your thoughts
in order to clearly convey the information.

I developed this method after reading Pitch Anything by Oren Klaff. It talked
about putting the most important information first, and "unraveling" the rest of
the story from there (CITATION NEEDED). It turns out that people have very short
attention spans, even when they ask a question. Our brains are kind of like
event loops. We wait for a short while to receive relevant information on one
connection, and if we don't receive any, we tend to move onto other things, like
what we'll eat for lunch, or how we'll respond to that email we just got
notified of during the meeting. So even when you're answering a question, you
have to fight to keep peoples' attention. What's more, the more confused people
are, the harder their brains have to work. The harder their brains have to work,
the less likely they are to do so. By starting with a summary, you accomplish
two things: you "hook" them into the rest of the explanation, and you give them
a clear "compass" as to what to look for within your explanation.

The hardest part of this whole model might be the "pause" part. I know for me, I
always feel compelled to respond straight away when someone asks me a question.
One strategy for getting around this is to outright say: "let me take 30 seconds
and think about that for a second". Not only will this allow you to say
something out of the gate, it will make your thought process clear, and
potentially discourage others from jumping in.

Giving a summary also tends to be pretty difficult. My personal strategy for
this is to start explaining out the raw answer I would've given in my head, and
then subtracting information bit by bit from that answer until I'm left with the
important part. Much like a sculpter starts with a block of clay and creates a
beautiful sculpture out of it, you can lay all of the information in your head
out in front of you like a block of clay, and then start sculpting and refining
from there. For example, say someone asks you a question around why your API
cannot currently support pagination. You might be tempted to start out
explaining how the API works. You might be working through the implementation in
your head. At some point after that whole explanation, you might be able to go
back and point to the part where you never got around to implementing DB
cursoring and having an `ORDER BY` clause would be untenable given the amount of
data you have to process, or whatever it may be. You can now start to identify
the parts of the "clay" of information that matter: namely, the way the database
calls are structured. Now that you have a waypoint, you can try and summarize it
into a simple, one-sentence summary: "the way we make DB calls doesn't allow for
it currently". _Then_, you can start to explain how the DB calls are made, why
they were built that way, and any other contextual information that might be
relevant (e.g. whether or not there are plans to support it).

What you'll realize after giving a summary, is that the explanation will follow
naturally from sub-questions that will arise out of the summary. In the above
example around API pagination, if you had said something like: "the way we make
DB calls doesn't allow for it currently", the next logical question I would have
would be: "why not?" (or maybe more nicely: "what about the way you make DB
calls doesn't allow for it?"). That would be a great place to start your
explanation. And then further, "is changing the architecture on the roadmap?" or
"how much time would it take?" Following the trail of sub-questions will help
you provide a good explanation, while showing the customer that you care about
what they think. However, be sure to look for clues that you're going too far
down a rabbit hole. Leave space in between points (more on that soon), and – if
in-person or over video – pay close attention to the facial expressions of the
asker. If you see them start to lose focus (eyes diverting), or they seem to be
working hard trying to understand what you're saying (squinting, tense
shoulders, tightening lips), or they seem to want to say something (widening
eyes, fidgeting, rapid open-and-shut of the mouth), _stop_ and let them respond.

There could also be times when you really just _can't_ answer the question in a
straightforward manner. Perhaps this is because the way they asked the question
doesn't make sense. Perhaps it's because the answer deals with such a broad and
complicated domain that a summary wouldn't make sense. If this is the case, _you
should explicitly say so_. Mention that there's not a directly straightforward
way to answer the question, but _be sure to explain why_. Then, offer some sort
of alternative explanation to help guide them toward the right question (expand
on this).

Finally, it always helps to ask "how well did that help answer your question?".
Most of the time, people will lie to you (potentially themselves) and say well.
But, sometimes, they'll ask another question, and that's a signal that you're on
the right track helping them get the information they need. Which, after all,
was the point of them asking the question in the first place.
