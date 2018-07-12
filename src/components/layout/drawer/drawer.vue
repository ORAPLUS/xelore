<template>
  <q-drawer ref="leftDrawer" v-show="getLayoutNeeded">
    <div id="profile">
      <img :src="photo" style='height: 100px;padding: 5px;' class="inline-block">
      <img v-if="!photo" src="../img/avatar-1.svg" id="avatar" class="inline-block"> 
      <div id="user-name">
        <span class="text-white" v-if="name"> DR. {{ name | uppercase }} </span>
        
        <span class="text-white" v-else> {{ email | filteremail }} </span>
      </div>
      <div id="user-actions">
        <button class="bordered blue small" @click='logOut' title="Log out"><i>exit_to_app</i></button>
      </div>
    </div>
    <menu-one v-if="getMenuCollapse" :links="links"></menu-one>
    <menu-two v-else :links="links"></menu-two>
  </q-drawer>
</template>
<script type="text/javascript">
  import { mapGetters, mapActions } from 'vuex'
  import menuOne from './menuOne.vue'
  import menuTwo from './menuTwo.vue'
  import firebase from 'firebase'
  
  export default {
    filters: {
      'filteremail': function (v) {
        return v.replace(/@[^@]+$/, '').toUpperCase()
      },
      'uppercase': function (v) {
        return v.toUpperCase()
      }
    },
    data () {
      return {
        photo: '',
        userId: '',
        name: '',
        email: '',
        user: {},
        links: {
          Dashboard: {
            routes: [
              { route: '/', faIcon: 'fa fa-home', materialIcon: 'home', name: 'Dashboard One' }
            ],
            show: true
          },
          Forms: {
            routes: [
              { route: '/form', faIcon: 'fa fa-search', materialIcon: 'search', name: 'Form find / edit' },
              { route: '/embeeded', faIcon: 'fa fa-check', materialIcon: 'check', name: 'Embeeded validations' },
              { route: '/advanced-form-one', faIcon: 'fa fa-hdd-o', materialIcon: 'filter_1', name: 'Adv. Form One' }
            ],
            show: false
          },
          Pages: {
            routes: [
              { route: '/login-one', faIcon: 'fa fa-unlock-alt', materialIcon: 'lock_open', name: 'Login One' },
              { route: '/pricing', faIcon: 'fa fa-money', materialIcon: 'attach_money', name: 'Pricing' },
              { route: '/drag-and-drop', faIcon: 'fa fa-arrows', materialIcon: 'move_to_inbox', name: 'Drag and Drop' },
              { route: '/server-side-data-table', faIcon: 'fa fa-list-alt', materialIcon: 'list_compact', name: 'Server Side Data Table' }
            ],
            show: false
          }
        }
      }
    },
    created () {
      var vm = this
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          vm.user = user
          vm.name = vm.user.displayName
          vm.email = vm.user.email
          vm.photo = vm.user.photoURL
          vm.userId = vm.user.uid
        }
      })
    },
    methods: {
      ...mapActions([
        'logout'
      ]),
      logOut () {
        this.logout()
        this.$router.push('/signin')
        location.reload()
      }
    },
    computed: {
      ...mapGetters([
        'getLayoutNeeded',
        'getMenuCollapse',
        'getUser'
      ])
    },
    components: {
      menuOne,
      menuTwo
    }
  }
</script>
<style scoped>
  .fixed-bottom {
    margin-bottom: 1%;
  }

  .fixed-bottom a img {
    width: 25px;
    height: 25px;
  }
  #avatar{
    height: 100px;
    padding: 5px;
  }
  #profile {
    height: 110px;
    background-color: #009688;
  }
  #user-name {
    left: 115px;
    bottom: 77px;
    position: relative;
    width: 159px;
  }
  #user-actions {
    left: 115px;
    bottom: 71px;
    position: relative;
    width: 171px;
  }
  #menu-collapse {
    margin-top: 5%;
  }
</style>
