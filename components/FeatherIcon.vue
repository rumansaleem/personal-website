<template>
  <svg
    viewBox="0 0 24 24" role="presentation" :aria-label="title" :stroke-width="strokeWidth" fill="none"
    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" v-html="iconWithTitle"></svg>
</template>
<script lang="ts" setup>
import feather from 'feather-icons';
const props = defineProps<{title?: string, name?: string}>()
const icon = computed(() => 
  Object.prototype.hasOwnProperty.call(feather.icons, props.name || 'x') 
    ? feather.icons[props.name].contents
    : feather.icons['x'].contents
)
const iconWithTitle = computed(() => {
  return props.title ? `<title>${props.title}</title>${icon.value}` : icon.value;
});
</script>
