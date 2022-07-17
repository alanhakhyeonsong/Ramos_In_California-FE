<template>
  <div class="home">
    <div class="main list-container contents">
      <ul>
        <PostList
            v-for="postItem in postItems"
            :key="postItem.id"
            :postItem="postItem"
            @refresh="fetchData"
        ></PostList>
      </ul>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
import { getAllPosts } from "@/api/posts";

export default {
  name: 'Home',
  components: {
    PostList,
  },
  data() {
    return {
      postItems: [],
    };
  },
  mounted() {
  },
  methods: {
    async fetchData() {
      const { data } = await getAllPosts();
      this.postItems = data.data.content;
    },
  },
  created() {
    this.fetchData();
  }
}
</script>

<style>
ul{
  list-style:none;
}
</style>
