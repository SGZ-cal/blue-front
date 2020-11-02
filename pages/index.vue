<template>
  <div>
    <a>最近のプロジェクト</a>
    <div
      v-for="(p, i) in recentProjects"
      :key="i"
    >
      {{ p.name }}
      {{ p.updatedAt }}
    </div>
    <a>カード表示</a>
    <div
      v-for="(project, i) in recentProjects.slice(0, 2)"
      :key="`card-project-${i}`"
    >
      <a :href="$my.projectLinkTo(project.id)">
        {{ project.name }}
      </a>
      <a>{{ $my.format(project.updatedAt) }}</a>
    </div>
    <a>全てのプロジェクト</a>
    <table>
      <tr>
        <th>名前</th>
        <th>更新日</th>
      </tr>
      <tr
        v-for="(item, i) in recentProjects"
        :key="i"
      >
        <td>
          <a :href="$my.projectLinkTo(item.id)">{{ item.name }}</a>
        </td>
        <td>{{ $my.format(item.updatedAt) }}</td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  layout ({ store }) {
    return store.state.loggedIn ? 'loggedIn' : 'welcome'
  },
  computed: {
    recentProjects () {
      const copyProjects = Array.from(this.$store.state.projects)
      return copyProjects.sort((a, b) => {
        if (a.updatedAt > b.updatedAt) { return -1 }
        if (a.updatedAt < b.updatedAt) { return 1 }
        return 0
      })
    }
  }
}
</script>
