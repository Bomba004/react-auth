import { auth } from './auth';
import { navigation } from './navigation';
import dashboard from './dashboard';
import dashboard__app from './dashboard__app';
import { header } from './header';
import { footer } from './footer';
import { error } from './error';

const resources = {
  global: {
    home: 'Home',
    welcome: 'welcome',
    bomba: 'bomba',
    version: 'version',

    loading: 'Loading please wait...',
  },
  auth,
  navigation,
  dashboard,
  dashboard__app,
  header,
  footer,
  error,
};

export default resources;
