export const state = () => ({
  data: [],
  showBoxEdit: false,
  boxEditData: {
    _id: '',
    data: {
      name: '新しい箱',
      summary: '',
      items: [
        {
          name: '',
          amount: 0
        }
      ]
    }
  }
})

export const mutations = {
  setData (state, data) {
    state.data = data
  },

  setShowBoxEdit (state, data) {
    state.showBoxEdit = data
  },

  setboxEditData (state, data) {
    state.boxEditData = data
  },

  setboxEditDataName (state, data) {
    state.boxEditData.data.name = data
  },

  setboxEditDataSummary (state, data) {
    state.boxEditData.data.summary = data
  },

  setboxEditDataItems (state, data) {
    state.boxEditData.data.items = data
  },

  updateItemName (state, data) {
    state.boxEditData.data.items[state.boxEditData.data.items.findIndex(i => i.id === data.id)].name = data.name
    if (state.boxEditData.data.items.findIndex(i => i.id === data.id) === state.boxEditData.data.items.length - 1) {
      state.boxEditData.data.items.push({ id: new Date().getTime(), name: '', amount: 0 })
    }
  },

  updateItemAmount (state, data) {
    state.boxEditData.data.items[state.boxEditData.data.items.findIndex(i => i.amount === data.id)].amount = data.amount
  },

  deleteItem (state, data) {
    if (state.boxEditData.data.items.length > 1) {
      const newAry = state.boxEditData.data.items.filter(n => n.id !== data.id)
      state.boxEditData.data.items = newAry
    }
  }
}
const uri = 'http://192.168.0.199:9876'

export const actions = {
  async getData ({ commit }) {
    const data = await this.$axios.$get(uri + '/box')
    commit('setData', data)
  },
  async newBox ({ commit }) {
    const data = await this.$axios.$get(uri + '/box/new')
    commit('setData', data)
  },
  async deleteBox ({ commit }) {
    const data = await this.$axios.$delete(uri + '/box/' + this.state.boxEditData._id)
    commit('setData', data)
    commit('setShowBoxEdit', false)
  },
  showBoxEdit ({ commit }, data) {
    commit('setShowBoxEdit', true)
    commit('setboxEditData', data)
  },
  async hideBoxEdit ({ commit }) {
    commit('setShowBoxEdit', false)
    const sendObj = { data: this.state.boxEditData.data }
    await this.$axios.$post(uri + '/box/' + this.state.boxEditData._id, sendObj)
  }
}
