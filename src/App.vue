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
      <p>ben</p>
      </div>
      <div class="sider2">
      <p>omer</p>
      </div>
      <div class="sider2">
      <p>faruk</p>
      </div>

    </a-layout-sider>
    <a-layout>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <a-form layout="inline" :form="form" @submit="handleSubmit">
            <a-form-item label="post title">
      <a-input>
        
      </a-input>
    </a-form-item>
    <a-form-item label="post content">
      <a-input
      >
        
      </a-input>
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary">
        Submit
      </a-button>
    </a-form-item>
    </a-form>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        
      </a-layout-footer>
    </a-layout>
  </a-layout>
  
</template>

<script>
import SmileOutlined from '@ant-design/icons-vue/SmileOutlined';

export default {
  name: 'App',
  data() {
    return {
      formLayout: 'horizontal',
    };
  },
  components: {
    SmileOutlined,
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
  width: 20%;
  padding-top: 5%;
}
#components-layout-demo-responsive .ant-layout-sider {
  background: #92b7d1;
  color: #fff;
}
</style>
