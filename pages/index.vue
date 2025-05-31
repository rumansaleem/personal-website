<template>
    <div v-if="about" class="narrow-container mx-auto flex flex-col items-center py-4 mb-8">
      <nuxt-img 
        class="h-64 mt-1 ml-3 mb-6 shadow-xl rounded-lg saturate-50 hover:saturate-100"
        :src="about.image" 
        :alt="`A portrait of ${about.name}`"/>
      <h2 class="text-3xl font-sans font-bold mb-1" v-text="about.name"/>
      <h3 class="text-gray-600 uppercase font-sans font-semibold mb-6" v-text="about.title"/>
      <ul class="flex justify-center items-center mb-6 text-lg space-x-3">
        <li v-for="link in about.links" :key="link.alt">
          <a :href="link.target" :class="`text-gray-500 ${link.color}`" :title="link.alt">
            <Icon class="h-5 w-5" :name="link.icon" />
          </a>
        </li>
      </ul>
      <div class="space-y-4">
        <ContentRenderer :value="about" class="md-content space-y-4"/>
      </div>
    </div>
</template>
<script lang="ts" setup>
useSeoMeta({
  title: 'Home',
  description: 'Home page of the portfolio',
});

const {data: about} = await useAsyncData('about', () => queryCollection('about').path('/pages/about').first());
</script>
