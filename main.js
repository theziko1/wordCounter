const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");


input.addEventListener("input" , function () {
    if(input.value) {
        const wordsArray= input.value.split(" ").filter((word)=> word !== "");
        wordCount.innerText = wordsArray.length;
        
        characterCount.innerText=input.value.length;

        const sentenceArray = input.value.split(/[.!]/);
        sentenceCount.innerText = sentenceArray.length - 1;

        const paragraphArray = input.value.split("\n").filter((p)=>p.trim() !== "");
        paragraphCount.innerText =paragraphArray.length;

    }
    else {
        wordCount.innerText = 
        characterCount.innerText =
        sentenceCount.innerText = 
        paragraphCount.innerText = 
         0;
    }
});

const modeToggle = document.getElementById("change");
const body = document.body;

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        modeToggle.classList.remove("bx","bxs-moon");
        modeToggle.classList.add("bx","bx-sun");
    } else {
        modeToggle.classList.remove("bx","bx-sun");
        modeToggle.classList.add("bx","bxs-moon");
    }
});
