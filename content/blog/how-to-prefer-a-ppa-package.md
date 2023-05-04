---
title: How to prefer a PPA package over a distro's package
description: Often times on Ubuntu based distros you need a newer package than what ubuntu provides. Sometimes the distro will override the PPA because it has its own version of a package that it really want you to use.
created: 04/23/2023 (published this date. Wrote this years ago)
---
::date
04/23/2023
::

# How to Prefer a PPA’s packages over your distro’s

<!-- @unocss-ignore -->

## Some background

While was using [Pop!_OS](https://pop.system76.com/), I was trying to use this
PPA for the latest point release of the
[Mesa drivers](https://launchpad.net/~kisak/+archive/ubuntu/kisak-mesa) but apt
was saying that Pop!_OS's repos are upstream and wouldn't let me upgrade. If I
explicitly installed them and specified the PPA, the software center would later
say I have an update and that it's going to install version 21.2 from Pop's repo

I needed to tell it to prefer the PPA repo over Pop's repo.

## Solution

create a file in `/etc/apt/preferences.d/` with something like this in it

```
Package: *
Pin: release o=LP-PPA-kisak-kisak-mesa
Pin-Priority: 2000
```

Pin-priority just has to be higher than Pop's pin-priority in
`/etc/apt/preferences.d/pop-default-settings` in order to find what goes into
`Pin: release o=[here]`, use `apt-cache policy` and find your PPA, and copy
whatever it has in `o=` and paste in your preferences file
