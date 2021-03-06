import {home} from '../../api/'

export default {
  namespaced: true,
  state: () => ({
    user: null
  }),
  actions: {
    getUser({commit},id) {
      /**
       * 这里一定要return，因为一个route的所有component的asyncData都resolve之后
       * 才会执行renderer.renderToString，所以async中dispatch执行的结果应该是一个
       * promise
       */
      let req = home.getUserById(id)
      req.then((user) => {
        commit('getUser', user.data)
      }, (err) => {
        console.log('[!]' + err)
      })
      return req
    }
  },
  mutations: {
    getUser(state, user) {
      state.user = user
    }
  }
}