$(document).ready(function () {

    // =========================================================================
    // LANGUAGE TRANSLATION SYSTEM
    // =========================================================================
    
    let currentLang = localStorage.getItem('lang') || 'ar';

    // This is the master dictionary for all text on the website.
    const translations = {

        // --- GLOBAL & NAVIGATION ---
        pageTitle: { ar: "مجمع الاستشاريين - الاستشارات الهندسية والتقييم", en: "Consultants Group - Engineering Consulting and Valuation" },
        logoText: { ar: "مجمع الاستشاريين", en: "Consultants Group" },
        navAbout: { ar: "من نحن", en: "About Us" },
        navServices: { ar: "خدماتنا", en: "Our Services" },
        navClients: { ar: "عملاؤنا", en: "Our Clients" },
        navContact: { ar: "اتصل بنا", en: "Contact Us" },
        navProjects: { ar: "المشاريع", en: "Projects" },
        navCertifications: { ar: "الشهادات", en: "Certifications" },
        serviceLand: { ar: "الأراضي والمباني", en: "Land and Buildings" },
        serviceMachinery: { ar: "الآلات والمعدات", en: "Machinery and Equipment" },
        serviceGoods: { ar: "البضائع", en: "Goods" },
        
        // --- INDEX PAGE: HERO SECTION ---
        heroTitle: { ar: "مرحباً بكم في مجمع الاستشاريين", en: "Welcome to Consultants Group" },
        heroSubtitle: { ar: "الاستشارات الهندسية لتقييم الأصول والعقارات والمشاريع", en: "Engineering Consulting for Asset, Real Estate, and Project Valuation" },
        heroDescription: { ar: "شركة مجمع الاستشاريين ( شركة مساهمة مصرية ) تعمل في مجال تقديم الخدمات الاستشارية الهندسية", en: "Consultants Group (An Egyptian joint-stock company) operates in the field of providing engineering consulting services" },
        heroButton: { ar: "استكشف خدماتنا", en: "Explore Our Services" },
        
        // --- INDEX PAGE: SERVICES CARDS SECTION ---
        mainServicesTitle: { ar: "خدماتنا الرئيسية", en: "Our Main Services" },
        
        // --- INDEX PAGE: ABOUT US ---
        aboutTitle: { ar: "من نحن", en: "About Us" },
        aboutP1: { ar: "شركة مجمع الاستشاريين (شركة مساهمة مصرية) تعمل في مجال تقديم الخدمات الاستشارية الهندسية. تأسست الشركة عام 1985 طبقاً للقانون رقم 159 لسنة 1981 وتمارس نشاطها منذ ذلك التاريخ.", en: "Consultants Group (an Egyptian joint-stock company) operates in the field of providing engineering consulting services. The company was established in 1985 in accordance with Law No. 159 of 1981 and has been practicing its activity since that date." },
        aboutLi1: { ar: `<i class="fas fa-certificate"></i>مسجلة كـ بيت خبرة لدى البنك المركزي المصري في كافة التخصصات "رقم 2".`, en: `<i class="fas fa-certificate"></i>Registered as an expertise house with the Central Bank of Egypt in all specialties, "No. 2".` },
        aboutLi2: { ar: `<i class="fas fa-building"></i>مسجلة كـ بيت خبرة لدى هيئة الرقابة المالية في مجال التقييم العقارى "رقم 11".`, en: `<i class="fas fa-building"></i>Registered as an expertise house with the Financial Regulatory Authority in the field of real estate appraisal, "No. 11".` },
        aboutLi3: { ar: `<i class="fas fa-user-tie"></i>مجلس الإدارة للشركة مسجل فى سجل خبراء التقييم العقارى لدى هيئة الرقابة المالية (رقم 190).`, en: `<i class="fas fa-user-tie"></i>The company's board of directors is registered in the real estate appraisal experts registry at the Financial Regulatory Authority (No. 190).` },
        
        // --- INDEX PAGE: WHY CHOOSE US ---
        whyUsTitle: { ar: "لماذا تختار مجمع الاستشاريين؟", en: "Why Choose Consultants Group?" },
        whyUsSubtitle: { ar: "6 أسباب مقنعة لاختيارنا", en: "6 Compelling Reasons to Choose Us" },
        feature1Title: { ar: "تسجيل متعدد التخصصات", en: "Multi-disciplinary Registration" },
        feature1Desc: { ar: "مسجلون في البنك المركزي المصري في جميع التخصصات الثلاثة (الأراضي/المباني، الآلات/المعدات، والبضائع)", en: "Registered with the Central Bank of Egypt in all three specialties (Land/Buildings, Machinery/Equipment, and Goods)" },
        feature2Title: { ar: "40+ عاماً من الخبرة", en: "40+ Years of Experience" },
        feature2Desc: { ar: "تأسست عام 1985 وأعدت أكثر من 4,000 تقرير فني في مختلف القطاعات", en: "Established in 1985 and has prepared over 4,000 technical reports in various sectors" },
        feature3Title: { ar: "اعتماد مزدوج", en: "Dual Accreditation" },
        feature3Desc: { ar: "مسجلون لدى البنك المركزي المصري والهيئة العامة للرقابة المالية لتقييم العقارات", en: "Registered with the Central Bank of Egypt and the Financial Regulatory Authority for real estate appraisal" },
        feature4Title: { ar: "عملاء مرموقون", en: "Prestigious Clients" },
        feature4Desc: { ar: "نعمل مع البنوك الكبرى والجهات الحكومية والهيئات القومية", en: "We work with major banks, government agencies, and national authorities" },
        feature5Title: { ar: "نطاق خدمات شامل", en: "Comprehensive Service Scope" },
        feature5Desc: { ar: "تقييم الأراضي، العقارات، المصانع، البضائع، والمركبات", en: "Valuation of land, real estate, factories, goods, and vehicles" },
        feature6Title: { ar: "الشفافية والامتثال القانوني", en: "Transparency and Legal Compliance" },
        feature6Desc: { ar: "توثيق كامل للسجلات التجارية والضريبية والامتثال للوائح", en: "Full documentation of commercial and tax records and compliance with regulations" },
        
        // --- INDEX PAGE: CLIENTS SECTION ---
        clientsTitle: { ar: " عملاؤنا", en: "Our Clients" },
        clientsBanks: { ar: "البنوك", en: "Banks" },
        clientsGov: { ar: "الجهات الحكومية ", en: "Government Entities" },
        clientAhlyBank: { ar: "البنك الأهلي المصري", en: "National Bank of Egypt" },
        clientBarakaBank: { ar: "بنك البركة مصر", en: "Al Baraka Bank Egypt" },
        clientSuezCanalBank: { ar: "بنك قناة السويس", en: "Suez Canal Bank" },
        clientFaisalBank: { ar: "بنك فيصل الإسلامي", en: "Faisal Islamic Bank" },
        clientUnitedBank: { ar: "المصرف المتحد", en: "The United Bank" },
        clientCairoBank: { ar: "بنك القاهرة", en: "Banque du Caire" },
        clientAgriculturalBank: { ar: "البنك الزراعي المصري", en: "Agricultural Bank of Egypt" },
        clientNasserBank: { ar: "بنك ناصر الاجتماعي", en: "Nasser Social Bank" },
        clientMetalIndustries: { ar: "الشركة القابضة للصناعات المعدنية", en: "Metallurgical Industries Holding Company" },
        clientNationalAssetManagement: { ar: "الشركة القومية لإدارة الأصول والاستثمار", en: "National Company for Asset Management and Investment" },
        clientCottonTextile: { ar: "الشركة القابضة للقطن والغزل والنسيج", en: "Cotton & Textile Industries Holding Company" },
        clientEGPC: { ar: "الهيئة العامة للبترول", en: "Egyptian General Petroleum Corporation (EGPC)" },
        clientEGAS: { ar: `الشركة المصرية القابضة للغازات الطبيعية "إيجاس"`, en: `Egyptian Natural Gas Holding Company "EGAS"` },

        // --- CONTACT BANNER & SECTION ---
        contactBannerTitle: { ar: "اتصل بنا", en: "Contact Us" },
        contactBannerDesc: { ar: "هل لديك أسئلة حول خدماتنا؟ تحتاج إلى مساعدة؟ أو ترغب في تقديم ملاحظات؟ نحن هنا لمساعدتك. تواصل معنا باستخدام النموذج أدناه أو اتصل بنا.", en: "Have questions about our services? Need assistance? Or want to provide feedback? We are here to help you. Contact us using the form below or give us a call." },
        contactFormTitle: { ar: "تواصل معنا", en: "Get in Touch" },
        contactInfoTitle: { ar: "معلومات التواصل", en: "Contact Information" },
        contactInfoAddressLabel: { ar: "العنوان:", en: "Address:" },
        contactInfoAddress: { ar: "48 ش يوسف عباس - مدينة نصر - الدور الثاني - شقة (22) - القاهرة - مصر", en: "48 Youssef Abbas St - Nasr City - 2nd Floor - Apt (22) - Cairo - Egypt" },
        contactInfoEmailLabel: { ar: "البريد الالكترونى:", en: "Email:" },
        contactInfoPhoneLabel: { ar: "تليفون/فاكس:", en: "Phone/Fax:" },
        contactInfoDirectLabel: { ar: "الاتصال المباشر:", en: "Direct Contact:" },
        contactInfoDirect: { ar: `مهندس / مصطفى حـســن فراج : <a href="tel:+201068021167">01068021167</a>`, en: `Eng. Mostafa Hassan Farag: <a href="tel:+201068021167">01068021167</a>` },

        // --- SERVICE PAGES: SHARED ELEMENTS ---
        quoteTitle: { ar: "هل تحتاج لتقييم؟", en: "Need a Valuation?" },
        quoteDesc: { ar: "تواصل معنا للحصول على عرض سعر مخصص لمشروعك.", en: "Contact us to get a custom quote for your project." },
        quoteBtn: { ar: "اطلب عرض سعر", en: "Request a Quote" },
        relatedServicesTitle: { ar: "خدمات أخرى", en: "Other Services" },
        
        // --- SERVICE PAGE: FEASIBILITY STUDIES ---
        feasibilityStudies: { ar: "دراسات الجدوى", en: "Feasibility Studies" },
        feasibilityStudiesTitle: { ar: "دراسات الجدوى - مجمع الاستشاريين", en: "Feasibility Studies - Consultants Group" },
        feasibilityStudiesHeroTitle: { ar: "دراسات الجدوى", en: "Feasibility Studies" },
        feasibilityStudiesIntroTitle: { ar: "اتخذ قرارات استثمارية مبنية على بيانات دقيقة", en: "Make Investment Decisions Based on Accurate Data" },
        feasibilityStudiesIntroP: { ar: "دراسة الجدوى هي حجر الزاوية لأي مشروع ناجح. نحن نقدم تحليلات معمقة وشاملة تمكنك من فهم جميع جوانب مشروعك المقترح، وتقييم فرص نجاحه، وتحديد المخاطر المحتملة قبل استثمار موارد قيمة.", en: "A feasibility study is the cornerstone of any successful project. We provide in-depth, comprehensive analyses that enable you to understand all aspects of your proposed project, assess its chances of success, and identify potential risks before investing valuable resources." },
        componentsTitle: { ar: "نهجنا الشامل في دراسات الجدوى", en: "Our Comprehensive Approach to Feasibility Studies" },
        marketStudyTitle: { ar: "الدراسة التسويقية", en: "Market Study" },
        marketStudyDesc: { ar: "تحليل حجم السوق، المنافسين، شرائح العملاء المستهدفة، وتوقعات النمو لتحديد مدى جدوى فكرة المشروع.", en: "Analysis of market size, competitors, target customer segments, and growth forecasts to determine the viability of the project idea." },
        technicalStudyTitle: { ar: "الدراسة الفنية", en: "Technical Study" },
        technicalStudyDesc: { ar: "تقييم المتطلبات الفنية والتشغيلية للمشروع، بما في ذلك الموقع، التكنولوجيا المستخدمة، والموارد اللازمة.", en: "Evaluation of the project's technical and operational requirements, including location, technology used, and necessary resources." },
        financialStudyTitle: { ar: "الدراسة المالية", en: "Financial Study" },
        financialStudyDesc: { ar: "تحليل التكاليف الاستثمارية، توقعات الإيرادات، الربحية، والعائد على الاستثمار لتحديد الجدوى المالية.", en: "Analysis of investment costs, revenue forecasts, profitability, and return on investment to determine financial viability." },
        processTitle: { ar: "منهجية عملنا", en: "Our Process" },
        step1Title: { ar: "الاستشارة المبدئية", en: "Initial Consultation" },
        step1Desc: { ar: "فهم أهداف مشروعك وتحديد نطاق الدراسة المطلوب.", en: "Understanding your project goals and defining the required scope of the study." },
        step2Title: { ar: "جمع البيانات والتحليل", en: "Data Collection & Analysis" },
        step2Desc: { ar: "إجراء أبحاث السوق وجمع البيانات الفنية والمالية اللازمة.", en: "Conducting market research and gathering necessary technical and financial data." },
        step3Title: { ar: "إعداد التقرير", en: "Report Preparation" },
        step3Desc: { ar: "صياغة تقرير مفصل يشمل جميع نتائج التحليل والتوصيات.", en: "Drafting a detailed report that includes all analysis findings and recommendations." },
        step4Title: { ar: "المناقشة والتسليم", en: "Discussion & Delivery" },
        step4Desc: { ar: "عرض التقرير النهائي ومناقشة النتائج معك لضمان الوضوح الكامل.", en: "Presenting the final report and discussing the results with you to ensure complete clarity." },
        finalCtaTitle: { ar: "هل أنت جاهز لبدء مشروعك بثقة؟", en: "Ready to Start Your Project with Confidence?" },
        finalCtaDesc: { ar: "دع خبرائنا يساعدونك في تقييم فكرتك. تواصل معنا اليوم.", en: "Let our experts help you evaluate your idea. Contact us today." },
        stepNum1: { ar: "١", en: "1" },
        stepNum2: { ar: "٢", en: "2" },
        stepNum3: { ar: "٣", en: "3" },
        stepNum4: { ar: "٤", en: "4" },

        // --- PROJECTS PAGE (INCLUDING CHARTS) ---
        projectPageTitle: { ar: "المشاريع - مجمع الاستشاريين", en: "Projects - Consultants Group" },
        projectHeroTitle: { ar: "مشاريعنا", en: "Our Projects" },
        chartsSectionTitle: { ar: "توزيع تقاريرنا حسب القطاع", en: "Distribution of Our Reports by Sector" },
        chart1Title: { ar: "نسبة التقارير لكل قطاع", en: "Percentage of Reports per Sector" },
        chart2Title: { ar: "عدد التقارير سنوياً", en: "Number of Reports Annually" },
        doughnutLabelFeasibility: { ar: "دراسة جدوى", en: "Feasibility Study" },
        doughnutLabelFollowUp: { ar: "متابعة", en: "Follow-up" },
        doughnutLabelContracting: { ar: "مقاولات", en: "Contracting" },
        doughnutLabelEquipment: { ar: "تقييم آلات ومعدات", en: "Equipment & Machinery" },
        doughnutLabelRealEstate: { ar: "تقييم عقاري", en: "Real Estate Evaluation" },
        doughnutLabelIntegrated: { ar: "تقييم متكامل", en: "Integrated Evaluation" },
        doughnutLabelFeasibilityAccred: { ar: "اعتماد دراسة جدوى", en: "Feasibility Study Accred." },
        doughnutLabelGoods: { ar: "تقييم بضائع", en: "Goods Evaluation" },
        doughnutLabelCar: { ar: "تقييم سيارات", en: "Car Evaluation" },
        doughnutLabelPriceOffers: { ar: "تقييم عروض أسعار", en: "Price Offers Evaluation" },
        barChartDatasetLabel: { ar: "إجمالي التقارير سنوياً", en: "Total Reports per Year" },
        tooltipReports: { ar: "تقارير", en: "reports" },

        // --- CERTIFICATIONS PAGE ---
        certPageTitle: { ar: "الشهادات والاعتمادات - مجمع الاستشاريين", en: "Certifications & Accreditations - Consultants Group" },
        certificationHeroTitle: { ar: "شهاداتنا واعتماداتنا", en: "Our Certifications and Accreditations" },
        certificationContentMainTitle: { ar: "فخورون باعتماداتنا ومؤهلاتنا", en: "Proudly Accredited and Qualified" },
        certificationContentDesc: { ar: "يلتزم مجمع الاستشاريين بأعلى معايير الجودة والاحترافية. تضمن شهاداتنا واعتماداتنا من الهيئات الرقابية الرائدة أنك تتعامل مع فريق من الخبراء المؤهلين والموثوقين.", en: "Consultants Group adheres to the highest standards of quality and professionalism. Our certificates and accreditations from leading regulatory bodies ensure that you are dealing with a team of qualified and trusted experts." },
        cert1Title: { ar: "شهادة تسجيل البنك المركزي", en: "Central Bank Registration Certificate" },
        cert1Desc: { ar: "مسجلون كبيت خبرة رقم 2 لدى البنك المركزي المصري.", en: "Registered as Expertise House No. 2 with the Central Bank of Egypt." },
        cert2Title: { ar: "ترخيص هيئة الرقابة المالية", en: "Financial Regulatory Authority License" },
        cert2Desc: { ar: "مسجلون لدى هيئة الرقابة المالية في التقييم العقاري رقم 11.", en: "Registered with the Financial Regulatory Authority for Real Estate Appraisal, No. 11." },
        cert3Title: { ar: "شهادة الجودة (مثال)", en: "Quality Certificate (Example)" },
        cert3Desc: { ar: "مثال لشهادة جودة عالمية (مثل ISO 9001) إن وجدت.", en: "Example of an international quality certificate (e.g., ISO 9001) if applicable." },
        cert4Title: { ar: "البطاقة الضريبية", en: "Tax Card" },
        cert4Desc: { ar: "توضيح للبطاقة الضريبية وامتثال الشركة الضريبي.", en: "Clarification of the Tax Card and the company's tax compliance." },
    };

    const translatePage = () => {
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[key] && translations[key][currentLang]) {
                $(element).html(translations[key][currentLang]);
            }
        });
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    };

    const updateChartsForLanguage = () => {
        if (document.getElementById('sectorDoughnutChart') && document.getElementById('yearlyBarChart')) {
            const doughnutLabels = [
                translations.doughnutLabelFeasibility[currentLang],
                translations.doughnutLabelFollowUp[currentLang],
                translations.doughnutLabelContracting[currentLang],
                translations.doughnutLabelEquipment[currentLang],
                translations.doughnutLabelRealEstate[currentLang],
                translations.doughnutLabelIntegrated[currentLang],
                translations.doughnutLabelFeasibilityAccred[currentLang],
                translations.doughnutLabelGoods[currentLang],
                translations.doughnutLabelCar[currentLang],
                translations.doughnutLabelPriceOffers[currentLang],
            ];
            
            const tooltipUnit = translations.tooltipReports[currentLang];
            const barLabel = translations.barChartDatasetLabel[currentLang];

            // Functions from project-charts.js are called here
            createDoughnutChart(doughnutLabels, tooltipUnit);
            createBarChart(barLabel, tooltipUnit);
        }
    };

    $('#toggle-lang').click(function(e) {
        e.preventDefault(); 
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', currentLang);
        
        translatePage();
        updateChartsForLanguage();
    });

    // Initial load calls
    translatePage();
    updateChartsForLanguage();

   // =========================================================================
    // MOBILE NAVIGATION & PAGE ANIMATIONS
   // =========================================================================
    const hamburger = $(".hamburger");
    const navMenuContainer = $(".nav-menu-container");
    const closeIcon = $(".close-icon");

    hamburger.click(function() {
        navMenuContainer.addClass("active");
    });

    closeIcon.click(function(e) {
        e.preventDefault();
        navMenuContainer.removeClass("active");
    });

    $('.dropdown-container > a').click(function(e) {
        if ($(window).width() <= 992) {
            e.preventDefault();
            $(this).parent().siblings('.dropdown-container').removeClass('active').find('.dropdown-menu').slideUp('fast');
            $(this).parent().toggleClass('active');
            $(this).siblings('.dropdown-menu').slideToggle('fast');
        }
    });

    // --- FIX 1: RESTORED CHART HOVER ANIMATION ---
    // This section adds back the hover effect to re-animate the charts.
    const doughnutContainer = $('#doughnutChartContainer');
    const barContainer = $('#barChartContainer');

    if (doughnutContainer.length) { 
        doughnutContainer.on('mouseenter', function() {
            // We call the main update function, which redraws the chart with animation
            updateChartsForLanguage(); 
        });
    }
    if (barContainer.length) {
        barContainer.on('mouseenter', function() {
            updateChartsForLanguage();
        });
    }

    // --- FIX 2: RESTORED SCROLL ANIMATION REPLAY ---
    // The "else" block is added back to make animations trigger every time.
    const animatedElements = document.querySelectorAll(".scroll-animate");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                // This line makes the animation replay when you scroll away and back
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.3 }); // Reset to original threshold

    animatedElements.forEach(element => { observer.observe(element); });
});