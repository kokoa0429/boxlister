<template>
  <div class="field has-addons">
    <p class="control is-expanded">
      <input class="input" type="text" placeholder="モノ" v-model="lname">
    </p>
    <p class="control">
    <span class="select">
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </select>
    </span>
    </p>
    <p class="control">
      <a class="button" @click="deleteItem()">
        削除
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ItemDel',
  props: ['item'],
  methods: {
    deleteItem () {
      this.$store.commit('deleteItem', { id: this.item.id })
    }
  },
  data () {
    return {
      name: '',
      id: '',
      amount: ''
    }
  },
  computed: {
    lname: {
      get () {
        return this.item.name
      },
      set (value) {
        this.$store.commit('updateItemName', { name: value, id: this.item.id })
      }
    },
    lamount: {
      get () {
        return this.item.amount
      },
      set (value) {
        this.$store.commit('updateItemAmount', { amount: value, id: this.item.id })
      }
    }
  }
}
</script>

<style scoped>

</style>
