let selectedImage = null;

// Rasm tanlash
document.getElementById("imageInput").addEventListener("change", function (e) {
    const file = e.target.files[0];

    if (!file) return;

    selectedImage = file;

    const reader = new FileReader();

    reader.onload = function (event) {
        document.getElementById("previewImage").src = event.target.result;
        document.getElementById("previewBox").style.display = "block";
        document.getElementById("uploadContent").style.display = "none";
    };

    reader.readAsDataURL(file);
});

// Rasmni o'chirish
function removeImage() {
    selectedImage = null;

    document.getElementById("imageInput").value = "";
    document.getElementById("previewBox").style.display = "none";
    document.getElementById("uploadContent").style.display = "block";
}

// Misol tanlash
function setExample(text) {
    document.getElementById("problemInput").value = text;
}

// Rasmni Base64 ga o'tkazish
function fileToDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file);
    });
}

// AI orqali masalani yechish
async function solveProblem() {

    const problem = document.getElementById("problemInput").value.trim();

    if (!problem && !selectedImage) {
        alert("Iltimos, masala yozing yoki rasm yuklang!");
        return;
    }

    const resultCard = document.getElementById("resultCard");
    const resultText = document.getElementById("resultText");

    resultCard.style.display = "block";
    resultText.innerHTML = "🤖 AI masalani tahlil qilmoqda...";

    try {

        let imageData = null;

        if (selectedImage) {
            imageData = await fileToDataURL(selectedImage);
        }

        const response = await fetch("/api/solve", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                problem: problem,
                image: imageData
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Server xatosi");
        }

        resultText.innerHTML = formatAnswer(data.answer);

    } catch (error) {

        console.error(error);

        resultText.innerHTML =
            "❌ Xatolik yuz berdi:<br><br>" +
            error.message;
    }
}

// AI javobini chiroyli ko'rsatish
function formatAnswer(text) {

    if (!text) {
        return "AI javob bermadi.";
    }

    return text
        .replace(/\n/g, "<br>")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

// Natijani nusxalash
function copyResult() {

    const text = document.getElementById("resultText").innerText;

    navigator.clipboard.writeText(text);

    alert("Javob nusxalandi!");
}

// Yangi masala
function newProblem() {

    document.getElementById("problemInput").value = "";

    removeImage();

    document.getElementById("resultCard").style.display = "none";
}
