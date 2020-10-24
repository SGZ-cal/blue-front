<template>
  <div>
    <h2>
      Staffsテーブルの取得
    </h2>
    <table v-if="staffs.length">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>created_at</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(staff, i) in staffs"
          :key="`user-${i}`"
        >
          <td>{{ staff.id }}</td>
          <td>{{ staff.name }}</td>
          <td>{{ staff.email }}</td>
          <td>{{ dateFormat(staff.created_at) }}</td>
        </tr>
      </tbody>
    </table>

    <div v-else>
      ユーザーが取得できませんでした
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    let staffs = []
    await $axios.$get('/api/v1/staffs')
      .then(res => (staffs = res))
    return { staffs }
  },
  computed: {
    dateFormat () {
      return (date) => {
        const dateTimeFormat = new Intl.DateTimeFormat(
          'ja', { dateStyle: 'medium', timeStyle: 'short' }
        )
        return dateTimeFormat.format(new Date(date))
      }
    }
  }
}
</script>
