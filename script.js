// ==========================================
// 15 TA SAVOL
// ==========================================

const allQuestions = [

    {
        emoji: "👥",
        question: "Notanish odamlar orasiga kirganingda qanday bo'lasan?",
        answers: [
            ["Darhol suhbat boshlayman", "leader"],
            ["Avval kuzatib turaman", "serious"],
            ["Kimdir bilan tanishishga harakat qilaman", "kind"],
            ["Vaziyatga qarab harakat qilaman", "adventurer"]
        ]
    },

    {
        emoji: "🧠",
        question: "Muhim qaror qabul qilish kerak bo'lsa nima qilasan?",
        answers: [
            ["Hammasini o'ylab chiqaman", "strategist"],
            ["Yuragimga quloq solaman", "kind"],
            ["Tezda qaror qilaman", "leader"],
            ["Maslahat so'rayman", "responsible"]
        ]
    },

    {
        emoji: "🔥",
        question: "Kimdir seni qattiq tanqid qilsa...",
        answers: [
            ["Xatoyim bo'lsa tuzataman", "responsible"],
            ["O'zimni himoya qilaman", "leader"],
            ["Ichimda o'ylab yuraman", "mysterious"],
            ["E'tibor bermayman", "free"]
        ]
    },

    {
        emoji: "🏆",
        question: "Jamoada ishlaganda qaysi rol senga mos?",
        answers: [
            ["Rahbar bo'lish", "leader"],
            ["Tartibni nazorat qilish", "responsible"],
            ["Yangi g'oyalar berish", "creative"],
            ["Hammaga yordam berish", "kind"]
        ]
    },

    {
        emoji: "🌙",
        question: "Bo'sh vaqtingda ko'proq nima qilishni yoqtirasan?",
        answers: [
            ["Yolg'iz qolib o'ylash", "mysterious"],
            ["Do'stlar bilan vaqt o'tkazish", "loyal"],
            ["Yangi narsalarni sinash", "adventurer"],
            ["Ijod bilan shug'ullanish", "creative"]
        ]
    },

    {
        emoji: "✈️",
        question: "Kutilmaganda sayohat qilish imkoniyati chiqsa...",
        answers: [
            ["Ketdik! 🔥", "adventurer"],
            ["Avval reja tuzaman", "strategist"],
            ["Kim bilan borishimga qarayman", "loyal"],
            ["O'zim xohlaganimni qilaman", "free"]
        ]
    },

    {
        emoji: "❤️",
        question: "Do'stlikda sen uchun eng muhim narsa nima?",
        answers: [
            ["Sadoqat", "loyal"],
            ["Mehr va tushunish", "kind"],
            ["Halollik", "serious"],
            ["Birga yaxshi vaqt o'tkazish", "adventurer"]
        ]
    },

    {
        emoji: "🎨",
        question: "Odamlar seni qanday inson deb bilishadi?",
        answers: [
            ["Ijodkor", "creative"],
            ["Jiddiy", "serious"],
            ["Mehribon", "kind"],
            ["O'ziga xos", "mysterious"]
        ]
    },

    {
        emoji: "😤",
        question: "Muammo chiqib qolsa birinchi nima qilasan?",
        answers: [
            ["Nazoratni qo'lga olaman", "leader"],
            ["Sababini tahlil qilaman", "strategist"],
            ["Tinchlik bilan hal qilaman", "serious"],
            ["Boshqalarga yordam beraman", "responsible"]
        ]
    },

    {
        emoji: "💭",
        question: "His-tuyg'ularingni boshqalarga tez ko'rsatasanmi?",
        answers: [
            ["Ha, ochiqchasiga", "kind"],
            ["Faqat yaqinlarimga", "loyal"],
            ["Ko'pincha ichimda saqlayman", "mysterious"],
            ["Hislarimni ko'p o'ylamayman", "free"]
        ]
    },

    {
        emoji: "👑",
        question: "Agar katta imkoniyat berilsa nima qilarding?",
        answers: [
            ["Katta loyiha boshlardim", "leader"],
            ["Puxta reja tuzardim", "strategist"],
            ["O'z biznesimni boshlardim", "responsible"],
            ["Ijodiy narsa yaratardim", "creative"]
        ]
    },

    {
        emoji: "📋",
        question: "Qoidalar va tartib haqida fikring qanday?",
        answers: [
            ["Tartib juda muhim", "responsible"],
            ["Qoidalar kerak", "serious"],
            ["Kerak bo'lsa o'zgartiraman", "free"],
            ["O'z yo'limdan boraman", "adventurer"]
        ]
    },

    {
        emoji: "🤝",
        question: "Yaqin insoning muammoga tushib qolsa...",
        answers: [
            ["Darhol yordam beraman", "kind"],
            ["Yonida qolaman", "loyal"],
            ["Yechim topaman", "strategist"],
            ["Vaziyatni boshqaraman", "leader"]
        ]
    },

    {
        emoji: "🔮",
        question: "Kelajak haqida qanday o'ylaysan?",
        answers: [
            ["Oldindan rejalashtiraman", "strategist"],
            ["Jiddiy o'ylayman", "serious"],
            ["Nima bo'lsa ko'ramiz", "free"],
            ["Katta orzularim bor", "creative"]
        ]
    },

    {
        emoji: "🌟",
        question: "O'zingda qaysi xususiyatni ko'proq qadrlaysan?",
        answers: [
            ["Jasoratim", "leader"],
            ["Mehribonligim", "kind"],
            ["Mas'uliyatim", "responsible"],
            ["Ijodkorligim", "creative"]
        ]
    }
];


