<template>
  <div class="hello">
    <h1>{{ msg }}</h1><br><br>

    <h3>1: X, Y, 5, 9, 15, 23, Z  - Please create a new function for finding X, Y, Z value</h3>
    <ul v-if="posts1 && posts1.length">
      <li  v-for="post in posts1" :key="post">
        <p>{{post}}</p>
      </li>

    </ul>
    <br>
    <br>
    
    <h3>2: If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding B and C value</h3>
    <ul v-if="posts2">
        <p><strong>Value B : {{posts2.valueB}}</strong></p> <br>
        <p><strong>Value C : {{posts2.valueC}}</strong></p>

    </ul>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Calculate1',
  props: {
    msg: String
  },
  data() {
    return {
      posts1: [],
      posts2: {},
      errors: []
    }
  },

  created() {
    axios.get(`http://localhost:3000/DOSCG`)
    .then(response => {
      // JSON responses are automatically parsed.\
      this.posts1 = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    axios.get(`http://localhost:3000/DOSCG_2`)
    .then(response => {
      // JSON responses are automatically parsed.
      console.log(response.data.valueB)
      this.posts2 = response.data

      console.log(this.posts2)

    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
