# Item 22: Optimize for Idea Clarity when Naming Variables

They say that naming is one of the hardest problems in computer science. I
believe that this is because when you name a variable, you're essentially
implementing a compression algorithm. You have to pack a _lot_ of information
into a tiny bit of space. And people have to come and read that name and get a
high-enough-fidelity version of that information back from just reading the
name. Sometimes the information you are trying to convey is easy to compress
(e.g. `numItems`), sometimes it's not (e.g.
`shouldUseNonStandardFilteringStrategy`). But what it boils down to is that _the
goal of a variable name is to aid future maintainers (including your future
self) in understading the concept behind the variable, so that they can work
withe the code correctly._ Therefore:

**Name variables by optimizing for how clearly they represent their underlying
information**. The name is kind of like the title of a book, or the title of a
speech, or the title of a song; you should be able to read it and maybe not have
a _full_ idea about all of the information behind it, but enough to understand
its purpose and work with it within the code.

The best variable names paint a picture in a maintainer's head, making it clear
to them how this piece of data/system/code fits into the larger system. This is
the high-quality compression algorithm at work; from just a name, you've
transmitted a lot of information.

The philosophy behind this is as old as human culture: storytelling. When you
name variables, when you label a concept or a meaning, you are telling a story
about it, ascribing meaning to it, and this is a very simple thing to do yet
_extremely_ difficult thing to get right, because compression is hard, and
getting the right idea inside a person's head is hard.

Here are some tips for helping you with your compression algorithm:

- "Rubber-duck describe" to yourself what the purpose of the variable is, like a
  short story. Then basically give your story a title, and that title becomes
  your variable.
- Look at all of the places where your variable will be used, and describe how
  that piece of code works. Pay careful attention to the way in which you're
  describing the information/concept where your variable will be used, and the
  name can emerge from that.
- Show a colleague the code/expression that's being assigned to the variable,
  and no other context, and ask them to explain what the code does.

Basically, study the code. Develop a deep conceptual understanding of what it
does. Meditate on its purpose. The deep meaning behind the code will arise from
that reflection, and you will have your name. Not so hard after all!
