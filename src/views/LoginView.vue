<template>
  <main>
    <h1>ログイン</h1>
      <div class="form-group">
        <label for="field-mail">メールアドレス</label><br>
        <input
          v-model="email"
          type="email"
          class="form-input"
          name="entry.1690932799"
          id="field-mail"
          maxlength="254"
          required
        >
      </div>
      <div class="form-group">
        <label for="field-mail">パスワード</label><br>
        <input
          v-model="password"
          type="password"
          class="form-input"
          name="entry.1690932799"
          id="field-mail"
          maxlength="254"
          required
        >
      </div>
      <div class="login-item">
        <button class="login-button" @click="login">ログイン</button>
      </div>
      <div class="security-item">
        <button class="for-security" type="submit">パスワードを忘れた方</button>
      </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/userStore.js'
import router from '@/router'

const userStore = useUserStore()
const email = ref('')
const password = ref('')

const login = async () => {
  await userStore.login(email.value, password.value).then(() => {
    router.push({ name: 'home' })
  }).catch((e) => {
    alert(e)
  })
}
</script>

<style scoped>
main {
  padding: 60px;
  background-color: #f5f5f5;
}
.form-group {
  text-align: left;
  margin-bottom: 20px;
  border-bottom: solid 1px #707070;
  line-height: 32px;
}

.login-item {
  background-color: red;
  padding: 32px;
  margin: 64px;
}
.login-button {
  color: white;
  font-size: 24px;
}

.for-security {
  color: gray;
  font-size: 24px;
}
</style>