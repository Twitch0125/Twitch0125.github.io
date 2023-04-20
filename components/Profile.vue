<template>
  <div class="profile w-[162px] h-[152px] relative">
    <NuxtImg
      format="webp"
      class="z-3 absolute top-0 left-0 w-[140px] h-[140px] border-base" src="/images/profile.jpg"
      fit="cover"
      :modifiers="{ position: 'top' }" alt="Kaleb Ercanbrack"
      width="280"
      height="280"
    />
    <div class="w-[140px] h-[140px] border-base bg-white absolute top-[6px] left-[11px] z-1" />
    <div class="w-[140px] h-[140px] border-base bg-white absolute top-[12px] left-[22px] z-0" />
    <div class="text-lg bg-primary tracking-tighter leading-tight absolute bottom-0 -right-5 z-3 font-bold border-base p-1 -rotate-20">
      That's me!
    </div>
  </div>
</template>
