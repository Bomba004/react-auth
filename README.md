# نظام المصادقة والصلاحيات (BSSM Auth System)

## المتطلبات والتقنيات المستخدمة

### الواجهة الأمامية (Frontend)
- React مع TypeScript
- Redux Toolkit لإدارة الحالة
- React Router للتنقل
- React Hook Form للنماذج
- Zod للتحقق من البيانات
- Tailwind CSS للتصميم
- i18next للترجمة
- SweetAlert2 للتنبيهات
- Axios للطلبات HTTP

### الخادم (Backend)
- JSON Server لمحاكاة API

## خطوات التنفيذ

### 1. إعداد المشروع
- [x] إنشاء مشروع React مع TypeScript
- [x] تثبيت المكتبات المطلوبة
- [x] إعداد Tailwind CSS
- [x] تصحيح مشاكل التكوين

### 2. هيكل المشروع
- [ ] إنشاء مجلدات المشروع
  - `/src/components` للمكونات
  - `/src/pages` للصفحات
  - `/src/store` لـ Redux
  - `/src/services` للخدمات
  - `/src/hooks` للـ Hooks
  - `/src/types` لأنواع TypeScript
  - `/src/utils` للأدوات المساعدة
  - `/src/i18n` لملفات الترجمة
  - `/src/assets` للموارد

### 3. المهام القادمة
- [ ] إعداد متجر Redux
- [ ] إنشاء نماذج المصادقة
- [ ] إعداد خدمة JSON Server
- [ ] تنفيذ المصادقة والتسجيل
- [ ] إدارة الصلاحيات
- [ ] إعداد الترجمة
- [ ] تصميم واجهة المستخدم

## كيفية التشغيل
1. تشغيل الواجهة الأمامية: `npm run dev`
2. تشغيل JSON Server: `npm run server` (سيتم إضافته لاحقاً)

## الميزات
- تسجيل الدخول وإنشاء حساب جديد
- التحقق من صحة البيانات
- إدارة الصلاحيات
- دعم اللغتين العربية والإنجليزية
- تصميم متجاوب
- تنبيهات تفاعلية
