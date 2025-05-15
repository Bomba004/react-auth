// src/components/utils/KeyboardWatcher.tsx
import React, { useEffect } from 'react';

export const KeyboardWatcher: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // التحقق من اللغة بناءً على الحرف المضغوط
      //   const isArabic = /[\u0600-\u06FF]/.test(e.key);
      //   const inputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
      //   inputs.forEach(input => {
      //     input.style.backgroundColor = isArabic ? 'yellow' : '#ADD8E6'; // أصفر أو لبني
      //   });

      // أوامر اختصارات لوحة المفاتيح
    //   if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's') {
      if (e.shiftKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        alert('تم تنفيذ أمر الحفظ (اختصار Shift + S)');
      }

      // إضافة اختصارات أخرى إن رغبت
      // if (e.altKey && e.key === 'n') { ... }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // هذا الكومبوننت لا يعرض شيئًا، هو فقط للمراقبة
};

export default KeyboardWatcher;
