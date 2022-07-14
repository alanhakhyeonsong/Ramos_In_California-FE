<template>
  <header>
    <div>
      <router-link to="/" class="logo">Ramos In California</router-link>
    </div>
    <div class="navigations">
      <a href="https://github.com/alanhakhyeonsong">About</a>
      <template v-if="isMemberLogin">
        <a href="javascript:;" @click="logout" class="logout-button">
          Logout
        </a>
      </template>

      <template v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">SignUp</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { logoutMember } from "@/api";

export default {
  name: "AppHeader",
  computed: {
    isMemberLogin() {
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    async logout() {
      try {
        const memberData = {
          refreshToken: this.$store.getters.getRefreshToken,
        };
        await logoutMember(memberData);
        this.$store.commit('clearEmail');
        this.$store.commit('clearAccessToken');
        this.$store.commit('clearRefreshToken');
        window.alert("로그아웃 되었습니다.");
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 2;
  background-color: #BAB0FF;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.navigations a {
  text-decoration-line: none;
  margin-left: 10px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>