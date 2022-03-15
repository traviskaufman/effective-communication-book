# Item 36: Prioritize Robust End to End Testing

Guillermo Rauch, CEO and founder of Vercel,
[says](https://twitter.com/rauchg/status/807626710350839808):

> Write tests. Not too many. Mostly integration.

Clearly there is power in this, and Kent Dodds probes in his [article on the
tweet](https://kentcdodds.com/blog/write-tests). However, I might would argue
that the best tests are the _end to end tests_ that a system has. Yes, they are
hard to write. Yes, they require you to be thoughtful about how you architect
your software so you can facilitate them. But if your codebase has gotten to a
point where it's relatively stable, and people are relying on it, end to end
tests are invaluable.

**End to end tests are living documentation-as-code describing how real-world
users use your product. Therefore, it is important to prioritize them so that
your code continues to work as intended for your customers, and new developers
can read them to understand how your customers use your product.**

(Talk more about this)
