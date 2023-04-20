<template>
  <div class="profile [--profile-size:140px] w-[162px] h-[152px] relative">
    <NuxtImg
      class="[&,&>.square]:(w-[var(--profile-size)] h-[var(--profile-size)] border-base bg-white ) z-3 absolute top-0 left-0" src="/images/profile.jpg"
      fit="cover"
      :modifiers="{ position: 'top' }" alt="Kaleb Ercanbrack"
      width="280"
      height="280"
    />
    <div class="square absolute top-[6px] left-[11px] z-1" />
    <div class="square absolute top-[12px] left-[22px] z-0" />
    <div class="text-lg bg-primary tracking-tighter leading-tight absolute bottom-0 -right-5 z-3 font-bold border-base p-1 -rotate-20">
      That's me!
    </div>
  </div>
</template>
