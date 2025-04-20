<template>
    <div class="narrow-container mx-auto px-4">
        <h2 class="font-extrabold text-3xl mt-4 mb-3">Blog Posts</h2>
        <h4 v-if="count!=null" class="mb-6 font-semibold text-lg" v-text="`${count} Post${count > 1 ? 's' : ''}`" />
        <div v-if="(posts?.length ?? 0) > 0">
            <article v-for="post in posts" :key="post.id" class="py-4 mb-4">
                <div class="flex items-center text-sm font-bold text-gray-700 mb-2">
                    <span v-text="format(post.date) "/>
                    <span v-if="post.readTime" class="mx-3 w-1 h-1 rounded-full bg-gray-600" />
                    <span v-if="post.readTime" class="inline-flex items-center">
                        <Icon name="fe:clock" class="text-gray-600 mr-1"/>
                        <span v-text="`${post.readTime} min read`"/>
                    </span>
                </div>
                <h3 class="font-bold text-2xl mb-2"><a :href="`/blog/${post.slug}`" v-text="post.title" /></h3>
                <ContentRenderer class="mb-3" :value="post.excerpt" />
                <p>
                    <a class="text-teal-700 hover:underline" :href="`/blog/${post.slug}`">Read More »</a>
                </p>
            </article>
            <!-- To add a Pager -->
        </div>
        <p v-else>
            I have not published anything yet. I'll soon publish some posts, stay tuned ;).
        </p>
    </div>
</template>
<script lang="ts" setup>
import { format } from '~/utils/date';
useSeoMeta({
    title: 'Blog',
    description: 'Ruman Saleem\'s personal blog'
});
const {query: {page, perPage }} = useRoute();
const currentPage = parseInt((!Array.isArray(page) ? page : page[0]) ?? '1');
const pageSize = Math.min(100, parseInt((!Array.isArray(perPage) ? perPage : perPage[0]) ?? '10'));
const skip = (currentPage - 1) * pageSize;
const publishedPosts = () => queryCollection('blog').where('published', '=', true).order('date', 'DESC');
const {data: count} = useAsyncData('blog-count', () => publishedPosts().count() ?? 0);
const {data: posts} = useAsyncData('blog-list', () => publishedPosts().skip(skip).limit(pageSize).all());
</script>
