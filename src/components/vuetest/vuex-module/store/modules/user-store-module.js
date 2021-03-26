const userModule = {
  namespaced: true,
  state: () => ({
    users: [
      {
        id: 1,
        name: 'User1',
        gender: 'male'
      },
      {
        id: 2,
        name: 'User2',
        gender: 'female'
      },
      {
        id: 3,
        name: 'User3',
        gender: 'male'
      },
      {
        id: 4,
        name: 'User4',
        gender: 'female'
      },
    ]
  }),
  getters: {
    getMaleUsers: state => {
      return state.users.filter( user => user.gender === 'male')
    },
    getFemaleUsers: state => {
      return state.users.filter( user => user.gender === 'female')
    },
  },
  mutations: {
    addUser(state, newGender) {
      let nextId = state.users.length + 1;
      state.users.push({
        id: nextId,
        name: 'User' + nextId,
        gender: newGender
      })
    }
  }
}

export default userModule;