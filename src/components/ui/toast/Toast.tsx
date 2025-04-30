import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const SwalToast = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.theme === 'dark');

  const showSuccess = (message: string) => {
    Toast.fire({
      icon: 'success',
      title: message,
      background: isDarkMode ? '#1f2937' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
    });
  };

  const showError = (message: string) => {
    Toast.fire({
      icon: 'error',
      title: message,
      background: isDarkMode ? '#1f2937' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
    });
  };

  return {
    success: showSuccess,
    error: showError,
  };
};

// =====--=====--=====--=====--=====--=====--=====--=====--=====--=====--=====--=====--=====

/*  Toastify:-
  npm install --save react-toastify
  https://fkhadra.github.io/react-toastify/introduction/
  https://youtu.be/J1c3LalJ3eE
*/
import i18n from 'i18next';
import { toast, Slide, ToastContainer } from "react-toastify";
import "./Tosdt.css";

export type TToast = "success" | "error" | "info" | "warning" | "default";
export type TPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"; // موقع ظهور التوست
// تعريف Toast Layout القالب الذي يعمل بداخله Toastify
export const ToastLayout = () => <ToastContainer aria-label="Toast" />;

const htmlDir = document.documentElement.dir || 'ltr';
// تحدد موقع التوست بناءً على الاتجاه
const positionIs = (pos = 'top-right', htmlDir = 'ltr') => {
  switch (htmlDir) {
    case 'ltr': return pos === 'top-right' ? 'top-right' : 'top-left';
    case 'rtl': return pos === 'top-right' ? 'top-left' : 'top-right';
  }
}

// دالة لعرض الرسائل المنبثقة
export const showToast = (option: {message: string, type?: TToast, duration?: number}) => {
  // إنشاء toast لأول مرة مع autoClose مدته 5 ثوانٍ
  const toastId = toast(i18n.t(option.message), { type: option.type, position: positionIs('top-right', htmlDir), autoClose: false,transition: Slide });
  // تحديث toast كل 0.5 ثانية
  const interval = setInterval(() => { toast.update(toastId, { render: i18n.t(option.message), position: positionIs('top-right', htmlDir), }); }, 500);
  // إيقاف التحديث بعد 5 ثوانٍ وإغلاق الـ toast
  setTimeout(() => { clearInterval(interval); toast.dismiss(toastId); }, option.duration || 10000); // إيقاف التحديث بعد 5 ثوانٍ
};
