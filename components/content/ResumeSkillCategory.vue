<template>
    <dl :key="props.header" class="mb-1 flex space-x-1 items-baseline">
        <dt class="flex-none font-bold text-gray-800" v-text="props.header + ': '"/>
        <dd class="text-xs"><slot/></dd>
    </dl>
</template>

<script lang="ts" setup>
const props = defineProps<{header: string}>();
</script>