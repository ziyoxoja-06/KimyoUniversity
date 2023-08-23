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
      { path: 'scientific-activity',  component: () => import('pages/ShortPages/BasePages.vue') },
      { path: 'institute-trade-union',  component: () => import('pages/ShortPages/BasePages.vue') },
      {path: 'scientific-council', component: () => import('pages/ShortPages/BasePages.vue')},
      {path: 'scientific-seminars', component: () => import('pages/ShortPages/BasePages.vue')},
      {path: 'scientific-grants', component: () => import('pages/ShortPages/BasePages.vue')},
      {path: 'scientific-cooperation', component: () => import('pages/ShortPages/BasePages.vue')},
      {path: 'young-scientists', component: () => import('pages/ShortPages/BasePages.vue')},
      {path: 'scientific-degrees', component: () => import('pages/ShortPages/BasePages.vue')},
      {path: 'seminar-scientific', component: () => import('pages/ShortPages/BasePages.vue')},
      {path: 'thesis-dissertations', component: () => import('pages/ShortPages/BasePages.vue')},
      {path: 'about-journal', component: () => import('pages/ShortPages/BasePages.vue')},
      {path: 'archive', component: () => import('pages/ShortPages/BasePages.vue')},
      {path: 'rules-write', component: () => import('pages/ShortPages/BasePages.vue')},
      {path: 'all-photos', component: () => import('pages/AllPhotos.vue')},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

// @ts-ignore
export default routes
