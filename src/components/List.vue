<template>

  <ul id="example-1">
  <li v-for="item in data" :key="item.id">
    {{ item.title }}
    <a-button type="link" v-on:click="deletePost(item.id)">
        delete
      </a-button>
  </li>
</ul>

</template>
<script>

export default {
  data() {
    return {
      data : [],
      show: false
    };
  },
  mounted () {
    
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(response => response.json())
      .then(data => this.data = data)
      .catch(error => console.log(error));
  },

  methods: {
      deletePost(id){
          fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
            });
      },

  }
};
</script>
<style></style>