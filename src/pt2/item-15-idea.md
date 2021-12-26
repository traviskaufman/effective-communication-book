# Item 15: Treat Code as a Concrete Representation of an Idea

Think about the best technology product you've ever used. Why did it work so well? What made you love it so much.
I would guess that there's a high likelihood that it solved some sort of problem you were having, whether that's
keeping you organized, keeping you entertained, or keeping you in touch with the people you care the most about. All
great products, all technology that wows you when you use it, comes from someone telling a computer how to go about
performing a particular task. It came from the mind of a human being, and is being carried out by a computer. It is a
thought, in someone's head, brought to life through technology. It is an _idea_.

**All products are simply ideas, realized with software. And since code is what consitutes software, the code itself
is a concrete representation the idea of a product**. Facebook's idea was a way to meet people on college campuses,
and thus its primary database and architecture consist of a graph. Google's idea was to make it effortless to
retrieve relevant information in a mess of interrelated info (web pages with links), thus you have a whole ecosystem of technology invented for taming massive amounts of digital data – BigTable, MapReduce, et cetera.
Amazon's idea was to use the fact that storage was cheap, and now thanks to the internet, easily distributable, to
allow people to buy more books than from any other place. Thus, you have AWS – a solution to the problem of how to
set up an internet equivalent of IKEA. All of that amazing code you hear about has a single source of commonality:
that it was _the idea behind the implementation_ that made it so powerful. As a Software Engineer, _if you truly
understand the idea behind the solution you're trying to implement, and you communicate that idea within your code,
your product and your codebase will flourish_.

In [Item 14](./item-14-art.md), I talked about how I believed that software is an art form. It was after I realized
this that I began to treat writing software the same way I used to treat writing music: I would _try and
fundamentally understand the idea the stakeholder was trying to get across, and translate that into my
medium_. Instead of a piece of music, that medium became a computer program. The treatment of software as an
idea is the foundation behind which I structure all of the rest of my code, and it is how I find that _once you spend
time understanding the idea, fully and truly, the architecture of the software reveals itself_, and it's much easier
to write that clean code.
