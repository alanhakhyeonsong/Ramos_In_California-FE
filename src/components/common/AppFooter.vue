<template>
  <footer id="footer">
    <div class="FooterContent">
      All Copyrights Reserved by ⓒRamos
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>
#footer{
  height:100px;
  background-color: rgb(226, 214, 214);
  position:fixed;
  bottom:0;
  width:100%;
}
.FooterContent{
  display: flex;
  box-sizing: border-box;
  padding: 1rem;
  font-size: 1rem;
  -webkit-box-pack: end;
  justify-content: flex-end;
  background-color: rgb(242, 242, 242);
  height: 100%;
  width: 100%;
}
</style>