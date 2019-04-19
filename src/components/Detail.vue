<template>
	<div>
		<h1>{{detail.title}}</h1>
		<p>{{detail.publish_time}}</p>
        <p>{{detail.content}}</p>
	</div>
	
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			page: this.$route.params.page,
			num: this.$route.params.num,
			detail: {}
		}
	},
	created(){
		axios.get('/api/post',{
			params: {
				page: this.page,
				num: this.num
			}
		}).then(res=>{
			this.detail = res
		})
		.catch(err=>{})
	}
}
</script>

<style>

</style>