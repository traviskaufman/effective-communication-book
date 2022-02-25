# Item 24: Design APIs Using the Bookends Method

(Need to rework to state the problem first: you need to design a new API but
you're not sure where to start).

(Describe what a bookend is). It starts at either side, and uses both sides to
support a middle. APIs are very much like this. Often, you are motivated by a
use-case within the calling code. However, once you start designing the API,
there may be other implications or constraints depending on the implementation.
For example, your method may have to be asynchronous, if some of the code it
depends on is also asynchronous. Your client might not know or care about this,
in fact it might complicate the client, but you need to do it anyway. So how do
you go about designing APIs to minimize confusion and maximize useful? Use what
I call the "bookends" method:

**First, write your API within your client code, before writing the actual
implementation. Then, go write the actual implementation without looking at the
client code you just wrote. Then, look at both the client code and the
implementation, and smooth out any inconsistencies**

(Show an example of this).

If it feels like you may have done this before, you're right: _this is
essentially Test-Driven Development_. A unit test is essentially an isolated
example of an API being used. If you write that first, then you have a clear
idea of how your API will be used. Once you go and write your API, you smooth
out any inconsistencies within the test. In other words, you first write what
you want the code to do, then you write the code to make it do it, then you make
the tests pass. The difference between TDD and the bookends method is simply
that you don't have to write tests (unless you want to). Some people prefer not
to write tests, some people do. I'm definitely _not_ going to get into that
discussion right now. But suffice to say that the bookends method will work
whether your "client code" is a unit test, or a piece of production code you're
working out an API for. Plus, if you're _not_ into TDD, hopefully it gives an
intuition into why TDD practicioners say that the practice leads to writing
cleaner code.
