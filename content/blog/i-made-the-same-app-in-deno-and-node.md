---
created: 05/04/23
---

# I made the same app in Deno and Node

Here's what I discovered and what I think

## JSX as a templating language

I'm not a big fan of JSX, but Deno made it painless to use. Part of that is because of Fresh and it already handles some setup and configuration headaches. I actually started to enjoy using it though!

I still hate all the weird `/// <reference />` comments though.

```typescript
/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
```

## Deno's std library is awesome

Deno's std library is awesome! I found it fairly intuitive to use. I was annoyed by a lot of stackoverflow results being out of date since Deno seems to have frequently deprecated or moved around some functionality. But I didn't bring in any dependencies besides what Fresh had.

Here's how I saved an uploaded file in Deno and Node

```typescript
//write to uploads/reports.tar.gz
const form = await req.formData();
const file = form.get("file") as File;
await ensureDir(Deno.cwd() + "/uploads");
const reader = readerFromStreamReader(file.stream().getReader());
const writer = await Deno.create(to);
await copy(reader, writer);
writer.close(); //While writing tests for Deno, it told me there was a leak here because I never closed writer. Cool!
```

And for node I was using Nuxt 3, which uses H3.

```typescript
const body = await readMultipartFormData(event); //util from H3 to parse formData
const file = body[0];
await rm(UPLOADS_PATH, { recursive: true, force: true });
await mkdir(UPLOADS_PATH);
await writeFile(`${UPLOADS_PATH}/report.tar.gz`, file.data);
```

## Deno Testing is slick

Deno's test runner is pretty easy to use and it'll even tell you when it detects memory leaks!

```typescript
Deno.test(
  "POST route",
  { permissions: { read: true, write: true } },
  async (t) => {
    t.name = "handle file save";
    const url = Deno.cwd() + "/test/data/test-dir.tar.gz";
    const res = await fileFetch(import.meta.resolve(url));
    const file = new File([await res.arrayBuffer()], "test-dir.tar.gz");
    const saveUrl = Deno.cwd() + "/test/data/test.tar.gz";
    await saveTar(file, saveUrl);
    await extractTar(saveUrl, Deno.cwd() + "/test/data/extracted");
    assert(await exists(saveUrl));
    await t.step("cleanup", async () => {
      await Deno.remove(saveUrl);
      await Deno.remove(Deno.cwd() + "/test/data/extracted", {
        recursive: true,
      });
    });
  }
);
```

## Deno still has some work to do with package management

Package management is probably the most frustrating part of Deno. I was using Fresh, which encourages import_maps. I think this is ideal, but the tooling still auto-completes to importing urls. I had to manually update URLs to import_maps.

I also wasn't able to get deno to cache all dependencies during the docker image build so some unlucky soul will have to wait a few seconds when first visiting the app for Deno to download the rest of the dependencies.

## Deno uses roughly twice as much memory as Node
I deployed both apps to Fly.io and noticed that Deno, on average, was idiling at around 100MB of memory while the node app was at around 49MB. This is supposedly due to the typescript transpiler running in production. There doesn't seem to be a way to disable typescript in production, and I wasn't able to create a binary with `deno compile` because of a bug.


## Deno had the smaller docker image size
Deno's image was about 120mb, while the node app was about 170mb

