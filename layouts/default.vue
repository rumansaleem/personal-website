<template>
  <div id="app" class="min-h-screen flex flex-col text-gray-900 leading-tight">
    <div class="py-2 sm:py-4 font-system print:hidden text-gray-800">
      <div
        class="
          container
          lg:max-w-[1280px]
          mx-auto
          px-4
          flex flex-col
          sm:flex-row
          justify-between
          items-center
        "
      >
        <NuxtLink
          to="/"
          class="inline-flex items-center text-xl text-teal-600 mb-2 sm:mb-0"
        >
        <div class="logo flex items-center space-x-2 cursor-pointer">
          <SiteLogo class="inline-block h-12" :font-controlled="false"/>
          <div class="space-x-1 whitespace-nowrap">
            <span class="text-gray-800 font-semibold">Ruman</span>
            <span class="text-teal-600 font-bold">Saleem</span>
          </div>
        </div>
        </NuxtLink>
        <nav class="flex items-center -mx-2">
          <NuxtLink 
          class="mx-2 py-1 px-1 font-bold uppercase text-sm tracking-wider relative leading-snug no-underline text-gray-900
          after:inline-block after:h-0.5 after:bg-teal-600 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:transalte-x-1/2 after:transition-all duration-300 ease-in-out 
          hover:text-teal-600 hover:after:scale-x-100 hover:after:translate-x-0"
          to="/work">Work</NuxtLink>
          <NuxtLink 
          class="mx-2 py-1 px-1 font-bold uppercase text-sm tracking-wider relative leading-snug no-underline text-gray-900
          after:inline-block after:h-0.5 after:bg-teal-600 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:transalte-x-1/2 after:transition-all duration-300 ease-in-out 
          hover:text-teal-600 hover:after:scale-x-100 hover:after:translate-x-0" to="/blog">Blog</NuxtLink>
          <NuxtLink 
          class="mx-2 py-1 px-1 font-bold uppercase text-sm tracking-wider relative leading-snug no-underline text-gray-900
          after:inline-block after:h-0.5 after:bg-teal-600 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:transalte-x-1/2 after:transition-all duration-300 ease-in-out 
          hover:text-teal-600 hover:after:scale-x-100 hover:after:translate-x-0" to="/resume">Resume</NuxtLink>
        </nav>
      </div>
    </div>
    <div :class="`container lg:max-w-[1280px] mx-auto px-4 flex-1 h-full ${props.wrapperClasses}`">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import SiteLogo from "~/assets/icons/ruman-saleem-logo.svg";

const props = defineProps<{wrapperClasses?: string}>();

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Muli:300,400,400i,700&display=swap",
    },
  ],
});
</script>