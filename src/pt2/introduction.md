# Part II: Communicating Requirements as Code

> Implementation does not necessarily proceed from invention

– Nassim Nicholas Taleb (BIBLIO: Antifragile)

Once you've gathered all of the concrete requirements you need in order to implement a software program, the hope is
that a picture of what the end product will look like, how it will behave, how it will respond and interact with
people (and computers, in many cases), will start to become clear in your head. By the time you are done gathering
requirements, it is likely you will have a solid fundamental grasp of the _idea_ of what you are trying to build.

But, there's a problem: you now have to take that idea and translate it into code. As [the author of crossing the
chasm] might put it, there is a big, gaping chasm you now have to cross, a divide between the human world of ideas
and the computer world of bits, compilers, memory management, data structures, algorithms, design patterns, and the
like.

**It is incredibly difficult to map abstract, messy human ideas into the concrete, definitive algorithms and
patterns needed to execute computer programs. Part II of the book provides guidance on how to make this a bit easier.** The entire goal of this section, all of its items, pertain to mapping the human world into the world of computers.
By doing so, you are effectively "communicating" your solution to the requirements of humans into a form which
computers can understand, and therefore execute. This is, in my opinion, the primary job of the software engineer:
bridge this divide between the realm of human ideas and knowledge and the realm of computer programs, so that the
solutions to your customers' problems can be realized.

This section is mostly philosophical in nature, more than the rest of this book. In the last section, I tried to
supplement every item with the "science" behind why that item may hold merit. That was
pretty straightforward to do, because most of the items in the last section involved human behavior and social
interaction do not. Most of the items in this section, however, deal with _self-reflection_, and because
self-reflection is highly empirical and idiosyncratic, I feel like tryingt to justify the "science" behind what I'm
saying here will at best be like trying to jam a square peg into a round hole, at worst be just plain wrong and
detract from the main points of each item. If at any time any of these items don't work for you, or you find that it d
oesn't work for you, feel free to skip.

Furthermore, I'm specifically _not_ going to talk about design patterns, architectural patterns, functional vs. oop vs. imperative, or anything else that's more implementation-specific. You choose which patterns work best for you. Instead, this is about _thinking about your code in a way that aligns with the product you're trying to build_.
Once you do that, choose which coding techniques you'd like to use to make it so.

Let's begin by debunking the sham that programming has anything to do with "computer science".
