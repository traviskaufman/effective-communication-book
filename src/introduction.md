# Introduction

The goal of this book is to help you build quality software in the face of ambiguous and changing product requirements.

Most books on "clean code" and "software architecture" I've read assume that you have a complete understanding of
exactly what you need to build. In practice, I've found this is rarely the case. I've never showed up at work and
heard my boss say, "Hey Travis, could you please build an HTTP server?" Instead I've gotten ideas. Messy, ambiguous,
wonderful, _human_ ideas. The kicker is that as a
software engineer, your job is to take those messy ideas and produce that seemingly unattainable "clean code" you
keep reading about in software architecture books. In my experience that's 90% of the job of a "senior-level" software engineer (aka a SWE who's expected to execute and deliver with minimal oversight); the actual coding part that all those clean code books focus on is only 10%.

**The key to taking messy requirements and turning it into clean code is _communicating effectively_.** Software Engineering is about taking an intangible idea that someone comes up with and making it real. The a-ha moment that I had is that ideas come from people, and so in order to bring peoples' ideas to life, you need to be able to understand their ideas as well – if not even better – then they do. That understanding can only come from communicating with them. Once you're in this flow state where you're talking to your customer about the idea as if its your own, you will be amazed at how intuitive it feels to implement all of those "clean code" practices you've read about in the other books, how quickly you'll be able to build, how little "negative surprises" there are from your customers, and most of all, how good you'll feel when you deliver something to your customers that goes beyond anything they could have expected.

This book is modeled after the Effective Software Development series [link?]. Every chapter is a self-contained, bulleted
piece of advice that will help you build great products quickly without feeling like you're swimming against the
current. You can jump around and feel free to choose what you wish. However, I've tried to make the book enjoyable while reading it beginning to end.

Part I deals with "requirements gathering", a.k.a. extracting ideas out of people. You will learn techniques and
methods for easily disambiguating and scoping even the most vague and blue-sky of projects. Many of these techniques
come from psychology and other fields, and are translated into the context of how we work with others as software
engineers. At the very least, it will make what's maybe the "not-so-fun" part of the job, feel a little bit more
like that flow-state you get while heads down in your favorite editor as your fingers flow effortlessly across the
keys.

Part II deals with structuring your code such that it not only represents the requirements as you best understand
them, but _teaches engineers who read it about the requirements_. Not only will this radically increase
productivity and decrease technical debt, but it will make the building process more _predictable_, as things that
your stakeholders think are easy will be easy to do in software, and things that they think are hard will most likely
be hard.

Part III covers _maintaining_ software. Requirements change, wildly and unpredictably, and your software must change
with it. When you're ready to scale the code and your team, you can lean on these tricks to increase the longevity of
your codebase and decrease burnout.

My hope for this book is to help you achieve that "next level" of software engineering. Whether you're going for that
senior-level position, looking to uplevel your "non-coding" skills, or just trying to feel less frustrated while
working, I hope that there are some things in this book that help you. The book is 100% free and open-source, and I
would very much welcome any and all feedback. I've learned so much from the open-source community, and want to do my
part in paying that forward, as well as continuing to learn from you all.

With that, let's start by talking about the most important job of any software engineer: not engineering software and instead
figuring out what software they should be engineering.
