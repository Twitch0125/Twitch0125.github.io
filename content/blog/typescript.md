---
title: 'Typescript'
description: 'My thoughts on Typescript.'
created: 05/12/23
---
::date 
05/12/23
::
# Typescript

I don't hate Typescript. I actually think the typing syntax is powerful and
flexible, yet simple when you need it be. I just think of Typescript as a **SIGNIFICANTLY**
easier way to write JSDoc annotations.

My issue is with the tooling.

TSC takes up so much memory and can get really slow. I feel like I have to
constantly reload the typescript lsp because typings don't update. Importing ESM
modules in typescript doesn't require an extension which is non-standard.

For example:
```ts
import mod from './mod'
```

instead of
```js
import mod from './mod.js'
```

Typescript with Node.js is a mess because of ESM and CommonJS. It's hard to tell
if you're importing a CommonJS package or an ESM package because they're both
done with an `import` in typescript. There are also some issues with writing
types for packages that provide a CommonJS and ESM export. For example, [this fastify issue](https://github.com/fastify/fastify-plugin/pull/200).

Typescript has also made it a pain to see the source code of packages since
you'll often get taken to a `.d.ts` file rather than the actual code, or you'll
get taken to unreadable transpiled JS.

I don't how much of that is on library maintainers and how much is on typescript
itself. I could just be totally missing something...