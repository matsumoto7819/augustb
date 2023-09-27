import auth from '@/modules/auth'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  //保持したいデータ
  state: () => {
    return {
      userId: '',
      email: '',
      userName: '',
    }
  },
  getters: {
    user: (state) => {
      return state
    },
  },
  actions: {
    async login (email, password) {
      const user = await auth.login(email, password)
      this.userId = user.userId
      this.email = user.email
      this.password = user.password
    },
    logout () {
      this.userId = ''
      this.email = ''
      this.password = ''
    },
  },
})