<template>
  <button class="relative-position">
    <i class="fa fa-2x fa-language"></i>
    <q-popover self="top right" >
      <div class="list striped">
        <p class="caption no-margin text-center text-white bg-teal">{{ $t("lbl_lang") }}</p>
        <div class="item item-link two-lines item-delimiter no-margin" 
             v-for="(lang, index) in language" :key="index"
             @click="setLang(lang.var)">
          <img class="item-primary" :src="lang.src" :title="lang.title">
          <div class="item-content has-secondary">
            <div>{{lang.name}}</div>
          </div>
        </div>
      </div>
    </q-popover>
  </button>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      let vm = this
      return {
        language: [
          {name: vm.$t('lbl_fr'), title: 'FR', src: require('../img/fr.png'), var: 'fr'},
          {name: vm.$t('lbl_en'), title: 'EN', src: require('../img/en.png'), var: 'en'},
          {name: vm.$t('lbl_ar'), title: 'AR', src: require('../img/ar.png'), var: 'ar'}
        ]
      }
    },
    methods: {
      ...mapActions([
        'lang'
      ]),
      setLang: function (lang) {
        this.lang(lang)
        let vm = this
        this.language = [
        {name: vm.$t('lbl_fr'), title: 'FR', src: require('../img/fr.png'), var: 'fr'},
        {name: vm.$t('lbl_en'), title: 'EN', src: require('../img/en.png'), var: 'en'},
        {name: vm.$t('lbl_ar'), title: 'AR', src: require('../img/ar.png'), var: 'ar'}
        ]
      }
    }
  }
</script>
<style scoped>
  .list{
    max-width: 400px;
  }
  .item > img.item-primary:not(.thumbnail) {
    border-radius: 10px !important;
  }
  .item > img.item-primary {
    width: 48px;
    height: 46px;
  }
  .item > .item-secondary {
    width: 57px;
    font-size: 13px;
  }
  .item-content > div {
    margin-top: 12px;
  }
</style>
