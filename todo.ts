


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
git push -u origin master


**

  // Set remote repository | لربط المشروع بـ GitHub
git remote set-url origin git@github.com:Bomba004/react-auth.git







شرح كل أمر لرفع المشروع على GitHub Pages Production:

  1. هذا الأمر يستخدم لتثبيت حزمة gh-pages وإضافتها إلى مشروعك. gh-pages هي أداة تسهل نشر المشاريع على GitHub Pages.
npm install --save gh-pages
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

4. أمر npm run deploy
هذا الأمر يستخدم لتنفيذ عملية النشر على GitHub Pages.


*/





