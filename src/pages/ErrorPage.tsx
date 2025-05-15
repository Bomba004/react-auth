import { clsx, Footer, motion, useNavigate, useTranslation } from "@/utils/alias";
import { ExclamationTriangleIcon, HomeIcon } from "@/utils/alias-Image-Icons";
// import "./ErrorPage.scss"; // ← ربط ملف SCSS

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
    <div className={clsx("error-page")}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="error-container"
      >
        <div className="error-card bg-glass">
          <div className="icon-wrapper">
            <ExclamationTriangleIcon className="warning-icon" />
          </div>
          <h1 className="error-title">{t(`error.${title === 'Error 404' ? 'Error_404' : 'Error_403'}`)}</h1>
          <p className="error-message">{t(`error.${message}`)}</p>
          {showHomeButton && (
            <button
              onClick={() => navigate("/dashboard")}
              className="back-button"
            >
              <HomeIcon className="back-icon" />
              {t("error.backToDashboard")}
            </button>
          )}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};
