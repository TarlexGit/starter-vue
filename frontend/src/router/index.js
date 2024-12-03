import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import ContentLayout from "../layouts/ContentLayout.vue";
import ContentView from "../views/ContentView.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
    ],
  },
  {
    path: "/login",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "login",
        component: LoginView,
      },
    ],
  },
  {
    path: "/content",
    component: ContentLayout,
    children: [
      {
        path: "/one",
        name: "content",
        component: ContentView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// router/index.js
// import { createRouter, createWebHistory } from 'vue-router';
// import DefaultLayout from '../layouts/DefaultLayout.vue';
// import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';
// import SettingsView from '../views/SettingsView.vue';
// import SettingsProfileView from '../views/SettingsProfileView.vue';

// const routes = [
//   {
//     path: '/',
//     component: DefaultLayout,
//     children: [
//       {
//         path: '',
//         name: 'home',
//         component: HomeView,
//       },
//       {
//         path: 'about',
//         name: 'about',
//         component: AboutView,
//       },
//       {
//         path: 'settings',
//         name: 'settings',
//         component: SettingsView,
//         children: [
//           {
//             path: '',
//             name: 'settings-profile',
//             component: SettingsProfileView,
//           },
//           // Добавьте другие дочерние маршруты здесь
//         ],
//       },
//     ],
//   },
//   // Добавьте другие маршруты здесь
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
