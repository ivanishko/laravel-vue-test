<template>
    <div class="post_item">
        <h2 class="post_header">{{title}}</h2>
        <p class="post_body">{{body}}</p>
        <a :href="'post/'+ id">Read more</a>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            title: {
                type: String,
                default: "NULL"
            },
            body: {
                type: String,
                default: "NULL"
            },
            date: {
                type: String,
                default: "NULL"
            },
            id: {
                type: Number,
                default: 0
            }
        },
        mounted() {
            console.log('id', this.id)
        }
    }

</script>

<style scoped>

</style>
