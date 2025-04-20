<template>
    <section>
        <div class="flex flex-col text-sm uppercase cursor-pointer mb-2">
            <h2 class="leading-none py-2 text-base" v-text="props.header"/>
            <div class="h-0.5 bg-gray-800" />
        </div>
        <slot />
    </section>
</template>
<script lang="ts" setup>
const props = defineProps<{
    header: string
}>();
</script>