<template>
  <main>
    <h1>ログイン</h1>
      <div class="form-group">
        <label for="field-mail">メールアドレス</label><br>
        <input
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
        type="passward"
        class="form-input"
        name="entry.1690932799"
        id="field-mail"
        maxlength="254"
        required
        >
      </div>
      <div class="login-item">
        <button class="login-button" @click="myStore.increment">ログイン</button>
      </div>
      <div class="security-item">
        <button class="for-security" type="submit">パスワードを忘れた方</button>
      </div>
  </main>
</template>

<script>
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