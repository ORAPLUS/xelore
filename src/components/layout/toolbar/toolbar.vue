<template>
  <div class="toolbar" v-show="getLayoutNeeded">
    <q-ajax-bar color="#80cbc4"></q-ajax-bar>
    <router-link :to="'/'" v-if="$router.currentRoute.meta.backButton">
      <button>
        <i>arrow_back</i>
      </button>
    </router-link>
    <div v-else>
    <button class="hide-on-drawer-visible" @click="leftDrawer.open()" v-if="getUser" >
      <i>menu</i>
    </button>
    </div>
    <q-toolbar-title :padding="1">
      <router-link :to="'/'" class="text-white" :title="$t('lbl_logo')">
      <button>
        <i class="fa fa-3x fa-github"></i>
      </button>
    </router-link>
    </q-toolbar-title>
    <div class="right-itens" v-if="getUser">
      <message-popover></message-popover>
      <language-popover></language-popover>
      <button @click='logOut' :title="$t('lbl_logout')"><i class="fa fa-2x fa-sign-out"></i></button>
    </div>
    <div class="right-itens" v-else>
      <language-popover></language-popover>
      <router-link  class="text-white" :to="'/signin'" :title="$t('lbl_sign_in')">
        <button>
          <i class="fa fa-2x fa-key"></i>
        </button>
      </router-link>
      <router-link  class="text-white" :to="'/signup'" :title="$t('lbl_sign_up')">
        <button>
          <i class="fa fa-2x fa-user-plus"></i>
        </button>
      </router-link>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { mapMutations, mapGetters, mapActions } from 'vuex'
  import languagePopover from './languagePopover.vue'
  import messagePopover from './messagePopover.vue'
  export default {
    computed: {
      ...mapGetters([
        'getLayoutNeeded',
        'getIsLoginPage',
        'getUser'
      ]),
      leftDrawer () {
        return (this.$parent.$children[2].$refs.leftDrawer)
      }
    },
    methods: {
      ...mapMutations([
        'setMobileMode'
      ]),
      ...mapActions([
        'logout'
      ]),
      logOut () {
        this.logout()
        this.$router.push('/signin')
        location.reload()
      }
    },
    components: {
      languagePopover,
      messagePopover
    }
  }
</script>
<style scoped>
  .toolbar{
    min-height: 60px;
  }
</style>
