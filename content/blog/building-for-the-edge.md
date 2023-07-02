---
title: The Edge is the wild west of JavaScript
description: I reckon there are some interesting things going on with the edge, partner.
created: 06/28/23
status: draft
---
::date
06/28/23
::

# The Edge is the wild west of JavaScript

Howdy! 🤠

I'm going to attempt to keep a Cowboy tone of voice...

We've got the increasingly powerful Cloudflare Gang and their massive group of Workers supported by a suite of cloud services. They've even got a Wrangler!

Then there's the plucky fellas at Deno who say "Node.js messed up". They've got genuine tech. Changes the way you write your JavaScript, or TypeScript to be more precise. Though I can't but feel they've entwined themselves in being "pure", and are in the midst of a bonafide identity crisis.

Any self-respectin' code slinger best take a gander at the smaller up-n-comers like [Lagon](https://github.com/lagonapp/lagon). Another Edge Runtime written in Rust, using V8, and is fully open source.

# It's a different world

Out here you've got to adapt. There's not the pleasantries and luxury of the city here. You've gotta know your runtime-specific APIs, Web APIs, and which Node APIs are *actually implemented*. I reckon you've gotta use your bare, calloused hands to build new libraries. 

This land will eat you up and spit you out. See, these hosted platforms like Deno and Cloudflare have got some imposed limits. Things like: 
- Thou shalt not have any script greater than 1MB-10MB in size
- Thou shalt not use more than 10ms-50ms of CPU time
- Thou shalt not use more than 128mb-512mb of Memory
- Thou shalt not have requests that last more than 1s-5s

It goes without sayin' that if you pay them money you'll be on the higher end of the limits, but the limits do got me wonderin' 'bout scalability.

# Settin' out west

I've noticed a few common paths people take to write code for these environments.

**Write in Node then built it with an Adapter**
- Node APIs are polyfilled or mocked, but you get access to some of the npm ecosystem
- Bigger output
- Harder to integrate with platform features

My favorite example for this is [Nitro](https://nitro.unjs.io/).

It provides some utilities that make it easier to develop for Edge runtimes. For example, its storage layer makes it easy to use an in-memory Key Value store in development and use Cloudflare KV in production.

It uses [Unenv](https://unenv.unjs.io/)

**Use only libraries that support these runtimes**
- Lose out on some of the NPM ecosystem
- Smaller output
- Easier to integrate with platform features
