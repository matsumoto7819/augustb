import axios from 'axios'

const login = (email, password) => {
  // resolveはthen,rejectはcatchに入る
  return new Promise((resolve, reject) => {
    const url = 'https://script.google.com/macros/s/AKfycbzFZl_9xqfdX7q806553KWYxLSL4j1C4bTCXEdbl-GD3XLfKmVaiAW149MIbSaEltzS-w/exec'
    axios.get(url).then((res) => {
      const users = res.data
      const user = users.find((user) => user.email === email && user.password === password)
      if(user === undefined) {
        return reject('メールアドレスかパスワードが間違っています。')
      }
      return resolve(user)
    }).catch(() => {
      return reject('API接続に失敗しました。')
    })
  })  
}

export default {
  login
}