'use client';

import { useState, useEffect } from "react";
import { ArrowLeft } from 'lucide-react';
type Step = 'welcome' | 'categories' | 'questions' | 'answer';

/* ================= FAQ DATA ================= */

const FAQ_CATEGORIES = [
  {
    key: 'admissions',
    labels: {
      en: 'Admissions',
      te: 'అడ్మిషన్స్',
      hi: 'प्रवेश',
    },
    questions: [
      {
        key: 'how-admissions',
        en: 'How are admissions done at KLH?',
        te: 'KLH లో అడ్మిషన్స్ ఎలా జరుగుతాయి?',
        hi: 'KLH में एडमिशन कैसे होते हैं?',
      },
      {
        key: 'which-exams',
        en: 'What entrance exams are accepted?',
        te: 'ఏ ఎంట్రెన్స్ ఎగ్జామ్స్‌ను అంగీకరిస్తారు?',
        hi: 'कौन-कौन से प्रवेश परीक्षा स्वीकार की जाती हैं?',
      },
      {
        key: 'btech-eligibility',
        en: 'What is the eligibility for B.Tech?',
        te: 'B.Tech కోసం అర్హత ఏమిటి?',
        hi: 'B.Tech के लिए पात्रता क्या है?',
      },
      {
        key: 'lateral-entry',
        en: 'What is the admission process for lateral entry?',
        te: 'లాటరల్ ఎంట్రీ అడ్మిషన్ ప్రక్రియ ఏమిటి?',
        hi: 'लेटरल एंट्री के लिए एडमिशन प्रक्रिया क्या है?',
      },
    ],
  },
  {
    key: 'courses',
    labels: {
      en: 'Courses & Branches',
      te: 'కోర్సులు & బ్రాంచులు',
      hi: 'कोर्स और ब्रांच',
    },
    questions: [
      {
        key: 'branches-available',
        en: 'What branches are available at KLH Hyderabad?',
        te: 'KLH హైదరాబాద్‌లో ఏ బ్రాంచులు ఉన్నాయి?',
        hi: 'KLH हैदराबाद में कौन-कौन सी ब्रांच उपलब्ध हैं?',
      },
      {
        key: 'aiml-ds',
        en: 'Do you have AI/ML or Data Science programs?',
        te: 'AI/ML లేదా డేటా సైన్స్ ప్రోగ్రాములు ఉన్నాయా?',
        hi: 'क्या आपके पास AI/ML या डेटा साइंस प्रोग्राम हैं?',
      },
      {
        key: 'ece-available',
        en: 'Is ECE available at KLH Hyderabad campus?',
        te: 'KLH హైదరాబాద్ క్యాంపస్‌లో ECE ఉందా?',
        hi: 'क्या KLH हैदराबाद कैंपस में ECE उपलब्ध है?',
      },
      {
        key: 'integrated-honors',
        en: 'Are there any integrated or honors programs?',
        te: 'ఏమైనా ఇంటిగ్రేటెడ్ లేదా ఆనర్స్ ప్రోగ్రామ్‌లు ఉన్నాయా?',
        hi: 'क्या कोई इंटीग्रेटेड या ऑनर्स प्रोग्राम हैं?',
      },
    ],
  },
  {
    key: 'fees',
    labels: {
      en: 'Fees & Scholarships',
      te: 'ఫీజులు & స్కాలర్‌షిప్స్',
      hi: 'फीस और छात्रवृत्ति',
    },
    questions: [
      {
        key: 'fee-structure',
        en: 'How can I know the fee structure?',
        te: 'ఫీజు స్ట్రక్చర్‌ను ఎలా తెలుసుకోవచ్చు?',
        hi: 'मैं फीस संरचना कैसे जान सकता/सकती हूँ?',
      },
      {
        key: 'scholarships',
        en: 'Are there any scholarships or fee waivers?',
        te: 'ఏమైనా స్కాలర్‌షిప్స్ లేదా ఫీ వేవర్స్ ఉన్నాయా?',
        hi: 'क्या कोई छात्रवृत्ति या फीस में छूट है?',
      },
      {
        key: 'hostel-fee',
        en: 'Is hostel fee separate from tuition fee?',
        te: 'హాస్టల్ ఫీజు ట్యూషన్ ఫీజు నుండి వేరుగా ఉందా?',
        hi: 'क्या हॉस्टल फीस ट्यूशन फीस से अलग है?',
      },
      {
        key: 'nri-mgmt',
        en: 'Are fees different for NRI or management quota?',
        te: 'NRI లేదా మేనేజ్‌మెంట్ కోటా కోసం ఫీజులు వేరుగా ఉంటాయా?',
        hi: 'क्या NRI या मैनेजमेंट कोटा के लिए फीस अलग होती है?',
      },
    ],
  },
  {
    key: 'hostel-transport',
    labels: {
      en: 'Hostel & Transport',
      te: 'హాస్టల్ & ట్రాన్స్‌పోర్ట్',
      hi: 'हॉस्टल और ट्रांसपोर्ट',
    },
    questions: [
      {
        key: 'hostel-available',
        en: 'Is hostel facility available at KLH Hyderabad?',
        te: 'KLH హైదరాబాద్‌లో హాస్టల్ సౌకర్యం ఉందా?',
        hi: 'क्या KLH हैदराबाद में हॉस्टल सुविधा उपलब्ध है?',
      },
      {
        key: 'hostel-rules',
        en: 'What are the hostel facilities and rules?',
        te: 'హాస్టల్ సౌకర్యాలు మరియు రూల్స్ ఏమిటి?',
        hi: 'हॉस्टल की सुविधाएँ और नियम क्या हैं?',
      },
      {
        key: 'bus-facility',
        en: 'Is college transport/bus facility available?',
        te: 'కళాశాల బస్/ట్రాన్స్‌పోర్ట్ సౌకర్యం ఉందా?',
        hi: 'क्या कॉलेज ट्रांसपोर्ट/बस सुविधा उपलब्ध है?',
      },
      {
        key: 'distance-city',
        en: 'How far is the campus from main city areas?',
        te: 'క్యాంపస్ ప్రధాన సిటీ ప్రాంతాల నుండి ఎంత దూరంలో ఉంది?',
        hi: 'कैंपस मुख्य शहर क्षेत्रों से कितनी दूर है?',
      },
    ],
  },
  {
    key: 'placements',
    labels: {
      en: 'Placements & Internships',
      te: 'ప్లేస్‌మెంట్స్ & ఇంటర్న్‌షిప్స్',
      hi: 'प्लेसमेंट और इंटर्नशिप',
    },
    questions: [
      {
        key: 'how-placements',
        en: 'How are the placements at KLH?',
        te: 'KLH లో ప్లేస్‌మెంట్స్ ఎలా ఉన్నాయి?',
        hi: 'KLH में प्लेसमेंट कैसे हैं?',
      },
      {
        key: 'companies-visit',
        en: 'Which companies visit KLH for placements?',
        te: 'ప్లేస్‌మెంట్స్ కోసం KLH కి ఏ కంపెనీలు వస్తాయి?',
        hi: 'प्लेसमेंट के लिए KLH में कौन-कौन सी कंपनियाँ आती हैं?',
      },
      {
        key: 'internships-support',
        en: 'Are internships supported by the college?',
        te: 'కాలేజ్ ఇంటర్న్‌షిప్స్‌కి సపోర్ట్ చేస్తుందా?',
        hi: 'क्या कॉलेज इंटर्नशिप में सहायता करता है?',
      },
      {
        key: 'avg-highest-package',
        en: 'What is the average and highest package?',
        te: 'యావరేజ్ మరియు హయ్యెస్ట్ ప్యాకేజ్ ఎంత?',
        hi: 'औसत और सबसे अधिक पैकेज कितना है?',
      },
    ],
  },
  {
    key: 'campus-life',
    labels: {
      en: 'Campus Life',
      te: 'క్యాంపస్ లైఫ్',
      hi: 'कैंपस लाइफ',
    },
    questions: [
      {
        key: 'clubs-activities',
        en: 'What clubs and activities are available?',
        te: 'ఏ క్లబ్బులు మరియు కార్యక్రమాలు ఉన్నాయి?',
        hi: 'कौन-कौन से क्लब और गतिविधियाँ उपलब्ध हैं?',
      },
      {
        key: 'fests',
        en: 'Are there technical and cultural fests?',
        te: 'టెక్నికల్ మరియు కల్చరల్ ఫెస్టులు ఉన్నాయా?',
        hi: 'क्या टेक्निकल और कल्चरल फेस्ट होते हैं?',
      },
      {
        key: 'labs-library',
        en: 'What are the lab and library facilities?',
        te: 'లాబ్ మరియు లైబ్రరీ సౌకర్యాలు ఏమిటి?',
        hi: 'लैब और लाइब्रेरी की सुविधाएँ क्या हैं?',
      },
      {
        key: 'daily-schedule',
        en: 'What is the daily college schedule like?',
        te: 'కాలేజ్ రోజువారీ షెడ్యూల్ ఎలా ఉంటుంది?',
        hi: 'कॉलेज का दैनिक शेड्यूल कैसा होता है?',
      },
    ],
  },
];

