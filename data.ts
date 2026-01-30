import { CourseData, SectionType } from './types';

export const courseData: CourseData = {
  summary: [
    {
      id: "basics",
      title: "1. أساسيات الحاسوب والمفاهيم العامة",
      type: SectionType.GRID,
      icon: "fa-microchip",
      content: [
        { title: "وحدة النظام", text: "اللوحة الأم (Motherboard) هي القاعدة الأساسية التي تربط كافة القطع وتعرف نظام التشغيل عليها." },
        { title: "البيانات vs المعلومات", text: "البيانات هي حقائق خام. المعلومات هي بيانات تمت معالجتها. البرمجيات هي تعليمات توجه الحاسوب." },
        { title: "الحواسيب المركزية", text: "تستخدم في الشركات الكبرى، تعتمد على المعالجات المركزية، ولا تستخدم لإدارة الشبكات الصغيرة." },
        { title: "المكونات", text: "Hardware: الجزء الملموس (كهربي/ميكانيكي). Software: أنظمة التشغيل والبرامج." }
      ]
    },
    {
      id: "storage",
      title: "2. وحدات القياس والتخزين",
      type: SectionType.TIMELINE,
      icon: "fa-database",
      content: [
        { label: "Bit (بت)", detail: "أصغر وحدة قياس" },
        { label: "Byte (بايت)", detail: "أصغر وحدة تخزين فعلية" },
        { label: "Kilobyte (KB)", detail: "1024 Bytes" },
        { label: "Megabyte (MB)", detail: "1024 KB" },
        { label: "Gigabyte (GB)", detail: "1024 MB" },
        { label: "Terabyte (TB)", detail: "1024 GB" },
        { label: "Petabyte (PB)", detail: "1024 TB" },
        { label: "Exabyte (EB)", detail: "1024 PB" },
        { label: "Zettabyte (ZB)", detail: "1024 EB" },
        { label: "Yottabyte (YB)", detail: "1024 ZB" }
      ]
    },
    {
      id: "internal",
      title: "3. مكونات الحاسوب الداخلية",
      type: SectionType.COMPARISON,
      icon: "fa-memory",
      content: {
        leftTitle: "المعالج (CPU)",
        leftItems: [
          "عقل الحاسوب",
          "يتكون من: ALU (حساب ومنطق) و CU (تحكم)",
          "السرعة: MHz أو GHz",
          "يستخدم Cache Memory لزيادة السرعة"
        ],
        rightTitle: "الذاكرة (Memory)",
        rightItems: [
          "RAM: عشوائية، مؤقتة، تفقد البيانات بانقطاع الكهرباء",
          "ROM: قراءة فقط، دائمة، تحتوي على BIOS"
        ]
      }
    },
    {
      id: "io",
      title: "4. وحدات الإدخال والإخراج",
      type: SectionType.GRID,
      icon: "fa-keyboard",
      content: [
        { title: "وحدات الإدخال", text: "الفأرة، لوحة المفاتيح، الميكروفون، الماسح الضوئي (Scanner)." },
        { title: "وحدات الإخراج", text: "الشاشة، الطابعات، السماعات." },
        { title: "تنبيه هام", text: "الماسح الضوئي = إدخال. الطابعة = إخراج." }
      ]
    },
    {
      id: "os",
      title: "5. أنظمة التشغيل",
      type: SectionType.LIST,
      icon: "fa-window-maximize",
      content: [
        "وظيفتها: الوسيط بين المستخدم والحاسوب.",
        "Windows: الأكثر شيوعاً، يعتمد على النوافذ (GUI).",
        "Linux: مفتوح المصدر، للسيرفرات والشبكات، يدعم النوافذ.",
        "Unix: للسيرفرات والشبكات، يعتمد غالباً على الأوامر (Command Line)."
      ]
    },
    {
      id: "ms_word",
      title: "6. مايكروسوفت وورد (Word)",
      type: SectionType.GRID,
      icon: "fa-file-word",
      content: [
        { title: "الوظيفة الأساسية", text: "معالجة النصوص وتنسيق المستندات والتقارير الأكاديمية والمراسلات." },
        { title: "أهم الميزات", text: "التدقيق الإملائي والنحوي، دمج المراسلات (Mail Merge)، الجداول، والرؤوس والتذييلات." },
        { title: "الواجهة", text: "يعتمد على نظام 'الشريط' (Ribbon) الذي يحتوي تبويبات مثل: ملف، الصفحة الرئيسية، إدراج، تخطيط." },
        { title: "امتداد الملفات", text: "الامتداد الافتراضي هو .docx (الإصدارات الحديثة) أو .doc (القديمة)." }
      ]
    },
    {
      id: "ms_excel",
      title: "7. مايكروسوفت إكسل (Excel)",
      type: SectionType.COMPARISON,
      icon: "fa-file-excel",
      content: {
        leftTitle: "البنية الأساسية",
        leftItems: [
          "مصنف (Workbook) يحتوي على أوراق عمل (Worksheets)",
          "الخلية (Cell) هي تقاطع الصف مع العمود",
          "تسمية الخلايا: حرف العمود + رقم الصف (مثل A1)"
        ],
        rightTitle: "الوظائف والميزات",
        rightItems: [
          "إجراء العمليات الحسابية المعقدة (الدوال)",
          "تحليل البيانات والمخططات البيانية (Charts)",
          "الفرز (Sorting) والتصفية (Filtering)"
        ]
      }
    },
    {
      id: "ms_powerpoint",
      title: "8. مايكروسوفت باوربوينت (PowerPoint)",
      type: SectionType.LIST,
      icon: "fa-file-powerpoint",
      content: [
        "برنامج العروض التقديمية: يستخدم لإنشاء شرائح (Slides) للعرض أمام الجمهور.",
        "الحركات (Animations): تأثيرات بصرية تطبق على العناصر داخل الشريحة.",
        "الانتقالات (Transitions): تأثيرات بصرية عند الانتقال من شريحة لأخرى.",
        "طريقة العرض: F5 لبدء العرض من البداية، أو Shift+F5 من الشريحة الحالية."
      ]
    },
    {
      id: "ms_access",
      title: "9. مايكروسوفت أكسس (Access)",
      type: SectionType.GRID,
      icon: "fa-database",
      content: [
        { title: "الهدف", text: "إدارة قواعد البيانات العلائقية (RDBMS)." },
        { title: "الجداول (Tables)", text: "مكان تخزين البيانات الأساسي." },
        { title: "الاستعلامات (Queries)", text: "البحث عن بيانات محددة واسترجاعها وفق شروط." },
        { title: "النماذج والتقارير", text: "النماذج (Forms) للإدخال، والتقارير (Reports) للطباعة والعرض." }
      ]
    }
  ],
  shortcutsLibraries: [
    {
      id: "windows",
      title: "نظام التشغيل Windows",
      icon: "fa-brands fa-windows",
      description: "اختصارات إدارة النظام والملفات والنوافذ",
      shortcuts: [
        { key: "Ctrl + C", action: "نسخ (Copy)" },
        { key: "Ctrl + X", action: "قص (Cut)" },
        { key: "Ctrl + V", action: "لصق (Paste)" },
        { key: "Ctrl + Z", action: "تراجع (Undo)" },
        { key: "Ctrl + Y", action: "إعادة (Redo)" },
        { key: "Ctrl + A", action: "تحديد الكل (Select All)" },
        { key: "Delete", action: "حذف إلى سلة المهملات" },
        { key: "Shift + Delete", action: "حذف نهائي (دون سلة)" },
        { key: "Alt + Shift", action: "تغيير لغة الكتابة" },
        { key: "Alt + Tab", action: "التنقل بين النوافذ المفتوحة" },
        { key: "Windows + D", action: "إظهار/إخفاء سطح المكتب" },
        { key: "Windows + E", action: "فتح مستكشف الملفات" },
        { key: "Windows + L", action: "قفل الشاشة (Lock)" },
        { key: "F2", action: "إعادة تسمية الملف المحدد" },
        { key: "F5", action: "تحديث النافذة (Refresh)" },
        { key: "Alt + F4", action: "إغلاق النافذة النشطة أو إيقاف التشغيل" },
        { key: "Ctrl + Shift + Esc", action: "فتح مدير المهام مباشرة" },
        { key: "Print Screen", action: "تصوير الشاشة" }
      ]
    },
    {
      id: "word",
      title: "مايكروسوفت وورد (Word)",
      icon: "fa-solid fa-file-word",
      description: "اختصارات تحرير النصوص والتنسيق",
      shortcuts: [
        { key: "Ctrl + N", action: "فتح مستند جديد" },
        { key: "Ctrl + O", action: "فتح مستند موجود" },
        { key: "Ctrl + S", action: "حفظ المستند" },
        { key: "F12", action: "حفظ باسم (Save As)" },
        { key: "Ctrl + P", action: "طباعة" },
        { key: "Ctrl + B", action: "تغميق الخط (Bold)" },
        { key: "Ctrl + I", action: "إمالة الخط (Italic)" },
        { key: "Ctrl + U", action: "تسطير (Underline)" },
        { key: "Ctrl + ]", action: "تكبير حجم الخط" },
        { key: "Ctrl + [", action: "تصغير حجم الخط" },
        { key: "Ctrl + L", action: "محاذاة النص لليسار" },
        { key: "Ctrl + R", action: "محاذاة النص لليمين" },
        { key: "Ctrl + E", action: "توسيط النص" },
        { key: "Ctrl + J", action: "ضبط النص (Justify)" },
        { key: "Ctrl + F", action: "بحث" },
        { key: "Ctrl + H", action: "استبدال" },
        { key: "Ctrl + K", action: "إدراج رابط تشعبي" },
        { key: "Ctrl + Enter", action: "إدراج فاصل صفحات" }
      ]
    },
    {
      id: "excel",
      title: "مايكروسوفت إكسل (Excel)",
      icon: "fa-solid fa-file-excel",
      description: "اختصارات الجداول والخلايا",
      shortcuts: [
        { key: "Shift + Space", action: "تحديد الصف بالكامل" },
        { key: "Ctrl + Space", action: "تحديد العمود بالكامل" },
        { key: "Ctrl + ;", action: "إدراج التاريخ الحالي" },
        { key: "Ctrl + Shift + :", action: "إدراج الوقت الحالي" },
        { key: "F2", action: "تعديل محتوى الخلية النشطة" },
        { key: "Alt + =", action: "جمع تلقائي (AutoSum)" },
        { key: "Ctrl + Page Up", action: "الانتقال للورقة السابقة" },
        { key: "Ctrl + Page Down", action: "الانتقال للورقة التالية" },
        { key: "Ctrl + 1", action: "فتح مربع تنسيق الخلايا" },
        { key: "Ctrl + Arrow Keys", action: "الانتقال لأخر البيانات في الاتجاه" }
      ]
    },
    {
      id: "powerpoint",
      title: "مايكروسوفت باوربوينت",
      icon: "fa-solid fa-file-powerpoint",
      description: "اختصارات العروض التقديمية",
      shortcuts: [
        { key: "F5", action: "بدء العرض من الشريحة الأولى" },
        { key: "Shift + F5", action: "بدء العرض من الشريحة الحالية" },
        { key: "Esc", action: "إنهاء العرض" },
        { key: "Ctrl + M", action: "إدراج شريحة جديدة" },
        { key: "Ctrl + D", action: "تكرار الشريحة أو العنصر المحدد" },
        { key: "G", action: "تجميع العناصر (Group) - مع Ctrl" }
      ]
    }
  ],
  exams: [
    {
      id: 1,
      title: "النموذج رقم (1): الاختبار الأصلي",
      description: "محاكاة لأسئلة بنك الأسئلة المرفق (45 سؤال).",
      questions: [
        { id: 1, icon: "fa-microchip", text: "تعد القاعدة الأساسية لوحدة النظام حيث يتم ربط كافة قطع الحاسوب ببعضها وتعريف نظام التشغيل عليها:", options: ["وحدة المعالجة", "الذاكرة الرئيسية", "اللوحة الأم", "لا يوجد إجابة صحيحة"], correctIndex: 2 },
        { id: 2, icon: "fa-code", text: "هي عبارة عن برامج أو أوامر تنتج استجابة لطلبات المستخدم:", options: ["البيانات", "المعلومات", "التعليمات", "لا شيء مما ذكر"], correctIndex: 2 },
        { id: 3, icon: "fa-server", text: "تستخدم الحواسيب المركزية في أغلب الشركات الكبرى ولا تستخدم في إدارة الشبكات وتعتمد فكرة عملها على المعالجات المركزية:", options: ["الإجابة صحيحة", "الإجابة خاطئة"], correctIndex: 0 },
        { id: 4, icon: "fa-database", text: "1ZB يساوي:", options: ["1024 MB", "1024 GB", "1024 EB", "1024 TB"], correctIndex: 2 },
        { id: 5, icon: "fa-keyboard", text: "لحفظ الملفات باسم يستخدم الاختصار:", options: ["F9", "F12", "F11", "F4"], correctIndex: 1 },
        { id: 6, icon: "fa-desktop", text: "أنظمة التشغيل تعد الوسيط بين المستخدم وأجهزة الحواسيب:", options: ["الإجابة صحيحة", "الإجابة خاطئة"], correctIndex: 0 },
        { id: 7, icon: "fa-print", text: "أي مما يلي يعتبر من وحدات الإخراج:", options: ["الكاميرا", "الميكروفون", "الماسح الضوئي", "الطابعات"], correctIndex: 3 },
        { id: 8, icon: "fa-microchip", text: "وحدة الحساب والمنطق ووحدة التحكم من مكونات:", options: ["وحدة المعالجة", "وحدة الإخراج", "وحدة التخزين", "جميع الإجابات خاطئة"], correctIndex: 0 },
        { id: 9, icon: "fa-mouse", text: "إحدى الأجهزة الآتية لا يعتبر وحدة إدخال:", options: ["الفأرة", "السماعات", "الميكروفون", "الماسح الضوئي"], correctIndex: 1 },
        { id: 10, icon: "fa-desktop", text: "يطلق على الشاشة الرئيسية التي تظهر بعد تسجيل الدخول إلى نظام Windows:", options: ["شاشة التأمين", "الشاشة الفرعية", "سطح المكتب", "جميع الإجابات صحيحة"], correctIndex: 2 },
        { id: 11, icon: "fa-keyboard", text: "نستخدم الاختصار Ctrl+V لـ:", options: ["لصق الملفات", "نسخ الملفات", "قص الملفات", "تراجع"], correctIndex: 0 },
        { id: 12, icon: "fa-layer-group", text: "أحد الأجزاء الآتية ليس من مكونات سطح المكتب:", options: ["الأيقونات", "شريط المهام", "قائمة البدء", "لا توجد إجابة صحيحة"], correctIndex: 3, explanation: "جميع الخيارات المذكورة هي فعلاً من مكونات سطح المكتب." },
        { id: 13, icon: "fa-calculator", text: "لإيجاد أقل قيمة نستخدم دالة:", options: ["MAX", "AVERAGE", "MIN", "SUM"], correctIndex: 2 },
        { id: 14, icon: "fa-memory", text: "تتوفر هذه الذاكرة مع المعالجات الحديثة بهدف زيادة سرعة المعالج:", options: ["Cache Memory", "Flash", "RAM", "ROM"], correctIndex: 0 },
        { id: 15, icon: "fa-terminal", text: "يستخدم هذا النظام مع حواسيب السيرفرات لإدارة الشبكات حيث يعتمد في تعامله مع كتابة الأوامر:", options: ["نظام التشغيل يونكس", "نظام التشغيل Windows", "نظام التشغيل MAC", "نظام التشغيل لينكس"], correctIndex: 0 },
        { id: 16, icon: "fa-memory", text: "ذاكرة الوصول العشوائي (RAM) تستخدم كـ:", options: ["وحدة تخزين ثانوية", "وحدة تخزين رئيسية", "وحدة تحكم", "جميع الإجابات صحيحة"], correctIndex: 1 },
        { id: 17, icon: "fa-floppy-disk", text: "الاختصار Ctrl+S يستخدم لـ:", options: ["فتح ملف", "حفظ الملف", "جديد", "لصق"], correctIndex: 1 },
        { id: 18, icon: "fa-memory", text: "هي ذاكرة القراءة فقط:", options: ["Hard Disk", "Flash", "RAM", "ROM"], correctIndex: 3 },
        { id: 19, icon: "fa-print", text: "الماسح الضوئي يعتبر من وحدات:", options: ["الخزن", "الإخراج", "الإدخال", "المعالجة"], correctIndex: 2 },
        { id: 20, icon: "fa-bolt", text: "يحتاج إلى تيار كهربائي للاحتفاظ بالبيانات المؤقتة:", options: ["RAM", "CD", "Hard Disk", "Flash Disk"], correctIndex: 0 },
        { id: 21, icon: "fa-table", text: "هو عبارة عن عنوان الخلية بغض النظر عن موقع الخلية التي تحتوي على المعادلة:", options: ["المرجع النسبي", "المرجع المطلق", "المرجع المختلط", "لا توجد إجابة صحيحة"], correctIndex: 1 },
        { id: 22, icon: "fa-table", text: "هو عبارة عن عنوان الخلية بالنسبة لموقع المعادلة:", options: ["المرجع النسبي", "المرجع المطلق", "المرجع المختلط", "لا توجد إجابة صحيحة"], correctIndex: 0 },
        { id: 23, icon: "fa-network-wired", text: "من مميزات الحاسب الآلي الاتصالات الشبكية:", options: ["الإجابة صحيحة", "الإجابة خاطئة"], correctIndex: 0 },
        { id: 24, icon: "fa-code", text: "تعتبر المصدر الرئيسي لإنتاج وتطوير البرامج والتطبيقات المختلفة:", options: ["أنظمة التشغيل", "لغات البرمجة", "البرامج التطبيقية", "البرامج الخدمية"], correctIndex: 1 },
        { id: 25, icon: "fa-microchip", text: "المكونات المادية هي الجزء الملموس في الحواسيب التي تتكون من مجموعة من المكونات الكهربائية والإلكترونية:", options: ["الإجابة صحيحة", "الإجابة خاطئة"], correctIndex: 0 },
        { id: 26, icon: "fa-gauge-high", text: "تقاس سرعة المعالج بالميجا والجيجا هرتز:", options: ["الإجابة صحيحة", "الإجابة خاطئة"], correctIndex: 0 },
        { id: 27, icon: "fa-desktop", text: "في نظام ويندوز 10 يمكن تغيير خلفية سطح المكتب بالنقر باليمين ثم نختار:", options: ["تخصيص", "خصائص", "إعدادات", "إعدادات العرض"], correctIndex: 0 },
        { id: 28, icon: "fa-calculator", text: "لإيجاد المجموع تستخدم دالة:", options: ["MAX", "AVERAGE", "MIN", "SUM"], correctIndex: 3 },
        { id: 29, icon: "fa-plug", text: "الموصل هو عبارة عن سلك أو كابل يتم توصيله بالمنفذ:", options: ["الإجابة صحيحة", "الإجابة خاطئة"], correctIndex: 0 },
        { id: 30, icon: "fa-compact-disc", text: "لا يعتبر من مكونات الحاسب البرمجية (Software):", options: ["البرامج التطبيقية", "لغات البرمجة", "نظام Windows", "لا توجد إجابة صحيحة"], correctIndex: 3, explanation: "جميع ما ذكر هو برمجيات." },
        { id: 31, icon: "fa-microchip", text: "يعتبر من مكونات الحاسب المادية (Hardware):", options: ["برنامج الدفتر", "وحدة المعالجة", "نظام Bios", "نظام التشغيل"], correctIndex: 1 },
        { id: 32, icon: "fa-align-left", text: "لمحاذاة النص إلى اليسار نستخدم الاختصار التالي:", options: ["Ctrl+R", "Ctrl+L", "Ctrl+E", "Ctrl+J"], correctIndex: 1 },
        { id: 33, icon: "fa-brain", text: "هي أهم وحدة في المكونات المادية وتعد بمثابة الدماغ أو العقل لجهاز الحاسوب:", options: ["الذاكرة الرئيسية", "وحدة المعالجة", "اللوحة الأم", "جميع الإجابات صحيحة"], correctIndex: 1 },
        { id: 34, icon: "fa-database", text: "يعد أصغر وحدة لتخزين البيانات في ذاكرة الحاسب:", options: ["الجيجابايت", "الميجابايت", "البايت", "الكيلوبايت"], correctIndex: 2 },
        { id: 35, icon: "fa-memory", text: "هي الوحدة التي يتم فيها التخزين المؤقت للبيانات والتعليمات الداخلة عن طريق وحدات الإدخال:", options: ["الذاكرة الرئيسية", "وحدة المعالجة", "اللوحة الأم", "جميع الإجابات صحيحة"], correctIndex: 0 },
        { id: 36, icon: "fa-file-excel", text: "أحد البرامج الآتية يستخدم لإجراء الحسابات المالية:", options: ["الوورد", "الباوربوينت", "الاكسل", "الاكسس"], correctIndex: 2 },
        { id: 37, icon: "fa-database", text: "1024 جيجا بايت هي عبارة عن:", options: ["بيتا بايت", "زيتا بايت", "تيرا بايت", "يوتابايت"], correctIndex: 2 },
        { id: 38, icon: "fa-print", text: "تستخدم وحدات الإخراج من أجل:", options: ["إرسال البيانات", "عرض المعلومات والنتائج المطلوبة", "نقل البيانات", "التحكم بالطابعة"], correctIndex: 1 },
        { id: 39, icon: "fa-language", text: "لتحويل اللغة من عربي إلى إنجليزي يتم استخدام الاختصار Alt+Shift:", options: ["الإجابة صحيحة", "الإجابة خاطئة"], correctIndex: 0 },
        { id: 40, icon: "fa-trash", text: "لحذف الملفات والمجلدات نهائياً نستخدم الاختصار:", options: ["Delete", "Shift+Delete", "Ctrl+D", "Alt+D"], correctIndex: 1 },
        { id: 41, icon: "fa-keyboard", text: "وحدات الإدخال هي عبارة عن الأجهزة التي يتم عبرها إدخال البيانات والتعليمات إلى جهاز الحاسوب:", options: ["الإجابة صحيحة", "الإجابة خاطئة"], correctIndex: 0 },
        { id: 42, icon: "fa-print", text: "يستخدم الاختصار Ctrl + P للطباعة:", options: ["الإجابة صحيحة", "الإجابة خاطئة"], correctIndex: 0 },
        { id: 43, icon: "fa-server", text: "يستخدم هذا النظام مع حواسيب السيرفرات لإدارة الشبكات حيث يعتمد في تعامله مع النوافذ:", options: ["يونكس", "Windows", "MAC", "لينكس"], correctIndex: 3, explanation: "وفقاً للمقرر، لينكس يستخدم للنوافذ والسيرفرات في هذا السياق." },
        { id: 44, icon: "fa-window-restore", text: "للتنقل بين النوافذ المفتوحة نستخدم الاختصار التالي:", options: ["Alt+Tab", "Shift+Alt", "Windows+E", "Alt+Enter"], correctIndex: 0 },
        { id: 45, icon: "fa-hard-drive", text: "التخزين هي عملية الاحتفاظ بالبيانات والمعلومات لاستخدامها وقت الحاجة:", options: ["الإجابة صحيحة", "الإجابة خاطئة"], correctIndex: 0 }
      ]
    },
    {
      id: 2,
      title: "النموذج رقم (2): الاختبار المقترح (الذكي)",
      description: "أسئلة ذكية لقياس الفهم العميق للمادة (45 سؤال).",
      questions: [
        { id: 1, icon: "fa-arrow-up-right-dots", text: "أي من المعادلات التالية تمثل الترتيب الصحيح لوحدات التخزين من الأصغر للأكبر؟", options: ["Bit < Byte < MB < KB", "Byte < KB < GB < MB", "Bit < Byte < KB < MB", "KB < MB < TB < GB"], correctIndex: 2 },
        { id: 2, icon: "fa-bolt", text: "عند انقطاع التيار الكهربائي فجأة، أي من المكونات التالية ستفقد محتوياتها فوراً؟", options: ["القرص الصلب (Hard Disk)", "ذاكرة ROM", "ذاكرة RAM", "الفلاش ميموري"], correctIndex: 2 },
        { id: 3, icon: "fa-floppy-disk", text: "إذا أردت استدعاء نافذة 'حفظ باسم' (Save As) مباشرة دون الذهاب لقائمة ملف، تضغط:", options: ["Ctrl + S", "F12", "Alt + S", "Ctrl + F12"], correctIndex: 1 },
        { id: 4, icon: "fa-microchip", text: "ما هو المكون المسؤول عن القيام بالعمليات الحسابية والمنطقية داخل المعالج؟", options: ["وحدة التحكم (CU)", "المسجلات (Registers)", "وحدة الحساب والمنطق (ALU)", "الناقل (Bus)"], correctIndex: 2 },
        { id: 5, icon: "fa-scissors", text: "أي من الاختصارات التالية يستخدم لـ 'قص' ملف لنقله لمكان آخر؟", options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"], correctIndex: 2 },
        { id: 6, icon: "fa-linux", text: "نظام التشغيل Linux يتميز عن Unix بأنه في بعض إصداراته:", options: ["لا يستخدم في السيرفرات", "يعتمد واجهة النوافذ (GUI)", "مخصص فقط لأجهزة Apple", "لا يدعم الشبكات"], correctIndex: 1 },
        { id: 7, icon: "fa-calculator", text: "ناتج المعادلة =SUM(10, 20, 5) في إكسل هو:", options: ["25", "30", "35", "خطأ في الصيغة"], correctIndex: 2 },
        { id: 8, icon: "fa-tablet-screen-button", text: "أي من الأجهزة التالية يعتبر وحدة 'إدخال وإخراج' في نفس الوقت؟", options: ["الشاشة العادية", "شاشة اللمس (Touch Screen)", "الطابعة", "السماعات"], correctIndex: 1 },
        { id: 9, icon: "fa-code", text: "المصطلح 'Software' يشير إلى:", options: ["الشاشة ولوحة المفاتيح", "الأجزاء الملموسة", "التعليمات والبرامج غير الملموسة", "وحدات التخزين"], correctIndex: 2 },
        { id: 10, icon: "fa-server", text: "القيمة 1024 تيرا بايت (TB) تساوي:", options: ["1 جيجا بايت", "1 بيتا بايت (PB)", "1 إكسابايت (EB)", "1 زيتا بايت (ZB)"], correctIndex: 1 },
        { id: 11, icon: "fa-binary", text: "لغة الآلة (Machine Language) هي اللغة الوحيدة التي يفهمها:", options: ["المبرمج", "نظام التشغيل", "وحدة المعالجة المركزية (Hardware) مباشرة", "برنامج الوورد"], correctIndex: 2 },
        { id: 12, icon: "fa-rotate-left", text: "الاختصار Ctrl + Z يستخدم لـ:", options: ["التراجع عن آخر إجراء", "تكرار آخر إجراء", "القص", "الحفظ"], correctIndex: 0 },
        { id: 13, icon: "fa-table", text: "أي مما يلي يعد مثالاً على 'المرجع المطلق' في Excel؟", options: ["A1", "$A$1", "A$1", "$A1"], correctIndex: 1 },
        { id: 14, icon: "fa-traffic-light", text: "وظيفة وحدة التحكم (Control Unit) هي:", options: ["تخزين البيانات", "إجراء العمليات الحسابية", "الإشراف وتوجيه تدفق البيانات والتعليمات", "عرض النتائج"], correctIndex: 2 },
        { id: 15, icon: "fa-trash-can", text: "لحذف ملف بحيث ينتقل إلى 'سلة المحذوفات' (يمكن استعادته)، نضغط:", options: ["Shift + Delete", "Delete", "Alt + Delete", "Ctrl + Delete"], correctIndex: 1 },
        { id: 16, icon: "fa-print", text: "يعتبر 'الماسح الضوئي' عكس وظيفة:", options: ["الفأرة", "الطابعة", "الشاشة", "لوحة المفاتيح"], correctIndex: 1 },
        { id: 17, icon: "fa-memory", text: "الكاش ميموري (Cache Memory) تقع عادة بين:", options: ["الرام والقرص الصلب", "المعالج والذاكرة الرئيسية (RAM)", "الشاشة وكرت الشاشة", "الكيبورد والمعالج"], correctIndex: 1 },
        { id: 18, icon: "fa-apple", text: "نظام التشغيل الذي تنتجه شركة Apple هو:", options: ["Windows", "Linux", "Unix", "Mac OS"], correctIndex: 3 },
        { id: 19, icon: "fa-microchip", text: "الوحدة التي لا تفقد بياناتها عند إغلاق الحاسوب وتستخدم لتشغيل النظام في بدايته (BIOS):", options: ["RAM", "Cache", "ROM", "Registers"], correctIndex: 2 },
        { id: 20, icon: "fa-window-restore", text: "أي مما يلي يعتبر برنامجاً تطبيقياً (Application Software)؟", options: ["Windows 10", "Linux", "Microsoft Word", "Unix"], correctIndex: 2 },
        { id: 21, icon: "fa-align-left", text: "لمحاذاة النص لليسار نستخدم:", options: ["Ctrl + R", "Ctrl + E", "Ctrl + L", "Ctrl + J"], correctIndex: 2 },
        { id: 22, icon: "fa-ruler", text: "1 بايت يساوي:", options: ["8 بت", "4 بت", "16 بت", "1024 بت"], correctIndex: 0 },
        { id: 23, icon: "fa-code", text: "لغة البرمجة هي الوسيلة لـ:", options: ["تصنيع الأجهزة", "كتابة التعليمات والأوامر للحاسوب", "تنظيف الجهاز", "طباعة الأوراق"], correctIndex: 1 },
        { id: 24, icon: "fa-sort", text: "عند النقر بزر الماوس الأيمن على سطح المكتب واختيار 'فرز حسب' (Sort by)، فإننا نتحكم بـ:", options: ["خلفية الشاشة", "ترتيب الأيقونات", "دقة الشاشة", "شريط المهام"], correctIndex: 1 },
        { id: 25, icon: "fa-calculator", text: "الدالة التي تحسب المتوسط الحسابي للقيم:", options: ["SUM", "COUNT", "AVERAGE", "MAX"], correctIndex: 2 },
        { id: 26, icon: "fa-memory", text: "أي مما يلي لا يعد من خصائص الذاكرة الرئيسية (RAM)؟", options: ["سريعة", "مؤقتة", "تحتفظ بالبيانات للأبد", "إلكترونية"], correctIndex: 2 },
        { id: 27, icon: "fa-microchip", text: "الجزء المسؤول عن تنفيذ تعليمات نظام التشغيل وتطبيقاته هو:", options: ["القرص الصلب", "وحدة المعالجة المركزية (CPU)", "الطابعة", "الكيبورد"], correctIndex: 1 },
        { id: 28, icon: "fa-language", text: "الاختصار Alt + Shift يستخدم عادة لـ:", options: ["إغلاق النافذة", "التنقل بين النوافذ", "تبديل لغة الكتابة", "فتح قائمة ابدأ"], correctIndex: 2 },
        { id: 29, icon: "fa-microphone", text: "يعتبر الميكروفون وحدة:", options: ["إخراج", "إدخال", "معالجة", "تخزين"], correctIndex: 1 },
        { id: 30, icon: "fa-1", text: "نظام العد المستخدم داخل الحاسوب (لغة الآلة) هو النظام:", options: ["العشري", "الثنائي (Binary)", "الثماني", "السادس عشري"], correctIndex: 1 },
        { id: 31, icon: "fa-bolt", text: "الذاكرة الأسرع من بين الخيارات التالية هي:", options: ["القرص الصلب", "الذاكرة العشوائية RAM", "الذاكرة المخبأة (Cache)", "القرص المرن"], correctIndex: 2 },
        { id: 32, icon: "fa-window-maximize", text: "في نظام Windows، الشريط الموجود أسفل الشاشة ويحتوي على زر ابدأ والساعة يسمى:", options: ["شريط العنوان", "شريط القوائم", "شريط المهام (Taskbar)", "شريط التمرير"], correctIndex: 2 },
        { id: 33, icon: "fa-file-excel", text: "أي الامتدادات التالية يخص ملفات Excel؟", options: [".docx", ".xlsx", ".jpg", ".mp3"], correctIndex: 1 },
        { id: 34, icon: "fa-align-center", text: "لعمل 'توسيط' للنص (Center) نستخدم الاختصار:", options: ["Ctrl + C", "Ctrl + E", "Ctrl + M", "Ctrl + R"], correctIndex: 1 },
        { id: 35, icon: "fa-diagram-project", text: "ما هي العلاقة بين البيانات والمعلومات؟", options: ["البيانات هي ناتج معالجة المعلومات", "المعلومات هي بيانات تمت معالجتها", "لا توجد علاقة", "هما نفس الشيء تماماً"], correctIndex: 1 },
        { id: 36, icon: "fa-gauge-high", text: "الوحدة التي تقاس بها سرعة المعالجات الحديثة:", options: ["Gigabyte (GB)", "Gigahertz (GHz)", "RPM", "DPI"], correctIndex: 1 },
        { id: 37, icon: "fa-table", text: "إذا قمت بنسخ معادلة تحتوي على المرجع $C$5 إلى خلية أخرى، فإن المرجع:", options: ["يتغير حسب الموقع الجديد", "يبقى ثابتاً كما هو", "يعطي رسالة خطأ", "يتحول إلى مرجع نسبي"], correctIndex: 1 },
        { id: 38, icon: "fa-check-double", text: "لتحديد 'الكل' (Select All) في الملفات أو النصوص نستخدم:", options: ["Ctrl + S", "Ctrl + A", "Ctrl + X", "Ctrl + V"], correctIndex: 1 },
        { id: 39, icon: "fa-linux", text: "أي من التالي يعد نظام تشغيل 'مفتوح المصدر' (Open Source)؟", options: ["Windows", "Mac OS", "Linux", "DOS"], correctIndex: 2 },
        { id: 40, icon: "fa-power-off", text: "عملية إعادة تشغيل الحاسوب تفرغ محتويات:", options: ["القرص الصلب", "ذاكرة ROM", "ذاكرة RAM", "الفلاش"], correctIndex: 2 },
        { id: 41, icon: "fa-table-cells", text: "في برنامج Excel، تقاطع العمود مع الصف يسمى:", options: ["جدول", "خلية (Cell)", "ورقة", "دالة"], correctIndex: 1 },
        { id: 42, icon: "fa-camera", text: "تستخدم الكاميرا الرقمية كـ:", options: ["وحدة إدخال (للصور)", "وحدة إخراج فقط", "وحدة معالجة", "برنامج"], correctIndex: 0 },
        { id: 43, icon: "fa-hard-drive", text: "أي من الوحدات التالية هي الأكبر؟", options: ["1000 جيجابايت", "1 تيرا بايت", "1 بيتابايت", "1000 ميجابايت"], correctIndex: 2 },
        { id: 44, icon: "fa-xmark", text: "للخروج من نافذة نشطة أو برنامج فوراً، الاختصار الشهير هو:", options: ["Alt + F4", "Ctrl + F4", "Shift + F4", "Tab + F4"], correctIndex: 0 },
        { id: 45, icon: "fa-gears", text: "البرمجيات التي تتحكم في عمل المكونات المادية وتديرها تسمى:", options: ["برمجيات تطبيقية", "برمجيات النظام (System Software)", "لغات البرمجة", "متصفحات الإنترنت"], correctIndex: 1 }
      ]
    }
  ]
};