import { auth } from './auth.ts';
import { navigation } from './navigation.ts';
import dashboard from './dashboard.ts';
import dashboard__app from './dashboard__app.ts';
import { header } from './header.ts';
import { footer } from './footer.ts';
import { components } from './components.ts';
import { error } from './error.ts';

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
  components,
  error,
};

export default resources;
