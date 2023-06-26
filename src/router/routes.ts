import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage/HomePage.vue') },
      { path: 'news', component: () => import('pages/AllCard.vue') },
      { path: 'all-news', component: () => import('pages/AllCard.vue') },
      { path: 'news/:id', component: () => import('pages/DetailNews.vue') },
      { path: 'structure', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'managment', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'directors', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'seismodinamic', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'dynamic', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'experimental', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'mechanic', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'modeling', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'theory', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'prosses', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'gas', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'info-analitical', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'info-resurse-center', component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'unique-project',  component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'personnel-inspector',  component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'admin-economic',  component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'course-dsc',  component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'course-phd',  component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'course-ind',  component: () => import('pages/ShortPages/BasePages.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
