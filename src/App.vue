<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div id="app-contents">
      <router-view></router-view>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader";
import AppFooter from "@/components/common/AppFooter"

export default {
  components: {
    AppHeader,
    AppFooter
  },
};
</script>
<style>

</style>
