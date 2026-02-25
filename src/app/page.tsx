'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

type Msg = { role: 'user' | 'bot'; content: string };

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



export default function Home() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'te' | 'hi'>('en');

  const sendMessageWithText = async (text: string) => {
    const userMsg: Msg = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text, language }), // add language
      });

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', content: data.answer }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'bot', content: 'Error talking to server. Try again.' },
      ]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const text = input;
    setInput('');
    await sendMessageWithText(text);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(o => !o)}
        className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg z-50 text-sm font-semibold"
      >
        KL
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-full max-w-md bg-white rounded-2xl shadow-xl p-4 space-y-3 border border-gray-200 z-40">
          <h1 className="text-xl font-semibold text-center text-gray-800">
            KLH Website Chatbot (Demo)
          </h1>
          <div className="flex justify-center gap-2 text-xs mb-1">
            <button
              onClick={() => setLanguage('en')}
              className={language === 'en' ? 'font-semibold text-blue-600' : 'text-gray-500'}
            >
              English
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setLanguage('te')}
              className={language === 'te' ? 'font-semibold text-blue-600' : 'text-gray-500'}
            >
              తెలుగు
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setLanguage('hi')}
              className={language === 'hi' ? 'font-semibold text-blue-600' : 'text-gray-500'}
            >
              हिन्दी
            </button>
          </div>


          <div className="h-80 overflow-y-auto space-y-3 p-2 bg-gray-50 rounded-xl">
            {/* messages */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* FAQ area */}
            <div className="space-y-2">
              {/* step 1: category chips */}
              {!selectedCategory && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1">
                    Choose a category
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {FAQ_CATEGORIES.map(cat => (
                      <button
                        key={cat.key}
                        onClick={() => setSelectedCategory(cat.key)}
                        className="text-xs px-3 py-1 rounded-full bg-white border border-gray-300 hover:bg-blue-50 text-gray-800"
                      >
                        {cat.labels[language]}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* step 2: questions in selected category */}
              {selectedCategory && (
                <div>
                  {(() => {
                    const cat = FAQ_CATEGORIES.find(c => c.key === selectedCategory);
                    if (!cat) return null;

                    return (
                      <>
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs font-semibold text-gray-500">
                            {cat.labels[language]}
                          </p>
                          <button
                            onClick={() => setSelectedCategory(null)}
                            className="text-[10px] text-blue-500 underline"
                          >
                            change category
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-2">
                          {cat.questions.map(q => (
                            <button
                              key={q.key}
                              onClick={() => {
                                // send English text to backend for matching
                                sendMessageWithText(q.en);
                              }}
                              className="text-xs px-3 py-1 rounded-full bg-white border border-gray-300 hover:bg-blue-50 text-gray-800 text-left"
                            >
                              {q[language]}
                            </button>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}

              {/* helper button – visible once there is some history and no category open */}
              {messages.length > 0 && !selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-2 text-[11px] text-blue-500 underline"
                >
                  Ask another question from FAQs
                </button>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <input
              className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask about KLH admissions, courses..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-3 py-2 rounded-xl text-sm hover:bg-blue-600 flex items-center justify-center"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