// ==========================================
// NATIJALAR
// ==========================================

const results = {

    leader: {
        icon: "👑",
        title: "Lider",
        description: "Sen tabiatan tashabbuskor, qat'iyatli va boshqalarga yo'l ko'rsatishni yaxshi ko'radigan insonsan.",
        strength: "Jasorat, qat'iyat va boshqaruv qobiliyati.",
        weakness: "Ba'zida hamma narsani nazorat qilishga urinishing mumkin.",
        career: "Tadbirkor, direktor, menejer, loyiha rahbari."
    },

    kind: {
        icon: "❤️",
        title: "Mehribon",
        description: "Sen boshqalarning his-tuyg'ularini yaxshi tushunadigan, samimiy va g'amxo'r insonsan.",
        strength: "Empatiya, samimiylik va mehr.",
        weakness: "Ba'zida boshqalarning muammolarini o'zingnikidan ustun qo'yasan.",
        career: "Psixolog, shifokor, o'qituvchi, HR mutaxassisi."
    },

    serious: {
        icon: "🧠",
        title: "Jiddiy",
        description: "Sen hayotga jiddiy qaraydigan, vazmin va o'ylab ish qiladigan insonsan.",
        strength: "Vazminlik, tartiblilik va chuqur fikrlash.",
        weakness: "Ba'zida ortiqcha jiddiy bo'lib qolishing mumkin.",
        career: "Huquqshunos, muhandis, moliyachi, shifokor."
    },

    responsible: {
        icon: "🛡️",
        title: "Mas'uliyatli",
        description: "Sen bergan va'dangni bajarishga harakat qiladigan va ishni oxirigacha yetkazadigan ishonchli odamsan.",
        strength: "Mas'uliyat, intizom va ishonchlilik.",
        weakness: "Ba'zida juda ko'p mas'uliyatni o'z zimmangga olasan.",
        career: "Menejer, buxgalter, administrator, muhandis."
    },

    creative: {
        icon: "🎨",
        title: "Ijodkor",
        description: "Sen oddiy narsalarga ham boshqacha qaray oladigan, yangi g'oyalar topishni yaxshi ko'radigan insonsan.",
        strength: "Tasavvur, kreativlik va yangilik yaratish.",
        weakness: "Ba'zida bir vaqtning o'zida juda ko'p narsaga qiziqasan.",
        career: "Dizayner, dasturchi, fotograf, rejissyor, marketing mutaxassisi."
    },

    adventurer: {
        icon: "🔥",
        title: "Sarguzashtchi",
        description: "Sen yangilik, harakat va kuchli taassurotlarni yaxshi ko'radigan faol insonsan.",
        strength: "Jasorat, energiya va moslashuvchanlik.",
        weakness: "Ba'zida tez zerikishing mumkin.",
        career: "Jurnalist, bloger, sportchi, sayohatchi, tadbirkor."
    },

    mysterious: {
        icon: "🌙",
        title: "Sirli",
        description: "Sen ichki dunyosi boy va hamma narsani darhol boshqalarga ochib bermaydigan insonsan.",
        strength: "Kuzatuvchanlik, sezgi va chuqur fikrlash.",
        weakness: "Ba'zida his-tuyg'ularingni ichingda saqlaysan.",
        career: "Yozuvchi, tadqiqotchi, dasturchi, psixolog, analitik."
    },

    loyal: {
        icon: "🤝",
        title: "Sodiq",
        description: "Sen munosabatlarni qadrlaydigan va yaqin insonlarini hech qachon osonlikcha tashlab ketmaydigan odamsan.",
        strength: "Sadoqat, do'stlik va ishonchlilik.",
        weakness: "Ba'zida noto'g'ri insonlarga ham haddan tashqari ishonishing mumkin.",
        career: "O'qituvchi, psixolog, HR, menejer, maslahatchi."
    },

    free: {
        icon: "⚡",
        title: "Erkin ruh",
        description: "Sen mustaqillikni juda qadrlaysan va o'z yo'lingdan borishni yaxshi ko'rasan.",
        strength: "Mustaqillik, jasorat va o'ziga xoslik.",
        weakness: "Qattiq tartib va cheklovlar seni tez zeriktirishi mumkin.",
        career: "Freelancer, tadbirkor, bloger, dizayner, ijodkor."
    },

    strategist: {
        icon: "🎯",
        title: "Strateg",
        description: "Sen vaziyatni tahlil qiladigan, oldindan reja tuzadigan va uzoqni ko'ra oladigan insonsan.",
        strength: "Mantiq, tahlil va rejalashtirish.",
        weakness: "Ba'zida juda ko'p o'ylab qarorni kechiktirishing mumkin.",
        career: "Dasturchi, analitik, moliyachi, muhandis, IT mutaxassisi."
    }
};


