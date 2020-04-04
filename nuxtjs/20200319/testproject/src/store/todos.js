export const state = () => ({
  list: [],
  message:'mymessage'
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  },

  startTimer(state){
    setInterval(()=>{
      console.log(1);
    },1000);
  }
}
