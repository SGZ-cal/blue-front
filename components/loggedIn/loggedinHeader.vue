<template>
  <header class="header-container">
    <ul class="header-list">
      <li class="header-item">
        <a href="/students">生徒一覧</a>
      </li>
      <li class="header-item">
        <a href="/projects">PJ一覧</a>
      </li>
      <li class="header-item">
        <a href="/account">設定</a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
.header-list {
  width: 100%;
  height: 80px;
  line-height: 80px;
  border-bottom: 0.5px solid gray;
  display: flex;
  justify-content: flex-end;
}
.header-item {
  padding-left: 50px;
  a {
    text-decoration: none;
    color: gray;
  }
}
</style>
