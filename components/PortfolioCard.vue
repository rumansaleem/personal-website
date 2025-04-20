<template>
    <article class="pb-12">
        <div 
            class="h-48 bg-cover flex items-center justify-center rounded text-black font-semibold shadow-md"
            :style="coverBackground"
        >
            <span v-if="!hasCover" v-text="project.title" />
        </div>
        <div class="-my-12 px-3">
            <div class="p-4 bg-white rounded shadow-lg">
                <h3 class="text-lg mb-2">
                    <a target="__blank" :href="project.link || project.sourceCode" v-text="project.title"/>
                </h3>
                <ContentRenderer class="text-sm mb-3" :value="project"/>
                <div v-if="project.sourceCode" class="mt-2 text-sm mb-3">
                    <a :href="project.sourceCode" class="inline-flex items-center">
                        <Icon name="uil:code" class="h-[1em] mr-2"/>
                        <span>Source Code</span>
                    </a>
                </div>
                <div class="flex items-center text-xs italic mb-4">
                    <span>
                        <span v-text="format(project.start)"/>
                        &mdash;
                        <span v-text="format(project.end)"/>
                    </span>
                </div>
                <div class="flex flex-wrap -m-1">
                    <span
                        v-for="tech in project.technologies" 
                        :key="tech" 
                        class="p-1 bg-gray-200 font-thin text-xs m-1 rounded"
                        v-text="tech" />
                </div>
            </div>
        </div>
    </article>
</template>
<script lang="ts" setup>
import { format } from '~/utils/date';
type Project = {
    title: string, 
    cover?: string, 
    start: string, 
    end: string, 
    link: string, 
    sourceCode: string, 
    technologies: string[]  
};
const props = defineProps<{project: Project}>();
const hasCover = computed(() => !!props.project.cover);
const coverBackground = computed(() => hasCover.value ? {backgroundImage: `url(${props.project.cover})`}: {});
</script>
