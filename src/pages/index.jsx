import { lazy } from 'react';

const lazyLoad = path => lazy(() => import(`./${path}`));

const Hello = lazyLoad('./hello/');

// const BannerManagementList = lazyLoad('managedBack/bannerManagement/list');
// const ArticleManagementList = lazyLoad('managedBack/articleManagement/list');
export default {
  Hello,
  // BannerManagementList,
  // ArticleManagementList,
}
