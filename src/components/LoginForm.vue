<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">email: </label>
      <input id="email" type="text" v-model="email" placeholder="email"/>
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="text" v-model="password" placeholder="password"/>
    </div>
    <button :disabled="!isEmailValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginMember } from  "@/api/index"
import { validateEmail } from "@/utils/validation";

export default {
  name: "LoginForm",
  data() {
    return {
      // form values
      email: '',
      password: '',
      // log
      logMessage: '',
    }
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    }
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const memberData = {
          email: this.email,
          password: this.password,
        };
        const { data } = await loginMember(memberData); // 결과로 토큰이 반환됨.
        console.log(data);
        this.logMessage = `${data.data.nickname} 님 환영합니다.`; // data에 접근하지 말고 Vuex를 활용해서 nickname을 찍어야 함.
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.email = '';
      this.password = '';
    },
  },
}
</script>

<style scoped>
form {
  border: 3px solid #f1f1f1;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #3CB371;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: auto;
}
button:hover {
  opacity: 0.8;
}
</style>