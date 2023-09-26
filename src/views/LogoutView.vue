<template>
  <div class="logout-page-wrapper">
    <div class="logout-page-up">
      <h1 class="logout-title">ログアウト</h1>
      <button class="close-button">☓</button>
      <p>閉じる</p>
    </div>
    <hr class="line">
    <p class="logout-massage">本当にログアウトしますか？</p>
    <div class="item-wrapper">
      <div class="logout-item">
        <button class="logout-button" type="submit">ログアウト</button>
      </div>
      <div class="cansel-item">
        <button class="cansel-button" type="submit">キャンセル</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.logout-page-wrapper {
  border:  solid 2px #707070;
  padding: 20px;
  max-width: 800px; 
  margin: 0 auto;
  position: relative;
}
.logout-page-up {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logout-title {
  font-size: 24px;
}
.close-button {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  position: absolute; 
  right: 30px; 
  top: 10px; 
}
.line {
  margin: 10px 0 20px 0;
}
.logout-massage {
  text-align: left;
}
.item-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.logout-button {
  background-color: black;
  color: white;
  border: solid 1px black;
  font-size: 20px;
  padding: 20px 120px;
}
.cansel-button {
  border: solid 1px black;
  font-size: 20px;
  padding: 20px 120px;
}
</style>