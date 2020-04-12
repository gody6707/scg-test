<template>
  <div class="hello">
      khklkblhblbkbv
    <ul v-if="posts && posts.length">
      <li  v-for="post in posts" :key="post">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>

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
      posts: [],
      errors: []
    }
  },

  created() {
    axios.get(`192.168.1.105:3000/DOSCG`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.body
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
