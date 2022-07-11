<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div id="app-contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader";

export default {
  components: {
    AppHeader,
  },
};
</script>
<style>

</style>
