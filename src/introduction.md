# Introduction

> Programming is hard. It's also the easiest part of software development.

– [Jason Gorman](https://twitter.com/jasongorman/status/1472895565872697346)

Clean code.

Ask any software engineer whether or not they prefer it, and you'll most likely
get the same answer. Ask them what clean code _means_, and you might get varying
answers, but they will most likely revolve around the same point: easy to
understand. Variables that paint a picture in your head as to what they
abstract. Functions that are short and sweet and clear. Modules with simple APIs
and manageable dependencies. Systems that operate efficiently and harmoniously
with others. In a system that has been designed and implemented with clean code,
the cost of maintaining that codebase is exponentially lower, and product
quality is exponentially higher than the alternative. Clear variable names mean
developers know what to change, and how it might affect the system. Short,
sweet, clear functions mean that less time has to be spent deciphering meaning,
and more confidence is had in making changes that won't break something. Simple,
manageable modules lead to easily parallelizable work streams with minimal
friction. Efficient, harmonious systems create organizations where all members
feel empowered to work together to build the best product possible.

For those of us in software engineering that care about building quality
products, clean code is our utlimate goal. We read about data structures,
algorithms, and design patterns in books and online tutorials. We take classes
and enroll in bootcamps where we code complex software like compilers, web
servers, and social media applications so that we can hone our techniques. We
even sometimes invent hobby projects for ourselves just so we can try out a new
language or paradigm. We sharpen our skills and refine our craft so that when
the time comes where we need to write software that _matters_ – our jobs – we
will be able to execute our craft and deliver a high-quality, maintainable
product.

Unfortunately, we rarely if ever get to use our craft at our jobs. In fact, ask
most software engineers when the last time they saw, let alone wrote, clean code
at their jobs was, and you'll usually get something akin to a combination of a
laugh and a sigh. Much like special forces soldiers who train for intense combat
and then experience nothing but peacetime in their career, we invest a lot of
time and energy into a skillset that we often don't often, if ever, get to use.

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
never received a company email with the subject "Looking ahead" and then have
the body say that I would need to "make a Twitter clone", and "here are the
exact features we are looking for", and "here are the edge cases that you don't
need to worry about". Instead, what I've gotten are _ideas_. Messy, ambiguous,
wonderful, _human_ ideas. Ideas don't have specifications. Most of them were
undefined and hard to articulate. This makes sense, because most
ideas I've worked on at my job were _new_. Untested. Unstudied. Therefore, I
understood the ideas given to me at work way less well than I did when
practicing clean code. That's when I realized that the main difference between
writing clean code and not writing clean code is just that: how well you
understand what you need to build. Once you understand, _truly_ understand, what
you need to build, once you have that specification, writing clean code simply
becomes that thing you've been doing over years practice at Universities and in
bootcamps with hobby projects.

So how do you get that clear understanding of the product that you'd
find in textbooks? By _communicating_. When you commuh

---

You have to work with
customers/stakeholders to get information out of them about the product. You
then have to assemble a mental model, a specification, in your head, and
translate that into code. In that code, you must _communicate_ the idea to other
engineers. Source code is not written for computers; all computers see are
processor instructions. Software is written for other humans who build and
maintain the system. When you read code, you are putting together a model in
your head of how the system looks, and you intuit that model from _reading_ the
code, the communication of the engineers that wrote it. This all has to do with
communication: how well you are able to understand the ideas of others, and
translate them to a larger audience (primarily of developers).

This book contains 50 specific items – techniques, hacks, advice, and strategies
– that will give you the tools to communicate effectively as a software
engineer. It shows you how to take real-world requirements, not ones you read
about in textbooks, and extract a rock-solid software specification out of them.
It shows you how to accurately translate that specification into working code,
which any developer that reads will be able to understand. Finally, it gives you
guidance on how to keep up with the idea as it changes, what we call
"maintainability", so that you can easily and accurately estimate how much
effort it will be to make a change to the codebase, and when you give that
estimate, your stakeholders won't be surprised.

If you follow all of the guidelines in this book, you will be to execute on any
software project, regardless of size and scope, and deliver a product that will
not only blow your stakeholders' minds with how well it works, but you will be
able to onboard engineers onto the and codebase and change it seamlessly, with
minimal friction. Imagine hearing every single feature request and having you
and everyone on your team know exactly where the code that runs it is and how it
needs to change to handle it. Friction between product and engineering goes
away. Things that your stakeholders think are easy, truly become easy. Things
that are hard, your stakeholders understand take time. Deadlines become trivial
to hit. While other codebases might be mired in tech debt and constantly
collapsing under their own weight, yours is thriving. That is what the skills in
this book will allow you to build, because that is what clean code gives you.

I first discovered these techniques when I thought about how I used to work as a
musician. Communication is the lifeblood of a musician's job. They take ideas
and realize pieces of art out of them (elaborate on this).

I now _know_ this works, because I have been applying these techniques daily for
the latter half of my career. For most of my career, I have been the "front-end
expert" on primarily backend codebases. Think about UIs you've used like Cloud
Consoles, Analytics dashboards, operations tools, and the like. These are highly
advanced interfaces built for expert users which are powered by an extremely
complex set of technologies. Most of the time, especially for internal tools,
these lack PM and design resources. The teams are primarily composed of backend
engineers with little to no front-end expertise, and no interest in learning
any. As a front-end developer on a team like this, one must learn to navigate
the complex, intricate requirements of customers, and marry them with the myriad
of constraints the backend teams have. Over the years, at companies like Google,
Meta, and as a consultant building UIs for Fortune 500 companies, I have been
forced to learn these communication tools in order to deliver on my job
accurately and effectively. I feel uniquely qualified to be discussing these
techniques.

I also know this works because I applied it as a startup founder. When my
startup got accepted into YCombinator – the Harvard University of startup
accelerators – one of their first pieces of feedback to us was that we had to
get out more and talk to customers about the product they wanted us to build.
Through hundreds of customer interviews and product interations, I learned
first-hand during this time what it means to really get to the heart of what it
means to really extract a specification out of messiness. (Elaborate on this as
well).

## How this book is written

(TODO: Rewrite)

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

---

With that, let's start by talking about the most important job of any software
engineer: not engineering software and instead figuring out what software they
should be engineering.
