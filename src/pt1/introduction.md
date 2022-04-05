# Part I: Understanding the Requirements

> If you could see the world the way I see it, you'd understand why I behave the
> way I do

– Peter Kaufman

This section is devoted to taking abstract, messy, and incomplete ideas for what
a product should look like, and translating it into a concrete, clean, and
fully-defined solution that you can then go build.

When you read that above section, the phrase "requirements gathering" might come
to mind. And you might be thinking, "that's not my job". Hopefully, you're
right. Hopefully, you have a PM, TPM[1], UX Researcher, or _someone_ that can go
out and help you talk to customers, stakeholders, etc., take what they're
saying, and synthesize it into a set of use-cases, bulleted list of success
criteria, tasks around what needs to be done, etc. What I've found, especially
on internal/infra teams, is that this is rarely the case. Often, you get a very
vague direction of where your team/org wants you to go, and you have to run with
it.

However, even if you do have a PM/TPM/etc, even if you have all of the
requirements gathered in front of you, there's still one more, crucial,
imperative step, the most important thing in the software development lifecycle:
have to _understand_ the requirements.

**The act of "gathering" requirements is just that: taking a bunch of things
people want a coalescing them into one place. That is not enough for you to
build a product. To truly build a product, you have to _understand_ all of the
requirements laid out in front of you.** This is your primary job as the SWE or
TL: the requirements must be reflected in the implementation, and you own the
implementation, therefore _you must understand the requirements_, deeply,
broadly, as if you had come up with them yourself.

It's not your PMs job: they can give you a high-level visiona and clarity, but
cannot translate it into code. They can give you the blueprint, but it's up to
you to go build the actual house.

It's not your designer's job: they can show you how the product should _look and
feel_ to end users, but do not have the skills to tell the computer what to do
to achieve that look and feel.

And most of all **it is not your customer's job**. Your customer only knows that
they need a problem solved, and are looking for you to come up with a way to
make a computer solve it.

It turns out that this is an extremely, _extremely_ difficult task. Ideas are
messy, and multiple ideas exponentially compound in breadth and complexity. It
also almost always requires you to communicate with others about it: asking
follow up questions, having discussions, ensuring you're on the right track with
where you want to go. Unfortunately, it is a skill that is not taught often in
CS curriculums because they focus on code, and most of the time, when you are
ready to write code, it is assumed that you already understand the requirements.

This section will provide you with an arsenal of tools, tips, and strategies to
create order out of the chaos of requirements, allowing you to move forward with
a clear vision of how you want to turn those into a functional product.

[1] For those of you that don't work at big tech companies, TPM stands for
_technical program manager_. For all intents and purposes, you can think of them
like the PMs you work with at your job (apologies to the TPMs reading this for
oversimplifying your roles).
