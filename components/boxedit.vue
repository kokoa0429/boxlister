<template>
  <div class="modal" :class="{'is-active': showBoxEdit}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">段ボール</p>
        <button class="button is-warning" aria-label="close" @click="deleteBox ()">箱を削除</button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">名前</label>
          <div class="control">
            <input class="input" type="text" placeholder="リビング用①" v-model="boxDataName">
          </div>
        </div>
        <div class="field">
          <label class="label">概要</label>
          <div class="control">
            <input class="input" type="text" placeholder="食料品とコーヒーメーカー" v-model="boxDataSummary">
          </div>
        </div>
        <div class="is-divider"></div>
        <itemDel v-for="item in boxDataItems" :key="item.id" v-bind:item="item"/>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="hideBoxEdit()">保存</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import itemDel from './itemdel'
export default {
  components: {
    itemDel
  },
  computed: {
    ...mapState([
      'showBoxEdit'
    ]),
    boxDataName: {
      get () {
        return this.$store.state.boxEditData.data.name
      },
      set (value) {
        this.$store.commit('setboxEditDataName', value)
      }
    },
    boxDataSummary: {
      get () {
        return this.$store.state.boxEditData.data.summary
      },
      set (value) {
        this.$store.commit('setboxEditDataSummary', value)
      }
    },
    boxDataItems: {
      get () {
        return this.$store.state.boxEditData.data.items
      },
      set (value) {
        this.$store.commit('setboxEditDataItems', value)
      }
    }
  },
  methods: {
    hideBoxEdit () {
      this.$store.dispatch('hideBoxEdit')
    },
    deleteBox () {
      this.$store.dispatch('deleteBox')
    }
  }
}
</script>

<style scoped>

</style>
