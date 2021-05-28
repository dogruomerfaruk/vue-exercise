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
} from "ant-design-vue";
import App from "./App.vue";

const app = createApp(App);
app.config.productionTip = false;

app.use(Button);
app.use(Menu);
app.use(Table);
app.use(List);
app.use(Form);
app.use(Popconfirm);
app.use(Input);
app.use(Avatar);
app.use(Icon);
app.use(Layout);
app.mount("#app");
