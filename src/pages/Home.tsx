/* p:0.1.r2
   p:3[Home]
------------------------------------------------------*/
import { useTranslation } from "@/utils/alias";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const version = '004-4.1';
  
  return (
  <div className="p-4">
    <h1>{t('global.home')}</h1>
    <p>{t('global.welcome') + ' ' + t('global.bomba')}</p>
    <p>{t('global.version')}: {version}</p>


    <div className="card">
    <bdo dir="rtl">هذا النص سيكون من اليمين لليسار</bdo>
    <bdo dir="ltr">This text will be left-to-right</bdo>
    <hr />
    <h2>تجربة تاج bdo</h2>
    <p>النص الطبيعي: مرحباً بك في موقعنا</p>
    <p><bdo dir="rtl">النص المعكوس: مرحباً بك في موقعنا</bdo></p>
    <p><bdo dir="ltr">.English text written normally</bdo></p>
    <p><bdo dir="rtl">.English text reversed</bdo></p>
    <p><bdo dir="rtl">مرحبا Hello كيف حالك؟ How are you?</bdo></p>
    <p><bdo dir="rtl">This text will appear right-to-left</bdo></p>
    </div>
  </div>
  );
};

export default Home;
