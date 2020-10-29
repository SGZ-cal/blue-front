<template>
  <div>
    <ul>
      <li>
        <a href="/account/settings">アカウント設定</a>
      </li>
      <li>
        <a href="/account/password">パスワード変更</a>
      </li>
      <li>
        <a href="/logout">ログアウト</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'loggedIn',
}
</script>
