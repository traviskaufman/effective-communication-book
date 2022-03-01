# Item 25: Avoid the "Utils" file

Every codebase I've ever worked on has had at least one "Utils" file;
`StringUtils`, `DateUtils`, `CampaignManagementUtils`,
`DataflowProxyRateLimiterUtils`, etc. These files, while varied in their
approach, all usually have a recurring theme: they are a grab-bag of
functionality that couldn't find a logical home anywhere else in the codebase;
an "Island of Misfit Methods", if you will. The problem with these "Utils" files
is that they easily become a black hole of obscurity where you can basically
just stick anything you want in there, given that the "utils" file itself is so
vague. This leads to a lack of clarity around the purposes of these methods, and
make things hard to maintain.

**Avoid the "Utils" file; it is a symptom of a larger problem of a lack of
clarity about how a certain piece of functionality fits into a larger system**.
If you are tempted to write a Utils file, think about _why you can't seem to
find a place for the code you're writing_, and use that to follow up with
stakeholders/team members/etc to try and get some more insight onto where this
fits in. Here are some more concrete tips for avoiding the "Utils" file and
figuring out where to place the code instead:

- Look at the primary callers of the method. Do they all have something in
  common? If so, try and "name" that commonality, and put the method in a
  class/module that reflects that name (show an example, e.g. a `DateFormatter`
  class vs. `DateUtils`)
- Writing operations over primitive structures like Lists or Maps? Instead, try
  taking a page out of Java's handbook and naming the module something like
  `Lists` or `Maps`. When a future maintainer looks at that file, it will be
  very clear to them that what the purpose of the methods within this file are.
- Is the method only being used in one place? Consider inlining it into the
  module in which it is used. This will help you avoid premature optimization.

By avoiding the "Utils" file, you avoid ambiguous language in your codebase. By
avoiding ambiguous language, you ensure that you are letting the representation
of the idea embodied in your implementatino shine through.
