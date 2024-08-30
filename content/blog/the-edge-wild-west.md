---
title: The Edge is the wild west of JavaScript
description: I reckon there are some interesting things going on with the edge, partner.
created: 07/21/23
status: published
---

::date
07/21/23
::

# The Edge is the wild west of JavaScript

Howdy! 🤠

I'm going to attempt to keep a Cowboy tone of voice...

We've got the increasingly powerful Cloudflare Gang and their massive group of Workers supported by a suite of cloud services. They've even got a Wrangler!

Then there's the plucky fellas at Deno who say "Node.js messed up". They've got genuine tech. Changes the way you write your JavaScript, or TypeScript to be more precise. Though I can't but feel they've entwined themselves in being "pure", and are in the midst of a bonafide identity crisis.

Any self-respectin' code slinger best take a gander at the smaller up-n-comers like [Lagon](https://github.com/lagonapp/lagon). Another Edge Runtime written in Rust, using V8, and is fully open source.

# It's a different world

Out here you've got to adapt. There's not the pleasantries and luxury of the city here. You've gotta know your runtime-specific APIs, Web APIs, and which Node APIs are _actually implemented_. I reckon you've gotta use your bare, calloused hands to build new libraries.

This land will eat you up and spit you out. See, these hosted platforms have got some imposed limits. Things like:

- Thou shalt not have any app greater than 1MB-10MB in size
- Thou shalt not use more than 10ms-50ms of CPU time
- Thou shalt not use more than 128mb-512mb of Memory
- Thou shalt not have requests that last more than 1s-5s
- Thou shalt use a small subset of Node/Deno APIs

It goes without sayin' that if you pay them money you'll be on the higher end of the limits, but the limits have got me a-fearin' for flexibility.

# Settin' out west

::date
(I'm dropping the cowboy speak now)
::

I've noticed a few common paths people take to write code for these environments.

## Write in Node then build it with an Adapter

- Node APIs are polyfilled or mocked, but you get access to some of the npm ecosystem
- Bigger app-size (mostly overhead from polyfilling)
- Harder to integrate with platform features (Deno KV, Cloudflare D1, etc)

My favorite example for this is [Nitro](https://nitro.unjs.io/).

It provides some utilities that make it easier to develop for Edge runtimes. For example, its storage layer makes it easy to use an in-memory Key Value store in development and use Cloudflare KV in production.

It uses [Unenv](https://unenv.unjs.io/) for polyfilling and mocking some APIs, but it's not 100% there yet. Some libaries still won't be compatible.

I think Nitro (and the unjs project in general) deserves more attention. Things like SvelteKit and SolidStart could be using it rather than their own thing. It's just a shame that Nitro came after these meta-frameworks started getting popular.

If your node framework doesn't provide some kind of abstraction for using platform features then making your own is a hassle. You need to have it working in a Node runtime and Deno/Cloudflare, so you'll need to do a lot of mocking or some other trickery.

## Use only libraries that support these runtimes

- Lose out on a good chunk of the NPM ecosystem
- Smaller output
- Easier to integrate with platform features

When your use case is satisfied by the existing libraries, I'd recommend doing this. You get smaller app sizes and simpler development. Finding compatibile packages for both Deno and Clouflare is a pain however. Deno probably has the **edge** here because it's got decent Node compatibility, a robust std lib, and an ecosystem on <https://deno.land/x/>

One popular and handy package I've used is [Hono](https://hono.dev/) which is a web framework similar to express but works in Node and edge runtimes.

The big tradeoff here is that your favorite frameworks like Nuxt, Remix, Astro, SvelteKit, etc, probably won't work in development. Deno has some Vite compatibility, but a lot of vite plugins still wont work.

## Manifest Destiny

Whatever you choose, use what helps you make cool stuff. Heck, you might not even use the fancy shmancy Edge runtimes.

I've talked a ton about the "Edge" and played with it, but I still host everything on Fly.io. It's so much more flexible and for my application needs it's been perfect.
