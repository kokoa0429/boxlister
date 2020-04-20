<template>
  <div>
    <BoxEdit />
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item" style="width: 100%">
          <img src="/logo.png" width="28" height="28">
          <div class="is-size-5">
            BoxLister
          </div>
          <div class="control" style="padding-left: 2em; width:100%">
            <input class="input" type="text" placeholder="検索(まだ)">
          </div>
        </div>
      </div>
    </nav>
    <div class="section">
      <div class="columns is-multiline is-1">
        <Box v-for="i in data" :key="i._id" v-bind:boxData="i" class="column is-4-desktop is-6-tablet" />
      </div>
    </div>
    <button @click="newBox()" class="button is-success is-rounded is-medium" style="position: fixed; bottom: 30px; right: 30px" >
      箱を追加
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Box from '../components/box.vue'
import BoxEdit from '../components/boxedit.vue'

export default {
  components: {
    Box,
    BoxEdit
  },
  computed: {
    ...mapState([
      'data'
    ])
  },
  created () {
    this.$store.dispatch('getData')
  },
  methods: {
    newBox () {
      // alert('hei')
      this.$store.dispatch('newBox')
    }
  }
}
</script>
<style>
@import "../node_modules/bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css";

</style>
