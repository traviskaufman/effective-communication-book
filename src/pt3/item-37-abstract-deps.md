# Item 37: Abstract External Dependencies

There comes a point in every a software product's life where one of its major
external dependencies has to be removed, replaced, upgraded, or changed in a
certain way. A very old, very massive app I once worked on used to be built
using a 2012 legacy JS framework. It was decided while I was there that this
product had to be migrated onto the _new_ version of this framework, which just
happened to be a complete rewrite. The process was (is? it might be still
ongoing?) extremely, _extremely_ complicated. It turns out that the framework
was woven into almost every single part of the codebase. Worse, it was shown in
plain sight. There was no getting around it. What could have helped, is if, as
far as the overall application was concerned, the framework could have been
abstracted a bit more. The kicker is that the end customers using the product
did not know nor care what the product was written using. They just new features
weren't being shipped as fast as they like.

**As much as possible, isolate and abstract external dependencies within your
system**. Using a canonical date library? Wrap it in your own `Date` class.
Using a pub/sub mechanism to communicate between services? Write an abstraction
layer over the actual dependency. etc. etc.

Doing this will ensure two things:

1. You can "minimize the blast radius" when you inevitably have to go back and
   change that dependency
2. When users read your code, they are _focusing on the logical purposes of the
   component_, and not the implementation details of the depenency itself. This
   helps your code stay clean and readable, a tenet of maintainability.
