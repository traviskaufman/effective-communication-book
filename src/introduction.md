# Introduction

> Programming is hard. It's also the easiest part of software development.

– [Jason Gorman](https://twitter.com/jasongorman/status/1472895565872697346)

The goal of this book is to help you become a better software engineer. By
"better", I mean "able to build higher quality software". By "quality software",
I mean the definition that Martin Fowler uses in his book, Refactoring: "Cheap
to Change".

Refactoring is one of the most useful software engineering books I have ever
read. Every chapter is a self-contained technique that you can use to improve
upon existing code. I remember I spent a summer reading one chapter a day, every
morning before work. To my delight, I would then go into work, see an area where
I could apply the technique I just read about, and then apply it. I remember
going into work once after reading a chapter called "Push Down Method", which
talks about rearranging code into a logical component such that it can be moved
contiguously. When I got to work, I was told I had to work on porting a very
old, very archaic app from a legacy framework to a modern framework, and that
day immediately put what I had read to use. I felt like I had superpowers. This
feeling was different from how I normally feel when trying to apply software
engineering practices I learn about at work. Usually, the feeling I feel when
trying to apply software engineering practices in the real world is a very
different feeling: one of frustration. Let me explain.

Before I was a coder, I used to be a musician. In fact, I majored in music in
college. My first semester, I took a course called "computer music synthesis",
which explored how computers were able to generate audio. That class changed my
life. I became obsessed with virtual instruments and building synthesizers, and
that inevitably lead me to programming. I'll never forget compiling and running
my first C program; it was the coolest thing I had ever done. What attracted me
the most to programming was the sense of creative fulfillment it gave me. I used
to practice coding by copying implementations of modules I found in books and
online. It reminded me of practicing guitar solos by great players. I used...but
I took the "artistic" aspect of music making into my coding.

- I got frustrated because I couldn't figure out how to apply the concepts I was
  reading about to the code I was seeing.
- It became much worse when I started specializing in "enterprise front-end
  development", working on very technical back-end products with not a lot of PM
  and Design resources.
- Eventually I realized something: _there is no spec. There is never a spec.
  It's just like music composition. You have to figure it out as you go along_.
- Once I started doing this, everything started to change. Things that were
  frustrating now became normal, and things that seemed impossible now seemed
  like an essential part of the job
- I saw this work first-hand when I founded a startup and applied these
  principles.
- It changed the way I approached coding, and yet I don't see this method being
  taught anywhere; it's something every software engineer eventually learns but
  has to find out on their own.

Most "clean code" and "software architecture" books I've read assume that you
have a complete understanding of exactly what you need to build. In practice,
I've found this is rarely the case. I've never showed up at work and heard my
boss say, "Hey Travis, could you please build an HTTP server?" Instead I've
gotten ideas. Messy, ambiguous, wonderful, _human_ ideas. The kicker is that as
a software engineer, your job is to take those messy ideas and produce that
seemingly unattainable "clean code" you keep reading about in software
architecture books. In my experience that's 90% of the job of a "senior-level"
software engineer (aka a SWE who's expected to execute and deliver with minimal
oversight); the actual coding part that all those clean code books focus on is
only 10%.

- Imagine a gap; a chasm. On one side is the messiness of human ideas. On the
  other side is a rigorous specification that you need for a computer program.
- The key is _chrossing that chasm_ (reference the book?)
- What I've never seen talked about in Software Engineering is _how_ to cross
  that chasm.

**The key to taking messy requirements and turning it into clean code is
_communicating effectively_.** Software Engineering is about taking an
intangible idea that someone comes up with and making it real. The a-ha moment
that I had is that ideas come from people, and so in order to bring peoples'
ideas to life, you need to be able to understand their ideas as well – if not
even better – then they do. That understanding can only come from communicating
with them. Once you're in this flow state where you're talking to your customer
about the idea as if its your own, you will be amazed at how intuitive it feels
to implement all of those "clean code" practices you've read about in the other
books, how quickly you'll be able to build, how little "negative surprises"
there are from your customers, and most of all, how good you'll feel when you
deliver something to your customers that goes beyond anything they could have
expected.

This book is modeled after the Effective Software Development series [link?].
Every chapter is a self-contained, bulleted piece of advice that will help you
build great products quickly without feeling like you're swimming against the
current. You can jump around and feel free to choose what you wish. However,
I've tried to make the book enjoyable while reading it beginning to end.

Part I deals with "requirements gathering", a.k.a. extracting ideas out of
people. You will learn techniques and methods for easily disambiguating and
scoping even the most vague and blue-sky of projects. Many of these techniques
come from psychology and other fields, and are translated into the context of
how we work with others as software engineers. At the very least, it will make
what's maybe the "not-so-fun" part of the job, feel a little bit more like that
flow-state you get while heads down in your favorite editor as your fingers flow
effortlessly across the keys.

Part II deals with structuring your code such that it not only represents the
requirements as you best understand them, but _teaches engineers who read it
about the requirements_. Not only will this radically increase productivity and
decrease technical debt, but it will make the building process more
_predictable_, as things that your stakeholders think are easy will be easy to
do in software, and things that they think are hard will most likely be hard.

Part III covers _maintaining_ software. Requirements change, wildly and
unpredictably, and your software must change with it. When you're ready to scale
the code and your team, you can lean on these tricks to increase the longevity
of your codebase and decrease burnout.

- Talk about why I'm the right person to write this
- 10 years specializing in building complex, enterprise software with little to
  no PM/Design support
- Ex-musician that is passionate about coding as an artistic endeavor
- Startup founder that had trial-by-fire experience on how to understand
  customer requirements
- Worked in every domain from startups to hyper-growth cos to big tech

My hope for this book is to help you achieve that "next level" of software
engineering. Whether you're going for that senior-level position, looking to
uplevel your "non-coding" skills, or just trying to feel less frustrated while
working, I hope that there are some things in this book that help you. The book
is 100% free and open-source, and I would very much welcome any and all
feedback. I've learned so much from the open-source community, and want to do my
part in paying that forward, as well as continuing to learn from you all.

With that, let's start by talking about the most important job of any software
engineer: not engineering software and instead figuring out what software they
should be engineering.
