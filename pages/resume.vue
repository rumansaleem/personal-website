<template>
  <div v-if="resume">
    <p class="print:hidden max-w-a4 mx-auto text-sm font-semibold text-gray-700">
      This resume was last updated on <span v-text="format(resume.lastUpdated)"/>. 
      Please reach out to me on <a href="https://www.linkedin.com/in/ruman-saleem/">linkedin</a> for an updated resume.
    </p>
    <div
      class="
        resume
        text-sm
        print:p-0 print:border-0 print:mt-0
        bg-white
        mt-8
        md:p-8 md:border md:border-gray-600
        max-w-a4
        mx-auto
        text-gray-900
        leading-tight
        space-y-4
      ">
      <div>
        <h1 class="text-3xl" v-text="resume.name"/>
        <h3 class="text-lg uppercase text-gray-800 mb-3" v-text="resume.title"/>
        <ul class="text-center -mx-2 grid grid-cols-3 gap-1">
          <li v-for="link in resume.links" :key="link.target" class="inline-flex items-center whitespace-no-wrap mx-2">
            <Icon :name="link.icon" class="inline-block flex-none mr-1"/>
            <a class="inline-block underline" :href="link.target" v-text="link.text"/>
          </li>
        </ul>
      </div>
      <ContentRenderer class="md-content text-sm mb-3 space-y-3" :value="resume"/>
    </div>
    <button
      class="
        fixed
        bottom-0
        right-0
        mb-6
        mr-6
        bg-primary-700
        hover:bg-primary-800
        cursor-pointer
        text-white
        w-12
        h-12
        rounded-full
        flex
        items-center
        justify-center
        shadow-md
        print:hidden
      " 
      @click="print">
      <Icon name="uil:print" class="w-6 h-6" />
    </button>
  </div>
</template>
<script lang="ts" setup>
const {data: resume} = useAsyncData("resume-data", () => {
  return queryCollection("resume")
    .path("/pages/resume")
    .first();
});

const print = () => window.print()
</script>
