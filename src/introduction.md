# Introduction

> Programming is hard. It's also the easiest part of software development.

– [Jason Gorman](https://twitter.com/jasongorman/status/1472895565872697346)

Clean code.

Ask any software engineer whether or not they prefer clean code, and they will
most likely say they do. Ask them what they think you _mean_ when you say "clean
code", and you might get varying answers, but they will most likely revolve
around the same point: easy to understand. Variables that paint a picture in
your head as to what they abstract. Functions that are short and sweet and
clear. Modules with simple APIs and manageable dependencies. Systems that
operate efficiently and harmoniously with others.

For those of us in software engineering that consider it a craft, clean code is
what we aim for. We read about data structures, algorithms, and design patterns
in books and online tutorials. We take classes and enroll in bootcamps where we
code complex software like compilers, web servers, and social media applications
so that we can hone these techniques. We'll even sometimes invent hobby projects
for ourselves just so we can try out a new techinque. We sharpen our skills and
refine our craft so that when the time comes where we need to write software
that _matters_ – our jobs – we will be able to execute these techniques and
deliver a high-quality, maintainable product.

Unfortunately, we rarely if ever get to use our craft at our jobs. In fact, ask
most software engineers when the last time they saw, let alone wrote, clean code
at their jobs and you'll usually get something akin to a combination of a laugh
and a sigh. Much like special forces soldiers who train for intense combat and
then experience nothing but peacetime in their career, we invest a lot of time
and energy into a skillset that we often don't often, if ever, get to use.

Why is this? Why is it that we spend so much time practicing and learning about
this clean code and then never encounter it in reality? Why do we all of a
sudden forget everything we've learned as soon as we have to start writing code
that we get paid to write? If all of the literature and academia and education
systems around software engineering have agreed that clean code is what we
should be writing, why is it so rare that we actually come across it? The answer
is simple: writing clean code is hard. It's especially hard when you have
dealines. It's _especially_ hard when you're trying to just do your job so you
can get paid and then go on living your life. Besides, if nobody really
_expects_ you to write clean code anyway, and understands that it's okay to take
shortcuts and just get the product working, why spend the time and effort?
Looking at it from that perspective, one could see how an "approximation"
– however accurate – of clean code is perfectly fine.

But _what makes writing clean code so hard?_ I have been thinking about this
ever since I started writing code. Before I was a software engineer, I was a
musician. I have always looked at code not only as a craft, but as an _art
form_, where there was beauty in the work itself. I have always loved coding,
not just as a job, but as a passion. As a hobby. As a way in which to express my
thoughts and feelings. I have always hated the fact that I had to sacrifice my
craft every time I entered the workplace, and I have spent my entire career
searching for a way to resolve this discord. After over 10 years of searching,
what I have discovered is that the answer lies at the core of what it means to
have clean code in the first place: understanding.

What I realized was that every single "clean code" and "software architecture"
book I've read, every online coding tutorial I completed, every practice
assignment in every course I took, and every software project I've ever had to
build that I wasn't getting paid to do, had one thing in common: they provided
me, up front, with a complete understanding of exactly what I needed to build.
Never once was there an ambiguous feature request. Never once did one of the
requirements change underfoot. Never once was there a change in strategic
direction where I had to retool the project in order to align with the new
company mission. The software that I was using to learn and practice clean
coding techniques all had well-defined, well-thought-out, unambiguous
specifications.

At work, I don't think that's ever been the case. I've never showed up at work
and heard my boss say, "Hey Travis, could you please build an HTTP server?" I've
never received a company email saying "Looking ahead" and then have the body say
that I would need to "make a Twitter clone", and "here are the exact features we
are looking for", and "hear are the edge cases that you don't need to worry
about". Instead, what I've gotten are _ideas_. Messy, ambiguous, wonderful,
_human_ ideas. Ideas don't have specifications. Most of them were undefined and
it was even harder to articulate them. They had, because most ideas I work on at
your job are _new_. Untested. Unstudied. Therefore, I understood the ideas given
to me at work way less well than I did when practicing clean code. That's when I
realized that the main difference between writing clean code and not writing
clean code is just that: how well you understand what you need to build. Once
you understand, _truly_ understand, what you need to build, once you have that
specification, writing clean code simply becomes that thing you've been doing
over years practice at Universities and in bootcamps with hobby projects.

(Needs a paragraph on how the "act of understanding" is communication. And you
don't just have to communicate with customers you have to communicate _in code_
with future developers.)

This book contains 50 specific items – techniques, hacks, advice, and strategies
– that will teach you how to communicate as a software engineer. This book
teaches you how to take the messy ideas and requirements you get at your job and
extract a rock-solid software specification out of them. It also provides
strategies and advice to deal with what happens when the idea changes, something
we like to call "maintaining a codebase". By the end of it, you will be to
execute on any software project, regardless of size and scope, and deliver a
product that will not only blow your stakeholders minds with how well it works,
but you will be able to onboard engineers onto the and codebase and change it
seamlessly, with minimal friction. Imagine hearing every single feature request
and having you and everyone on your team know exactly where the code that runs
it is and how it needs to change to handle it. Friction between product and
engineering goes away. Deadlines become trivial to hit. While other codebases
might be mired in tech debt and constantly collapsing under their own weight,
yours is thriving. That is what the skills in this book will allow you to build,
because that is what clean code gives you.

---

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
my first C program; it was the coolest thing I had ever done. What I found so
cool about it was the sense of creative fulfillment it gave me. I used to
practice coding by copying implementations of modules I found in books and
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
