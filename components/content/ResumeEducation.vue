<template>
    <div class="mb-1">
        <div class="inline-block space-x-1">
            <h3
            class="
                inline-block
                font-bold
                whitespace-no-wrap
                text-gray-900
                " v-text="props.degree"/>
            <h4
            class="
                inline-block
                font-semibold
                whitespace-no-wrap
                text-gray-800
                ">
                ({{ props.timeline }})
            </h4>
            <span>-</span>
            <p v-if="props.institution" class="inline text-xs" v-text="props.institution"/>
            <p v-if="props.score" class="inline-block text-xs font-semibold" v-text="props.score"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    degree: string,
    timeline: string,
    institution: string,
    score: string,
}>();
</script>