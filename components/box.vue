<template>
  <div>
    <div class="card" style="margin: .5rem; width: calc(100% - 1rem)">
      <div class="card-content">
        <div class="media" style="margin-bottom: .5rem">
          <div class="media-content">
            <p class="title is-4">
              {{boxData.data.name}}
            </p>
            <p class="subtitle is-6">
              : {{boxData.data.summary}}
            </p>
          </div>
        </div>
        <div class="content">
          <span v-for="item in boxData.data.items" :key="item.id">{{ item.name === '' ? '' : item.name + ', '}} </span>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="showBoxEdit()">
          編集
        </a>
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Box',
  components: {
  },
  props: ['boxData'],
  methods: {
    showBoxEdit () {
      this.$store.dispatch('showBoxEdit', this.boxData)
    }
  }
}
</script>

<style scoped>

</style>
