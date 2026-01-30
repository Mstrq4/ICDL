import React, { useState, useEffect, useRef } from 'react';
import { courseData } from './data';
import { SectionType, Question, ExamModel, ShortcutCategory } from './types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// --- COMPONENTS ---

// 1. Navigation & Layout
const Layout: React.FC<{ children: React.ReactNode; activeView: string; setView: (v: string) => void }> = ({ children, activeView, setView }) => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pb-20">
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <i className="fa-solid fa-graduation-cap text-cyan-400 text-2xl"></i>
            <span className="font-bold text-xl hidden md:inline">مهارات الحاسوب</span>
          </div>
          <div className="flex gap-1 md:gap-3 overflow-x-auto pb-1 md:pb-0">
            <NavBtn icon="fa-home" label="الرئيسية" active={activeView === 'home'} onClick={() => setView('home')} />
            <NavBtn icon="fa-book-open" label="الملخص" active={activeView === 'summary'} onClick={() => setView('summary')} />
            <NavBtn icon="fa-keyboard" label="الاختصارات" active={activeView === 'shortcuts'} onClick={() => setView('shortcuts')} />
            <NavBtn icon="fa-clipboard-question" label="الاختبارات" active={activeView === 'exams'} onClick={() => setView('exams')} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-4 max-w-7xl mx-auto relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-white/10 text-center text-slate-400 text-sm">
        <p>جامعة ذمار - قسم الأثار والسياحة</p>
        <p className="mt-1">إعداد يوسف الدرعي | تصميم وتطوير النظام الذكي</p>
      </footer>
    </div>
  );
};

const NavBtn = ({ icon, label, active, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`px-3 py-2 rounded-xl flex items-center gap-2 transition-all duration-300 whitespace-nowrap ${active ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'hover:bg-white/10 text-slate-300'}`}
  >
    <i className={`fa-solid ${icon}`}></i>
    <span className="hidden sm:inline font-medium">{label}</span>
  </button>
);

// 2. Home View
const Home = ({ setView }: { setView: (v: string) => void }) => {
  return (
    <div className="animate-fade-in space-y-12">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl glass-panel p-8 md:p-16 text-center shadow-2xl border border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <h1 className="text-4xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 drop-shadow-lg">
          مهارات الحاسوب
        </h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-2 font-light">قسم الأثار والسياحة - المستوى الأول</p>
        <p className="text-slate-400 mb-8">أ. يوسف الدرعي</p>
        <button 
          onClick={() => setView('summary')}
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-lg font-bold shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">ابدأ التعلم الآن</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PillarCard icon="fa-microchip" title="الأساسيات" desc="المكونات المادية والبرمجية وأنظمة التشغيل" delay="0" />
        <PillarCard icon="fa-database" title="وحدات التخزين" desc="سلم وحدات القياس من البت إلى اليوتابايت" delay="100" />
        <PillarCard icon="fa-keyboard" title="المهارات العملية" desc="اختصارات لوحة المفاتيح وإدارة الملفات" delay="200" />
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => setView('summary')} className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all group text-right">
          <i className="fa-solid fa-book text-3xl text-purple-400 mb-2 group-hover:scale-110 transition-transform block"></i>
          <span className="text-xl font-bold">الملخص الشامل</span>
        </button>
        <button onClick={() => setView('exams')} className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all group text-right">
          <i className="fa-solid fa-pen-to-square text-3xl text-pink-400 mb-2 group-hover:scale-110 transition-transform block"></i>
          <span className="text-xl font-bold">بنك الأسئلة</span>
        </button>
      </div>
    </div>
  );
};

const PillarCard = ({ icon, title, desc, delay }: any) => (
  <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: `${delay}ms` }}>
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
      <i className={`fa-solid ${icon} text-white text-xl`}></i>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

