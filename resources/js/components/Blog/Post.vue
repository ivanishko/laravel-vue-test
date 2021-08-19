<template>
    <div class="post_item col-lg-3">
        <h2 class="post_header">{{title}}</h2>
        <p class="post_body">{{body}}</p>
        <a :href="'post/'+ id" class="btn btn-primary" >Read more</a>
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
.post_item {
    border: 1px solid #b1b1b1;
    border-radius: 7px;
    margin: 15px;
    padding: 15px;
}
</style>
