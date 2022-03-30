# Item 48: Avoid Over-documenting Implementation Details

When working on large, distributed teams, such as big open-source projects or
organizations with remote workers spanning across different time zones, there is
no substitute for good documentation. It can mean the difference between people
being unblocked all week and one poor employee being the bottleneck that
everyone has to keep asking things to.

However, when documenting, it's easy to lower the signal-to-noise ratio by
getting _too specific_ about the details of what you're building. Maybe you go
into the specifics of a certain algorithm you used. Maybe you talk about
specific code paths or link to specific examples within the code. The problem,
of course, is that _things change_. And when things change, those code paths
become obsolete and those algorithms get superseded but superior
implementations.

**In order to avoid unneeded complexity and churn, and maintain trust in your
documentation, keep it only as low-level as it needs to be in order to be
effective, but not more**.

As Einstein said, "Simple, but no simpler"
