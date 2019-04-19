<template>
	<div>
		标题：<input type="text" v-model="title">
		发布时间：<input type="date" v-model="publish_time">
		内容：<textarea v-model="content"></textarea>
		<button @click="submit">发布</button>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			title: '',
			publish_time: '',
			content: ''
		}
	},
	methods: {
		submit() {
			axios.post('/api/write', {
				title: this.title,
				publish_time: this.publish_time,
				content: this.content
			}).then(res=>{
				if(res.msg == 'OK') {
					this.goHome()
				}
			}).catch(err=>{})
		},
		goHome() {
			this.$router.push({name: 'home'})
		}
	}
}
</script>