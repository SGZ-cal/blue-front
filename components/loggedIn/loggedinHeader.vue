<template>
  <header class="header-container">
    <AppLogo />
    <v-spacer />
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

<script>
import AppLogo from '@/components/ui/appLogo.vue'
export default {
  components: {
    AppLogo,
  },
}
</script>

<style lang="scss" scoped>
.header-container {
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  padding: 10px 5%;
  display: flex;
  border-bottom: 0.5px solid gray;
}
.header-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.header-item {
  padding-left: 50px;
  a {
    text-decoration: none;
    color: gray;
  }
}
</style>
