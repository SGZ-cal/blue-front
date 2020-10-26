<template>
  <v-container fluid>
    <v-card
      flat
      tile
      color="transparent"
    >
      <v-card-title>
        Staffsテーブルの取得
      </v-card-title>
      <v-card-text>
        <v-simple-table dense>
          <template
            v-if="staffs.length"
            v-slot:default
          >
            <thead>
              <tr>
                <th
                  v-for="(key, i) in staffKeys"
                  :key="`key-${i}`"
                >
                  {{ key }}
                </th>
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
          </template>
          <template v-else>
            ユーザーが存在しません
          </template>
        </v-simple-table>
      </v-card-text>
      <v-card-title>
        Vuetifyの導入（オリジナルカラーの確認）
      </v-card-title>
      <v-card-text>
        <v-btn
          v-for="(color, i) in colors"
          :key="`color-${i}`"
          :color="color"
          class="mr-2"
        >
          {{ color }}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    let staffs = []
    await $axios.$get('/api/v1/staffs').then(res => (staffs = res))
    const staffKeys = Object.keys(staffs[0] || {})
    return { staffs, staffKeys }
  },
  data () {
    return {
      colors: ['primary', 'info', 'success', 'warning', 'error', 'background']
    }
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
