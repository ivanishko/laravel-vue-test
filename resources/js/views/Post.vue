<template>
    <div class="container">
        <div class="row">
            <h1>{{post.title}}</h1>
            <p>{{post.body}}</p>
            <p>{{post.date}}</p>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';
    export default {
        name: "Post",
        components: {

        },
        data() {
            return {
                post: [],
                not_found: false
            }
        },

        methods: {
            loadPost(id) {
                axios.get('/api/posts/' + id)
                    .then(res => {
                        this.post = res.data
                    })
                }
        },
        mounted() {
            this.id = this.$route.params.id
            this.loadPost(this.id)
        }
    }

</script>

<style scoped>

</style>
