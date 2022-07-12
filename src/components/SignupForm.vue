<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">email: </label>
      <input id="email" type="text" v-model="email" />
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button :disabled="!isEmailValid || !password" type="submit">회원 가입</button>
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
        this.logMessage = `${data.data.email} 님이 가입되었습니다.`;
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
      finally {
        this.initForm();
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

</style>