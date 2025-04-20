<template>
    <div>
        <h2 class="font-extrabold text-3xl mt-4 mb-10">Work</h2>
        <div class="flex flex-wrap -mx-4 -mt-6">
            <PortfolioCard 
                v-for="project in projects" 
                :key="project.id" 
                :project="project" 
                class="w-full md:w-1/2 lg:w-1/3 py-6 px-4"/>
        </div>
    </div>
</template>
<script setup>
import PortfolioCard from './../components/PortfolioCard';
useSeoMeta({title: 'Work | Ruman Saleem'});

const route = useRoute();
const currentPage = route.query.page ? parseInt(route.query.page) : 1;
const perPage = Math.min(100, route.query.perPage ? parseInt(route.query.perPage) : 10);
const skip = (currentPage - 1) * perPage;

const work = () => queryCollection('work');
const {data: projects} = useAsyncData('allPortfolio', () => work().skip(skip).limit(perPage).all());
// const {data: total} = useAsyncData('totalPortfolio', () => work().count());
</script>
