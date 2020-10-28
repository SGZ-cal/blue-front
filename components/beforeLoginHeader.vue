<template>
  <header class="header-container">
    <ul class="header-list">
      <li class="header-item">
        <a href="/signup">新規登録</a>
      </li>
      <li class="header-item">
        <a href="/login">ログイン</a>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
.header-list {
  width: 100%;
  height: 80px;
  line-height: 80px;
  border-bottom: 0.5px solid gray;
  display: flex;
  justify-content: flex-end;
}
</style>