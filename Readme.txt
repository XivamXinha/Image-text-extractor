Image Text Extractor

This is a simple web application that extracts text from images. The project uses OCR (Optical Character Recognition) to detect and read text from an uploaded image.

The idea behind this project was to create a lightweight and easy-to-use tool where a user can upload an image and quickly get the text that appears inside it.

Features

* Drag and drop image upload
* Image preview before extraction
* Text extraction using OCR
* Loading progress while text is being processed
* Copy extracted text to clipboard
* Simple and clean user interface

How It Works

1. The user uploads an image or drags it into the upload area.
2. The application displays a preview of the selected image.
3. When the user clicks the **Extract Text** button, the image is processed using Tesseract.js.
4. The detected text is displayed in the result box.
5. The user can copy the extracted text using the **Copy Text** button.

Technologies Used

* HTML
* CSS
* JavaScript
* Tesseract.js (OCR Library)

Project Structure

```
text-extractor
│
├── index.html
├── style.css
└── script.js
```

Installation

1. Download or clone the repository.

```
git clone https://github.com/your-username/text-extractor.git
```

2. Open the project folder.

3. Run the project by opening `index.html` in your browser.

No server setup is required since this project runs completely on the client side.

Use Cases

* Extracting text from screenshots
* Reading text from images quickly
* Copying text from scanned images
* Small OCR experiments for learning

Future Improvements

Some features that could be added in the future:

* Multi-language OCR support
* Camera image scanning
* PDF text extraction
* Download extracted text as a file

Author

Shivam Kumar Sinha