/* ================= COMPONENT ================= */

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState<Step>('welcome');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [answer, setAnswer] = useState('');
  const [language, setLanguage] = useState<'en' | 'te' | 'hi'>('en');
  
  const resetChatbot = () => {
    setStep('welcome');
    setSelectedCategory(null);
    setAnswer('');
  };
  useEffect(() => {
    if (isOpen) {
      resetChatbot();
    }
  }, [isOpen]);
  const fetchAnswer = async (question: string) => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, language }),
    });

    const data = await res.json();
    setAnswer(data.answer);
    setStep('answer');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg z-50"
      >
        KL
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-full max-w-md 
                        h-[450px] 
                        bg-white rounded-2xl shadow-2xl 
                        border border-gray-200 
                        z-40 flex flex-col">

          {/* HEADER */}
          <div className="bg-blue-700 text-white p-4 flex justify-between items-center">

            <div className="flex items-center gap-3">
              {step !== 'welcome' && (
                <ArrowLeft
                  size={18}
                  className="cursor-pointer"
                  onClick={() => {
                    if (step === 'questions') setStep('categories');
                    else if (step === 'answer') setStep('questions');
                  }}
                />
              )}
              <h2 className="font-semibold">KLH Assistant</h2>
            </div>

            {/* Language Toggle */}
            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`${language === 'en' ? 'font-semibold underline' : 'opacity-70 hover:opacity-100'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('te')}
                className={`${language === 'te' ? 'font-semibold underline' : 'opacity-70 hover:opacity-100'}`}
              >
                తెలుగు
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`${language === 'hi' ? 'font-semibold underline' : 'opacity-70 hover:opacity-100'}`}
              >
                हिन्दी
              </button>
            </div>

          </div>

          {/* BODY (Scrollable Area) */}
          <div className="flex-1 overflow-y-auto p-6 bg-white">

            {/* ================= WELCOME ================= */}
            {step === 'welcome' && (
              <div className="flex flex-col h-full justify-between">

                {/* Top Content */}
                <div className="text-center pt-8 px-6">
                  <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                    {language === 'te'
                      ? 'హలో! నేను KLH వర్చువల్ అసిస్టెంట్‌ని.'
                      : language === 'hi'
                      ? 'नमस्ते! मैं KLH वर्चुअल असिस्टेंट हूँ।'
                      : 'Hello! I am KLH Virtual Assistant.'}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {language === 'te'
                      ? 'అడ్మిషన్స్, కోర్సులు, ఫీజులు మరియు మరిన్ని విషయాల్లో సహాయం చేస్తాను.'
                      : language === 'hi'
                      ? 'मैं एडमिशन, कोर्स, फीस और अन्य जानकारी में मदद कर सकता हूँ।'
                      : 'I can guide you through Admissions, Courses, Fees and more.'}
                  </p>

                  <button
                    onClick={() => setStep('categories')}
                    className="mt-5 px-6 py-2 bg-gradient-to-r 
                              from-purple-400 to-pink-400 
                              text-white rounded-lg shadow 
                              hover:opacity-90 transition"
                  >
                    Get Started
                  </button>
                </div>

                {/* Bottom Image */}
                <div className="w-full">
                  <img
                    src="/chatbot-welcome.png"
                    alt="Assistant"
                    className="w-full h-[180px] object-cover"
                  />
                </div>

              </div>
            )}

            {/* ================= CATEGORIES ================= */}
            {step === 'categories' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-6">
                  {language === 'te'
                    ? 'ఒక కేటగిరీ ఎంచుకోండి'
                    : language === 'hi'
                    ? 'एक कैटेगरी चुनें'
                    : 'Choose a category'}
                </h3>

                <div className="space-y-4">
                  {FAQ_CATEGORIES.map(cat => (
                    <div
                      key={cat.key}
                      onClick={() => {
                        setSelectedCategory(cat.key);
                        setStep('questions');
                      }}
                      className="p-4 rounded-xl border border-gray-200 
                      bg-gradient-to-r from-white to-purple-50
                      hover:from-purple-50 hover:to-pink-50
                      shadow-sm hover:shadow-md
                      cursor-pointer transition duration-200"
                    >
                      <h4 className="font-semibold text-gray-800">
                        {cat.labels[language]}
                      </h4>
            
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= QUESTIONS ================= */}
            {step === 'questions' && (
              <div>
                {(() => {
                  const cat = FAQ_CATEGORIES.find(c => c.key === selectedCategory);
                  if (!cat) return null;

                  return (
                    <>
                      <h3 className="text-lg font-semibold text-gray-800 mb-6">
                        {cat.labels[language]}
                      </h3>

                      <div className="space-y-4">
                        {cat.questions.map(q => (
                          <div
                            key={q.key}
                            onClick={() => fetchAnswer(q.en)}
                            className="p-4 rounded-xl border border-gray-200 
                            bg-white hover:bg-blue-50
                            hover:border-blue-400
                            shadow-sm hover:shadow-md
                            cursor-pointer transition duration-200
                            text-gray-800 font-medium"
                          >
                            {q[language]}
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {/* ================= ANSWER ================= */}
            {step === 'answer' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Answer
                </h3>

                <div className="bg-gray-50 p-4 rounded-lg border text-sm text-gray-700">
                  {answer}
                </div>

                <button
                  onClick={() => setStep('categories')}
                  className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Ask Another Question
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}