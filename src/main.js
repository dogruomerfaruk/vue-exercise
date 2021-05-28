import { createApp } from "vue";
import {
  Button,
  Layout,
  Icon,
  Menu,
  Avatar,
  Form,
  Input,
  Table,
  Popconfirm,
  List,
  Pagination,
  Row,
} from "ant-design-vue";
import Router from "vue-router";
import App from "./App.vue";

import router from "./router";

const app = createApp(App).use(router);
app.config.productionTip = false;
app.use(Router);
app.use(Button);
app.use(Menu);
app.use(Table);
app.use(Pagination);
app.use(List);
app.use(Row);
app.use(Form);
app.use(Popconfirm);
app.use(Input);
app.use(Avatar);
app.use(Icon);
app.use(Layout);
app.mount("#app");
