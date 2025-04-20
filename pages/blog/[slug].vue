<template>
    <div class="narrow-container px-4 mx-auto mt-8">
        <div class="flex items-center text-sm font-bold text-gray-700 mb-2">
            <span v-text="format(post.date, {month: 'long'})" />
            <span class="mx-3 text-gray-600">&bull;</span>
            <span class="inline-flex items-center">
                <Icon name="fe:clock" class="text-gray-900 mr-1" />
                <span v-text="`${post.readTime} min read`" />
            </span>
        </div>
        <h2 class="text-3xl font-extrabold mb-2" v-text="post.title" />
        <hr class="md:border-b-2 border-gray-800 ml-0 mb-10">
        <ContentRenderer class="md-content leading-snug" :value="post" />
    </div>
</template>
<script setup>
import { format } from '~/utils/date';
useHead({
    link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Fira+Mono" },
    ]
});

const route = useRoute();
const { data: post } = useAsyncData(route.path, () => {
    return queryCollection('blog')
        .where('slug', '=', route.params.slug)
        .first();
});
useSeoMeta({
    title: post?.title ?? "Not Found"
});

</script>