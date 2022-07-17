<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm">
        <div>
          <label for="email">email: </label>
          <input id="email" type="text" v-model="email" placeholder="email"/>
        </div>
        <div>
          <label for="password">password: </label>
          <input id="password" type="password" v-model="password" placeholder="password"/>
        </div>
        <button class="btn" :disabled="!isEmailValid || !password" type="submit">
          로그인
        </button>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { validateEmail } from "@/utils/validation";
import { saveAccessToken, saveRefreshToken } from "@/utils/cookies";
import { loginMember } from "@/api/auth";

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
        window.alert(`${memberData.email} 님 환영합니다.`);
        // this.logMessage = `${memberData.email} 님 환영합니다.`;
        this.$store.commit('setAccessToken', data.data.accessToken);
        this.$store.commit('setRefreshToken', data.data.refreshToken);
        saveAccessToken(data.data.accessToken);
        saveRefreshToken(data.data.refreshToken);
        this.$router.push("/main");
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
.form-wrapper {
  background-color: white;
  -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  padding: 15px 15px;
}

.form-wrapper .form-wrapper-sm {
  max-width: 500px;
  margin: 40px auto;
}

.form label {
  width: 100%;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 90%;
}

.form input, .form textarea {
  font-size: 100%;
  width: 100%;
  border: 1px solid #dae1e7;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0,.1);
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}

.btn {
  background-color: #3CB371;
  padding: 0.5rem 1.5rem;
  font-weight: 700;
  border-radius: .25rem;
  border: 0 solid #dae1e7;
}
.btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}


/*form {*/
/*  border: 3px solid #f1f1f1;*/
/*}*/
/*input[type=text], input[type=password] {*/
/*  width: 100%;*/
/*  padding: 12px 20px;*/
/*  margin: 8px 0;*/
/*  display: inline-block;*/
/*  border: 1px solid #ccc;*/
/*  box-sizing: border-box;*/
/*}*/

/*button {*/
/*  background-color: #3CB371;*/
/*  color: white;*/
/*  padding: 14px 20px;*/
/*  margin: 8px 0;*/
/*  border: none;*/
/*  cursor: pointer;*/
/*  width: auto;*/
/*}*/
/*button:hover {*/
/*  opacity: 0.8;*/
/*}*/
</style>