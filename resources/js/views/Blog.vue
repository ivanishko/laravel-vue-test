<template>
    <div class="container">
        <h1>Blog</h1>
        <router-link :to="'create'" class="btn btn-primary">Создать пост</router-link>
        <div class="row">
            <Post v-for="post in posts"
                  :title="post.title"
                  :date="post.date"
                  :id="post.id"
                  :body="post.body"
                  :key="post.id"
            />
        </div>

    </div>



</template>

<script>
    import axios from 'axios';
    import Post from '../components/Blog/Post'
    export default {
        name: "Blog",
        components: {
            Post
        },
        data: () => ({
            loading: true,
            posts: []

        }),
        methods: {
            loadPosts() {
                axios.get('/api/posts')
                    .then(res => {
                        console.log(res.data)
                        this.posts = res.data
                    })
            }
        },
        mounted() {
            this.loadPosts();
        }
    }
</script>

<style scoped>
    .post_header {

    }
    .post_body{
        border-bottom: 1px solid #777;
    }
</style>
