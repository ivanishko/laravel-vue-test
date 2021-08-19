<template>
    <div class="container">
        <a href="/blog" class="btn btn-primary  margin-10" >Назад</a>
        <div class="card">
            <div  class="card-body">
                <h1>{{post.title}}</h1>
                <p>{{post.body}}</p>
                <p>{{post.date}}</p>
            </div>

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
.margin-10 {
    margin: 10px 0;
}
</style>