// 3. Summary View
const Summary = () => {
  return (
    <div className="space-y-8 animate-slide-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">الملخص الأكاديمي</h2>
        <p className="text-slate-400 mt-2">خلاصة المادة في كبسولات معرفية</p>
      </div>

      <div className="grid gap-8">
        {courseData.summary.map((section) => (
          <section key={section.id} className="glass-card rounded-3xl overflow-hidden shadow-xl border border-white/5">
            <div className="bg-white/5 p-4 border-b border-white/5 flex items-center gap-3">
              <i className={`fa-solid ${section.icon} text-cyan-400 text-xl`}></i>
              <h3 className="text-xl font-bold">{section.title}</h3>
            </div>
            
            <div className="p-6">
              {/* Render Logic based on Type */}
              {section.type === SectionType.GRID && (
                 <div className="grid md:grid-cols-2 gap-4">
                   {section.content.map((item: any, idx: number) => (
                     <div key={idx} className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                       <h4 className="font-bold text-cyan-200 mb-2">{item.title}</h4>
                       <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                     </div>
                   ))}
                 </div>
              )}

              {section.type === SectionType.TIMELINE && (
                <div className="relative border-r-2 border-cyan-500/30 mr-4 space-y-6 py-2">
                  {section.content.map((item: any, idx: number) => (
                    <div key={idx} className="relative pr-8">
                      <div className="absolute -right-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                      <h4 className="font-bold text-lg">{item.label}</h4>
                      <p className="text-slate-400 text-sm">{item.detail}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.type === SectionType.COMPARISON && (
                <div className="grid md:grid-cols-2 gap-6 relative">
                  <div className="bg-blue-900/20 p-5 rounded-2xl border border-blue-500/20">
                    <h4 className="text-center font-bold text-blue-300 mb-4 border-b border-white/10 pb-2">{section.content.leftTitle}</h4>
                    <ul className="space-y-2">
                      {section.content.leftItems.map((li: string, i: number) => (
                        <li key={i} className="text-sm flex items-start gap-2 text-slate-300">
                           <i className="fa-solid fa-check text-blue-400 mt-1"></i> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800 border border-white/20 items-center justify-center font-bold text-xs text-slate-500 z-10">VS</div>
                  <div className="bg-purple-900/20 p-5 rounded-2xl border border-purple-500/20">
                    <h4 className="text-center font-bold text-purple-300 mb-4 border-b border-white/10 pb-2">{section.content.rightTitle}</h4>
                     <ul className="space-y-2">
                      {section.content.rightItems.map((li: string, i: number) => (
                        <li key={i} className="text-sm flex items-start gap-2 text-slate-300">
                           <i className="fa-solid fa-check text-purple-400 mt-1"></i> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {section.type === SectionType.LIST && (
                <ul className="space-y-3">
                  {section.content.map((li: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                      <i className="fa-solid fa-angle-left text-cyan-400"></i>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.type === SectionType.TEXT && (
                <p className="leading-loose text-lg text-slate-200">{section.content}</p>
              )}

              {section.type === SectionType.TABLE && (
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        {section.content.headers.map((h: string, i: number) => (
                          <th key={i} className="p-3 text-cyan-300">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {section.content.rows.map((row: string[], rI: number) => (
                        <tr key={rI} className="hover:bg-white/5 transition-colors">
                          {row.map((cell: string, cI: number) => (
                            <td key={cI} className={`p-3 ${cI === 1 ? 'font-mono text-yellow-300 ltr-force text-left' : ''}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

// 4. Shortcuts Library View (New)
const ShortcutsLibrary = () => {
  const [activeTab, setActiveTab] = useState<string>(courseData.shortcutsLibraries[0].id);

  return (
    <div className="animate-fade-in min-h-[80vh]">
       <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">مكتبة الاختصارات الشاملة</h2>
        <p className="text-slate-400 mt-2">دليلك الكامل لاختصارات لوحة المفاتيح لكل البرامج</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-2">
           {courseData.shortcutsLibraries.map(lib => (
             <button
                key={lib.id}
                onClick={() => setActiveTab(lib.id)}
                className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-all duration-300 ${activeTab === lib.id ? 'bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg scale-105' : 'glass-card hover:bg-white/10'}`}
             >
                <i className={`${lib.icon} text-xl ${activeTab === lib.id ? 'text-white' : 'text-emerald-400'}`}></i>
                <span className="font-bold">{lib.title}</span>
             </button>
           ))}
        </div>

        {/* Content */}
        <div className="md:col-span-3">
           {courseData.shortcutsLibraries.map(lib => (
             lib.id === activeTab && (
               <div key={lib.id} className="glass-panel p-6 rounded-2xl animate-slide-up">
                 <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                       <i className={`${lib.icon} text-2xl text-emerald-400`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{lib.title}</h3>
                      <p className="text-slate-400 text-sm">{lib.description}</p>
                    </div>
                 </div>

                 <div className="grid gap-3">
                    {lib.shortcuts.map((sc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                         <span className="text-slate-200 font-medium group-hover:text-white">{sc.action}</span>
                         <span className="font-mono bg-black/40 px-3 py-1 rounded text-emerald-300 ltr-force border border-emerald-500/20 min-w-[80px] text-center">{sc.key}</span>
                      </div>
                    ))}
                 </div>
               </div>
             )
           ))}
        </div>
      </div>
    </div>
  );
};

// 5. Exams & Quiz Logic
const ExamHub = ({ startExam }: { startExam: (exam: ExamModel) => void }) => {
  return (
    <div className="animate-fade-in">
       <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-300">مركز الاختبارات</h2>
        <p className="text-slate-400 mt-2">اختبر معلوماتك في نماذج حقيقية ومقترحة</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {courseData.exams.map(exam => (
          <div key={exam.id} className="glass-card rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">{exam.title}</h3>
            <p className="text-slate-400 mb-6 min-h-[3rem] relative z-10">{exam.description}</p>
            
            <div className="flex justify-between items-center relative z-10">
              <span className="text-sm font-mono bg-black/30 px-3 py-1 rounded-full text-pink-300">
                {exam.questions.length} سؤال
              </span>
              <button 
                onClick={() => startExam(exam)}
                className="px-6 py-2 bg-pink-600 hover:bg-pink-500 rounded-full font-bold shadow-lg shadow-pink-900/50 transition-all"
              >
                بدء الاختبار
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuizRunner = ({ exam, exit }: { exam: ExamModel; exit: () => void }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<{qId: number, correct: boolean, userAns: number}[]>([]);
  const [shake, setShake] = useState(false);
  
  const currentQ = exam.questions[currentQIndex];
  const progress = ((currentQIndex) / exam.questions.length) * 100;

  const handleOptionClick = (idx: number) => {
    if (selectedOption !== null) return; // Prevent change
    
    setSelectedOption(idx);
    const isCorrect = idx === currentQ.correctIndex;
    
    if (isCorrect) {
      setScore(s => s + 1);
      // Optional: Play correct sound
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      // Optional: Play wrong sound
    }

    setAnswers(prev => [...prev, { qId: currentQ.id, correct: isCorrect, userAns: idx }]);
  };

  const nextQuestion = () => {
    if (currentQIndex < exam.questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  // PDF Generation Logic
  const printResult = () => {
    const element = document.getElementById('pdf-print-zone');
    if (!element) return;
    
    // Config for html2pdf
    const opt = {
      margin: [10, 10, 10, 10], // top, left, bottom, right
      filename: `Result_${exam.id}_${new Date().toISOString().split('T')[0]}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Workaround for display:none elements with html2pdf:
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.display = 'block';
    clone.style.background = 'white';
    clone.style.color = 'black';
    clone.style.padding = '40px';
    clone.style.width = '100%';
    
    // We need to append to body temporarily to render
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '-10000px';
    container.style.left = '0';
    container.appendChild(clone);
    document.body.appendChild(container);

    window.html2pdf().set(opt).from(clone).save().then(() => {
      document.body.removeChild(container);
    });
  };

  if (showResult) {
    const percentage = Math.round((score / exam.questions.length) * 100);
    const chartData = {
      labels: ['صحيح', 'خاطئ'],
      datasets: [{
        data: [score, exam.questions.length - score],
        backgroundColor: ['#4ade80', '#f43f5e'],
        borderWidth: 0,
      }]
    };

    return (
      <div className="animate-fade-in max-w-4xl mx-auto">
        {/* PDF Hidden Zone */}
        <div id="pdf-print-zone" className="text-black hidden" style={{ direction: 'rtl', fontFamily: 'Cairo, sans-serif' }}>
          
          {/* PDF Header */}
          <div className="border-b-4 border-black pb-6 mb-8 text-center">
             <div className="flex justify-between items-center mb-4 px-10">
               <div className="text-right">
                  <p className="text-sm font-bold">الجمهورية اليمنية</p>
                  <p className="text-sm font-bold">جامعة ذمار</p>
                  <p className="text-sm font-bold">كلية الآداب - قسم الآثار والسياحة</p>
               </div>
               <div className="text-center border-2 border-black p-2 rounded">
                  <p className="font-bold">نتيجة اختبار مهارات الحاسوب</p>
               </div>
               <div className="text-left">
                  <p className="text-sm">التاريخ: {new Date().toLocaleDateString('ar-YE')}</p>
               </div>
             </div>
             <h1 className="text-3xl font-black mt-4">{exam.title}</h1>
             <div className="mt-4 text-xl">
                الدرجة النهائية: <span className="font-bold">{score} / {exam.questions.length}</span> ({percentage}%)
             </div>
          </div>

          {/* Questions List */}
          <div className="space-y-6">
             {exam.questions.map((q, idx) => {
               const ans = answers.find(a => a.qId === q.id);
               const isCorrect = ans?.correct;
               return (
                 <div key={q.id} className="p-4 border border-gray-300 rounded bg-gray-50" style={{ pageBreakInside: 'avoid' }}>
                   <div className="flex items-start gap-2 mb-2">
                      <span className="font-bold bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">{idx+1}</span>
                      <p className="font-bold text-lg leading-snug flex-1">{q.text}</p>
                   </div>
                   
                   <div className="mr-8 text-sm space-y-2">
                     <div className={`p-2 rounded ${isCorrect ? 'bg-green-100 border border-green-500' : 'bg-red-100 border border-red-500'}`}>
                        <span className="font-bold">إجابتك: </span>
                        {ans ? q.options[ans.userAns] : 'لم يتم الإجابة'}
                        {isCorrect && <span className="mr-2 text-green-700 font-bold">✓ (صحيحة)</span>}
                        {!isCorrect && <span className="mr-2 text-red-700 font-bold">✗ (خاطئة)</span>}
                     </div>
                     
                     {!isCorrect && (
                       <div className="p-2 rounded bg-green-50 border border-green-300">
                         <span className="font-bold text-green-800">الإجابة الصحيحة: </span>
                         {q.options[q.correctIndex]}
                       </div>
                     )}

                     {q.explanation && (
                       <div className="mt-2 text-gray-600 border-t border-gray-300 pt-1">
                         <span className="font-bold">التعليل:</span> {q.explanation}
                       </div>
                     )}
                   </div>
                 </div>
               );
             })}
          </div>

          {/* PDF Footer */}
          <div className="mt-10 pt-4 border-t-2 border-black text-center text-sm text-gray-500">
             تم استخراج هذا التقرير آلياً عبر نظام مهارات الحاسوب التفاعلي | إعداد أ. يوسف الدرعي
          </div>
        </div>

        {/* Display Dashboard */}
        <div className="glass-panel p-8 rounded-3xl text-center mb-8">
          <h2 className="text-3xl font-bold mb-6">النتيجة النهائية</h2>
          <div className="w-48 h-48 mx-auto mb-6">
            <Doughnut data={chartData} />
          </div>
          <div className="text-5xl font-black mb-2 text-white">{percentage}%</div>
          <p className="text-slate-400 mb-8">{score} من {exam.questions.length} إجابة صحيحة</p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={printResult} className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center gap-2">
              <i className="fa-solid fa-file-pdf"></i>
              <span>تحميل التقرير (PDF)</span>
            </button>
            <button onClick={exit} className="px-6 py-3 border border-white/20 rounded-xl font-bold hover:bg-white/10 transition-colors">
              خروج للقائمة
            </button>
          </div>
        </div>

        {/* Mistakes Review */}
        <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">مراجعة الأخطاء والتعليلات</h3>
            {answers.filter(a => !a.correct).length === 0 ? (
               <div className="p-6 glass-card rounded-xl text-center text-green-400">
                 <i className="fa-solid fa-trophy text-3xl mb-2"></i>
                 <p>ما شاء الله! إجاباتك كاملة صحيحة.</p>
               </div>
            ) : (
              answers.filter(a => !a.correct).map((a, i) => {
                const q = exam.questions.find(quest => quest.id === a.qId)!;
                return (
                  <div key={i} className="glass-card p-6 rounded-xl border-r-4 border-red-500">
                    <p className="font-bold mb-3 text-lg flex gap-2">
                       <i className={`fa-solid ${q.icon || 'fa-circle-question'} text-slate-400 mt-1`}></i>
                       {q.text}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                       <div className="bg-red-500/10 p-3 rounded-lg text-red-300">
                         <span className="font-bold block mb-1">إجابتك:</span>
                         {q.options[a.userAns]}
                       </div>
                       <div className="bg-green-500/10 p-3 rounded-lg text-green-300">
                         <span className="font-bold block mb-1">الإجابة الصحيحة:</span>
                         {q.options[q.correctIndex]}
                       </div>
                    </div>
                    {q.explanation && (
                      <div className="mt-3 text-slate-400 text-sm bg-black/20 p-2 rounded">
                        <i className="fa-solid fa-lightbulb text-yellow-500 ml-2"></i>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })
            )}
        </div>
      </div>
    );
  }

  // Active Question View
  return (
    <div className="max-w-3xl mx-auto">
      {/* Top Bar */}
      <div className="glass-panel p-4 rounded-2xl mb-6 flex justify-between items-center sticky top-24 z-30 shadow-lg backdrop-blur-xl border border-white/10">
        <div className="flex items-center gap-4">
           <button onClick={exit} className="text-slate-400 hover:text-white transition-colors"><i className="fa-solid fa-xmark text-xl"></i></button>
           <span className="font-mono font-bold text-cyan-300 text-lg">سؤال {currentQIndex + 1} / {exam.questions.length}</span>
        </div>
        <div className="font-mono font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-lg border border-green-500/30">
          النقاط: {score}
        </div>
      </div>
      
      {/* Gradient Progress Bar */}
      <div className="h-3 bg-slate-800 rounded-full mb-8 overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className={`glass-card p-8 md:p-12 rounded-3xl mb-8 relative transition-all duration-300 ${shake ? 'animate-shake border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]' : 'border-white/10'}`}>
        <div className="flex items-start gap-4 mb-8">
           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <i className={`fa-solid ${currentQ.icon || 'fa-question'} text-white text-xl`}></i>
           </div>
           <h3 className="text-2xl md:text-3xl font-black leading-relaxed tracking-wide text-white drop-shadow-sm">{currentQ.text}</h3>
        </div>
        
        <div className="space-y-4">
          {currentQ.options.map((opt, idx) => {
            let stateClass = "hover:bg-white/10 border-white/10 hover:border-white/30"; // default
            let animationClass = "";
            
            if (selectedOption !== null) {
              if (idx === currentQ.correctIndex) {
                 stateClass = "bg-green-500/20 border-green-500 text-green-200 shadow-[0_0_15px_rgba(34,197,94,0.3)]";
                 if (idx === selectedOption) animationClass = "animate-pulse scale-[1.02]";
              } else if (idx === selectedOption) {
                 stateClass = "bg-red-500/20 border-red-500 text-red-200";
              } else {
                 stateClass = "opacity-40 border-transparent blur-[1px]";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                disabled={selectedOption !== null}
                className={`w-full text-right p-5 rounded-2xl border-2 transition-all duration-300 text-lg font-bold flex items-center justify-between group ${stateClass} ${animationClass}`}
              >
                <span>{opt}</span>
                {selectedOption !== null && idx === currentQ.correctIndex && <i className="fa-solid fa-circle-check text-green-400 text-xl"></i>}
                {selectedOption !== null && idx === selectedOption && idx !== currentQ.correctIndex && <i className="fa-solid fa-circle-xmark text-red-400 text-xl"></i>}
              </button>
            );
          })}
        </div>

        {/* Explanation Logic */}
        {selectedOption !== null && selectedOption !== currentQ.correctIndex && (
           <div className="mt-8 animate-fade-in bg-red-950/40 border border-red-500/30 p-6 rounded-2xl text-red-200 shadow-lg">
             <div className="font-black text-lg mb-2 flex items-center gap-2 text-red-400">
               <i className="fa-solid fa-triangle-exclamation"></i> 
               إجابة خاطئة
             </div>
             <p className="text-base mb-2">الإجابة الصحيحة هي: <span className="font-bold text-white bg-green-500/20 px-2 py-0.5 rounded">{currentQ.options[currentQ.correctIndex]}</span></p>
             {currentQ.explanation && (
               <div className="mt-4 pt-4 border-t border-red-500/20 text-slate-300 text-sm flex gap-2">
                  <i className="fa-solid fa-lightbulb text-yellow-500 mt-1"></i>
                  <p>{currentQ.explanation}</p>
               </div>
             )}
           </div>
        )}
      </div>

      {/* Next Button */}
      {selectedOption !== null && (
        <button 
          onClick={nextQuestion}
          className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-2xl font-black text-xl shadow-lg shadow-cyan-900/50 animate-bounce-subtle transition-all transform hover:scale-[1.02]"
        >
          {currentQIndex === exam.questions.length - 1 ? 'إنهاء وعرض النتيجة' : 'السؤال التالي'}
        </button>
      )}
    </div>
  );
};

// --- APP COMPONENT ---

export default function App() {
  const [view, setView] = useState('home');
  const [activeExam, setActiveExam] = useState<ExamModel | null>(null);

  const startExam = (exam: ExamModel) => {
    setActiveExam(exam);
    setView('quiz');
  };

  const exitQuiz = () => {
    setActiveExam(null);
    setView('exams');
  };

  return (
    <Layout activeView={view} setView={setView}>
      {view === 'home' && <Home setView={setView} />}
      {view === 'summary' && <Summary />}
      {view === 'shortcuts' && <ShortcutsLibrary />}
      {view === 'exams' && <ExamHub startExam={startExam} />}
      {view === 'quiz' && activeExam && <QuizRunner exam={activeExam} exit={exitQuiz} />}
    </Layout>
  );
}