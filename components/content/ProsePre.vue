<template>
    <pre v-if="!hasOutput" :class="$props.class"><slot /></pre>
    <div v-else class="code-with-output">
        <pre :class="$props.class"><slot /></pre>
        <div class="html-code-output" v-html="code"/>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})
const hasOutput = props.meta?.includes('output') && props.language === 'html';
</script>