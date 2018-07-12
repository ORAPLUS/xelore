<template>
  <div class="flex justify-center full-height" :class="heightSize">
    <div class="card text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto " id="login">
      <div class="card-title" :class="finalBgColor">
        <svg id="logo" viewBox="0 0 483 483"
             style="enable-background:new 0 0 460 460;"
             xml:space="preserve" width="128px" height="128px"
             v-html="logoMethod">
        </svg>
        <h4>{{$t("pre")}} {{$t("nom_doctor")}}</h4>
      </div>
      <div class="card-content bg-white ">
        <div class="stacked-label">
          <input required class="full-width" type="email" v-model="email">
          <label>{{ $t("lbl_email") }}</label>
        </div>
        <div class="stacked-label">
          <input required class="full-width" type="password" v-model="password">
          <label>{{ $t("lbl_pwd") }}</label>
        </div>
      </div>
      <div class="card-actions inline-block vertical-middle">
        <button class="teal fit" :disabled="getLoading" :loading="getLoading" @click.prevent="onSignin">
         <i class="fa fa-2x fa-envelope-o"></i> {{ $t("lbl_sign_in") }}
        </button>
        <button class="red fit" :disabled="getLoading" :loading="getLoading" @click.prevent="onSigninGoogle">
          <i class="fa fa-2x fa-google"></i> {{ $t("lbl_login_google") }}
        </button>
        <button class="orange fit" :disabled="getLoading" :loading="getLoading" @click="onResetPassword">
          <i class="fa fa-2x fa-refresh"></i> {{ $t("lbl_reset_pwd") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  /* eslint-disable */
  // Import
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import Vivus from 'vivus'
  import logoData from './logoData'
  import { Platform, Toast } from 'quasar'
  // Export
  export default {
    data () {
      return {
        logos: Object.keys(logoData),
        logo: 'XELORE',
        email: '',
        password: '',
        bgColor: 'purple',//purple,blue,red,green
        toneColor: 10,
        vivus: ''
      }
    },// Mounted
    mounted () {
      this.startAnimation()
    },// Computed
    computed: {
      ...mapGetters([
        'getUser',
        'getPositive',
        'getNegative',
        'getLoading'
      ]),
      heightSize (){
        if (Platform.is.desktop) {
          return 'items-center'
        }
        return ''
      },
      finalBgColor () {
        return `bg-${this.bgColor}-${this.toneColor}`
      },
      logoMethod () {
        return logoData[this.logo]
      }
    },// Watch
    watch: {
      getUser (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      },
      getPositive (value) {
        if (value !== null && value !== undefined) {
          Toast.create.positive({html: value.message})
        }
      },
      getNegative (value) {
        if (value !== null && value !== undefined) {
          let msg = value.message ? value.message : ''
          if (msg !== '')
          Toast.create.negative({html: msg})
        }
      }
    },// Methods
    methods: {
      ...mapActions([
          'signUserIn',
          'signUserInGoogle',
          'resetPasswordWithEmail'
      ]),
      ...mapMutations([
          'setNegative'
      ]),
      onSignin () {
        this.signUserIn({email: this.email, password: this.password})
      },
      onSigninGoogle () {
        this.signUserInGoogle()
      },
      onResetPassword () {
        if (this.email === '') {
          this.setNegative('Email can not be blnak')
        }
        this.resetPasswordWithEmail({email: this.email})
      },
      startAnimation () {
        this.vivus = new Vivus('logo', {
            duration: 200,
          forceRender: false
          }, function(element) {
            for (let item of element.el.children[0].children) {
              item.setAttribute('style', 'fill:white')
              item.setAttribute('style', 'fill:white')
            }
          }
        )
      }
    }
  }
</script>
<style scoped>
  .card {
    margin-bottom: 0px;
  }
  .card-content {
    min-height: 140px;
  }
  button {
    margin-bottom: 2%;
  }
  h4 {
    font-weight: 300;
  }
</style>
