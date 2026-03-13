const dropArea = document.getElementById("dropArea")
const fileInput = document.getElementById("fileInput")
const preview = document.getElementById("preview")

const loaderContainer = document.getElementById("loaderContainer")
const loaderBar = document.getElementById("loaderBar")
const progressText = document.getElementById("progressText")

document.getElementById("uploadBtn").onclick = () => {
fileInput.click()
}

fileInput.addEventListener("change", loadImage)

dropArea.addEventListener("dragover", (e) => {
e.preventDefault()
})

dropArea.addEventListener("drop", (e) => {
e.preventDefault()
fileInput.files = e.dataTransfer.files
loadImage()
})

function loadImage(){

const file = fileInput.files[0]

if(!file) return

preview.src = URL.createObjectURL(file)
preview.style.display = "block"

}

document.getElementById("extractBtn").onclick = async () => {

const file = fileInput.files[0]

if(!file){
alert("Upload image first")
return
}

loaderContainer.style.display = "block"
loaderBar.style.width = "0%"
progressText.innerText = "Starting OCR..."

document.getElementById("result").value = ""

const { data: { text } } = await Tesseract.recognize(
file,
'eng',
{
logger: (m) => {

if(m.status === "recognizing text"){

const progress = Math.floor(m.progress * 100)

loaderBar.style.width = progress + "%"
progressText.innerText = "Extracting Text: " + progress + "%"

}

}
}
)

document.getElementById("result").value = text

progressText.innerText = "Completed ✅"

}

document.getElementById("copyBtn").onclick = () => {

const text = document.getElementById("result")

text.select()
document.execCommand("copy")

alert("Text Copied!")

}