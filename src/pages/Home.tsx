import { useTranslation } from "@/utils/alias";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const version = '4.3.6';
  
  return (
  <div className="p-4">
    <h1>{t('global.home')}</h1>
    <p>{t('global.welcome') + ' ' + t('global.bomba')}</p>
    <p>{t('global.version')}: {version}</p>
  </div>
  );
};

export default Home;
