<template>
  <div>
    <div class="layout-padding">
      <div class="card">
        <div class="card-title bg-teal text-white">Configuration des rôles</div>
        <div class="card-content">
          <div class="flex wrap gutter">
            <div class="auto">
              <q-search placeholder="Rechercher un utilisateur" :debounce="500"
                        v-model.lazy="searchUser" @input="getUsers"/>
            </div>
            <div class="auto">
              <q-pagination
                v-model="page"
                :max="10"
              ></q-pagination>
            </div>
          </div>
          <q-data-table
            :data="users"
            :config="configs"
            :columns="columns">
          </q-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.getUsers()
    },
    data () {
      return {
        users: [],
        page: 1,
        searchUser: '',
        columns: [
          { label: 'Identifiant', field: 'name', width: '80px', sort: true },
          { label: 'Roles', field: 'description', width: '80px', sort: true },
          { label: 'Date de création', field: 'first_brewed', width: '80px', sort: true },
          { label: 'Dernière connexion', field: 'first_brewed', width: '80px', sort: true }
        ],
        configs: {
          columnPicker: true
        }
      }
    },
    watch: {
      page () {
        this.getUsers()
      }
    },
    computed: {
      url () {
        return `beers?page=${this.page}&per_page=5${this.search}`
      },
      search () {
        return this.searchUser ? `&beer_name=${this.searchUser}` : ''
      }
    },
    methods: {
      getUsers () {
        this.$http.punk
          .get(this.url)
          .then(response => { this.users = response.data })
      }
    }
  }
</script>

<style scoped>
  .grid-filter{
    max-width: 200px
  }
  .grid-search{
    max-width: calc(100% - 400px)
  }
  .grid-pagination{
    max-width: 200px
  }
</style>
