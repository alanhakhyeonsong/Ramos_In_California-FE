<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">email: </label>
      <input id="email" type="text" v-model="email" placeholder="email"/>
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="password" v-model="password" placeholder="password"/>
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" placeholder="nickname"/>
    </div>
    <button :disabled="!isEmailValid || !password || !nickname" type="submit">
      회원 가입
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerMember } from '@/api/index';
import { validateEmail } from "@/utils/validation";

export default {
  name: "SignupForm",
  data() {
    return {
      email: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    }
  },
  methods: {
    async submitForm() {
      try {
        const memberData = {
          email: this.email,
          password: this.password,
          nickname: this.nickname,
        };
        const { data } = await registerMember(memberData);
        console.log(data);
        this.logMessage = `${data.data.nickname} 님이 가입되었습니다.`;
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
      finally {
        this.initForm();
        this.$router.push('/login');
      }

    },
    initForm() {
      this.email = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style scoped>
form {
  border: 3px solid #f1f1f1;
}
input[type=text], input[type=password] {
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