// ==========================================
// O'ZGARUVCHILAR
// ==========================================

let questions = [];
let currentQuestion = 0;

let scores = {};


// ==========================================
// RANDOM ARALASHTIRISH
// ==========================================

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


// ==========================================
// TESTNI BOSHLASH
// ==========================================

function startTest() {

    currentQuestion = 0;

    scores = {};

    Object.keys(results).forEach(type => {
        scores[type] = 0;
    });

    // 15 ta savolni random qilish
    questions = shuffle([...allQuestions]);

    document
        .getElementById("startScreen")
        .classList.remove("active");

    document
        .getElementById("resultScreen")
        .classList.remove("active");

    document
        .getElementById("quizScreen")
        .classList.add("active");

    showQuestion();
}


// ==========================================
// SAVOL
// ==========================================

function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `${currentQuestion + 1} / 15`;

    const percent =
        Math.round(((currentQuestion + 1) / 15) * 100);

    document.getElementById("percentage").textContent =
        `${percent}%`;

    document.getElementById("progressBar").style.width =
        `${percent}%`;

    document.getElementById("questionEmoji").textContent =
        question.emoji;

    document.getElementById("questionText").textContent =
        question.question;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    // Javoblarni ham random qilish
    const randomAnswers =
        shuffle([...question.answers]);

    randomAnswers.forEach(answer => {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent =
            answer[0];

        button.addEventListener("click", function () {

            selectAnswer(answer[1]);

        });

        answersContainer.appendChild(button);

    });
}


// ==========================================
// JAVOB
// ==========================================

function selectAnswer(type) {

    scores[type]++;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }
}


// ==========================================
// NATIJA
// ==========================================

function showResult() {

    document
        .getElementById("quizScreen")
        .classList.remove("active");

    document
        .getElementById("resultScreen")
        .classList.add("active");


    let bestType = Object.keys(scores)[0];

    Object.keys(scores).forEach(type => {

        if (scores[type] > scores[bestType]) {

            bestType = type;

        }

    });


    const result = results[bestType];


    document.getElementById("resultIcon").textContent =
        result.icon;

    document.getElementById("resultTitle").textContent =
        result.title;

    document.getElementById("resultDescription").textContent =
        result.description;

    document.getElementById("strength").textContent =
        result.strength;

    document.getElementById("weakness").textContent =
        result.weakness;

    document.getElementById("career").textContent =
        result.career;
}


// ==========================================
// QAYTA TEST
// ==========================================

function restartTest() {

    document
        .getElementById("resultScreen")
        .classList.remove("active");

    document
        .getElementById("quizScreen")
        .classList.add("active");

    startTest();
}


// ==========================================
// ULASHISH
// ==========================================

function shareResult() {

    const title =
        document.getElementById("resultTitle").textContent;

    const text =
        `🧠 Mening xarakterim: ${title}!\n\n` +
        `Sen ham o'z xarakteringni aniqlab ko'r! 🔥`;


    if (navigator.share) {

        navigator.share({
            title: "Mening xarakterim",
            text: text
        });

    } else {

        navigator.clipboard.writeText(text);

        alert("Natija nusxalandi! 📋");

    }
}