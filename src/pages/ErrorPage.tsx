import { clsx, ExclamationTriangleIcon, Footer, HomeIcon, motion, useNavigate, useTranslation } from "@/utils/alias";
import Lottie from "lottie-react";
// import { LottieHandler } from "@/components/LottieHandler";

interface ErrorPageProps {
  title?: string;
  message?: string;
  showHomeButton?: boolean;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  title = 'Error 403',
  message = 'You do not have permission to access this page',
  showHomeButton = true,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={clsx('min-h-screen p-4',
      'flex items-center justify-center',
      'bg-gradient-to-br from-white-900 via-primary-800 to-black-900',
    )}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md text-center"
      >
        {/* <Lottie animationData={notFound} className="w-1/2 mx-auto mb-6" /> */}
        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/20">
          <div className="flex justify-center mb-6">
            <ExclamationTriangleIcon className="w-16 h-16 text-warning-color" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">{t(`error.${title === 'Error 404' ? 'Error_404' : 'Error_403'}`)}</h1>
          <p className="text-white/70 mb-8">{t(`error.${message}`)}</p>
          {showHomeButton && (
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              {t('error.backToDashboard')}
            </button>
          )}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};
