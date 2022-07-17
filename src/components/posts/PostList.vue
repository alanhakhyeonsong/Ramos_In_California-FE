<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-content">
      {{ postItem.content }}
    </div>
  </li>
</template>

<script>
export default {
  name: "PostList",
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    routeEditPage() {
      const id = this.postItem.id;
      this.$router.push(`/post/${id}`);
    },
  },
}
</script>

<style scoped>

</style>