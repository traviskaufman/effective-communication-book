# Item 25: Implement from the Top Down

My absolute favorite feature of the Rust programming language is the `todo!()` macro. It works like this:

```
fn do_something() {
  todo!()
}

fn main() {
  println!("Doing something:...");
  do_something();
}
```

(OBVS CHECK THIS CODE)

When you compile and run the program, you will get the following output:

(PASTE THE OUTPUT)

What I love about this macro is that it enables what in my experience has become the best way to start getting your
ideas into code: implementing from the "top down".

**Write the most high-level part of your code first, before writing anything else, and simply use the functions and
methods you would need in that high-level code as if you already had them. Recursively do this to fill in all of the
needed parts of your code**.

For command-line programs and system binaries, this means you implement the main method _first_, using "pretend"
abstractions/methods/etc you have not already written. For UIs, it means you start with the _interface first_ and
pretend that you have the data and APIs needed to render it. The point is that you start at the _highest possible
level, that of the main idea, in order to implement your code_.

I've found that this helps greatly with the issue of churning on "the right abstraction" when designing and writing
new code. I was trained as an engineer to implement a system in a "dependency-first" way, but the problem is that
until you get up to that highest-level, you're not quite sure exactly how you're going to use those dependencies,
whereas if you start at the highest level, you know _exactly_ how you're going to use those dependencies.

The philosophy behind this is the fractal nature of ideas. Almost all sohpisticated ideas are built on hierarchies of
knowledge...think how interdependent parts of a car all "encapsulate" the jobs they have to do into their own ways,
or how communities and organizations get things done by having different people specialize in different domains and
work together. For complex ideas, it's _too much_ to think about everything all at once, so you want to start by
thinking about your idea at the highest-level possible, which will help you code it as such. It probably won't be
perfect, but it's a good start.
