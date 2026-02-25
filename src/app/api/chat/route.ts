import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { question, language } = await req.json();
    const q = (question as string).toLowerCase().trim();
    const lang = (language as string) || 'en';

    const pick = (en: string, te: string, hi: string) => {
      if (lang === 'te') return te;
      if (lang === 'hi') return hi;
      return en;
    };

    let answer = pick(
      'I am a KLH FAQ chatbot demo. Please choose a question from the suggestions for best results.',
      'నేను KLH FAQ చాట్‌బాట్ డెమోను. దయచేసి క్రింద ఉన్న ప్రశ్నల నుంచి ఎంచుకుంటే మంచి సహాయం అందుతుంది.',
      'मैं KLH FAQ चैटबॉट डेमो हूँ। कृपया नीचे दिए गए सवालों में से चुनें ताकि मैं बेहतर मदद कर सकूँ।'
    );

    // ===================== Admissions =====================
    if (q.includes('how are admissions done')) {
      answer = pick(
        'Admissions at KLH are mainly through KL University entrance tests like KLEEE and other approved entrance exams. Candidates must apply online and attend counseling as per the official schedule.',
        'KLH లో అడ్మిషన్లు ప్రధానంగా KL యూనివర్సిటీ ఎంట్రెన్స్ పరీక్షలు (ఉదా: KLEEE) మరియు ఇతర ఆమోదిత ఎగ్జామ్స్ ద్వారా జరుగుతాయి. అభ్యర్థులు ఆన్‌లైన్‌లో దరఖాస్తు చేసి, అధికారిక షెడ్యూల్ ప్రకారం కౌన్సెలింగ్‌కు హాజరు కావాలి.',
        'KLH में एडमिशन मुख्य रूप से KL यूनिवर्सिटी की प्रवेश परीक्षाओं (जैसे KLEEE) और अन्य मान्य परीक्षाओं के माध्यम से होते हैं। उम्मीदवारों को ऑनलाइन आवेदन करना होता है और आधिकारिक शेड्यूल के अनुसार काउंसलिंग में भाग लेना होता है।'
      );
    } else if (q.includes('what entrance exams are accepted')) {
      answer = pick(
        'KLH generally accepts KLEEE and other recognized entrance exams depending on the program. Please check the latest Admissions page on the KLH website for the exact list and updates.',
        'KLH సాధారణంగా ప్రోగ్రామ్‌పై ఆధారపడి KLEEE మరియు ఇతర గుర్తింపుపొందిన ఎంట్రెన్స్ పరీక్షలను అంగీకరిస్తుంది. ఖచ్చితమైన జాబితా కోసం KLH వెబ్‌సైట్‌లోని Admissions పేజీని చూడండి.',
        'KLH आम तौर पर प्रोग्राम के अनुसार KLEEE और अन्य मान्यता प्राप्त प्रवेश परीक्षाएँ स्वीकार करता है। सटीक सूची और अपडेट के लिए KLH वेबसाइट के Admissions पेज को देखें।'
      );
    } else if (q.includes('what is the eligibility for b.tech')) {
      answer = pick(
        'For B.Tech at KLH, students usually need a minimum qualifying percentage in 10+2 with Maths, Physics and Chemistry, along with a valid score in the accepted entrance exam. Exact requirements may vary by year and category.',
        'KLH లో B.Tech కోసం సాధారణంగా విద్యార్థులు 10+2లో మ్యాథ్స్, ఫిజిక్స్, కెమిస్ట్రీతో కనీస శాతం మరియు అంగీకరించిన ఎంట్రెన్స్ పరీక్షలో సరైన స్కోర్ సాధించాలి. ఖచ్చితమైన అర్హతలు సంవత్సరం మరియు కేటగిరీపై ఆధారపడి మారవచ్చు.',
        'KLH में B.Tech के लिए आम तौर पर छात्रों को 10+2 में मैथ्स, फिजिक्स और केमिस्ट्री के साथ न्यूनतम प्रतिशत और मान्य प्रवेश परीक्षा स्कोर की आवश्यकता होती है। सटीक पात्रता वर्ष और कैटेगरी के अनुसार बदल सकती है।'
      );
    } else if (q.includes('admission process for lateral entry')) {
      answer = pick(
        'Lateral entry admissions are typically meant for diploma or equivalent holders. Eligible candidates have to follow the KLH lateral entry notification and participate in the specified admission process.',
        'లాటరల్ ఎంట్రీ అడ్మిషన్లు సాధారణంగా డిప్లొమా లేదా సమాన అర్హత కలిగిన విద్యార్థుల కోసం ఉంటాయి. అర్హులైన విద్యార్థులు KLH లాటరల్ ఎంట్రీ నోటిఫికేషన్ ప్రకారం అడ్మిషన్ ప్రక్రియను పూర్తి చేయాలి.',
        'लेटरल एंट्री एडमिशन आम तौर पर डिप्लोमा या समकक्ष योग्यता वाले छात्रों के लिए होते हैं। पात्र उम्मीदवारों को KLH के लेटरल एंट्री नोटिफिकेशन के अनुसार एडमिशन प्रक्रिया पूरी करनी होती है।'
      );

    // ===================== Courses & Branches =====================
    } else if (q.includes('what branches are available at klh hyderabad')) {
      answer = pick(
        'KLH Hyderabad offers core engineering and emerging technology branches such as CSE, ECE and other specializations. For the latest and complete list of programs, please refer to the Programs or Academics section of the KLH website.',
        'KLH హైదరాబాద్‌లో CSE, ECE వంటి కోర్ ఇంజినీరింగ్ మరియు ఎమర్జింగ్ టెక్నాలజీ బ్రాంచులు అందుబాటులో ఉన్నాయి. పూర్తి మరియు తాజా ప్రోగ్రామ్‌ల జాబితా కోసం KLH వెబ్‌సైట్‌లోని Programs లేదా Academics విభాగాన్ని చూడండి.',
        'KLH हैदराबाद में CSE, ECE जैसे कोर इंजीनियरिंग और उभरते तकनीकी ब्रांच के साथ कई स्पेशलाइज़ेशन उपलब्ध हैं। नवीनतम और पूरी सूची के लिए KLH वेबसाइट के Programs या Academics सेक्शन को देखें।'
      );
    } else if (q.includes('do you have ai/ml') || q.includes('ai/ml or data science programs')) {
      answer = pick(
        'KLH offers programs in modern domains like Artificial Intelligence, Machine Learning and Data related areas. Please check the program list for exact AI/ML and Data Science offerings.',
        'KLH లో ఆర్టిఫిషియల్ ఇంటెలిజెన్స్, మెషిన్ లెర్నింగ్ మరియు డేటా సంబంధిత ఆధునిక డొమెయిన్‌లలో కూడా ప్రోగ్రామ్‌లు అందుబాటులో ఉన్నాయి. ఖచ్చితమైన AI/ML మరియు Data Science ప్రోగ్రామ్‌ల కోసం ప్రోగ్రామ్‌ల జాబితాను చూడండి.',
        'KLH आधुनिक क्षेत्रों जैसे Artificial Intelligence, Machine Learning और डेटा संबंधित डोमेन में भी प्रोग्राम प्रदान करता है। सटीक AI/ML और Data Science प्रोग्रामों के लिए प्रोग्राम सूची देखें।'
      );
    } else if (q.includes('is ece available at klh hyderabad campus')) {
      answer = pick(
        'Yes, B.Tech ECE is available at the KLH Hyderabad campus. You can refer to the ECE department page for details on curriculum, labs and faculty.',
        'అవును, KLH హైదరాబాద్ క్యాంపస్‌లో B.Tech ECE బ్రాంచ్ అందుబాటులో ఉంది. curriculum, లాబ్స్ మరియు ఫ్యాకల్టీ వివరాల కోసం ECE విభాగం పేజీని చూడండి.',
        'हाँ, KLH हैदराबाद कैंपस में B.Tech ECE ब्रांच उपलब्ध है। पाठ्यक्रम, लैब और फैकल्टी विवरण के लिए ECE विभाग के पेज को देखें।'
      );
    } else if (q.includes('integrated or honors programs')) {
      answer = pick(
        'KLH may offer integrated or honours options depending on the program and academic year. Please see the academic regulations and program pages for the latest information.',
        'ప్రోగ్రామ్ మరియు అకాడమిక్ సంవత్సరాన్ని బట్టి KLH ఇంటిగ్రేటెడ్ లేదా ఆనర్స్ ఆప్షన్లు కూడా అందించవచ్చు. తాజా సమాచారానికి అకాడమిక్ రెగ్యులేషన్స్ మరియు ప్రోగ్రామ్ పేజీలను చూడండి.',
        'प्रोग्राम और अकादमिक वर्ष के आधार पर KLH इंटीग्रेटेड या ऑनर्स विकल्प भी प्रदान कर सकता है। नवीनतम जानकारी के लिए अकादमिक रेगुलेशन और प्रोग्राम पेज देखें।'
      );

    // ===================== Fees & Scholarships =====================
    } else if (q.includes('how can i know the fee structure')) {
      answer = pick(
        'The detailed fee structure depends on the program, quota and academic year. Please refer to the Fee Structure or Admissions section of the KLH website for accurate and updated figures.',
        'ఫీజు స్ట్రక్చర్ ప్రోగ్రామ్, కోటా మరియు అకాడమిక్ సంవత్సరంపై ఆధారపడి మారుతుంది. ఖచ్చితమైన మరియు తాజా వివరాల కోసం KLH వెబ్‌సైట్‌లోని Fee Structure లేదా Admissions విభాగాన్ని చూడండి.',
        'विस्तृत फीस स्ट्रक्चर प्रोग्राम, कोटा और अकादमिक वर्ष पर निर्भर करता है। सही और अपडेटेड जानकारी के लिए KLH वेबसाइट के Fee Structure या Admissions सेक्शन को देखें।'
      );
    } else if (q.includes('scholarships or fee waivers')) {
      answer = pick(
        'KLH provides scholarships or fee concessions based on merit and other criteria. Exact eligibility, percentage of waiver and application process are given in the Scholarships or Fee Concessions section of the Admissions page.',
        'KLH మెరిట్ మరియు ఇతర ప్రమాణాల ఆధారంగా స్కాలర్‌షిప్స్ లేదా ఫీ కన్సెషన్స్ అందిస్తుంది. అర్హత, వేవర్ శాతం మరియు అప్లికేషన్ ప్రక్రియ గురించి వివరాలు Admissions పేజీలోని Scholarships/Fee Concessions విభాగంలో ఉంటాయి.',
        'KLH मेधावी और अन्य मानदंडों के आधार पर छात्रवृत्ति या फीस में छूट प्रदान करता है। पात्रता, छूट का प्रतिशत और आवेदन प्रक्रिया के बारे में विवरण Admissions पेज के Scholarships/Fee Concessions सेक्शन में दिए होते हैं।'
      );
    } else if (q.includes('is hostel fee separate from tuition fee')) {
      answer = pick(
        'Yes, hostel fee is usually separate from the tuition fee and may vary depending on room type and facilities. Please contact the hostel or admissions office for current hostel fee details.',
        'అవును, హాస్టల్ ఫీజు సాధారణంగా ట్యూషన్ ఫీజు నుండి వేరు గా ఉంటుంది మరియు గది రకం, సౌకర్యాలపై ఆధారపడి మారవచ్చు. ప్రస్తుత హాస్టల్ ఫీజు వివరాల కోసం హాస్టల్ లేదా Admissions కార్యాలయాన్ని సంప్రదించండి.',
        'हाँ, हॉस्टल फीस आमतौर पर ट्यूशन फीस से अलग होती है और कमरे के प्रकार व सुविधाओं के अनुसार बदल सकती है। मौजूदा हॉस्टल फीस जानने के लिए हॉस्टल या Admissions कार्यालय से संपर्क करें।'
      );
    } else if (q.includes('fees different for nri') || q.includes('management quota')) {
      answer = pick(
        'Fees for NRI and management quota seats can be different from regular seats. The exact structure is shared by the Admissions office and in official notifications for each academic year.',
        'NRI మరియు మేనేజ్‌మెంట్ కోటా సీట్లకు ఫీజులు సాధారణ సీట్ల కంటే వేరుగా ఉండవచ్చు. ప్రతి అకాడమిక్ సంవత్సరానికి సంబంధించిన ఖచ్చితమైన ఫీజు నిర్మాణాన్ని Admissions కార్యాలయం మరియు అధికారిక నోటిఫికేషన్లు వెల్లడిస్తాయి.',
        'NRI और मैनेजमेंट कोटा सीटों की फीस सामान्य सीटों से अलग हो सकती है। हर अकादमिक वर्ष के लिए सटीक फीस संरचना Admissions कार्यालय और आधिकारिक नोटिफिकेशन द्वारा जारी की जाती है।'
      );

    // ===================== Hostel & Transport =====================
    } else if (q.includes('is hostel facility available at klh hyderabad')) {
      answer = pick(
        'KLH Hyderabad provides hostel facilities for students, subject to availability. Details about room types, allocation and rules are shared by the hostel office.',
        'KLH హైదరాబాద్‌లో విద్యార్థుల కోసం హాస్టల్ సౌకర్యం అందుబాటులో ఉంది (అవైలబిలిటీ ఆధారంగా). గది రకాలు, ఆలొట్మెంట్ విధానం మరియు రూల్స్ గురించి వివరాలు హాస్టల్ కార్యాలయం తెలుపుతుంది.',
        'KLH हैदराबाद छात्रों के लिए हॉस्टल सुविधा प्रदान करता है (उपलब्धता के आधार पर)। कमरे के प्रकार, आवंटन प्रक्रिया और नियमों की जानकारी हॉस्टल कार्यालय से मिलती है।'
      );
    } else if (q.includes('what are the hostel facilities and rules')) {
      answer = pick(
        'Hostel facilities typically include furnished rooms and common amenities. Rules cover entry/exit timings, visitors and discipline. For exact facilities and rules, please refer to the hostel handbook or contact the hostel office.',
        'హాస్టల్‌లో సాధారణంగా అవసరమైన ఫర్నిష్డ్ గదులు మరియు సాధారణ సౌకర్యాలు ఉంటాయి. రూల్స్‌లో ఎంట్రీ/ఎగ్జిట్ టైమింగ్‌లు, సందర్శకులు మరియు డిసిప్లిన్‌కు సంబంధించిన నియమాలు ఉంటాయి. ఖచ్చితమైన వివరాల కోసం హాస్టల్ హ్యాండ్‌బుక్ లేదా హాస్టల్ కార్యాలయాన్ని సంప్రదించండి.',
        'हॉस्टल में आमतौर पर सुसज्जित कमरे और आवश्यक सामान्य सुविधाएँ होती हैं। नियमों में प्रवेश/निकास समय, विज़िटर और अनुशासन से जुड़े नियम शामिल होते हैं। सटीक जानकारी के लिए हॉस्टल हैंडबुक या हॉस्टल कार्यालय से संपर्क करें।'
      );
    } else if (q.includes('college transport/bus facility available') || q.includes('bus facility available')) {
      answer = pick(
        'The college usually operates transport or bus facilities on selected routes. Routes, timings and transport fees are informed by the transport office and official notices.',
        'కళాశాల సాధారణంగా కొన్ని రూట్లపై ట్రాన్స్‌పోర్ట్/బస్ సౌకర్యం అందిస్తుంది. రూట్లు, టైమింగ్‌లు మరియు ట్రాన్స్‌పోర్ట్ ఫీజుల వివరాలను ట్రాన్స్‌పోర్ట్ కార్యాలయం మరియు అధికారిక నోటీసులు తెలియజేస్తాయి.',
        'कॉलेज आम तौर पर चुनिंदा रूट्स पर ट्रांसपोर्ट/बस सुविधा चलाता है। रूट, समय और ट्रांसपोर्ट फीस की जानकारी ट्रांसपोर्ट कार्यालय और आधिकारिक नोटिस के माध्यम से दी जाती है।'
      );
    } else if (q.includes('how far is the campus from main city areas')) {
      answer = pick(
        'The KLH Hyderabad campus is located at Aziz Nagar on Moinabad Road. Distance and travel time depend on your starting point in the city; please check maps or talk to the transport office for route details.',
        'KLH హైదరాబాద్ క్యాంపస్ మోయినాబాద్ రోడ్‌పై ఉన్న అజీజ్ నగర్‌లో ఉంది. దూరం మరియు ప్రయాణ సమయం మీరు ఎక్కడి నుంచి వస్తున్నారో దానిపై ఆధారపడి ఉంటుంది; రూట్ వివరాల కోసం మ్యాప్స్ లేదా ట్రాన్స్‌పోర్ట్ కార్యాలయాన్ని చూడండి.',
        'KLH हैदराबाद कैंपस मुइनाबाद रोड पर अज़ीज़ नगर में स्थित है। दूरी और यात्रा का समय आपके शहर के कौन से हिस्से से आ रहे हैं, उस पर निर्भर करता है; रूट जानकारी के लिए मैप्स देखें या ट्रांसपोर्ट कार्यालय से संपर्क करें।'
      );

    // ===================== Placements & Internships =====================
    } else if (q.includes('how are the placements at klh')) {
      answer = pick(
        'KLH reports good placements with multiple companies visiting the campus each year. Average and highest packages vary by batch and branch and are usually shown on the Training & Placements page.',
        'KLH లో ప్రతి సంవత్సరం అనేక కంపెనీలు క్యాంపస్‌కు వచ్చి మంచి ప్లేస్‌మెంట్స్ ఇస్తున్నట్లు నివేదించబడింది. యావరేజ్ మరియు హయ్యెస్ట్ ప్యాకేజీలు బ్యాచ్ మరియు బ్రాంచ్ ఆధారంగా మారుతూ ఉంటాయి, సాధారణంగా Training & Placements పేజీలో చూపిస్తారు.',
        'KLH में हर साल कई कंपनियाँ कैंपस आकर अच्छे प्लेसमेंट देती हैं। औसत और अधिकतम पैकेज बैच और ब्रांच के अनुसार बदलते हैं और आम तौर पर Training & Placements पेज पर दिखाए जाते हैं।'
      );
    } else if (q.includes('which companies visit klh for placements')) {
      answer = pick(
        'Companies from IT, core engineering and other sectors visit KLH for campus placements. The exact list of recruiters changes every year and is shared in the placement reports and on the website.',
        'IT, కోర్ ఇంజినీరింగ్ మరియు ఇతర రంగాల నుండి కంపెనీలు KLH లో క్యాంపస్ ప్లేస్‌మెంట్స్ కోసం వస్తాయి. కంపెనీల ఖచ్చితమైన జాబితా ప్రతి సంవత్సరం మారుతుంది మరియు ప్లేస్‌మెంట్ రిపోర్టులు మరియు వెబ్‌సైట్‌లో భాగస్వామ్యం చేస్తారు.',
        'IT, कोर इंजीनियरिंग और अन्य सेक्टरों की कंपनियाँ KLH में कैंपस प्लेसमेंट के लिए आती हैं। रिक्रूटर्स की सटीक सूची हर साल बदलती है और प्लेसमेंट रिपोर्ट व वेबसाइट पर साझा की जाती है।'
      );
    } else if (q.includes('are internships supported by the college')) {
      answer = pick(
        'Yes, students are encouraged to do internships and projects. Departments and the placement cell guide students towards suitable internship opportunities as per academic guidelines.',
        'అవును, విద్యార్థులు ఇంటర్న్‌షిప్స్ మరియు ప్రాజెక్టులు చేయాలని ప్రోత్సహించబడతారు. ప్రతి విభాగం మరియు ప్లేస్‌మెంట్ సెల్, అకాడమిక్ గైడ్‌లైన్‌ల ప్రకారం సరైన ఇంటర్న్‌షిప్ అవకాశాలపై మార్గనిర్దేశనం చేస్తాయి.',
        'हाँ, छात्रों को इंटर्नशिप और प्रोजेक्ट करने के लिए प्रोत्साहित किया जाता है। विभाग और प्लेसमेंट सेल, अकादमिक गाइडलाइंस के अनुसार उपयुक्त इंटर्नशिप अवसरों के लिए छात्रों का मार्गदर्शन करते हैं।'
      );
    } else if (q.includes('what is the average and highest package')) {
      answer = pick(
        'Average and highest package figures differ by batch and branch. KLH usually publishes these numbers in yearly placement reports and brochures.',
        'యావరేజ్ మరియు హయ్యెస్ట్ ప్యాకేజీ గణాంకాలు బ్యాచ్ మరియు బ్రాంచ్ ఆధారంగా మారుతాయి. KLH సాధారణంగా వీటిని ప్రతి సంవత్సరం ప్లేస్‌మెంట్ రిపోర్టుల్లో మరియు బ్రోషర్‌లలో ప్రచురిస్తుంది.',
        'औसत और सबसे अधिक पैकेज के आंकड़े बैच और ब्रांच के अनुसार बदलते हैं। KLH आम तौर पर इन्हें सालाना प्लेसमेंट रिपोर्ट और ब्रोशर में प्रकाशित करता है।'
      );

    // ===================== Campus Life =====================
    } else if (q.includes('what clubs and activities are available')) {
      answer = pick(
        'KLH has various technical, cultural and sports clubs where students can join activities, events and competitions. Details are shared through departments and student affairs.',
        'KLH లో విద్యార్థులు పాల్గొనగలిగే పలు టెక్నికల్, కల్చరల్ మరియు స్పోర్ట్స్ క్లబ్బులు ఉన్నాయి. కార్యక్రమాలు మరియు ఈవెంట్స్ వివరాలు విభాగాలు మరియు స్టూడెంట్ అఫైర్స్ ద్వారా అందించబడతాయి.',
        'KLH में कई टेक्निकल, कल्चरल और स्पोर्ट्स क्लब हैं जहां छात्र गतिविधियों, इवेंट्स और प्रतियोगिताओं में भाग ले सकते हैं। विवरण विभागों और छात्र कल्याण प्रकोष्ठ के माध्यम से साझा किए जाते हैं।'
      );
    } else if (q.includes('are there technical and cultural fests')) {
      answer = pick(
        'Yes, the college conducts technical fests, hackathons and cultural events periodically. Dates and details are announced on the website and official social media handles.',
        'అవును, కాలేజ్ నిరంతరం టెక్నికల్ ఫెస్టులు, హ్యాకథాన్లు మరియు కల్చరల్ ఈవెంట్స్ నిర్వహిస్తుంది. వాటి తేదీలు మరియు వివరాలు వెబ్‌సైట్ మరియు అధికారిక సోషల్ మీడియా హ్యాండిల్స్ ద్వారా ప్రకటించబడతాయి.',
        'हाँ, कॉलेज समय-समय पर टेक्निकल फेस्ट, हैकाथॉन और सांस्कृतिक कार्यक्रम आयोजित करता है। तारीखें और विवरण वेबसाइट और आधिकारिक सोशल मीडिया हैंडल पर घोषित किए जाते हैं।'
      );
    } else if (q.includes('what are the lab and library facilities')) {
      answer = pick(
        'KLH provides branch-specific labs along with a central library and digital resources. Lab and library timings are shared by the departments and admin office each semester.',
        'KLH లో ప్రతి బ్రాంచ్‌కు సంబంధించిన ల్యాబ్‌లు, సెంట్రల్ లైబ్రరీ మరియు డిజిటల్ రిసోర్సులు అందుబాటులో ఉంటాయి. ల్యాబ్ మరియు లైబ్రరీ టైమింగ్స్ ప్రతి సెమిస్టర్‌లో విభాగాలు మరియు అడ్మిన్ కార్యాలయం తెలియజేస్తాయి.',
        'KLH प्रत्येक ब्रांच के लिए लैब्स के साथ एक सेंट्रल लाइब्रेरी और डिजिटल संसाधन प्रदान करता है। लैब और लाइब्रेरी के समय हर सेमेस्टर विभागों और प्रशासन कार्यालय द्वारा बताए जाते हैं।'
      );
    } else if (q.includes('what is the daily college schedule like')) {
      answer = pick(
        'The daily college schedule includes fixed working hours, periods and breaks, defined in the academic calendar and timetable. Students receive their detailed timetable from the department at the start of the semester.',
        'కాలేజ్ రోజువారీ షెడ్యూల్‌లో ఫిక్స్‌డ్ వర్కింగ్ అవర్స్, పీరియడ్లు మరియు బ్రేక్స్ ఉంటాయి, ఇవన్నీ అకాడమిక్ కాలెండర్ మరియు టైమ్‌టేబుల్‌లో నిర్వచించబడతాయి. ప్రతి సెమిస్టర్ ప్రారంభంలో విద్యార్థులు తమ డీటైల్ టైమ్‌టేబుల్‌ను విభాగం నుంచి పొందుతారు.',
        'कॉलेज के दैनिक शेड्यूल में निर्धारित कार्य समय, पीरियड्स और ब्रेक शामिल होते हैं, जो अकादमिक कैलेंडर और टाइमटेबल में तय होते हैं। सेमेस्टर की शुरुआत में छात्र अपना विस्तृत टाइमटेबल विभाग से प्राप्त करते हैं।'
      );
    }
    if (!answer) {
      answer = pick(
        "I may not have exact details for this question. Please refer to the official KLH website or admissions office for precise information.",
        "ఈ ప్రశ్నకు నాకు ఖచ్చితమైన వివరాలు లేకపోవచ్చు. దయచేసి అధికారిక KLH వెబ్‌సైట్ లేదా అడ్మిషన్స్ కార్యాలయాన్ని చూడండి.",
        "इस प्रश्न के लिए मेरे पास सटीक विवरण नहीं हो सकता। कृपया आधिकारिक KLH वेबसाइट या एडमिशन कार्यालय से संपर्क करें।"
      );
    }


    return NextResponse.json({ answer });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        answer:
          'There was an error processing your question. Please try again after some time.',
      },
      { status: 500 }
    );
  }
}
