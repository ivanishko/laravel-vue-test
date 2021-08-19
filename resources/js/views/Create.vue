<template>
    <div class="row">
        <h1>Создать пост</h1>
        <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1"  placeholder="Заголовок" v-model="form.title">
        </div>
        <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Содержание поста" v-model="form.body"></textarea>
        </div>

        <button type="submit" @click.prevent="createPost" class="col-lg-1 btn btn-primary">Создать</button>
    </div>

</template>

<script>
    import  axios from 'axios'
	export default {
		name: "Create",
        data() {
			return {
				form : {
					title: '',
					body: ''
                }

            }
        },
        methods: {
	        createPost() {
                axios.post('/api/posts', this.form, {
                	headers: { 'Content-Type': 'application/json'}
                })
                .then(res => {
                	if (res.data.status) {
                		this.$router.push('/post/' + res.data.post.id)
                    } else {
		                console.log('Errors', res)
                    }
                })
                    .catch(err => {
	                    console.log('err', err)
                    })
            }
		}
	}
</script>

<style scoped>

</style>
