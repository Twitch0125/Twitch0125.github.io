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

Any self-respectin' code slinger best take a gander at the smaller up-n-comers like Lagon. It's all Open Source, unlike the surly lot mentioned before (though the Cloudflare Gang has graciously released their Worker environment, just don't be thinkin' that they're gonna be accepting yer pull requests over theirs). A self hosted Edge Runtime, developed by a community of honest hard working souls, sounds mighty pleasing to me. Reminds me of my dear old Vue, bless their heart.

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

## Write in Node then convert it.