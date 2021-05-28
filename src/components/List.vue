<template>
  <a-form layout="inline" :form="form">
    <a-form-item label="post title">
      <input v-model="postTitle" placeholder="title" />
    </a-form-item>
    <a-form-item label="post content">
      <input v-model="postContent" placeholder="content"/>
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary" v-on:click="handlePost"> Submit </a-button>
    </a-form-item>
  </a-form>
  <div :style="{ padding: '5%', background: '#fff', minHeight: '360px' }">
  <ul id="example-1" >
    <li v-for="item in data" :key="item.id">
      {{ item.title }}
      <a-button type="link" v-on:click="deletePost(item.id)"> delete </a-button>
    </li>
    <a-pagination v-model="current" :total="50" @change="onChange"/>
  </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      show: false,
      postTitle: "",
      postContent: "",
      id: this.$route.params.id,
      current:2
    };
  },
  mounted() {

    fetch(`https://jsonplaceholder.typicode.com/users/${this.id}/posts/?_start=${0}&_limit=${3}`)
      .then((response) => response.json())
      .then((data) => (this.data = data))
      .catch((error) => console.log(error));
  },
  props: [""],

  methods: {
      onChange(current) {
      this.current = current;

        fetch(`https://jsonplaceholder.typicode.com/users/${this.id}/posts/?_start=${3*(this.current - 1)}&_limit=${3}`)
      .then((response) => response.json())
      .then((data) => (this.data = data))
      .catch((error) => console.log(error));

      },

    deletePost(id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].id == id) {
          this.data.splice(i, 1);
        }
      }
    },
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    handlePost() {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.postTitle,
          body: this.postContent,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      this.data.push({ title: this.postTitle, body: this.postContent });
    },
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
};
</script>
<style>
#components-layout-demo-responsive .sider {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  padding-top: 50%;
}
#components-layout-demo-responsive .sider2 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  padding-top: 5%;
}
#components-layout-demo-responsive .ant-layout-sider {
  background: #92b7d1;
  color: #fff;
}
</style>
