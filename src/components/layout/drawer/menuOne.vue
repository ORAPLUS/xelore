<template>
  <div class="list no-border platform-delimiter light-paragraph">
    <template v-for="(parent, index) in links">
      <div :key="index" class="list-label cursor-pointer underline" @click="parent.show = !parent.show">{{replaceUnderlineToSpace(index)}}</div>
      <template v-for="(child, ind) in parent.routes">
        <transition name="menu" :key="ind">
          <div v-show="parent.show">
            <router-link :to="child.route" exact tag="div" class="item item-link drawer-closer cursor-pointer" >
              <i :class="child.faIcon" class="item-primary"></i>
              <div class="item-content">{{child.name}}</div>
            </router-link>
          </div>
        </transition>
      </template>
    </template>
  </div>
</template>

<script>
  export default {
    props: ['links'],
    watch: {
      '$route.path' () {
        Object.keys(this.links).forEach(parentName => { this.setParentVisibilityBasedOnRoute(this.links[parentName]) })
      }
    },
    computed: {
      currentRoutePath () {
        return this.$route.path
      }
    },
    methods: {
      setParentVisibilityBasedOnRoute (parent) {
        parent.routes.forEach(item => {
          if (this.$route.path === item.route) {
            parent.show = true
            return
          }
        })
      },
      replaceUnderlineToSpace (text) {
        while (text.indexOf('_') !== -1) {
          text = text.replace('_', ' ')
        }
        return text
      }
    }
  }
</script>
<style scoped>
  .list-label:first-child{
    line-height: 50px;
  }
  .router-link-active {
    color: #027be3;
    background-color: #dadada !important;
    border-right: 2px solid #027be3;
  }
  .router-link-active .item-primary{
    color: #027be3;
  }
</style>
