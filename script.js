/**
 * LifeLens Career AI — Vanilla JS SPA
 */
(function () {
  'use strict';

  const STORAGE = {
    USER: 'lifelensUser',
    LOGGED_IN: 'lifelensLoggedIn',
    SAVED_JOBS: 'lifelensSavedJobs',
    THEME: 'lifelensTheme',
    PRESETS: 'lifelensJobPresets',
  };

  const INVALID_SKILLS = [
    'smoking', 'drinking', 'sleeping', 'eating', 'gambling', 'fighting',
    'scrolling', 'partying', 'watching tv', 'doing nothing', 'lazy', 'procrastinating'
  ];

  const CAREER_KEYWORDS = [
    'javascript', 'python', 'java', 'react', 'html', 'css', 'sql', 'excel', 'communication',
    'marketing', 'sales', 'design', 'analysis', 'management', 'leadership', 'customer service',
    'accounting', 'nursing', 'teaching', 'writing', 'research', 'data', 'cloud', 'network',
    'support', 'admin', 'finance', 'hr', 'operations', 'engineering', 'software', 'web',
    'graphic', 'video', 'content', 'seo', 'social media', 'project', 'agile', 'git'
  ];

    const PROTECTED_SECTIONS = ['search', 'skills', 'saved', 'profile'];
  const HERO_TITLE = 'Your Career Journey Starts Here';
  const HERO_BODY = 'Create your profile, explore jobs, and receive guided recommendations based on your goals.';

const LIFELENS_JOB_DATA = [{"id":"LL001","title":"Junior Software Developer","company":"TechNova Solutions","location":"Colombo 3, Sri Lanka","job_type":["Full-Time"],"salary":{"min":80000,"max":150000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Build and maintain web applications using modern JavaScript frameworks in a supportive team environment.","match_criteria":{"required_skills":["JavaScript","HTML","CSS"],"preferred_skills":["React","Node.js","Git","Python"],"min_education":"diploma","min_experience_years":0,"max_experience_years":2,"relevant_al_streams":["Technology","Science","Engineering Technology"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["Computer Science","IT","Software Engineering","Information Technology"]}},{"id":"LL002","title":"Mid-Level React Developer","company":"CodeCraft Labs","location":"Colombo 2, Sri Lanka","job_type":["Full-Time","Hybrid"],"salary":{"min":180000,"max":280000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Build scalable front-end applications for fintech clients using React and TypeScript.","match_criteria":{"required_skills":["React","JavaScript","TypeScript"],"preferred_skills":["Redux","GraphQL","Jest","Webpack","Git"],"min_education":"bachelors","min_experience_years":2,"max_experience_years":5,"relevant_al_streams":["Technology","Science","Engineering Technology"],"min_ol_passes":5,"min_al_grade":"C","relevant_fields_of_study":["Computer Science","Software Engineering","IT"]}},{"id":"LL003","title":"Senior Full Stack Engineer","company":"Axiom Digital","location":"Remote","job_type":["Full-Time","Remote"],"salary":{"min":350000,"max":550000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Lead full-stack development of enterprise SaaS products for international clients.","match_criteria":{"required_skills":["Node.js","React","PostgreSQL","Docker"],"preferred_skills":["Kubernetes","AWS","Redis","TypeScript","CI/CD"],"min_education":"bachelors","min_experience_years":5,"max_experience_years":99,"relevant_al_streams":["Technology","Science","Engineering Technology"],"min_ol_passes":6,"min_al_grade":"B","relevant_fields_of_study":["Computer Science","Software Engineering","IT"]}},{"id":"LL004","title":"Python Developer","company":"Wiley Global Technology","location":"Remote","job_type":["Full-Time","Remote"],"salary":{"min":200000,"max":350000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Build backend services and data pipelines for an ed-tech platform using Python.","match_criteria":{"required_skills":["Python","REST APIs","SQL"],"preferred_skills":["Django","FastAPI","PostgreSQL","Docker","AWS"],"min_education":"bachelors","min_experience_years":2,"max_experience_years":6,"relevant_al_streams":["Technology","Science"],"min_ol_passes":5,"min_al_grade":"C","relevant_fields_of_study":["Computer Science","Software Engineering","Mathematics","IT"]}},{"id":"LL005","title":"Mobile App Developer (Flutter)","company":"Rootcode Labs","location":"Colombo 5, Sri Lanka","job_type":["Full-Time"],"salary":{"min":180000,"max":320000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Build cross-platform iOS and Android apps using Flutter for startup clients.","match_criteria":{"required_skills":["Flutter","Dart","Mobile Development"],"preferred_skills":["Firebase","REST APIs","Git","State Management"],"min_education":"diploma","min_experience_years":1,"max_experience_years":5,"relevant_al_streams":["Technology","Science","Engineering Technology"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["Computer Science","IT","Software Engineering"]}},{"id":"LL006","title":"Software QA Engineer","company":"99X Technology","location":"Colombo 3, Sri Lanka","job_type":["Full-Time","Hybrid"],"salary":{"min":120000,"max":220000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Test web and mobile applications to ensure quality standards are met.","match_criteria":{"required_skills":["Manual Testing","Test Case Writing","Bug Reporting"],"preferred_skills":["Selenium","Postman","JIRA","SQL","Agile"],"min_education":"diploma","min_experience_years":1,"max_experience_years":4,"relevant_al_streams":["Technology","Science","Commerce"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["Computer Science","IT","Software Engineering"]}},{"id":"LL007","title":"DevOps Engineer","company":"WSO2","location":"Colombo 1, Sri Lanka","job_type":["Full-Time","Remote"],"salary":{"min":300000,"max":500000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Manage cloud infrastructure and CI/CD pipelines for a global open-source company.","match_criteria":{"required_skills":["Linux","Docker","Kubernetes","CI/CD"],"preferred_skills":["AWS","Terraform","Ansible","Python","Prometheus"],"min_education":"bachelors","min_experience_years":3,"max_experience_years":99,"relevant_al_streams":["Technology","Science","Engineering Technology"],"min_ol_passes":6,"min_al_grade":"B","relevant_fields_of_study":["Computer Science","IT","Networking","Software Engineering"]}},{"id":"LL008","title":"Cybersecurity Analyst","company":"Hayleys IT","location":"Colombo 10, Sri Lanka","job_type":["Full-Time"],"salary":{"min":200000,"max":380000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Monitor and respond to security threats across enterprise IT systems.","match_criteria":{"required_skills":["Cybersecurity","Network Security","Vulnerability Assessment"],"preferred_skills":["Ethical Hacking","Penetration Testing","Splunk","SIEM","Linux"],"min_education":"bachelors","min_experience_years":2,"max_experience_years":99,"relevant_al_streams":["Technology","Science"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Computer Science","IT","Cybersecurity","Networking"]}},{"id":"LL009","title":"Network Engineer","company":"Sri Lanka Telecom","location":"Colombo 2, Sri Lanka","job_type":["Full-Time"],"salary":{"min":130000,"max":230000,"currency":"LKR"},"industry":"Telecommunications","career_interest_tags":["Technology","Engineering"],"description":"Design and maintain network infrastructure for a national telecom provider.","match_criteria":{"required_skills":["Networking","TCP/IP","Cisco Routers","Troubleshooting"],"preferred_skills":["MPLS","BGP","OSPF","Network Security","Juniper"],"min_education":"diploma","min_experience_years":2,"max_experience_years":99,"relevant_al_streams":["Technology","Engineering Technology","Science"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["Networking","IT","Computer Science","Electrical Engineering"]}},{"id":"LL010","title":"Data Analyst","company":"Dialog Axiata","location":"Colombo 3, Sri Lanka","job_type":["Full-Time"],"salary":{"min":150000,"max":260000,"currency":"LKR"},"industry":"Telecommunications","career_interest_tags":["Technology","Business","Finance"],"description":"Analyse customer and network data to support business decisions.","match_criteria":{"required_skills":["SQL","Data Analysis","Microsoft Excel"],"preferred_skills":["Python","Power BI","Tableau","Statistics","R"],"min_education":"bachelors","min_experience_years":1,"max_experience_years":5,"relevant_al_streams":["Science","Technology","Commerce","Bio Science"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Statistics","Mathematics","Computer Science","Economics","Business Analytics"]}},{"id":"LL011","title":"Machine Learning Engineer","company":"IronOne Technologies","location":"Colombo 5, Sri Lanka","job_type":["Full-Time","Hybrid"],"salary":{"min":350000,"max":600000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Build recommendation and personalisation models for an e-commerce platform.","match_criteria":{"required_skills":["Python","Machine Learning","SQL","Scikit-learn"],"preferred_skills":["TensorFlow","PyTorch","MLflow","Spark","AWS"],"min_education":"bachelors","min_experience_years":3,"max_experience_years":99,"relevant_al_streams":["Science","Technology"],"min_ol_passes":7,"min_al_grade":"B","relevant_fields_of_study":["Computer Science","Mathematics","Statistics","Data Science"]}},{"id":"LL012","title":"Cloud Solutions Architect","company":"Pearson Lanka","location":"Remote","job_type":["Full-Time","Remote"],"salary":{"min":500000,"max":900000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Design cloud-native architectures for global digital education platforms.","match_criteria":{"required_skills":["AWS","Cloud Architecture","Microservices","Security"],"preferred_skills":["Azure","GCP","Terraform","Kubernetes","Cost Optimisation"],"min_education":"bachelors","min_experience_years":7,"max_experience_years":99,"relevant_al_streams":["Technology","Science","Engineering Technology"],"min_ol_passes":7,"min_al_grade":"B","relevant_fields_of_study":["Computer Science","IT","Software Engineering"]}},{"id":"LL013","title":"Embedded Systems Engineer","company":"hSenid Mobile","location":"Colombo 4, Sri Lanka","job_type":["Full-Time"],"salary":{"min":200000,"max":380000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology","Engineering"],"description":"Develop firmware and embedded software for IoT and mobile devices.","match_criteria":{"required_skills":["C","C++","Embedded Systems","Microcontrollers"],"preferred_skills":["RTOS","FreeRTOS","ARM","IoT","MQTT"],"min_education":"bachelors","min_experience_years":2,"max_experience_years":99,"relevant_al_streams":["Technology","Engineering Technology","Science"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Computer Science","Electrical Engineering","Electronics","IT"]}},{"id":"LL014","title":"IT Support Technician","company":"John Keells Holdings","location":"Colombo 3, Sri Lanka","job_type":["Full-Time"],"salary":{"min":60000,"max":110000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Provide first and second-line IT support to staff across the corporate group.","match_criteria":{"required_skills":["IT Support","Windows OS","Troubleshooting","Hardware"],"preferred_skills":["Networking","Active Directory","Office 365","Ticketing Systems"],"min_education":"diploma","min_experience_years":0,"max_experience_years":3,"relevant_al_streams":["Technology","Science","Engineering Technology"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["IT","Computer Science","Networking"]}},{"id":"LL015","title":"Data Entry Operator","company":"Global BPO Lanka","location":"Colombo 10, Sri Lanka","job_type":["Full-Time","Part-Time"],"salary":{"min":35000,"max":55000,"currency":"LKR"},"industry":"BPO","career_interest_tags":["Other","Business"],"description":"Accurate data entry and verification for international client accounts.","match_criteria":{"required_skills":["Microsoft Excel","Typing","Attention to Detail"],"preferred_skills":["Microsoft Word","Google Sheets","English Proficiency"],"min_education":"ol_only","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Commerce","Arts","Technology","Science"],"min_ol_passes":5,"min_al_grade":null,"relevant_fields_of_study":[]}},{"id":"LL016","title":"Customer Service Representative","company":"Virtusa Lanka","location":"Colombo 2, Sri Lanka","job_type":["Full-Time"],"salary":{"min":45000,"max":75000,"currency":"LKR"},"industry":"BPO","career_interest_tags":["Business","Other"],"description":"Support international customers via chat, email, and phone for a global tech client.","match_criteria":{"required_skills":["English Communication","Customer Service","Problem Solving"],"preferred_skills":["Salesforce CRM","Zendesk","Typing","Patience"],"min_education":"ol_only","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Commerce","Arts","Science","Technology"],"min_ol_passes":5,"min_al_grade":null,"relevant_fields_of_study":[]}},{"id":"LL017","title":"Digital Marketing Executive","company":"BrandBoost Lanka","location":"Colombo 7, Sri Lanka","job_type":["Full-Time"],"salary":{"min":70000,"max":130000,"currency":"LKR"},"industry":"Marketing","career_interest_tags":["Business","Creative"],"description":"Execute digital marketing campaigns across social media, SEO, and email channels.","match_criteria":{"required_skills":["Social Media Marketing","Content Writing","Google Analytics"],"preferred_skills":["Google Ads","Facebook Ads","SEO","Email Marketing","Canva"],"min_education":"diploma","min_experience_years":0,"max_experience_years":3,"relevant_al_streams":["Commerce","Arts","Technology"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["Marketing","Business","Communications","Media"]}},{"id":"LL018","title":"Marketing Manager","company":"Cinnamon Hotels & Resorts","location":"Colombo 3, Sri Lanka","job_type":["Full-Time"],"salary":{"min":300000,"max":500000,"currency":"LKR"},"industry":"Hospitality","career_interest_tags":["Business","Hospitality"],"description":"Lead marketing strategy and brand management for a luxury hotel group.","match_criteria":{"required_skills":["Marketing Strategy","Brand Management","Team Management","Budgeting"],"preferred_skills":["Digital Marketing","PR","CRM","Hospitality Knowledge"],"min_education":"bachelors","min_experience_years":6,"max_experience_years":99,"relevant_al_streams":["Commerce","Arts"],"min_ol_passes":6,"min_al_grade":"B","relevant_fields_of_study":["Marketing","Business Administration","Hospitality Management"]}},{"id":"LL019","title":"Social Media Manager","company":"Keells Super","location":"Colombo 3, Sri Lanka","job_type":["Full-Time"],"salary":{"min":90000,"max":170000,"currency":"LKR"},"industry":"Retail","career_interest_tags":["Business","Creative"],"description":"Manage social media channels, content calendar, and community engagement for a supermarket chain.","match_criteria":{"required_skills":["Social Media Management","Content Creation","Analytics"],"preferred_skills":["Canva","Meta Business Suite","TikTok","Copywriting","Hootsuite"],"min_education":"diploma","min_experience_years":1,"max_experience_years":5,"relevant_al_streams":["Commerce","Arts","Technology"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["Marketing","Communications","Business","Media"]}},{"id":"LL020","title":"Content Writer","company":"Excelerate Digital","location":"Remote","job_type":["Full-Time","Remote","Part-Time"],"salary":{"min":50000,"max":100000,"currency":"LKR"},"industry":"Media","career_interest_tags":["Creative","Business"],"description":"Write SEO-optimised blog posts, web copy, and social media content for global clients.","match_criteria":{"required_skills":["Content Writing","English Proficiency","Research"],"preferred_skills":["SEO","WordPress","Copywriting","Social Media Writing"],"min_education":"al_completed","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Arts","Commerce","Science","Technology"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["English","Media","Journalism","Communications","Marketing"]}},{"id":"LL021","title":"Graphic Designer","company":"Pixel Studio","location":"Colombo 5, Sri Lanka","job_type":["Full-Time"],"salary":{"min":60000,"max":120000,"currency":"LKR"},"industry":"Creative","career_interest_tags":["Creative"],"description":"Create visual content for digital and print media for local and international brands.","match_criteria":{"required_skills":["Adobe Photoshop","Adobe Illustrator","Design Principles"],"preferred_skills":["Figma","After Effects","Canva","Typography","Branding"],"min_education":"diploma","min_experience_years":0,"max_experience_years":4,"relevant_al_streams":["Arts","Technology","Commerce"],"min_ol_passes":4,"min_al_grade":null,"relevant_fields_of_study":["Graphic Design","Visual Communication","Fine Arts","Media"]}},{"id":"LL022","title":"Senior UI/UX Designer","company":"Fusion Digital Agency","location":"Colombo / Remote","job_type":["Full-Time","Remote","Hybrid"],"salary":{"min":250000,"max":400000,"currency":"LKR"},"industry":"Creative","career_interest_tags":["Creative","Technology"],"description":"Lead UX design for web and mobile apps with a research-driven process.","match_criteria":{"required_skills":["Figma","UI Design","Prototyping","User Research"],"preferred_skills":["Adobe XD","Motion Design","Design Systems","Usability Testing","HTML/CSS basics"],"min_education":"bachelors","min_experience_years":4,"max_experience_years":99,"relevant_al_streams":["Arts","Technology","Commerce"],"min_ol_passes":5,"min_al_grade":"C","relevant_fields_of_study":["Graphic Design","UX Design","Visual Communication","Computer Science"]}},{"id":"LL023","title":"Video Editor","company":"Yukthi Films","location":"Colombo / Remote","job_type":["Full-Time","Remote","Contract"],"salary":{"min":55000,"max":120000,"currency":"LKR"},"industry":"Creative","career_interest_tags":["Creative"],"description":"Edit YouTube, corporate, and short film content for a growing production studio.","match_criteria":{"required_skills":["Video Editing","Adobe Premiere Pro","Storytelling"],"preferred_skills":["After Effects","DaVinci Resolve","Sound Design","Motion Graphics","Color Grading"],"min_education":"al_completed","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Arts","Technology","Commerce"],"min_ol_passes":4,"min_al_grade":null,"relevant_fields_of_study":["Film","Media","Visual Communication","Graphic Design"]}},{"id":"LL024","title":"Accountant","company":"KPMG Sri Lanka","location":"Colombo 3, Sri Lanka","job_type":["Full-Time"],"salary":{"min":120000,"max":220000,"currency":"LKR"},"industry":"Finance","career_interest_tags":["Finance","Business"],"description":"Manage financial reporting, reconciliations, and tax compliance for client accounts.","match_criteria":{"required_skills":["Accounting","Financial Reporting","Microsoft Excel","Tax Compliance"],"preferred_skills":["QuickBooks","SAP","Auditing","IFRS"],"min_education":"bachelors","min_experience_years":1,"max_experience_years":99,"relevant_al_streams":["Commerce","Arts"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Accounting","Finance","Business Administration"]}},{"id":"LL025","title":"Finance Intern","company":"NDB Bank","location":"Colombo 3, Sri Lanka","job_type":["Internship"],"salary":{"min":20000,"max":35000,"currency":"LKR"},"industry":"Banking","career_interest_tags":["Finance","Business"],"description":"6-month internship in corporate finance or retail banking.","match_criteria":{"required_skills":["Microsoft Excel","Basic Accounting","Communication"],"preferred_skills":["Financial Analysis","Report Writing","Attention to Detail"],"min_education":"al_completed","min_experience_years":0,"max_experience_years":1,"relevant_al_streams":["Commerce","Arts"],"min_ol_passes":5,"min_al_grade":"C","relevant_fields_of_study":["Accounting","Finance","Business"]}},{"id":"LL026","title":"Investment Analyst","company":"First Capital Holdings","location":"Colombo 2, Sri Lanka","job_type":["Full-Time"],"salary":{"min":200000,"max":380000,"currency":"LKR"},"industry":"Finance","career_interest_tags":["Finance"],"description":"Analyse financial markets and provide investment recommendations to portfolio managers.","match_criteria":{"required_skills":["Financial Analysis","Equity Research","Excel Modelling","Report Writing"],"preferred_skills":["Bloomberg Terminal","Python","Financial Modelling","Valuation"],"min_education":"bachelors","min_experience_years":1,"max_experience_years":5,"relevant_al_streams":["Commerce","Science"],"min_ol_passes":6,"min_al_grade":"B","relevant_fields_of_study":["Finance","Economics","Accounting","Mathematics"]}},{"id":"LL027","title":"Business Analyst","company":"Millennium IT ESP","location":"Colombo 10, Sri Lanka","job_type":["Full-Time"],"salary":{"min":180000,"max":300000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Business","Technology"],"description":"Bridge business requirements and IT solutions for capital markets software.","match_criteria":{"required_skills":["Business Analysis","Requirements Gathering","Documentation","Communication"],"preferred_skills":["JIRA","SQL","Agile","UML","Stakeholder Management"],"min_education":"bachelors","min_experience_years":2,"max_experience_years":99,"relevant_al_streams":["Commerce","Technology","Science"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Business","IT","Computer Science","Finance"]}},{"id":"LL028","title":"HR Executive","company":"MAS Holdings","location":"Colombo 5, Sri Lanka","job_type":["Full-Time"],"salary":{"min":90000,"max":160000,"currency":"LKR"},"industry":"Human Resources","career_interest_tags":["Business"],"description":"Support HR operations including recruitment, onboarding, and employee relations.","match_criteria":{"required_skills":["Recruitment","HR Policies","Microsoft Office","Communication"],"preferred_skills":["HRIS","Payroll","Labour Law","Employee Engagement"],"min_education":"bachelors","min_experience_years":1,"max_experience_years":4,"relevant_al_streams":["Commerce","Arts"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Human Resources","Business Administration","Management","Psychology"]}},{"id":"LL029","title":"Project Manager","company":"Calcey Technologies","location":"Colombo 3, Sri Lanka","job_type":["Full-Time"],"salary":{"min":280000,"max":480000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Business","Technology"],"description":"Manage software development projects for international clients using Agile methodologies.","match_criteria":{"required_skills":["Project Management","Agile","Stakeholder Communication","Risk Management"],"preferred_skills":["JIRA","Confluence","SDLC","Budget Management","Scrum"],"min_education":"bachelors","min_experience_years":4,"max_experience_years":99,"relevant_al_streams":["Technology","Commerce","Science"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Project Management","IT","Business","Computer Science"]}},{"id":"LL030","title":"Sales Executive","company":"Singer Sri Lanka","location":"Island-wide, Sri Lanka","job_type":["Full-Time"],"salary":{"min":40000,"max":90000,"currency":"LKR"},"industry":"Retail","career_interest_tags":["Business","Other"],"description":"Drive retail sales and customer acquisition for consumer electronics and appliances.","match_criteria":{"required_skills":["Sales","Communication","Customer Service"],"preferred_skills":["Negotiation","CRM","Retail Experience","Product Knowledge"],"min_education":"ol_only","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Commerce","Arts","Technology","Science"],"min_ol_passes":4,"min_al_grade":null,"relevant_fields_of_study":[]}},{"id":"LL031","title":"Supply Chain Coordinator","company":"Brandix Lanka","location":"Colombo 4, Sri Lanka","job_type":["Full-Time"],"salary":{"min":80000,"max":150000,"currency":"LKR"},"industry":"Manufacturing","career_interest_tags":["Business","Engineering"],"description":"Coordinate inbound and outbound logistics for a leading apparel manufacturer.","match_criteria":{"required_skills":["Supply Chain Management","Microsoft Excel","Communication","Coordination"],"preferred_skills":["ERP Systems","SAP","Inventory Management","Procurement"],"min_education":"bachelors","min_experience_years":1,"max_experience_years":4,"relevant_al_streams":["Commerce","Technology","Engineering Technology"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Supply Chain","Logistics","Business","Engineering"]}},{"id":"LL032","title":"Operations Manager","company":"DHL Express Sri Lanka","location":"Colombo 15, Sri Lanka","job_type":["Full-Time"],"salary":{"min":400000,"max":700000,"currency":"LKR"},"industry":"Logistics","career_interest_tags":["Business","Engineering"],"description":"Lead day-to-day operations for an international express logistics hub.","match_criteria":{"required_skills":["Operations Management","Team Leadership","KPI Management","Logistics"],"preferred_skills":["P&L Management","Lean Six Sigma","WMS Systems","Supply Chain"],"min_education":"bachelors","min_experience_years":7,"max_experience_years":99,"relevant_al_streams":["Commerce","Engineering Technology","Technology"],"min_ol_passes":6,"min_al_grade":"B","relevant_fields_of_study":["Logistics","Business","Supply Chain","Management"]}},{"id":"LL033","title":"Civil Engineer","company":"Maga Engineering","location":"Colombo / Island-wide","job_type":["Full-Time"],"salary":{"min":120000,"max":220000,"currency":"LKR"},"industry":"Construction","career_interest_tags":["Engineering"],"description":"Manage and oversee construction projects across commercial and residential sectors.","match_criteria":{"required_skills":["Civil Engineering","AutoCAD","Structural Design","Site Supervision"],"preferred_skills":["STAAD.Pro","MS Project","Contract Management","BOQ"],"min_education":"bachelors","min_experience_years":1,"max_experience_years":99,"relevant_al_streams":["Engineering Technology","Science","Technology"],"min_ol_passes":7,"min_al_grade":"B","relevant_fields_of_study":["Civil Engineering","Structural Engineering","Construction Management"]}},{"id":"LL034","title":"Electrical Technician","company":"Ceylon Electricity Board","location":"Island-wide, Sri Lanka","job_type":["Full-Time"],"salary":{"min":55000,"max":110000,"currency":"LKR"},"industry":"Engineering","career_interest_tags":["Engineering"],"description":"Install and maintain electrical systems for residential and industrial installations.","match_criteria":{"required_skills":["Electrical Wiring","Troubleshooting","Safety Compliance"],"preferred_skills":["PLC","HV Systems","AutoCAD Electrical","Panel Building"],"min_education":"diploma","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Engineering Technology","Technology","Science"],"min_ol_passes":5,"min_al_grade":null,"relevant_fields_of_study":["Electrical Engineering","Electronics","Electrical Technology"]}},{"id":"LL035","title":"Mechanical Engineer","company":"Lanka IOC","location":"Colombo / Island-wide","job_type":["Full-Time"],"salary":{"min":130000,"max":240000,"currency":"LKR"},"industry":"Engineering","career_interest_tags":["Engineering"],"description":"Design, maintain and improve mechanical equipment and processes at fuel storage facilities.","match_criteria":{"required_skills":["Mechanical Engineering","CAD Design","Equipment Maintenance","Technical Drawings"],"preferred_skills":["SolidWorks","HVAC","Thermodynamics","Project Management"],"min_education":"bachelors","min_experience_years":1,"max_experience_years":99,"relevant_al_streams":["Engineering Technology","Science"],"min_ol_passes":7,"min_al_grade":"B","relevant_fields_of_study":["Mechanical Engineering","Manufacturing Engineering"]}},{"id":"LL036","title":"Product Manager","company":"PickMe (HNB Digital)","location":"Colombo 3, Sri Lanka","job_type":["Full-Time"],"salary":{"min":400000,"max":700000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology","Business"],"description":"Own the product roadmap for a leading ride-hailing and digital services app.","match_criteria":{"required_skills":["Product Management","Roadmap Planning","Agile","Data-Driven Decisions"],"preferred_skills":["SQL","User Research","A/B Testing","Mobile Product Experience"],"min_education":"bachelors","min_experience_years":5,"max_experience_years":99,"relevant_al_streams":["Commerce","Technology","Science"],"min_ol_passes":7,"min_al_grade":"B","relevant_fields_of_study":["Business","IT","Computer Science","Marketing"]}},{"id":"LL037","title":"Registered Nurse","company":"Nawaloka Hospital","location":"Colombo 2, Sri Lanka","job_type":["Full-Time"],"salary":{"min":80000,"max":160000,"currency":"LKR"},"industry":"Healthcare","career_interest_tags":["Healthcare"],"description":"Provide patient care in a busy private hospital setting across wards and ICU.","match_criteria":{"required_skills":["Patient Care","Clinical Skills","Medication Administration","Vital Signs Monitoring"],"preferred_skills":["ICU Care","Emergency Response","EMR Systems","IV Therapy"],"min_education":"diploma","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Bio Science","Science"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Nursing","Healthcare","Midwifery"]}},{"id":"LL038","title":"Pharmacist","company":"Osu Sala Government Pharmacy","location":"Island-wide, Sri Lanka","job_type":["Full-Time"],"salary":{"min":90000,"max":180000,"currency":"LKR"},"industry":"Healthcare","career_interest_tags":["Healthcare"],"description":"Dispense medications and provide pharmaceutical care and counselling to patients.","match_criteria":{"required_skills":["Drug Dispensing","Patient Counselling","Pharmacy Practice","Inventory Management"],"preferred_skills":["Clinical Pharmacy","Pharmacovigilance","Pharmacy IT Systems"],"min_education":"bachelors","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Bio Science","Science"],"min_ol_passes":7,"min_al_grade":"B","relevant_fields_of_study":["Pharmacy","Pharmaceutical Science"]}},{"id":"LL039","title":"Medical Laboratory Technician","company":"Durdans Hospital","location":"Colombo 3, Sri Lanka","job_type":["Full-Time"],"salary":{"min":60000,"max":110000,"currency":"LKR"},"industry":"Healthcare","career_interest_tags":["Healthcare"],"description":"Conduct diagnostic lab tests including haematology, microbiology, and biochemistry.","match_criteria":{"required_skills":["Medical Lab Science","Sample Processing","Lab Equipment Operation","Result Reporting"],"preferred_skills":["Microbiology","Haematology","Biochemistry","LIS Systems"],"min_education":"diploma","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Bio Science","Science"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Medical Laboratory Science","Biomedical Science","Biology"]}},{"id":"LL040","title":"Physiotherapist","company":"Asiri Hospital","location":"Colombo 5, Sri Lanka","job_type":["Full-Time"],"salary":{"min":100000,"max":190000,"currency":"LKR"},"industry":"Healthcare","career_interest_tags":["Healthcare"],"description":"Assess and treat patients with physical injuries and mobility disorders.","match_criteria":{"required_skills":["Physiotherapy","Patient Assessment","Rehabilitation Techniques","Exercise Therapy"],"preferred_skills":["Sports Physiotherapy","Electrotherapy","Hydrotherapy","Patient Education"],"min_education":"bachelors","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Bio Science","Science"],"min_ol_passes":6,"min_al_grade":"B","relevant_fields_of_study":["Physiotherapy","Sports Science","Healthcare"]}},{"id":"LL041","title":"Teacher – Mathematics","company":"Royal College Colombo","location":"Colombo 7, Sri Lanka","job_type":["Full-Time"],"salary":{"min":60000,"max":120000,"currency":"LKR"},"industry":"Education","career_interest_tags":["Education"],"description":"Teach O/L and A/L Mathematics to secondary students and prepare them for public exams.","match_criteria":{"required_skills":["Mathematics","Teaching","Classroom Management","Lesson Planning"],"preferred_skills":["Exam Coaching","e-Learning Tools","Curriculum Development","Student Counselling"],"min_education":"bachelors","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Science","Technology","Engineering Technology"],"min_ol_passes":7,"min_al_grade":"B","relevant_fields_of_study":["Mathematics","Applied Mathematics","Education","Statistics"]}},{"id":"LL042","title":"Teacher – Science (Junior Secondary)","company":"Lyceum International School","location":"Colombo, Sri Lanka","job_type":["Full-Time"],"salary":{"min":65000,"max":130000,"currency":"LKR"},"industry":"Education","career_interest_tags":["Education"],"description":"Teach Science to Grades 6-11 in an international school environment.","match_criteria":{"required_skills":["Science Teaching","Classroom Management","Lesson Planning"],"preferred_skills":["Lab Management","Cambridge Curriculum","Digital Classrooms"],"min_education":"bachelors","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Science","Bio Science"],"min_ol_passes":7,"min_al_grade":"B","relevant_fields_of_study":["Science Education","Biology","Chemistry","Physics","Education"]}},{"id":"LL043","title":"University Lecturer – Computing","company":"SLIIT","location":"Malabe, Sri Lanka","job_type":["Full-Time"],"salary":{"min":180000,"max":320000,"currency":"LKR"},"industry":"Education","career_interest_tags":["Education","Technology"],"description":"Deliver lectures, conduct research, and supervise student projects in Computing.","match_criteria":{"required_skills":["Computer Science","Lecturing","Research","Curriculum Delivery"],"preferred_skills":["Publications","Python","Machine Learning","Database Systems"],"min_education":"masters","min_experience_years":2,"max_experience_years":99,"relevant_al_streams":["Technology","Science"],"min_ol_passes":7,"min_al_grade":"A","relevant_fields_of_study":["Computer Science","IT","Software Engineering","Information Systems"]}},{"id":"LL044","title":"Legal Officer","company":"Commercial Bank of Ceylon","location":"Colombo 1, Sri Lanka","job_type":["Full-Time"],"salary":{"min":150000,"max":280000,"currency":"LKR"},"industry":"Legal","career_interest_tags":["Law"],"description":"Handle contracts, compliance, and litigation matters for a leading commercial bank.","match_criteria":{"required_skills":["Contract Law","Legal Drafting","Banking Law","Compliance"],"preferred_skills":["Litigation","Regulatory Knowledge","Legal Research","Corporate Law"],"min_education":"bachelors","min_experience_years":2,"max_experience_years":99,"relevant_al_streams":["Arts","Commerce"],"min_ol_passes":7,"min_al_grade":"B","relevant_fields_of_study":["Law","LLB","Legal Studies"]}},{"id":"LL045","title":"Hotel Front Office Executive","company":"Jetwing Hotels","location":"Colombo / Negombo","job_type":["Full-Time"],"salary":{"min":55000,"max":100000,"currency":"LKR"},"industry":"Hospitality","career_interest_tags":["Hospitality"],"description":"Manage guest check-in/out, reservations, and front desk operations at a luxury hotel.","match_criteria":{"required_skills":["Customer Service","Communication","Front Desk Operations","English Proficiency"],"preferred_skills":["Property Management Systems","Conflict Resolution","Reservation Systems","Upselling"],"min_education":"diploma","min_experience_years":0,"max_experience_years":4,"relevant_al_streams":["Arts","Commerce"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["Hotel Management","Hospitality","Tourism","Event Management"]}},{"id":"LL046","title":"Chef – Continental Cuisine","company":"Hilton Colombo","location":"Colombo 3, Sri Lanka","job_type":["Full-Time"],"salary":{"min":80000,"max":180000,"currency":"LKR"},"industry":"Hospitality","career_interest_tags":["Hospitality","Creative"],"description":"Prepare and plate continental dishes in a 5-star hotel kitchen environment.","match_criteria":{"required_skills":["Culinary Skills","Continental Cuisine","Kitchen Safety","Mise en Place"],"preferred_skills":["Menu Development","Food Costing","Pastry Skills","Kitchen Leadership"],"min_education":"diploma","min_experience_years":2,"max_experience_years":99,"relevant_al_streams":["Arts","Commerce","Technology"],"min_ol_passes":4,"min_al_grade":null,"relevant_fields_of_study":["Culinary Arts","Hotel Management","Hospitality"]}},{"id":"LL047","title":"Tour Guide","company":"Aitken Spence Travels","location":"Island-wide, Sri Lanka","job_type":["Full-Time","Contract"],"salary":{"min":50000,"max":120000,"currency":"LKR"},"industry":"Hospitality","career_interest_tags":["Hospitality","Other"],"description":"Lead guided tours for international tourists across cultural and wildlife destinations.","match_criteria":{"required_skills":["Communication","Tourism Knowledge","English Proficiency","Customer Service"],"preferred_skills":["Second Language (German/French/Chinese)","Cultural Knowledge","First Aid","Driver's License"],"min_education":"al_completed","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Arts","Commerce","Science"],"min_ol_passes":5,"min_al_grade":null,"relevant_fields_of_study":["Tourism","Hospitality","History","Geography"]}},{"id":"LL048","title":"Event Coordinator","company":"Events by Kingsley","location":"Colombo, Sri Lanka","job_type":["Full-Time"],"salary":{"min":60000,"max":120000,"currency":"LKR"},"industry":"Events","career_interest_tags":["Hospitality","Creative","Business"],"description":"Plan and execute corporate and social events including weddings and conferences.","match_criteria":{"required_skills":["Event Planning","Vendor Management","Communication","Organisation"],"preferred_skills":["Budget Management","Event Software","Social Media","Design","Photography"],"min_education":"diploma","min_experience_years":0,"max_experience_years":4,"relevant_al_streams":["Commerce","Arts","Technology"],"min_ol_passes":5,"min_al_grade":null,"relevant_fields_of_study":["Event Management","Hospitality","Business","Marketing"]}},{"id":"LL049","title":"Freelance Web Developer","company":"Self-Employed (Upwork / Fiverr)","location":"Remote","job_type":["Freelance","Remote","Part-Time"],"salary":{"min":30000,"max":500000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology","Creative"],"description":"Build websites and web apps for international clients as an independent freelancer.","match_criteria":{"required_skills":["HTML","CSS","JavaScript"],"preferred_skills":["WordPress","React","PHP","Figma","Client Communication"],"min_education":"al_completed","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Technology","Science","Arts","Commerce"],"min_ol_passes":4,"min_al_grade":null,"relevant_fields_of_study":["Computer Science","IT","Web Design","Graphic Design"]}},{"id":"LL050","title":"Junior Data Scientist","company":"Synapse Analytics","location":"Colombo 5, Sri Lanka","job_type":["Full-Time","Hybrid"],"salary":{"min":160000,"max":280000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology","Finance","Business"],"description":"Build data models and dashboards to support business intelligence for local enterprises.","match_criteria":{"required_skills":["Python","SQL","Data Analysis","Statistics"],"preferred_skills":["Power BI","Machine Learning","R","Data Cleaning","Visualisation"],"min_education":"bachelors","min_experience_years":0,"max_experience_years":3,"relevant_al_streams":["Science","Technology","Commerce"],"min_ol_passes":7,"min_al_grade":"B","relevant_fields_of_study":["Statistics","Mathematics","Computer Science","Data Science"]}},{"id":"LL051","title":"E-Commerce Executive","company":"Takas.lk","location":"Colombo 10, Sri Lanka","job_type":["Full-Time"],"salary":{"min":80000,"max":150000,"currency":"LKR"},"industry":"E-Commerce","career_interest_tags":["Business","Technology"],"description":"Manage product listings, promotions, and seller relationships on an e-commerce platform.","match_criteria":{"required_skills":["E-Commerce Management","Communication","Microsoft Excel","Attention to Detail"],"preferred_skills":["Digital Marketing","SEO","Analytics","CRM","Product Photography"],"min_education":"diploma","min_experience_years":0,"max_experience_years":3,"relevant_al_streams":["Commerce","Technology","Arts"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["Business","Marketing","IT","Retail Management"]}},{"id":"LL052","title":"Public Relations Officer","company":"Sri Lankan Airlines","location":"Colombo, Sri Lanka","job_type":["Full-Time"],"salary":{"min":100000,"max":190000,"currency":"LKR"},"industry":"Media / PR","career_interest_tags":["Business","Creative"],"description":"Manage media relations, press releases, and public communications for the national carrier.","match_criteria":{"required_skills":["Public Relations","Communication","Writing","Media Relations"],"preferred_skills":["Crisis Communication","Social Media","Event Management","Journalism Background"],"min_education":"bachelors","min_experience_years":2,"max_experience_years":99,"relevant_al_streams":["Arts","Commerce"],"min_ol_passes":6,"min_al_grade":"B","relevant_fields_of_study":["Mass Communication","Journalism","Marketing","PR","English"]}},{"id":"LL053","title":"Quantity Surveyor","company":"CHEC Port City Colombo","location":"Colombo 1, Sri Lanka","job_type":["Full-Time"],"salary":{"min":150000,"max":280000,"currency":"LKR"},"industry":"Construction","career_interest_tags":["Engineering","Business"],"description":"Manage costs and contracts for large-scale infrastructure and construction projects.","match_criteria":{"required_skills":["Quantity Surveying","BOQ Preparation","Cost Estimation","Contract Management"],"preferred_skills":["AutoCAD","MS Project","FIDIC Contracts","Construction Law"],"min_education":"bachelors","min_experience_years":2,"max_experience_years":99,"relevant_al_streams":["Engineering Technology","Commerce","Science"],"min_ol_passes":7,"min_al_grade":"C","relevant_fields_of_study":["Quantity Surveying","Civil Engineering","Construction Management"]}},{"id":"LL054","title":"Trainee Software Engineer","company":"Sysco LABS","location":"Colombo 10, Sri Lanka","job_type":["Full-Time","Internship"],"salary":{"min":50000,"max":90000,"currency":"LKR"},"industry":"Technology","career_interest_tags":["Technology"],"description":"Entry-level software engineering role with structured mentorship and growth path.","match_criteria":{"required_skills":["Programming Basics","Problem Solving","Any Programming Language"],"preferred_skills":["Java","Python","JavaScript","Git","Data Structures"],"min_education":"al_completed","min_experience_years":0,"max_experience_years":1,"relevant_al_streams":["Technology","Science","Engineering Technology"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Computer Science","IT","Software Engineering","Mathematics"]}},{"id":"LL055","title":"Journalism Intern","company":"Daily Mirror Sri Lanka","location":"Colombo 2, Sri Lanka","job_type":["Internship","Part-Time"],"salary":{"min":15000,"max":30000,"currency":"LKR"},"industry":"Media","career_interest_tags":["Creative","Other"],"description":"Assist reporters and editors in writing news stories and social media content.","match_criteria":{"required_skills":["Writing","English Proficiency","Research","Curiosity"],"preferred_skills":["Photography","Social Media","Interview Skills","Sinhala Writing"],"min_education":"al_completed","min_experience_years":0,"max_experience_years":1,"relevant_al_streams":["Arts","Commerce","Science"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["Journalism","Mass Communication","English","Media","Communications"]}},{"id":"LL056","title":"Logistics Coordinator","company":"Damco Sri Lanka (Maersk)","location":"Colombo Port, Sri Lanka","job_type":["Full-Time"],"salary":{"min":90000,"max":170000,"currency":"LKR"},"industry":"Logistics","career_interest_tags":["Business","Engineering"],"description":"Manage import/export shipments, customs documentation, and client coordination.","match_criteria":{"required_skills":["Logistics","Import/Export Documentation","Communication","Microsoft Excel"],"preferred_skills":["Customs Procedures","Freight Forwarding","ERP Systems","INCOTERMS"],"min_education":"diploma","min_experience_years":1,"max_experience_years":5,"relevant_al_streams":["Commerce","Technology","Engineering Technology"],"min_ol_passes":5,"min_al_grade":"S","relevant_fields_of_study":["Logistics","Shipping","Supply Chain","Business"]}},{"id":"LL057","title":"Radiographer","company":"Lanka Hospitals","location":"Colombo 5, Sri Lanka","job_type":["Full-Time"],"salary":{"min":90000,"max":170000,"currency":"LKR"},"industry":"Healthcare","career_interest_tags":["Healthcare"],"description":"Perform X-ray, CT, and MRI imaging for diagnostic purposes in a private hospital.","match_criteria":{"required_skills":["Radiography","Medical Imaging","Patient Safety","Equipment Operation"],"preferred_skills":["CT Scanning","MRI","PACS Systems","Radiation Safety"],"min_education":"diploma","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Bio Science","Science"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Radiography","Medical Imaging","Biomedical Science"]}},{"id":"LL058","title":"Agricultural Extension Officer","company":"Department of Agriculture, Sri Lanka","location":"Island-wide, Sri Lanka","job_type":["Full-Time"],"salary":{"min":70000,"max":130000,"currency":"LKR"},"industry":"Agriculture","career_interest_tags":["Other","Education"],"description":"Advise and support farmers on modern agricultural techniques and crop management.","match_criteria":{"required_skills":["Agriculture","Farmer Communication","Crop Management","Field Work"],"preferred_skills":["Agronomy","Soil Science","Pest Management","Report Writing"],"min_education":"bachelors","min_experience_years":0,"max_experience_years":99,"relevant_al_streams":["Bio Science","Science","Technology"],"min_ol_passes":6,"min_al_grade":"C","relevant_fields_of_study":["Agriculture","Agronomy","Environmental Science","Biological Science"]}},{"id":"LL059","title":"Junior Architect","company":"Robust Design Studio","location":"Colombo 7, Sri Lanka","job_type":["Full-Time"],"salary":{"min":100000,"max":200000,"currency":"LKR"},"industry":"Architecture","career_interest_tags":["Engineering","Creative"],"description":"Assist senior architects with building designs, drawings, and client presentations.","match_criteria":{"required_skills":["Architecture Design","AutoCAD","SketchUp","Technical Drawings"],"preferred_skills":["Revit","3D Visualisation","Photoshop","Model Making","Construction Knowledge"],"min_education":"bachelors","min_experience_years":0,"max_experience_years":3,"relevant_al_streams":["Engineering Technology","Arts","Science"],"min_ol_passes":7,"min_al_grade":"B","relevant_fields_of_study":["Architecture","Interior Design","Urban Planning"]}},{"id":"LL060","title":"Management Trainee","company":"Hayleys Group","location":"Colombo, Sri Lanka","job_type":["Full-Time","Internship"],"salary":{"min":60000,"max":100000,"currency":"LKR"},"industry":"Conglomerate / General","career_interest_tags":["Business","Other"],"description":"Rotational graduate trainee program across HR, Finance, Operations, and Sales in a leading conglomerate.","match_criteria":{"required_skills":["Communication","Analytical Thinking","Adaptability","Microsoft Office"],"preferred_skills":["Leadership","Presentation Skills","Problem Solving","Teamwork"],"min_education":"bachelors","min_experience_years":0,"max_experience_years":1,"relevant_al_streams":["Commerce","Science","Technology","Arts","Engineering Technology","Bio Science"],"min_ol_passes":6,"min_al_grade":"B","relevant_fields_of_study":["Business","Management","Engineering","IT","Finance","Marketing","Any"]}}];

    let currentJobs = [];
  let currentJobIndex = -1;
  let currentDetailJobId = null;
  let lastSearchFormData = null;
  let currentView = 'list';
  let showingJobDetail = false;
  let detailReturnSection = 'search';
  let pendingSection = null;
  let typingTimer = null;
  let skillsCurrentJobs = [];
  let skillsDetailJobId = null;
  let skillsJobIndex = -1;

  const searchSkills = [];
  const searchLocations = [];
  const skillsPageTags = [];

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ——— Storage ———
  function getUser() {
    try {
      const raw = localStorage.getItem(STORAGE.USER);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function saveUser(user) {
    localStorage.setItem(STORAGE.USER, JSON.stringify(user));
  }

  function isLoggedIn() {
    return localStorage.getItem(STORAGE.LOGGED_IN) === 'true' && getUser();
  }

  function getSavedJobs() {
    try {
      const raw = localStorage.getItem(STORAGE.SAVED_JOBS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveSavedJobs(jobs) {
    localStorage.setItem(STORAGE.SAVED_JOBS, JSON.stringify(jobs));
  }

  function getPresets() {
    try {
      const raw = localStorage.getItem(STORAGE.PRESETS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function savePresets(presets) {
    localStorage.setItem(STORAGE.PRESETS, JSON.stringify(presets));
  }

  function isJobSaved(id) {
    return getSavedJobs().some((j) => j.id === id);
  }

  function toggleSaveJob(job) {
    let saved = getSavedJobs();
    const idx = saved.findIndex((j) => j.id === job.id);
    if (idx >= 0) {
      saved.splice(idx, 1);
      showToast('Job removed from saved list.', 'info');
    } else {
      saved.push(job);
      showToast('Job saved successfully.', 'success');
    }
    saveSavedJobs(saved);
    updateProfileSummary();
    refreshSaveButtons();
    renderSavedJobs();
  }

  // ——— Toast ———
  function showToast(message, type) {
    const container = $('#toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type || 'info'}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // ——— Theme ———
  function resolveTheme(mode) {
    if (mode === 'system') {
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return mode === 'light' ? 'light' : 'dark';
  }

  function applyTheme(mode) {
    const resolved = resolveTheme(mode);
    document.documentElement.setAttribute('data-theme', resolved);
    localStorage.setItem(STORAGE.THEME, mode);
  }

  function initTheme() {
    const saved = localStorage.getItem(STORAGE.THEME) || 'dark';
    const selector = $('#theme-selector');
    if (selector) selector.value = saved;
    applyTheme(saved);

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
      const current = localStorage.getItem(STORAGE.THEME) || 'dark';
      if (current === 'system') applyTheme('system');
    });
  }

  // ——— Particles ———
  function initParticles() {
    const canvas = $('#particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const count = 40;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function create() {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.5,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || 'rgba(180, 190, 255, 0.2)';
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(/[\d.]+\)$/, `${p.opacity})`);
        if (color.includes('rgba')) {
          ctx.fillStyle = color;
        } else {
          ctx.fillStyle = `rgba(180, 190, 255, ${p.opacity})`;
        }
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      requestAnimationFrame(draw);
    }

    resize();
    create();
    draw();
    window.addEventListener('resize', () => {
      resize();
      create();
    });
  }

  // ——— Typing animation ———
  function clearTyping() {
    if (typingTimer) {
      clearTimeout(typingTimer);
      typingTimer = null;
    }
  }

  function typeText(el, text, speed, done) {
    let i = 0;
    el.textContent = '';
    function step() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        typingTimer = setTimeout(step, speed);
      } else if (done) {
        done();
      }
    }
    step();
  }

  function runTypingAnimation() {
    clearTyping();
    const titleEl = $('#hero-type-title');
    const bodyEl = $('#hero-type-body');
    const cursor = $('#typing-cursor');
    if (!titleEl || !bodyEl) return;

    titleEl.textContent = '';
    bodyEl.textContent = '';
    if (cursor) cursor.style.display = 'inline-block';

    typeText(titleEl, HERO_TITLE, 28, () => {
      typeText(bodyEl, HERO_BODY, 18, () => {
        if (cursor) cursor.style.display = 'none';
      });
    });
  }

  // ——— Auth guard ———
  function requireLogin(sectionId) {
    if (!PROTECTED_SECTIONS.includes(sectionId)) return false;
    if (isLoggedIn()) return false;
    pendingSection = sectionId;
    openModal('login', true);
    return true;
  }

  function navigateTo(sectionId) {
    if (requireLogin(sectionId)) return;

    $$('.section').forEach((s) => s.classList.remove('active'));
    const section = $(`#section-${sectionId}`);
    if (section) section.classList.add('active');

    $$('.nav-link').forEach((link) => {
      link.classList.toggle('active', link.dataset.section === sectionId);
    });

    $('#nav-links')?.classList.remove('open');
    $('#nav-toggle')?.setAttribute('aria-expanded', 'false');

    if (sectionId === 'saved') renderSavedJobs();
    if (sectionId === 'home') {
      updateProfileSummary();
      runTypingAnimation();
    }
    if (sectionId === 'search') prefillSearchFromProfile();
    if (sectionId === 'profile') renderProfileView();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function getDisplayName(user) {
    return user?.username || user?.fullName || 'User';
  }

  function updateNavWelcome() {
    const user = getUser();
    if (!user || !isLoggedIn()) return;
    const name = getDisplayName(user);
    $('#nav-welcome').textContent = `Welcome, ${name}`;
  }

  function getInitials(user) {
    const name = user?.fullName || user?.username || 'User';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return (name[0] || 'U').toUpperCase();
  }

  function setAvatarSlot(initialsEl, imgEl, user) {
    if (!initialsEl) return;
    const initials = getInitials(user);
    initialsEl.textContent = initials;
    if (imgEl && user?.profileImage) {
      imgEl.src = user.profileImage;
      imgEl.classList.remove('hidden');
      initialsEl.classList.add('hidden');
    } else if (imgEl) {
      imgEl.src = '';
      imgEl.classList.add('hidden');
      initialsEl.classList.remove('hidden');
    }
  }

  function updateAllAvatars() {
    const user = getUser();
    setAvatarSlot($('#nav-avatar'), $('#nav-avatar-img'), user);
    setAvatarSlot($('#home-avatar'), $('#home-avatar-img'), user);
    setAvatarSlot($('#profile-page-initials'), $('#profile-page-img'), user);
    setAvatarSlot($('#edit-avatar-initials'), $('#edit-avatar-img'), user);
    const removeBtn = $('#btn-remove-photo');
    const editRemoveBtn = $('#btn-edit-remove-photo');
    if (user?.profileImage) {
      removeBtn?.classList.remove('hidden');
      editRemoveBtn?.classList.remove('hidden');
    } else {
      removeBtn?.classList.add('hidden');
      editRemoveBtn?.classList.add('hidden');
    }
  }

  function updateNavbar() {
    const loggedIn = isLoggedIn();
    const user = getUser();
    $('#nav-auth')?.classList.toggle('hidden', loggedIn);
    $('#nav-user')?.classList.toggle('hidden', !loggedIn);

    if (loggedIn && user) {
      updateNavWelcome();
      updateAllAvatars();
    }
    updateProfileSummary();
  }

  function updateProfileSummary() {
    const card = $('#profile-summary');
    if (!card) return;
    const loggedIn = isLoggedIn();
    const user = getUser();
    card.classList.toggle('hidden', !loggedIn);

    if (!loggedIn || !user) return;

    const name = getDisplayName(user);
    const heading = $('#profile-welcome-heading');
    heading.innerHTML = `Welcome, <span id="profile-username">${escapeHtml(name)}</span>`;
    updateNavWelcome();
    updateAllAvatars();

    $('#profile-email').textContent = user.email || '—';
    $('#profile-phone').textContent = user.phone || '—';
    $('#profile-gender').textContent = user.gender || '—';
    $('#profile-age').textContent = user.age ?? '—';
    $('#profile-saved-count').textContent = getSavedJobs().length;
  }

  function openModal(mode, showGuard) {
    const modal = $('#auth-modal');
    modal?.classList.remove('hidden');
    $('#login-form')?.classList.toggle('hidden', mode !== 'login');
    $('#signup-form')?.classList.toggle('hidden', mode !== 'signup');
    $('#modal-title').textContent = mode === 'login' ? 'Login' : 'Sign Up';
    $('#auth-guard-msg')?.classList.toggle('hidden', !showGuard);
    clearAuthErrors();
    $('#login-error')?.classList.add('hidden');
    $('#signup-success')?.classList.add('hidden');
  }

  function closeModal() {
    $('#auth-modal')?.classList.add('hidden');
    $('#auth-guard-msg')?.classList.add('hidden');
    pendingSection = null;
  }

  function clearAuthErrors() {
    $$('.auth-form .error-msg').forEach((el) => (el.textContent = ''));
  }

  function setError(fieldId, msg) {
    const el = document.querySelector(`[data-error="${fieldId}"]`);
    if (el) el.textContent = msg || '';
  }

  function clearSearchErrors() {
    $$('#search-form .error-msg').forEach((el) => (el.textContent = ''));
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isStrongPassword(password) {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    );
  }

  function validateSignup() {
    let valid = true;
    const fullName = $('#signup-fullname').value.trim();
    const username = $('#signup-username').value.trim();
    const email = $('#signup-email').value.trim();
    const phone = $('#signup-phone').value.trim();
    const password = $('#signup-password').value;
    const confirm = $('#signup-confirm').value;
    const gender = $('#signup-gender').value;
    const age = parseInt($('#signup-age').value, 10);
    const dob = $('#signup-dob').value;

    clearAuthErrors();

    if (!fullName) { setError('signup-fullname', 'Full name is required'); valid = false; }
    if (!username) { setError('signup-username', 'Username is required'); valid = false; }
    if (!email || !isValidEmail(email)) { setError('signup-email', 'Valid email is required'); valid = false; }
    if (!/^\d{10}$/.test(phone)) { setError('signup-phone', 'Phone must be exactly 10 digits'); valid = false; }
    if (!isStrongPassword(password)) {
      setError('signup-password', 'Password must include 8+ characters, uppercase, lowercase, number, and special character.');
      valid = false;
    }
    if (password !== confirm) { setError('signup-confirm', 'Passwords do not match'); valid = false; }
    if (!gender) { setError('signup-gender', 'Gender is required'); valid = false; }
    if (!age || age <= 15) { setError('signup-age', 'Age must be above 15'); valid = false; }
    if (!dob) { setError('signup-dob', 'Date of birth is required'); valid = false; }

    return valid;
  }

  function handleSignup(e) {
    e.preventDefault();
    if (!validateSignup()) return;

    const user = {
      fullName: $('#signup-fullname').value.trim(),
      username: $('#signup-username').value.trim(),
      email: $('#signup-email').value.trim(),
      phone: $('#signup-phone').value.trim(),
      password: $('#signup-password').value,
      gender: $('#signup-gender').value,
      age: parseInt($('#signup-age').value, 10),
      dateOfBirth: $('#signup-dob').value,
      cv: null
    };

    localStorage.setItem(STORAGE.USER, JSON.stringify(user));
    $('#signup-success')?.classList.remove('hidden');
    $('#signup-form button[type="submit"]').disabled = true;

    setTimeout(() => {
      $('#signup-form button[type="submit"]').disabled = false;
      $('#signup-form').reset();
      openModal('login');
      showToast('Account created! Please log in.', 'success');
    }, 1500);
  }

  function handleLogin(e) {
    e.preventDefault();
    clearAuthErrors();
    $('#login-error')?.classList.add('hidden');

    const email = $('#login-email').value.trim();
    const password = $('#login-password').value;
    const user = getUser();

    if (!user || user.email !== email || user.password !== password) {
      $('#login-error')?.classList.remove('hidden');
      return;
    }

    localStorage.setItem(STORAGE.LOGGED_IN, 'true');
    closeModal();
    updateNavbar();
    prefillSearchFromProfile();

    const target = pendingSection || 'home';
    pendingSection = null;
    navigateTo(target);
    showToast('Logged in successfully.', 'success');
  }

  function handleLogout() {
    localStorage.removeItem(STORAGE.LOGGED_IN);
    updateNavbar();
    navigateTo('home');
    showToast('You have been logged out.', 'info');
  }

  // ——— Profile ———
  function renderProfileView() {
    const user = getUser();
    if (!user) return;

    $('#view-fullname').textContent = user.fullName || '—';
    $('#view-username').textContent = user.username || '—';
    $('#view-email').textContent = user.email || '—';
    $('#view-phone').textContent = user.phone || '—';
    $('#view-gender').textContent = user.gender || '—';
    $('#view-age').textContent = user.age ?? '—';
    $('#view-dob').textContent = user.dateOfBirth || '—';

    renderCvSection(user);
    updateAllAvatars();
    showProfileEditMode(false);
    $('#btn-edit-profile')?.classList.remove('hidden');
  }

  function renderCvSection(user) {
    const info = $('#cv-info');
    const preview = $('#cv-preview');
    const removeBtn = $('#btn-remove-cv');

    if (!user.cv || !user.cv.fileName) {
      info.innerHTML = '<p class="cv-empty">No CV uploaded yet.</p>';
      preview?.classList.add('hidden');
      removeBtn?.classList.add('hidden');
      return;
    }

    info.innerHTML = `
      <p><strong>CV File Name:</strong> ${escapeHtml(user.cv.fileName)}</p>
      <p><strong>Uploaded:</strong> ${escapeHtml(user.cv.uploadDate || '—')}</p>
      <p class="cv-status">CV attached to profile</p>
    `;
    removeBtn?.classList.remove('hidden');

    if (user.cv.previewText) {
      preview.classList.remove('hidden');
      preview.innerHTML = `<strong>CV Preview</strong><br><br>${escapeHtml(user.cv.previewText)}`;
    } else {
      preview.classList.remove('hidden');
      preview.innerHTML = '<p>Preview unavailable in frontend-only demo. File name saved successfully.</p>';
    }
  }

  function showProfileEditMode(editing) {
    $('#profile-view')?.classList.toggle('hidden', editing);
    $('#profile-edit-form')?.classList.toggle('hidden', !editing);
    $('#btn-edit-profile')?.classList.toggle('hidden', editing);
    $('#profile-save-msg')?.classList.add('hidden');
  }

  function startEditProfile() {
    const user = getUser();
    if (!user) return;
    $('#edit-fullname').value = user.fullName || '';
    $('#edit-username').value = user.username || '';
    $('#edit-email').value = user.email || '';
    $('#edit-phone').value = user.phone || '';
    $('#edit-gender').value = user.gender || '';
    $('#edit-age').value = user.age || '';
    $('#edit-dob').value = user.dateOfBirth || '';
    showProfileEditMode(true);
    updateAllAvatars();
  }

  function validateProfileEdit() {
    let valid = true;
    $$('#profile-edit-form .error-msg').forEach((el) => (el.textContent = ''));

    if (!$('#edit-fullname').value.trim()) { setError('edit-fullname', 'Required'); valid = false; }
    if (!$('#edit-username').value.trim()) { setError('edit-username', 'Required'); valid = false; }
    if (!/^\d{10}$/.test($('#edit-phone').value.trim())) { setError('edit-phone', '10 digits required'); valid = false; }
    if (!$('#edit-gender').value) { setError('edit-gender', 'Required'); valid = false; }
    if (!$('#edit-age').value || parseInt($('#edit-age').value, 10) <= 15) { setError('edit-age', 'Age must be above 15'); valid = false; }
    if (!$('#edit-dob').value) { setError('edit-dob', 'Required'); valid = false; }
    return valid;
  }

  function handleProfileSave(e) {
    e.preventDefault();
    if (!validateProfileEdit()) return;

    const user = getUser();
    if (!user) return;

    user.fullName = $('#edit-fullname').value.trim();
    user.username = $('#edit-username').value.trim();
    user.phone = $('#edit-phone').value.trim();
    user.gender = $('#edit-gender').value;
    user.age = parseInt($('#edit-age').value, 10);
    user.dateOfBirth = $('#edit-dob').value;

    saveUser(user);
    updateNavbar();
    prefillSearchFromProfile();
    renderProfileView();
    $('#profile-save-msg')?.classList.remove('hidden');
    showToast('Profile updated successfully.', 'success');
  }

  function handleCvUpload(file) {
    if (!file) return;
    const user = getUser();
    if (!user) return;

    const ext = file.name.split('.').pop().toLowerCase();
    const allowed = ['pdf', 'doc', 'docx', 'txt'];
    if (!allowed.includes(ext)) {
      showToast('Please upload PDF, DOC, DOCX, or TXT.', 'error');
      return;
    }

    user.cv = {
      fileName: file.name,
      uploadDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      previewText: null
    };

    if (ext === 'txt') {
      const reader = new FileReader();
      reader.onload = (ev) => {
        user.cv.previewText = (ev.target.result || '').toString().slice(0, 5000);
        saveUser(user);
        renderCvSection(user);
        showToast('CV uploaded and preview loaded.', 'success');
      };
      reader.readAsText(file);
    } else {
      saveUser(user);
      renderCvSection(user);
      showToast('CV file name saved successfully.', 'success');
    }
  }

  function removeCv() {
    const user = getUser();
    if (!user) return;
    user.cv = null;
    saveUser(user);
    renderCvSection(user);
    $('#cv-upload').value = '';
    showToast('CV removed from profile.', 'info');
  }

  function handleProfileImageUpload(file, forEdit) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showToast('Please upload an image file.', 'error');
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      showToast('Image must be under 2MB.', 'error');
      return;
    }
    const user = getUser();
    if (!user) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      user.profileImage = ev.target.result;
      saveUser(user);
      updateAllAvatars();
      if (!forEdit) renderProfileView();
      showToast('Profile picture updated.', 'success');
    };
    reader.readAsDataURL(file);
  }

  function removeProfileImage() {
    const user = getUser();
    if (!user) return;
    user.profileImage = null;
    saveUser(user);
    updateAllAvatars();
    $('#profile-image-upload').value = '';
    $('#edit-profile-image').value = '';
    renderProfileView();
    showToast('Profile picture removed.', 'info');
  }

  function prefillSearchFromProfile() {
    const user = getUser();
    if (user && isLoggedIn() && $('#search-name')) {
      $('#search-name').value = user.fullName || '';
    }
  }

  // ——— Presets ———
  function setPresetMessage(msg, type) {
    const el = $('#preset-message');
    if (!el) return;
    el.textContent = msg || '';
    el.className = 'preset-hint' + (type ? ` ${type}` : '');
  }

  function refreshPresetDropdown() {
    const select = $('#preset-select');
    if (!select) return;
    const presets = getPresets();
    const current = select.value;
    select.innerHTML = '<option value="">— Select saved preset —</option>';
    presets.forEach((p) => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.name;
      select.appendChild(opt);
    });
    if (current) select.value = current;
  }

  function getFormDataFromSearch() {
    return {
      fullName: $('#search-name').value.trim(),
      qualification: $('#search-qualification').value,
      field: $('#search-field').value.trim(),
      experience: $('#search-experience').value,
      skills: [...searchSkills],
      jobTypes: [...$$('#job-type-group input:checked')].map((c) => c.value),
      locations: [...searchLocations],
      commute: $('#search-commute').value,
      salaryMin: $('#search-salary-min').value,
      salaryMax: $('#search-salary-max').value,
      currency: $('#search-currency').value
    };
  }

  function applyFormDataToSearch(data) {
    $('#search-name').value = data.fullName || '';
    $('#search-qualification').value = data.qualification || '';
    $('#search-field').value = data.field || '';
    $('#search-experience').value = data.experience ?? '';
    $('#search-commute').value = data.commute || '25km';
    $('#search-salary-min').value = data.salaryMin ?? '';
    $('#search-salary-max').value = data.salaryMax ?? '';
    $('#search-currency').value = data.currency || 'LKR';

    searchSkills.length = 0;
    (data.skills || []).forEach((s) => searchSkills.push(s));
    renderTags('skills-tags', searchSkills, (i) => {
      searchSkills.splice(i, 1);
    });

    searchLocations.length = 0;
    (data.locations || []).forEach((l) => searchLocations.push(l));
    renderTags('locations-tags', searchLocations, (i) => {
      searchLocations.splice(i, 1);
    });

    $$('#job-type-group input').forEach((cb) => {
      cb.checked = (data.jobTypes || []).includes(cb.value);
    });
  }

  function clearSearchForm() {
    $('#search-form')?.reset();
    searchSkills.length = 0;
    searchLocations.length = 0;
    renderTags('skills-tags', searchSkills, () => {});
    renderTags('locations-tags', searchLocations, () => {});
    $$('#job-type-group input').forEach((cb) => (cb.checked = false));
    $('#preset-select').value = '';
    $('#preset-name').value = '';
    prefillSearchFromProfile();
    setPresetMessage('');
  }

  function saveCurrentPreset() {
    const name = $('#preset-name').value.trim();
    if (!name) {
      setPresetMessage('Enter a preset name first.', 'error');
      return;
    }
    const presets = getPresets();
    const data = getFormDataFromSearch();
    const id = 'preset-' + Date.now();
    presets.push({ id, name, data });
    savePresets(presets);
    refreshPresetDropdown();
    $('#preset-select').value = id;
    setPresetMessage(`Preset "${name}" saved.`, 'success');
    showToast('Search preset saved.', 'success');
  }

  function updateCurrentPreset() {
    const id = $('#preset-select').value;
    const name = $('#preset-name').value.trim();
    if (!id) {
      setPresetMessage('Select a preset to update.', 'error');
      return;
    }
    const presets = getPresets();
    const idx = presets.findIndex((p) => p.id === id);
    if (idx < 0) return;
    presets[idx].data = getFormDataFromSearch();
    if (name) presets[idx].name = name;
    savePresets(presets);
    refreshPresetDropdown();
    $('#preset-select').value = id;
    setPresetMessage('Preset updated.', 'success');
    showToast('Preset updated.', 'success');
  }

  function deleteCurrentPreset() {
    const id = $('#preset-select').value;
    if (!id) {
      setPresetMessage('Select a preset to delete.', 'error');
      return;
    }
    const presets = getPresets().filter((p) => p.id !== id);
    savePresets(presets);
    refreshPresetDropdown();
    $('#preset-name').value = '';
    setPresetMessage('Preset deleted.', 'success');
    showToast('Preset deleted.', 'info');
  }

  function loadSelectedPreset() {
    const id = $('#preset-select').value;
    if (!id) return;
    const preset = getPresets().find((p) => p.id === id);
    if (!preset) return;
    applyFormDataToSearch(preset.data);
    $('#preset-name').value = preset.name;
    setPresetMessage(`Loaded "${preset.name}".`, 'success');
  }

  // ——— Tags ———
  function renderTags(containerId, arr, onRemove) {
    const container = $(`#${containerId}`);
    if (!container) return;
    container.innerHTML = arr
      .map(
        (item, i) =>
          `<span class="tag">${escapeHtml(item)}<button type="button" data-index="${i}" aria-label="Remove">&times;</button></span>`
      )
      .join('');

    container.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        onRemove(idx);
        renderTags(containerId, arr, onRemove);
      });
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function addTag(arr, inputId, containerId) {
    const input = $(`#${inputId}`);
    const val = input?.value.trim();
    if (!val || arr.includes(val)) return;
    arr.push(val);
    input.value = '';
    renderTags(containerId, arr, (i) => arr.splice(i, 1));
  }

  // ——— Realistic matching (dataset-based) ———
  const EDUCATION_RANK = {
    ol_only: 1,
    al_completed: 2,
    diploma: 3,
    bachelors: 4,
    masters: 5,
    phd: 6
  };

  const GRADE_VALUE = { A: 4, B: 3, C: 2, S: 1, F: 0, U: 0 };
  const MIN_AL_GRADE_VALUE = { S: 1, C: 2, B: 3, A: 4 };

  const SKILL_ALIAS_GROUPS = [
    ['javascript', 'js', 'ecmascript'],
    ['typescript', 'ts'],
    ['html', 'html5'],
    ['css', 'css3'],
    ['react', 'reactjs', 'react.js'],
    ['node', 'nodejs', 'node.js'],
    ['python', 'py'],
    ['sql', 'mysql', 'postgresql', 'postgres'],
    ['excel', 'microsoft excel', 'ms excel', 'spreadsheet'],
    ['communication', 'english communication', 'verbal communication', 'written communication'],
    ['customer service', 'customer support', 'client service'],
    ['ui', 'ui design', 'user interface'],
    ['ux', 'ux design', 'user experience'],
    ['testing', 'manual testing', 'qa', 'quality assurance'],
    ['data', 'data analysis', 'data analytics', 'data analyst'],
    ['git', 'github', 'version control'],
    ['marketing', 'digital marketing'],
    ['design', 'graphic design'],
    ['office', 'microsoft office', 'ms office']
  ];

  const EMPTY_MSG =
    'No realistic job matches found based on your current profile. Try adding more relevant career skills, lowering unrealistic salary expectations, or selecting a broader job type/location.';

  function normalizeSkill(s) {
    return (s || '').toLowerCase().trim().replace(/\s+/g, ' ');
  }

  function isInvalidSkill(skill) {
    const s = normalizeSkill(skill);
    if (!s) return true;
    if (INVALID_SKILLS.some((bad) => s === bad || s.includes(bad))) return true;
    const looksCareer = CAREER_KEYWORDS.some((k) => s.includes(k) || k.includes(s)) || s.length >= 3;
    if (!looksCareer && s.split(/\s+/).length === 1 && s.length < 4) return true;
    return false;
  }

  function getValidSkills(skills) {
    return (skills || []).map(normalizeSkill).filter((s) => s && !isInvalidSkill(s));
  }

  function mostlyInvalidSkills(rawSkills) {
    if (!rawSkills || !rawSkills.length) return false;
    const valid = getValidSkills(rawSkills);
    return valid.length === 0 || valid.length / rawSkills.length < 0.3;
  }

  function isSalaryAbsurd(salaryMin, salaryMax, currency) {
    const min = Number(salaryMin) || 0;
    const max = Number(salaryMax) || 0;
    if (max > 100000000 || min > 100000000) return true;
    if (currency === 'LKR' && max > 50000000) return true;
    if (min > max && max > 0) return true;
    return false;
  }

  function parseGradesFromText(text) {
    const combined = (text || '').toUpperCase();
    const grades = [];
    const counted = combined.match(/(\d+)\s*([ABCDFSU])/gi) || [];
    counted.forEach((m) => {
      const num = parseInt(m, 10) || parseInt(m.match(/\d+/)[0], 10);
      const g = m.replace(/\d+\s*/i, '').trim();
      for (let i = 0; i < num; i++) grades.push(g);
    });
    const tokens = combined.match(/\b([ABCDFSU])\b/g) || [];
    tokens.forEach((g) => grades.push(g));
    const compact = combined.replace(/[^ABCDFSU]/g, '');
    if (grades.length === 0 && compact.length >= 2) {
      compact.split('').forEach((g) => grades.push(g));
    }
    let passCount = 0;
    let totalVal = 0;
    let fails = 0;
    grades.forEach((g) => {
      const v = GRADE_VALUE[g];
      if (v === undefined) return;
      if (v >= 1) passCount++;
      totalVal += v;
      if (g === 'F' || g === 'U') fails++;
    });
    const failRate = grades.length ? fails / grades.length : 0;
    const avg = grades.length ? totalVal / grades.length : 0;
    const weak = grades.length > 0 && (failRate >= 0.5 || fails >= 3);
    return { grades, passCount, avg, failRate, weak, hasData: grades.length > 0 };
  }

  function parseAcademicStrength(olText, alText) {
    const ol = parseGradesFromText(olText);
    const al = parseGradesFromText(alText);
    const combinedWeak = (ol.weak || al.weak) && ol.passCount + al.passCount < 4;
    const score = Math.round(((ol.avg + al.avg) / 2 / 4) * 100) || 50;
    return {
      ol,
      al,
      score: Number.isFinite(score) ? score : 50,
      weak: combinedWeak || (ol.failRate >= 0.6 && al.grades.length === 0),
      failRate: Math.max(ol.failRate, al.failRate)
    };
  }

  function inferQualificationFromAcademics(academic, explicitQual) {
    if (explicitQual) return mapQualificationLabel(explicitQual, academic);
    if (academic.al.hasData && academic.al.passCount >= 2) return 'al_completed';
    if (academic.ol.hasData && academic.ol.passCount >= 5) return 'ol_only';
    return 'ol_only';
  }

  function mapQualificationLabel(qual, academic) {
    const q = (qual || '').toLowerCase();
    if (q.includes('phd') || q.includes('doctor')) return 'phd';
    if (q.includes('master')) return 'masters';
    if (q.includes('bachelor')) return 'bachelors';
    if (q.includes('diploma')) return 'diploma';
    if (q.includes('certification') || q.includes('professional')) return 'diploma';
    if (q.includes('high school')) {
      if (academic && academic.al.hasData && academic.al.passCount >= 1) return 'al_completed';
      return 'ol_only';
    }
    return 'ol_only';
  }

  function getUserEducationRank(profile) {
    const key = profile.educationKey || mapQualificationLabel(profile.qualification, profile.academic);
    return EDUCATION_RANK[key] || 2;
  }

  function skillTokensMatch(userSkill, jobSkill) {
    const u = normalizeSkill(userSkill);
    const t = normalizeSkill(jobSkill);
    if (!u || !t) return false;
    if (u === t || t.includes(u) || u.includes(t)) return true;
    for (const group of SKILL_ALIAS_GROUPS) {
      const uIn = group.some((g) => u.includes(g) || g.includes(u));
      const tIn = group.some((g) => t.includes(g) || g.includes(t));
      if (uIn && tIn) return true;
    }
    const uParts = u.split(/\s+/);
    const tParts = t.split(/\s+/);
    if (uParts.some((p) => p.length > 2 && t.includes(p))) return true;
    if (tParts.some((p) => p.length > 2 && u.includes(p))) return true;
    return false;
  }

  function scoreRequiredSkills(userSkills, required) {
    if (!required || !required.length) return userSkills.length ? 18 : 10;
    let hits = 0;
    required.forEach((req) => {
      if (userSkills.some((u) => skillTokensMatch(u, req))) hits++;
    });
    const ratio = hits / required.length;
    return Math.round(ratio * 30);
  }

  function scorePreferredSkills(userSkills, preferred) {
    if (!preferred || !preferred.length) return userSkills.length ? 4 : 2;
    let hits = 0;
    preferred.forEach((pref) => {
      if (userSkills.some((u) => skillTokensMatch(u, pref))) hits++;
    });
    const ratio = hits / preferred.length;
    return Math.round(ratio * 10);
  }

  function scoreEducation(userRank, minEducation) {
    const jobRank = EDUCATION_RANK[minEducation] || 2;
    const diff = userRank - jobRank;
    if (diff >= 0) return 15;
    if (diff === -1) return 9;
    if (diff === -2) return 4;
    return 1;
  }

  function scoreExperience(userExp, minExp, maxExp) {
    const exp = Number(userExp) || 0;
    const min = Number(minExp) || 0;
    const max = Number(maxExp) >= 99 ? 99 : Number(maxExp) || 99;
    if (exp >= min && exp <= max) return 15;
    if (exp === min - 1) return 11;
    if (exp === min - 2) return 6;
    if (exp < min - 2) return Math.max(0, 3 - (min - exp));
    if (exp > max) return 12;
    return 5;
  }

  function scoreJobType(userTypes, jobTypes) {
    if (!userTypes || !userTypes.length) return 7;
    const jt = (jobTypes || []).map((t) => t.toLowerCase());
    const ut = userTypes.map((t) => t.toLowerCase());
    for (const u of ut) {
      if (jt.some((j) => j.includes(u) || u.includes(j))) return 10;
    }
    if (ut.includes('remote') && jt.some((j) => j.includes('hybrid') || j.includes('remote'))) return 7;
    if (ut.includes('full-time') && jt.some((j) => j.includes('intern'))) return 4;
    return 3;
  }

  function scoreSalary(userMin, userMax, userCurrency, jobSalary) {
    if (!jobSalary) return 5;
    const jMin = jobSalary.min || 0;
    const jMax = jobSalary.max || 0;
    const uMin = Number(userMin) || 0;
    const uMax = Number(userMax) || 0;
    if (uMax > jMax * 5) return 0;
    const overlap = Math.min(uMax, jMax) - Math.max(uMin, jMin);
    if (overlap >= 0) return 10;
    if (uMin <= jMax * 1.25 && uMax >= jMin * 0.7) return 7;
    if (uMax > jMax * 1.5) return 3;
    if (uMin > jMax) return 4;
    return 6;
  }

  function scoreCareerAndField(profile, job) {
    let score = 0;
    const interest = (profile.careerInterest || '').toLowerCase();
    const field = (profile.field || '').toLowerCase();
    const tags = (job.career_interest_tags || []).map((t) => t.toLowerCase());
    const industry = (job.industry || '').toLowerCase();
    const fields = (job.match_criteria?.relevant_fields_of_study || []).map((f) => f.toLowerCase());

    if (interest && tags.some((t) => t === interest || interest.includes(t) || t.includes(interest))) score += 6;
    else if (interest && industry.includes(interest)) score += 5;

    if (field && fields.some((f) => f === 'any' || field.includes(f) || f.includes(field))) score += 4;
    else if (field && industry.includes(field.split(' ')[0])) score += 2;

    if (profile.alStream) {
      const streams = (job.match_criteria?.relevant_al_streams || []).map((s) => s.toLowerCase());
      const st = profile.alStream.toLowerCase();
      if (streams.some((s) => st.includes(s) || s.includes(st))) score += 2;
    }

    return Math.min(10, Math.max(2, score));
  }

  function scoreLocation(userLocations, jobLocation) {
    if (!userLocations || !userLocations.length) return 0;
    const loc = (jobLocation || '').toLowerCase();
    if (loc.includes('remote') || loc.includes('island-wide')) return 3;
    for (const u of userLocations) {
      const ul = u.toLowerCase();
      if (loc.includes(ul) || ul.includes('colombo') && loc.includes('colombo')) return 4;
      if (ul.includes('sri lanka') || ul.includes('lanka')) return 2;
    }
    return 0;
  }

  function scoreAcademicFit(profile, job) {
    const mc = job.match_criteria || {};
    let bonus = 0;
    const academic = profile.academic;
    if (!academic) return 0;

    const olPasses = academic.ol.passCount || 0;
    const minOl = mc.min_ol_passes || 0;
    if (olPasses >= minOl) bonus += 3;
    else if (olPasses >= minOl - 2) bonus += 1;

    const minAl = (mc.min_al_grade || 'S').toUpperCase();
    const minAlVal = MIN_AL_GRADE_VALUE[minAl] || 1;
    const alAvg = academic.al.avg || 0;
    if (alAvg >= minAlVal) bonus += 3;
    else if (alAvg >= minAlVal - 1) bonus += 1;

    return bonus;
  }

  function scoreJobAgainstProfile(job, profile) {
    const mc = job.match_criteria || {};
    const userSkills = getValidSkills(profile.skills);
    const userRank = getUserEducationRank(profile);
    const exp = Number(profile.experience) || 0;

    let requiredPts = scoreRequiredSkills(userSkills, mc.required_skills);
    let preferredPts = scorePreferredSkills(userSkills, mc.preferred_skills);

    if (userSkills.length === 0 && (profile.mode === 'skills' || profile.allowNoSkills)) {
      requiredPts = Math.min(requiredPts, 8);
      preferredPts = Math.min(preferredPts, 3);
    } else if (userSkills.length > 0 && requiredPts === 0 && preferredPts > 0) {
      requiredPts = 8;
    }

    const eduPts = scoreEducation(userRank, mc.min_education);
    const expPts = scoreExperience(exp, mc.min_experience_years, mc.max_experience_years);
    const typePts = scoreJobType(profile.jobTypes, job.job_type);
    const salPts = scoreSalary(profile.salaryMin, profile.salaryMax, profile.currency, job.salary);
    const careerPts = scoreCareerAndField(profile, job);
    const locBonus = scoreLocation(profile.locations, job.location);
    const acadBonus = scoreAcademicFit(profile, job);

    let total = requiredPts + preferredPts + eduPts + expPts + typePts + salPts + careerPts;
    total += Math.min(5, locBonus + acadBonus);

    const title = (job.title || '').toLowerCase();
    const isSenior = /senior|lead|principal|manager|architect|lecturer/.test(title);
    const isJunior = /junior|trainee|intern|entry|assistant|operator/.test(title);

    if (profile.academic?.weak && userSkills.length < 2) {
      total = Math.min(total, 32);
    } else if (profile.academic?.weak && userSkills.length >= 2) {
      if (isSenior) total -= 15;
      else if (isJunior) total = Math.min(total, 55);
      else total = Math.min(total, 48);
    }

    if (isSenior && exp < (mc.min_experience_years || 0)) total -= 8;
    if (userSkills.length >= 3 && requiredPts >= 20) total += 3;
    if (profile.academic && profile.academic.score >= 70 && !profile.academic.weak) total += 2;

    if (salPts === 0 && profile.salaryMax > (job.salary?.max || 0) * 2) {
      total = Math.max(0, total - 5);
    }

    total = Math.max(0, Math.min(98, Math.round(total)));

    const notes = [];
    if (total < 40) notes.push('stretch');
    if (salPts <= 3 && profile.salaryMax > (job.salary?.max || 0)) notes.push('salary');
    if (requiredPts < 12 && userSkills.length) notes.push('skills-gap');

    return {
      score: total,
      breakdown: { requiredPts, preferredPts, eduPts, expPts, typePts, salPts, careerPts, locBonus, acadBonus },
      notes
    };
  }

  function buildWhyMatch(job, profile, scoreResult) {
    const mc = job.match_criteria || {};
    const userSkills = getValidSkills(profile.skills);
    const matchedReq = (mc.required_skills || []).filter((r) => userSkills.some((u) => skillTokensMatch(u, r)));
    const matchedPref = (mc.preferred_skills || []).filter((p) => userSkills.some((u) => skillTokensMatch(u, p)));
    const parts = [];

    if (scoreResult.score < 40) {
      return 'This is a stretch match. Your interest area is related, but you may need stronger required skills and more experience before applying.';
    }

    if (matchedReq.length) {
      parts.push(`matches your ${matchedReq.slice(0, 3).join(', ')} skills`);
    } else if (matchedPref.length) {
      parts.push(`relates to your ${matchedPref.slice(0, 2).join(', ')} skills`);
    }

    if (profile.careerInterest && (job.career_interest_tags || []).includes(profile.careerInterest)) {
      parts.push(`fits your interest in ${profile.careerInterest}`);
    }

    const exp = Number(profile.experience) || 0;
    const minExp = mc.min_experience_years || 0;
    if (exp >= minExp) {
      parts.push('your experience level meets the role requirement');
    } else if (exp === minExp - 1) {
      parts.push('your experience is close to the role requirement');
    } else if (exp < minExp) {
      parts.push('you may need a little more experience for this role');
    }

    if (scoreResult.notes.includes('salary')) {
      parts.push('the salary range may be below your expectation');
    }

    const missing = (mc.required_skills || []).filter((r) => !userSkills.some((u) => skillTokensMatch(u, r)));
    if (missing.length && matchedReq.length) {
      parts.push(`improving ${missing.slice(0, 2).join(' or ')} would strengthen your application`);
    }

    if (!parts.length) {
      return `This ${job.title} role aligns with your profile in ${job.industry || 'this field'}. Review the requirements and highlight your strongest matching skills when applying.`;
    }

    const intro = scoreResult.score >= 40
      ? 'This role'
      : 'This is a stretch match that';
    return `${intro} ${parts.join(', ')}.`;
  }

  function hashPostedDate(id) {
    let h = 0;
    for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
    const daysAgo = h % 21;
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return {
      postedDate: d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      postedTimestamp: d.getTime()
    };
  }

  function cleanCompanySlug(name) {
    return (name || 'company').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function formatSalaryRange(salary) {
    if (!salary) return 'Salary negotiable';
    const fmt = (n) => Number(n).toLocaleString();
    return `${salary.currency || 'LKR'} ${fmt(salary.min)} – ${fmt(salary.max)}`;
  }

  function generateResponsibilities(job) {
    const title = job.title || 'this role';
    const industry = job.industry || 'the organization';
    return [
      `Contribute to day-to-day ${title.toLowerCase()} tasks within ${industry}`,
      'Collaborate with team members and follow supervisor guidance',
      'Apply relevant skills from the job requirements in practical work',
      'Maintain quality standards and timely delivery of assigned work'
    ];
  }

  function mapDatasetJobToCard(job, profile, scoreResult) {
    const mc = job.match_criteria || {};
    const dates = hashPostedDate(job.id);
    const slug = cleanCompanySlug(job.company);
    const isStretch = scoreResult.score < 40;
    const reqSkills = [...(mc.required_skills || []), ...(mc.preferred_skills || [])].slice(0, 5);
    const validUser = getValidSkills(profile.skills);

    return {
      id: job.id,
      jobTitle: job.title,
      companyName: job.company,
      location: job.location,
      jobType: (job.job_type || []).join(', '),
      salaryRange: formatSalaryRange(job.salary),
      salaryMin: job.salary?.min || 0,
      salaryMax: job.salary?.max || 0,
      postedDate: dates.postedDate,
      postedTimestamp: dates.postedTimestamp,
      matchScore: scoreResult.score,
      isStretch,
      shortDescription: job.description || '',
      whyMatch: buildWhyMatch(job, profile, scoreResult),
      responsibilities: generateResponsibilities(job),
      requirements: [
        `Education: ${(mc.min_education || 'relevant').replace(/_/g, ' ')} or equivalent`,
        `Experience: ${mc.min_experience_years || 0}–${mc.max_experience_years >= 99 ? '10+' : mc.max_experience_years || 2} years`,
        `Required skills: ${(mc.required_skills || []).join(', ') || 'See description'}`,
        `Preferred: ${(mc.preferred_skills || []).slice(0, 4).join(', ') || 'Willingness to learn'}`
      ],
      pros: [
        'Clear role expectations and structured work environment',
        'Opportunity to grow skills listed in the job requirements',
        `Relevant to ${job.industry || 'your chosen field'}`
      ],
      cons: [
        'Some requirements may need additional training if you are still building experience',
        'Competition may be higher for popular roles in this field'
      ],
      contactEmail: `careers@${slug}.com`,
      contactPhone: `+94 7${(job.id.charCodeAt(2) || 1) % 10} ${100 + ((job.id.charCodeAt(3) || 0) % 900)} ${1000 + ((job.id.charCodeAt(4) || 0) % 9000)}`,
      companyWebsite: `https://www.${slug}.com`,
      tags: [...reqSkills, ...(job.job_type || []).slice(0, 2)].slice(0, 6),
      suggestedNextStep:
        scoreResult.score >= 55
          ? 'Apply and highlight your strongest matching skills in your CV.'
          : 'Build a short project or certification that demonstrates the top required skills before applying.'
    };
  }

  function matchJobsFromDataset(profile) {
    if (mostlyInvalidSkills(profile.rawSkills || profile.skills)) {
      return { jobs: [], guidance: EMPTY_MSG, blocked: true };
    }
    if (isSalaryAbsurd(profile.salaryMin, profile.salaryMax, profile.currency)) {
      return { jobs: [], guidance: EMPTY_MSG, blocked: true };
    }

    if (profile.mode === 'skills' && profile.academic?.weak && getValidSkills(profile.skills).length === 0) {
      return {
        jobs: [],
        guidance:
          'Your current profile does not strongly match direct job opportunities yet. Consider improving core skills, completing a certification, or building a beginner portfolio.',
        blocked: false
      };
    }

    const scored = LIFELENS_JOB_DATA.map((job) => {
      const result = scoreJobAgainstProfile(job, profile);
      return { job, result };
    }).filter((x) => x.result.score >= 30);

    scored.sort((a, b) => b.result.score - a.result.score);

    let primary = scored.filter((x) => x.result.score >= 40);
    let stretch = scored.filter((x) => x.result.score >= 30 && x.result.score < 40);

    if (primary.length < 3 && stretch.length) {
      const needed = Math.min(3 - primary.length, stretch.length);
      primary = primary.concat(stretch.slice(0, needed));
    }

    const capWeak = profile.academic?.weak && getValidSkills(profile.skills).length < 2;
    const cards = primary.map(({ job, result }) => {
      let r = { ...result };
      if (capWeak) r.score = Math.min(r.score, 35);
      if (profile.academic?.weak && getValidSkills(profile.skills).length >= 2) {
        const junior = /junior|trainee|intern|entry|assistant|operator|data entry/i.test(job.title);
        if (!junior && r.score > 50) r.score = Math.min(r.score, 48);
        if (r.score > 74) r.score = 74;
      }
      if (profile.academic?.weak && getValidSkills(profile.skills).length === 0) {
        r.score = Math.min(r.score, 30);
      }
      const card = mapDatasetJobToCard(job, profile, r);
      card.isStretch = r.score < 40;
      return card;
    });

    cards.sort((a, b) => b.matchScore - a.matchScore);

    let guidance = '';
    if (!cards.length) guidance = EMPTY_MSG;
    else if (profile.academic?.weak && getValidSkills(profile.skills).length < 2) {
      guidance =
        'Your academic results suggest starting with entry-level roles. Adding career-relevant skills will improve your matches.';
    }

    return { jobs: cards, guidance, blocked: false };
  }

  function generateJobs(formData) {
    const profile = {
      skills: formData.skills,
      rawSkills: formData.skills,
      qualification: formData.qualification,
      field: formData.field,
      experience: formData.experience,
      locations: formData.locations || [],
      jobTypes: formData.jobTypes || [],
      salaryMin: formData.salaryMin,
      salaryMax: formData.salaryMax,
      currency: formData.currency || 'LKR',
      careerInterest: inferCareerInterest(formData.field, formData.skills),
      educationKey: mapQualificationLabel(formData.qualification, null),
      mode: 'search'
    };
    const result = matchJobsFromDataset(profile);
    return result.jobs;
  }

  function inferCareerInterest(field, skills) {
    const f = (field || '').toLowerCase();
    const s = getValidSkills(skills || []).join(' ');
    if (/computer|software|it|technology|programming/.test(f + s)) return 'Technology';
    if (/business|management|commerce|marketing/.test(f + s)) return 'Business';
    if (/health|nursing|medical/.test(f + s)) return 'Healthcare';
    if (/design|creative|art/.test(f + s)) return 'Creative';
    if (/engineer/.test(f + s)) return 'Engineering';
    if (/teach|education/.test(f + s)) return 'Education';
    return 'Other';
  }

  function generateSkillsJobs(profileInput) {
    const { skills, interest, stream, olResults, alResults, academic } = profileInput;
    const academicData = academic || parseAcademicStrength(olResults, alResults);
    const validSkills = getValidSkills(skills);

    const profile = {
      skills: validSkills.length ? skills : [],
      rawSkills: skills || [],
      qualification: inferQualificationFromAcademics(academicData, null),
      field: stream || interest || 'General',
      experience: validSkills.length >= 3 ? 1 : 0,
      locations: ['Colombo', 'Remote', 'Island-wide', 'Sri Lanka'],
      jobTypes: ['Full-Time', 'Part-Time', 'Internship', 'Remote', 'Hybrid'],
      salaryMin: 40000,
      salaryMax: 250000,
      currency: 'LKR',
      careerInterest: interest || 'Other',
      alStream: stream,
      academic: academicData,
      educationKey: inferQualificationFromAcademics(academicData, null),
      mode: 'skills',
      allowNoSkills: false
    };

    const result = matchJobsFromDataset(profile);
    return {
      jobs: result.jobs,
      guidance: result.guidance || (result.jobs.length ? '' : EMPTY_MSG),
      weak: academicData.weak && validSkills.length < 2
    };
  }


    function getMatchClass(score) {
    if (score >= 80) return 'match-high';
    if (score >= 60) return 'match-mid';
    return 'match-low';
  }

  function sortJobs(jobs, sortBy) {
    const copy = [...jobs];
    switch (sortBy) {
      case 'salary-high':
        return copy.sort((a, b) => b.salaryMax - a.salaryMax);
      case 'salary-low':
        return copy.sort((a, b) => a.salaryMin - b.salaryMin);
      case 'recent':
        return copy.sort((a, b) => b.postedTimestamp - a.postedTimestamp);
      default:
        return copy.sort((a, b) => b.matchScore - a.matchScore);
    }
  }

  function renderJobCard(job) {
    const saved = isJobSaved(job.id);
    return `
      <article class="job-card glass-card" data-job-id="${job.id}">
        <div class="job-card-header">
          <div>
            <h4>${escapeHtml(job.jobTitle)}</h4>
            <p class="job-meta">${escapeHtml(job.companyName)} · ${escapeHtml(job.location)} · ${escapeHtml(job.jobType)}</p>
            <p class="job-meta">${escapeHtml(job.salaryRange)} · Posted ${escapeHtml(job.postedDate)}</p>
          </div>
          <span class="match-badge ${getMatchClass(job.matchScore)}">${job.isStretch ? 'Stretch Match' : job.matchScore + '% Match'}</span>
        </div>
        <p class="job-why">${escapeHtml(job.whyMatch.substring(0, 120))}${job.whyMatch.length > 120 ? '…' : ''}</p>
        <div class="job-tags">${job.tags.map((t) => `<span class="job-tag">${escapeHtml(t)}</span>`).join('')}</div>
        <div class="job-actions">
          <button type="button" class="btn btn-outline btn-save" data-id="${job.id}">${saved ? '★ Saved' : '☆ Save'}</button>
          <button type="button" class="btn btn-primary btn-details" data-id="${job.id}">View Details</button>
        </div>
      </article>
    `;
  }

  function renderJobs(jobs) {
    const container = $('#jobs-container');
    if (!container) return;
    container.className = currentView === 'grid' ? 'jobs-list view-grid' : 'jobs-list';
    container.innerHTML = jobs.map(renderJobCard).join('');
    bindJobCardEvents();
  }

  function findJobById(id) {
    return (
      currentJobs.find((j) => j.id === id) ||
      skillsCurrentJobs.find((j) => j.id === id) ||
      getSavedJobs().find((j) => j.id === id)
    );
  }

  function bindJobCardEvents() {
    $$('.btn-save').forEach((btn) => {
      btn.onclick = () => {
        const job = findJobById(btn.dataset.id);
        if (job) toggleSaveJob(job);
      };
    });
    $$('.btn-details').forEach((btn) => {
      btn.onclick = () => {
        if (btn.closest('#skills-jobs-container')) {
          showSkillsJobDetail(btn.dataset.id);
          return;
        }
        const fromSaved = $('#section-saved')?.classList.contains('active');
        showJobDetail(btn.dataset.id, fromSaved ? 'saved' : 'search');
      };
    });
  }

  function refreshSaveButtons() {
    $$('.btn-save').forEach((btn) => {
      const saved = isJobSaved(btn.dataset.id);
      btn.textContent = saved ? '★ Saved' : '☆ Save';
    });
    const detailBtn = $('#detail-save-btn');
    if (detailBtn && detailBtn.dataset.id) {
      detailBtn.textContent = isJobSaved(detailBtn.dataset.id) ? '★ Unsave Job' : '☆ Save Job';
    }
    const skillsDetailBtn = $('#skills-detail-save-btn');
    if (skillsDetailBtn && skillsDetailBtn.dataset.id) {
      skillsDetailBtn.textContent = isJobSaved(skillsDetailBtn.dataset.id) ? '★ Unsave Job' : '☆ Save Job';
    }
  }

  function updateJobNavButtons() {
    const prevBtn = $('#btn-prev-job');
    const nextBtn = $('#btn-next-job');
    if (!prevBtn || !nextBtn) return;
    const idx = currentJobs.findIndex((j) => j.id === currentDetailJobId);
    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = idx < 0 || idx >= currentJobs.length - 1;
  }

  function showJobDetail(jobId, fromSection) {
    if (requireLogin('search')) return;

    const job = currentJobs.find((j) => j.id === jobId) || getSavedJobs().find((j) => j.id === jobId);
    if (!job) return;

    currentDetailJobId = jobId;
    currentJobIndex = currentJobs.findIndex((j) => j.id === jobId);

    detailReturnSection = fromSection || ($('#section-saved')?.classList.contains('active') ? 'saved' : 'search');
    if (detailReturnSection === 'saved') {
      navigateTo('search');
    }

    showingJobDetail = true;
    $('#search-form')?.classList.add('hidden');
    $('.preset-bar')?.classList.add('hidden');
    $('#search-results-area')?.classList.remove('hidden');
    $('#job-detail-section')?.classList.remove('hidden');

    renderJobDetailContent(job);
    updateJobNavButtons();

    const backBtn = $('#back-to-results');
    if (backBtn) {
      backBtn.textContent = detailReturnSection === 'saved' ? '← Back to Saved Jobs' : '← Back to Results';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderJobDetailContent(job, context) {
    const saved = isJobSaved(job.id);
    const isSkills = context === 'skills';
    const content = $(isSkills ? '#skills-job-detail-content' : '#job-detail-content');
    const saveBtnId = isSkills ? 'skills-detail-save-btn' : 'detail-save-btn';
    content.innerHTML = `
      <article class="job-detail glass-card">
        <div class="job-detail-header">
          <h2>${escapeHtml(job.jobTitle)}</h2>
          <p class="job-meta">${escapeHtml(job.companyName)} · ${escapeHtml(job.location)} · ${escapeHtml(job.jobType)}</p>
          <p class="job-meta">${escapeHtml(job.salaryRange)} · Posted ${escapeHtml(job.postedDate)}</p>
          <span class="match-badge ${getMatchClass(job.matchScore)}">${job.isStretch ? 'Stretch Match' : job.matchScore + '% Match'}</span>
          <div style="margin-top:1rem">
            <button type="button" class="btn btn-outline" id="${saveBtnId}" data-id="${job.id}">${saved ? '★ Unsave Job' : '☆ Save Job'}</button>
          </div>
        </div>
        <div class="detail-section">
          <h3>Why This Job Suits You</h3>
          <p class="job-why">${escapeHtml(job.whyMatch)}</p>
        </div>
        <div class="detail-section">
          <h3>About the Role</h3>
          <p class="job-why">${escapeHtml(job.shortDescription)}</p>
        </div>
        <div class="detail-section">
          <h3>Responsibilities</h3>
          <ul>${job.responsibilities.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}</ul>
        </div>
        <div class="detail-section">
          <h3>Requirements</h3>
          <ul>${job.requirements.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}</ul>
        </div>
        <div class="detail-section pros-cons">
          <div>
            <h3>Pros</h3>
            <ul>${job.pros.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}</ul>
          </div>
          <div>
            <h3>Cons</h3>
            <ul>${job.cons.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="detail-section contact-info">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:${escapeHtml(job.contactEmail)}">${escapeHtml(job.contactEmail)}</a></p>
          <p>Phone: ${escapeHtml(job.contactPhone)}</p>
          <p>Website: <a href="${escapeHtml(job.companyWebsite)}" target="_blank" rel="noopener">${escapeHtml(job.companyWebsite)}</a></p>
        </div>
        ${job.suggestedNextStep ? `<div class="detail-section"><h3>Suggested Next Step</h3><p class="job-why">${escapeHtml(job.suggestedNextStep)}</p></div>` : ''}
      </article>
    `;

    $(`#${saveBtnId}`)?.addEventListener('click', () => toggleSaveJob(job));
  }

  function showSkillsJobDetail(jobId) {
    if (requireLogin('skills')) return;
    const job = skillsCurrentJobs.find((j) => j.id === jobId);
    if (!job) return;

    currentDetailJobId = jobId;
    currentJobIndex = skillsCurrentJobs.findIndex((j) => j.id === jobId);

    $('#skills-form')?.classList.add('hidden');
    $('#skills-results-area')?.classList.add('hidden');
    $('#skills-job-detail-section')?.classList.remove('hidden');

    renderJobDetailContent(job, 'skills');
    updateSkillsJobNavButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateSkillsJobNavButtons() {
    const prevBtn = $('#skills-btn-prev-job');
    const nextBtn = $('#skills-btn-next-job');
    if (!prevBtn || !nextBtn) return;
    const idx = skillsCurrentJobs.findIndex((j) => j.id === currentDetailJobId);
    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = idx < 0 || idx >= skillsCurrentJobs.length - 1;
  }

  function navigateSkillsJobDetail(direction) {
    if (!skillsCurrentJobs.length || currentJobIndex < 0) return;
    const newIndex = currentJobIndex + direction;
    if (newIndex < 0 || newIndex >= skillsCurrentJobs.length) return;
    currentJobIndex = newIndex;
    currentDetailJobId = skillsCurrentJobs[newIndex].id;
    renderJobDetailContent(skillsCurrentJobs[newIndex], 'skills');
    updateSkillsJobNavButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function backToSkillsResults() {
    currentDetailJobId = null;
    $('#skills-job-detail-section')?.classList.add('hidden');
    $('#skills-form')?.classList.remove('hidden');
    if (skillsCurrentJobs.length) {
      $('#skills-results-area')?.classList.remove('hidden');
    }
  }

  function navigateJobDetail(direction) {
    if (!currentJobs.length || currentJobIndex < 0) return;
    const newIndex = currentJobIndex + direction;
    if (newIndex < 0 || newIndex >= currentJobs.length) return;
    currentJobIndex = newIndex;
    currentDetailJobId = currentJobs[newIndex].id;
    renderJobDetailContent(currentJobs[newIndex]);
    updateJobNavButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function backToResults() {
    showingJobDetail = false;
    currentDetailJobId = null;
    $('#job-detail-section')?.classList.add('hidden');
    $('.preset-bar')?.classList.remove('hidden');

    if (detailReturnSection === 'saved') {
      navigateTo('saved');
      return;
    }

    $('#search-form')?.classList.remove('hidden');
    if (currentJobs.length) {
      $('#search-results-area')?.classList.remove('hidden');
    }
  }

  function validateSearchForm() {
    let valid = true;
    clearSearchErrors();

    const name = $('#search-name').value.trim();
    const qual = $('#search-qualification').value;
    const field = $('#search-field').value.trim();
    const exp = $('#search-experience').value;
    const salaryMin = $('#search-salary-min').value;
    const salaryMax = $('#search-salary-max').value;
    const jobTypes = [...$$('#job-type-group input:checked')].map((c) => c.value);

    if (!name) { setError('search-name', 'Full name is required'); valid = false; }
    if (!qual) { setError('search-qualification', 'Qualification is required'); valid = false; }
    if (!field) { setError('search-field', 'Field of study is required'); valid = false; }
    if (exp === '' || exp < 0) { setError('search-experience', 'Years of experience is required'); valid = false; }
    if (searchSkills.length === 0) { setError('skills-tags', 'Add at least one skill'); valid = false; }
    if (jobTypes.length === 0) { setError('job-type-group', 'Select at least one job type'); valid = false; }
    if (searchLocations.length === 0) { setError('locations-tags', 'Add at least one location'); valid = false; }
    if (!salaryMin) { setError('search-salary-min', 'Minimum salary is required'); valid = false; }
    if (!salaryMax) { setError('search-salary-max', 'Maximum salary is required'); valid = false; }
    if (salaryMin && salaryMax && Number(salaryMin) > Number(salaryMax)) {
      setError('search-salary-max', 'Max must be greater than min');
      valid = false;
    }

    return valid;
  }

  function handleSearch(e) {
    e.preventDefault();
    if (requireLogin('search')) return;
    if (!validateSearchForm()) return;

    const formData = {
      fullName: $('#search-name').value.trim(),
      qualification: $('#search-qualification').value,
      field: $('#search-field').value.trim(),
      experience: $('#search-experience').value,
      skills: [...searchSkills],
      jobTypes: [...$$('#job-type-group input:checked')].map((c) => c.value),
      locations: [...searchLocations],
      commute: $('#search-commute').value,
      salaryMin: Number($('#search-salary-min').value),
      salaryMax: Number($('#search-salary-max').value),
      currency: $('#search-currency').value
    };

    lastSearchFormData = formData;
    showingJobDetail = false;
    currentDetailJobId = null;
    $('#job-detail-section')?.classList.add('hidden');

    const resultsArea = $('#search-results-area');
    const skeleton = $('#skeleton-container');
    const jobsContainer = $('#jobs-container');

    resultsArea?.classList.remove('hidden');
    skeleton?.classList.remove('hidden');
    jobsContainer.innerHTML = '';
    skeleton.innerHTML = Array(6).fill('<div class="skeleton-card"></div>').join('');

    setTimeout(() => {
      currentJobs = generateJobs(formData);
      skeleton?.classList.add('hidden');
      const emptyEl = $('#search-empty');
      const header = $('#search-results-header');
      if (!currentJobs.length) {
        $('#jobs-container').innerHTML = '';
        header?.classList.add('hidden');
        emptyEl?.classList.remove('hidden');
        $('#results-count').textContent = '';
      } else {
        emptyEl?.classList.add('hidden');
        header?.classList.remove('hidden');
        const n = currentJobs.length;
        $('#results-count').textContent = `${n} job${n === 1 ? '' : 's'} found matching your profile`;
        renderJobs(sortJobs(currentJobs, $('#sort-jobs')?.value || 'match'));
      }
    }, 1500);
  }

  function renderSavedJobs() {
    const saved = getSavedJobs();
    const container = $('#saved-jobs-container');
    const empty = $('#saved-empty');
    const clearBtn = $('#clear-saved-btn');

    if (!saved.length) {
      container.innerHTML = '';
      container.classList.add('hidden');
      empty?.classList.remove('hidden');
      clearBtn?.classList.add('hidden');
      return;
    }

    empty?.classList.add('hidden');
    container?.classList.remove('hidden');
    clearBtn?.classList.remove('hidden');
    container.className = 'jobs-grid view-grid';
    currentJobs = saved;
    container.innerHTML = saved.map(renderJobCard).join('');
    bindJobCardEvents();
  }

  function analyzeSkills(e) {
    e.preventDefault();
    if (requireLogin('skills')) return;

    const skills = [...skillsPageTags];
    const interest = $('#career-interest').value || 'Other';
    const stream = $('#al-stream').value || '';

    const olResults = $('#ol-results').value.trim();
    const alResults = $('#al-results').value.trim();
    const academic = parseAcademicStrength(olResults, alResults);

    $('#skills-loading')?.classList.remove('hidden');
    $('#skills-results-area')?.classList.add('hidden');
    $('#skills-job-detail-section')?.classList.add('hidden');
    $('#skills-form')?.classList.remove('hidden');

    setTimeout(() => {
      $('#skills-loading')?.classList.add('hidden');

      const result = generateSkillsJobs({
        skills,
        interest,
        stream,
        olResults,
        alResults,
        academic
      });

      skillsCurrentJobs = result.jobs;
      const resultsArea = $('#skills-results-area');
      const guidanceEl = $('#skills-guidance');
      const header = $('#skills-results-header');
      const container = $('#skills-jobs-container');
      const emptyEl = $('#skills-empty');

      resultsArea?.classList.remove('hidden');

      if (result.guidance) {
        guidanceEl.textContent = result.guidance;
        guidanceEl.classList.remove('hidden');
      } else {
        guidanceEl?.classList.add('hidden');
      }

      if (!skillsCurrentJobs.length) {
        header?.classList.add('hidden');
        container.innerHTML = '';
        emptyEl?.classList.remove('hidden');
        const emptyMsg = $('#skills-empty-msg');
        if (emptyMsg) {
          emptyMsg.textContent =
            result.guidance ||
            'No realistic job matches found based on your education and skills. Try adding career-relevant skills or improving academic results.';
        }
      } else {
        emptyEl?.classList.add('hidden');
        header?.classList.remove('hidden');
        const n = skillsCurrentJobs.length;
        $('#skills-results-count').textContent = `${n} job${n === 1 ? '' : 's'} found matching your profile`;
        container.className = 'jobs-list';
        container.innerHTML = skillsCurrentJobs.map(renderJobCard).join('');
        bindJobCardEvents();
      }
    }, 1000);
  }

  function handleSectionClick(e) {
    e.preventDefault();
    const section = e.currentTarget.dataset.section;
    if (section) navigateTo(section);
  }

  // ——— Init ———
  function init() {
    initTheme();
    initParticles();
    updateNavbar();
    refreshPresetDropdown();
    prefillSearchFromProfile();

    if ($('#section-home')?.classList.contains('active')) {
      runTypingAnimation();
    }

    $$('[data-section]').forEach((el) => {
      el.addEventListener('click', handleSectionClick);
    });

    $$('.nav-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.section);
      });
    });

    $('[data-action="get-started"]')?.addEventListener('click', () => {
      if (isLoggedIn()) navigateTo('search');
      else openModal('signup');
    });

    $('#btn-login')?.addEventListener('click', () => openModal('login'));
    $('#btn-signup')?.addEventListener('click', () => openModal('signup'));
    $('#btn-logout')?.addEventListener('click', handleLogout);
    $('#modal-close')?.addEventListener('click', closeModal);
    $('#auth-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'auth-modal') closeModal();
    });

    $('#switch-to-signup')?.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('signup');
    });
    $('#switch-to-login')?.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('login');
    });

    $('#theme-selector')?.addEventListener('change', (e) => applyTheme(e.target.value));

    $('#signup-form')?.addEventListener('submit', handleSignup);
    $('#login-form')?.addEventListener('submit', handleLogin);
    $('#search-form')?.addEventListener('submit', handleSearch);
    $('#skills-form')?.addEventListener('submit', analyzeSkills);

    $('#add-skill-btn')?.addEventListener('click', () => addTag(searchSkills, 'skill-input', 'skills-tags'));
    $('#skill-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); addTag(searchSkills, 'skill-input', 'skills-tags'); }
    });

    $('#add-location-btn')?.addEventListener('click', () => addTag(searchLocations, 'location-input', 'locations-tags'));
    $('#location-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); addTag(searchLocations, 'location-input', 'locations-tags'); }
    });

    $('#add-skills-page-btn')?.addEventListener('click', () => addTag(skillsPageTags, 'skills-page-input', 'skills-page-tags'));
    $('#skills-page-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); addTag(skillsPageTags, 'skills-page-input', 'skills-page-tags'); }
    });

    $('#sort-jobs')?.addEventListener('change', (e) => {
      renderJobs(sortJobs(currentJobs, e.target.value));
    });

    $$('.view-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('.view-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentView = btn.dataset.view;
        renderJobs(sortJobs(currentJobs, $('#sort-jobs')?.value || 'match'));
      });
    });

    $('#back-to-results')?.addEventListener('click', backToResults);
    $('#btn-prev-job')?.addEventListener('click', () => navigateJobDetail(-1));
    $('#btn-next-job')?.addEventListener('click', () => navigateJobDetail(1));

    $('#skills-back-to-results')?.addEventListener('click', backToSkillsResults);
    $('#skills-btn-prev-job')?.addEventListener('click', () => navigateSkillsJobDetail(-1));
    $('#skills-btn-next-job')?.addEventListener('click', () => navigateSkillsJobDetail(1));

    $('#nav-avatar-btn')?.addEventListener('click', () => {
      if (isLoggedIn()) navigateTo('profile');
    });
    $('#home-avatar-btn')?.addEventListener('click', () => {
      if (isLoggedIn()) navigateTo('profile');
    });
    $('#btn-upload-photo')?.addEventListener('click', () => $('#profile-image-upload')?.click());
    $('#profile-image-upload')?.addEventListener('change', (e) => {
      handleProfileImageUpload(e.target.files[0], false);
      e.target.value = '';
    });
    $('#btn-remove-photo')?.addEventListener('click', removeProfileImage);
    $('#btn-edit-upload-photo')?.addEventListener('click', () => $('#edit-profile-image')?.click());
    $('#edit-profile-image')?.addEventListener('change', (e) => {
      handleProfileImageUpload(e.target.files[0], true);
      e.target.value = '';
    });
    $('#btn-edit-remove-photo')?.addEventListener('click', removeProfileImage);

    $('#btn-save-preset')?.addEventListener('click', saveCurrentPreset);
    $('#btn-update-preset')?.addEventListener('click', updateCurrentPreset);
    $('#btn-delete-preset')?.addEventListener('click', deleteCurrentPreset);
    $('#btn-clear-form')?.addEventListener('click', clearSearchForm);
    $('#preset-select')?.addEventListener('change', loadSelectedPreset);

    $('#btn-edit-profile')?.addEventListener('click', startEditProfile);
    $('#btn-cancel-edit')?.addEventListener('click', () => showProfileEditMode(false));
    $('#profile-edit-form')?.addEventListener('submit', handleProfileSave);
    $('#btn-upload-cv')?.addEventListener('click', () => $('#cv-upload')?.click());
    $('#cv-upload')?.addEventListener('change', (e) => handleCvUpload(e.target.files[0]));
    $('#btn-remove-cv')?.addEventListener('click', removeCv);

    $('#clear-saved-btn')?.addEventListener('click', () => {
      saveSavedJobs([]);
      renderSavedJobs();
      updateProfileSummary();
      refreshSaveButtons();
      showToast('All saved jobs cleared.', 'info');
    });

    $('#nav-toggle')?.addEventListener('click', () => {
      const links = $('#nav-links');
      const open = links.classList.toggle('open');
      $('#nav-toggle').setAttribute('aria-expanded', open);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
