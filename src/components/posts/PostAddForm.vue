<template>
  <div class="contents">
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="title">
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" type="text" v-model="contents" />
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import {addPost} from "@/api/posts";

export default {
  name: "PostAddForm",
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const boardData = {
          title: this.title,
          contents: this.contents,
        };

        const { data } = await addPost(boardData);
        console.log(data);
        this.$router.push('/main');

      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  },
}
</script>

<style scoped>

</style>