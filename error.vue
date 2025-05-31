<template>
    <NuxtLayout wrapper-classes="flex flex-col mt-[20vh] items-center">
        <h1 class="text-4xl font-normal mb-4">{{props.error?.statusCode}}</h1>
        <p class="mb-8 text-lg" v-text="props.error.message"/>
        <p>
            <nuxt-link to="/" class="inline-block px-4 py-2 text-lg bg-primary-700 rounded text-white font-semibold">Go to Home</nuxt-link>
        </p>
    </NuxtLayout>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{error: NuxtError}>()
</script>