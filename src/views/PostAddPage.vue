<template>
  <div>
    <h1>글 작성 페이지</h1>
    <PostAddForm></PostAddForm>
  </div>
</template>

<script>
import PostAddForm from '@/components/posts/PostAddForm';

export default {
  name: "PostAdd",
  components: {
    PostAddForm,
  },
}
</script>

<style scoped>

</style>