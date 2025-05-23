


/* GitHub:-

  // Initialize Git | تهيئة Git
git init
  // Add all files | إضافة جميع الملفات
git add .
  // Commit | تسجيل
git commit -m "commit-001"
  // Add remote repository | لربط المشروع بـ GitHub
git remote add origin git@github.com:Bomba004/react-auth.git
  // Check remote repositories | عرض المواقع البعيدة
git remote -v
  // Push to remote repository | إرسال إلى المواقع البعيدة
git push -u origin main


**

  // Set remote repository | لربط المشروع بـ GitHub
git remote set-url origin git@github.com:Bomba004/react-auth.git

  // Check branches | عرض الفروع
git branch
  // Create main branch | إنشاء فرع main
git branch main
  // Switch to main branch | التحويل إلى فرع main
git checkout main | git switch main
  // Merge master branch | دمج فرع master إلى main | إلي الفرع الحالي
git merge master | git merge master --allow-unrelated-histories
  // Delete master branch | حذف فرع master
git branch -D master
  // Push changes to remote repository | إرسال التغييرات إلى المواقع البعيدة
git push -u origin main







شرح كل أمر لرفع المشروع على GitHub Pages Production:

  1. هذا الأمر يستخدم لتثبيت حزمة gh-pages وإضافتها إلى مشروعك. gh-pages هي أداة تسهل نشر المشاريع على GitHub Pages.
npm uninstall gh-pages
npm install gh-pages --save-dev
  : يقوم بتثبيت الحزمة.
npm install
  --save: يضيف الحزمة إلى قائمة التبعيات في ملف
package.json.

  2.تُستخدم لتحديد عنوان URL الخاص بموقعك على GitHub Pages. يقوم React باستخدام هذه الخاصية لتحديد المسارات النسبية بشكل صحيح عند البناء.
"homepage": "https://yourusername.github.io/reposi...."
  : قسم "scripts": {...} يحتوي على الأوامر المختلفة التي يمكن تشغيلها باستخدام npm. توضح هذه الأوامر ما يلي:
    : أمر يتم تنفيذه قبل الأمر deploy. يقوم ببناء المشروع وتجهيزه للنشر.
  "predeploy": "npm run build"
    : ينشر الملفات في مجلد build إلى فرع gh-pages على GitHub.
  "deploy": "gh-pages -d build"

4. هذا الأمر يستخدم لتنفيذ عملية النشر على GitHub Pages.
rm -rf dist  # في Windows استخدم `rmdir /s /q dist`
npm run build
npm run deploy


** Extensions:
1) تسجيل الملفات في Redux DevTools
  npm install --save-dev redux-devtools-extension     ||    yarn add -D redux-devtools-extension
  

- مكتبة lottiefiles : مكتبة مختلطة متخصصة لعرض الرسوم المتحركة في المواقع, UIL(https://lottiefiles.com/).
  npm install lottie-react



*/





