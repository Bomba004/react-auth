// import reactRecommended from 'eslint-plugin-react/configs/recommended.js'; // التعامل مع ملفات -react-
/**
 * yarn add eslint --dev     // تثبيت 
 * yarn add eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y --dev      // تثبيت إضافات ESLint المطلوبة لـ React
 * "scripts": { "lint": "eslint . --report-unused-disable-directives --max-warnings 0" }    // تعديل ملف package.json
 * yarn lint
 */
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  // reactRecommended,                                                        // React plugin recommended config // التعامل مع ملفات -react-
  {
    files: ['**/*.js', '**/*.jsx'],                                           // تحديد الملفات التي يجب فحصها
    languageOptions: {
      parser: tsParser,                                                       // تحديد المتصفح
      ecmaVersion: 2021,                                                      // استخدم إصدار ECMAScript المناسب
      sourceType: 'module',                                                   // تحديد نوع المصدر ليكون وحدة (module)
      globals: {                                                              // بديل env لتعريف المتغيرات العامة
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
        es2021: true,                                                           // استخدم ES2021 أو أعلى
        es6: true,                                                              // تفعيل ميزات ES6
        node: true,                                                             // إذا كنت تستخدم Node.js
        browser: true                                                           // إذا كنت تستخدم في المتصفح
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      'spaced-comment': 'off',                                                // السماح بالتعليقات بدون مسافة بعد العلامة
      'no-console': 'off',                                                    // السماح باستخدام console.log وغيرها من طرق console
      'func-names': 'off',                                                    // السماح باستخدام دوال مجهولة بدون أسماء
      'object-shorthand': 'off',                                              // السماح بعدم استخدام الصيغ المختصرة للكائنات
      'no-process-exit': 'off',                                               // السماح باستخدام process.exit في Node.js
      'no-param-reassign': 'off',                                             // السماح بتغيير قيمة الوسائط التي تمرر للدوال
      'no-return-await': 'off',                                               // السماح باستخدام return await في الدوال غير المتزامنة
      'no-underscore-dangle': 'off',                                          // السماح باستخدام الشرطات السفلية في أسماء المتغيرات
      'class-methods-use-this': 'off',                                        // السماح بطرق (methods) لا تستخدم this داخل الكلاسات
      'no-undef': 'warn',                                                     // تحذير عند استخدام متغيرات غير معرفة
      'prefer-destructuring': ['error', { 'object': true, 'array': false }],  // فرض استخدام التدمير للكائنات فقط
      // 'import/prefer-default-export': 'off',                               // السماح بعدم استخدام التصدير الافتراضي عند وجود تصدير واحد
      // 'prettier/prettier': ['error', {                                     // فرض قواعد التنسيق الخاصة بـ Prettier
      //   'singleQuote': true,                                               // فرض استخدام علامات اقتباس مفردة
      //   'trailingComma': 'es6',                                            // فرض الفاصلة المتأخرة في صيغة ES6
      //   'bracketSpacing': true,                                            // فرض وجود مسافة بين الأقواس
      //   'jsxBracketSameLine': true                                         // فرض وجود القوس الملاصق لعنصر JSX في نفس السطر
      // }],
      'no-eval': 'error',                                                     // منع استخدام eval لتشغيل النص البرمجي
      'consistent-return': 'error',                                           // فرض إرجاع قيمة متسقة من الدوال
      'no-unused-vars': ['error', {                                           // منع المتغيرات غير المستخدمة
        'args': 'after-used',                                                 // السماح باستخدام الوسيطات بعد الاستخدام فقط
        'ignoreRestSiblings': true                                            // تجاهل الأخوة الباقين في التدمير
      }],
      'semi': ['error', 'always'],                                            // فرض الفاصلة المنقوطة في نهاية الجمل البرمجية
      'quotes': ['warn', 'single', {                                          // فرض استخدام علامات الاقتباس المفردة
        'avoidEscape': true                                                   // السماح باستخدام علامات الاقتباس المزدوجة إذا كان الهروب مطلوبًا
      }],
      'no-multi-spaces': ['error', {                                          // منع تعدد المسافات بين الكلمات
        'ignoreEOLComments': true                                             // السماح بتعدد المسافات في التعليقات بنهاية السطر
      }],
      'eqeqeq': 'error',                                                      // فرض استخدام المساواة الصارمة ===
      'curly': 'error',                                                       // فرض استخدام الأقواس المجعدة في جمل التحكم
      'no-else-return': 'error'                                               // منع استخدام else إذا تم إرجاع قيمة بالفعل في جملة if
    }
  }
];s