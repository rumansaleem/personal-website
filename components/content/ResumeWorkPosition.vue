<template>
    <div v-if="props.show" :key="props.company + props.title">
        <h3 class="text-black mb-1" v-text="props.company"/>
        <div class="mb-1 w-full text-gray-900 flex justify-between items-baseline space-x-2">
            <h4 class="font-bold uppercase text-sm" v-text="props.title"/>
            <div class="flex items-baseline space-x-2"> 
            <span v-if="props.duration" class="text-gray-700">({{ props.duration }})</span>
            <h5 class="font-semibold" v-text="props.timeline"/>
            </div>
        </div>
        <slot />
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    title: string,
    company?: string,
    duration?: string,
    timeline: string,
    show?: boolean
}>();
</script>