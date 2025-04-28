import { auth } from './auth';
import { navigation } from './navigation';
import dashboard from './dashboard';
import { header } from './header';
import { footer } from './footer';
import { error } from './error';

const resources = {
  global: {
    loading: 'الرجاء الانتظار...',
  },
  auth,
  navigation,
  dashboard,
  header,
  footer,
  error,
};

export default resources;
