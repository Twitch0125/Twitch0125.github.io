---
title: I'm finally learning vim
description: Actually Neovim, because Lua is kinda neat.
created: 05/03/23
---
::date
05/03/23
::
# I'm finally learning vim
Over the weekend I decided to actually learn how to use Vim. I'd seen several cool looking Vim setups in youtube videos and I've heard from dozens of developers that you can make vim the most productive IDE.

## Starting Out
First I did [Vim Adventures](https://vim-adventures.com/) which was really confusing at first, but I eventually got the hang of it. The first level of Vim Adventures is free.

I then did Neovim's own builtin tutorial. You can start this with the `:Tutor` command when you start neovim. This tutorial actually teaches quite a lot.

## Configuration
I'm currently using [NVChad](https://nvchad.com/). I also tried [LunarVim](https://www.lunarvim.org/), which has a good default setup for frontend development, but NVChad has better documentation.

> Here's my NVChad config if you're interested: https://github.com/Twitch0125/nvchad-config

Getting Vue's LSP was a little annoying since it seems that lspconfig's documentation is a little out of date. The correct server for vue is "volar". You can check how to set it up in my config.

## So far so good
I'm slowly using Neovim more and more. There are some extensions I'm just too used to in VSCode for me to completely swich over, but for getting into a file quickly nvim is pretty handy.

It's also super useful for when you've ssh'd into a server as vim is almost always available, so I can server files quicker.