const OpenAI = require("openai");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Faqat POST so‘rov qabul qilinadi."
        });
    }

    try {
        const { image, problem } = req.body || {};

        if (!image && !problem) {
            return res.status(400).json({
                error: "Misol yoki rasm yuborilmadi."
            });
        }

        if (!process.env.OPENAI_API_KEY) {
            return res.status(500).json({
                error: "OPENAI_API_KEY sozlanmagan."
            });
        }

        const client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

        const content = [
            {
                type: "input_text",
                text: `
Sen professional matematika o‘qituvchisisan.

Foydalanuvchi matematik misol yubordi.
Agar rasm yuborilgan bo‘lsa, avval rasmdagi
matematik misolni juda ehtiyotkorlik bilan o‘qi.

Keyin uni tekshirib, bosqichma-bosqich yech.

Javobni O‘ZBEK TILIDA ber.

Quyidagi tartibdan foydalan:

📌 ANIQLANGAN MISOL:
Misolni yoz.

🧠 YECHISH:
1-qadam
2-qadam
3-qadam

✅ JAVOB:
Oxirgi aniq javobni yoz.

Agar rasm sifati yomon bo‘lsa yoki misolning
bir qismi tushunarsiz bo‘lsa, taxmin qilma.
Foydalanuvchidan rasmni aniqroq yuborishni so‘ra.

Faqat matematika bilan bog‘liq savolga javob ber.

Foydalanuvchi yozgan misol:
${problem || "Misol rasm ichidan aniqlansin."}
`
            }
        ];

        if (image) {
            content.push({
                type: "input_image",
                image_url: image,
                detail: "high"
            });
        }

        const response = await client.responses.create({
            model: "gpt-5.6-luna",
            input: [
                {
                    role: "user",
                    content: content
                }
            ]
        });

        return res.status(200).json({
            answer: response.output_text || "Yechim olinmadi."
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: "AI bilan bog‘lanishda xatolik yuz berdi."
        });
    }
};
