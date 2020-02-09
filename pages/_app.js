import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress';

import * as gtag from '../utils/ga';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = (url) => {
  NProgress.done();
  gtag.pageview(url);
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

export default App;