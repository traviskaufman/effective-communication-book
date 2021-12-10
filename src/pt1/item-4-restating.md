# Use Restating to ensure alignment

This is something that I use all the time.

When someone explains something to you, how well do you really understand it? Do you understand it well enough to turn
it into a functional implementation? Does everybody else who heard the explanation understand it? How can you be sure?

It turns out that there's a really simple way: **restating**.

Restating is the [TCP Three-Way Handshake](https://www.guru99.com/tcp-3-way-handshake.html), but for humans. It works like this:

Until such time that the response to the final question is positive:

1. Ask a clarifying question
1. Await the explanation
1. Say: "okay, let me restate that to make sure I understand"
1. _Restate exactly what they told you, in your own words_
1. Say: "how well does that align with what you were thinking?"
1. Await their response

Example, acking right away:

- "Have we decided on an API protocol yet? I saw REST for this endpoint but it looks like a lot of the codebase uses GraphQL." [Ask a clarifying question]
- "Ah yeah Jenae wrote that endpoint a couple of months ago when she was on rotation for our team. We hadn't really decided to go with GraphQL but then we saw David's presentation at the Summit and Ramona who worked with him at her last job pinged him about our architecture discussion and he submitted a pull request converting the checkout queries over to GraphQL and that was like pretty much what set this whole thing off. What endpoint was that again anyway? Where in the codebase is that used? Oh that might be part of a v1 feature that we forgot to clean up after we launched v2 fully to prod" [Await the explanation]
- "Okay, let me restate that to make sure I understand: the API protocol _is_ GraphQL, but this endpoint was written before that was fully decided, and we're not even sure if that endpoint is in use anymore. How well does align with your thinking?" [Say okay and restate]
- "Yeah I think that sounds about right" [Await their response]

Example, needing multiple tries:

- "Where do you see the biggest area of opportunity to improve our test coverage?"
- "Honestly it's crazy I got paged in the middle of the night...(narrative about network latency but can't detect properly)"
- "Okay, let me restate that to make sure I understand: whenever you look at the graphs, the UI gets in the way of you making sense of it. H-"
- "The UI is actually fine. The problem is the way that we ingest samples [etc etc etc]"
- "Ah, okay, let me see if I get it now: Because the UI has limited flexibility over how the data is structured, it's hard to slice and dice the data to get the right signal out of it to display?"
- "Yeah exactly"

Science: Chris Voss Mirroring. Renee Girar Mimetic Behavior (maybe)

I use this technique pretty much every day. It has an incredible side effect: it builds trust with who you're speaking to. They get that you're buying what they're selling, and they're excited about it. Who wouldn't be?
