<template>

  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      
    >
      
      <div class="sider">
      <a-avatar :size="64" icon="user" />
      </div>
      <div class="sider2">
      <p>{{user.name}}</p>
      </div>
      <div class="sider2">
      <p>{{user.email}}</p>
      </div>
      <div class="sider2">
      <p>{{user.phone}}</p>
      </div>

    </a-layout-sider>
    
    <a-layout>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          
    <ListView/>
        </div>

      
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        
      </a-layout-footer>
    </a-layout>
  </a-layout>

</template>

<script>

import ListView from '../components/List'

export default {
  name: 'Home',
  data() {
    return {

      formLayout: 'horizontal',
      userId : this.$route.params.id,
      user:{}

    };
  },
  components: {
    ListView
  },
  
   mounted (){
     console.log(userId)
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
          .then(response => response.json())
          .then(data => {this.user = data; console.log(data)})
          .catch(error => console.log(error));
  },

  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },

  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
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
  width: 100%;
  padding-top: 2%;
  padding-left: 20%;
  padding-right: 0;
}
#components-layout-demo-responsive .ant-layout-sider {
  background: #92b7d1;
  color: #fff;
}
</style>
