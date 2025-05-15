import { auth } from './auth';
import { navigation } from './navigation';
import dashboard from './dashboard';
import dashboard__app from './dashboard__app';
import { header } from './header';
import { footer } from './footer';
import { error } from './error';

const resources = {
  global: {
    home: 'الرئيسية',
    welcome: 'مرحباً',
    bomba: 'بومبا',
    version: 'الإصدار',

    loading: 'الرجاء الانتظار...',
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
