<template>
<div>
    <h1>Header</h1>
    <ul class="">
        <li v-for="link in links">
            <router-link :to="link.url"> {{link.title}} </router-link>
        </li>
    </ul>
</div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                links: [
                    {
                        title: "Main",
                        url: "/"
                    },
                    {
                        title: "Blog",
                        url: "/blog"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
