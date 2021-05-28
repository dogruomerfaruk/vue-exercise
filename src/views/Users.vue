<template>

  <ul id="example-1" style="list-style-type:none;">
    <li v-for="item in users" :key="item.id" style="border: 1px solid black;">
      <router-link :to="{name:'UserDetails', params:{id: item.id}}"> {{item.name}} </router-link>
      
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      users : []
    };
  },
  mounted() {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => (this.users = data))
      .catch((error) => console.log(error));
  },
  props: [""],

  methods: {

  },

};

</script>
