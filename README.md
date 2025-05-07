# AI Image Enhancer

This is a React application that allows users to upload an image and enhance it using AI. The application leverages Vite for fast development and Tailwind CSS for styling.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Image Upload**: Users can upload images from their local device.
- **AI Image Enhancement**: The uploaded image is processed using an AI API to enhance its quality.
- **Real-time Preview**: Users can see the original and enhanced images side by side.
- **Loading Indicator**: A loading spinner is displayed while the image is being processed.
- **Responsive Design**: The application is designed to be responsive and works well on various screen sizes.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Arya-shivam/ai-image_enhancer.git

2. **Install Dependencies**:
    ```bash 
      npm install

3. ** Start the development server**:
    ```bash 
      npm run dev

Open your browser and navigate to http://localhost:5173.

### Usage

Upload an image by clicking the upload area.
Wait for the AI to process the image (a loading spinner will be displayed).
View the original and enhanced images side by side.

### Project Structure
    ```bash
 app/
├── src/
│   ├── components/
│   │   ├── [Home.jsx](http://_vscodecontentref_/1)          # Main component for the app
│   │   ├── [ImageUpload.jsx](http://_vscodecontentref_/2)   # Component for uploading images
│   │   ├── [ImagePreview.jsx](http://_vscodecontentref_/3)  # Component for displaying images
│   │   └── [Loading.jsx](http://_vscodecontentref_/4)       # Loading spinner component
│   ├── utils/
│   │   └── [enhancedImageAPI.js](http://_vscodecontentref_/5) # API integration logic
│   ├── [App.jsx](http://_vscodecontentref_/6)               # Root component
│   ├── [main.jsx](http://_vscodecontentref_/7)              # Entry point
│   ├── [App.css](http://_vscodecontentref_/8)               # Global styles
│   └── [index.css](http://_vscodecontentref_/9)             # Tailwind CSS setup
├── public/
├── [index.html](http://_vscodecontentref_/10)                # HTML template
├── [package.json](http://_vscodecontentref_/11)              # Project metadata and dependencies
├── [vite.config.js](http://_vscodecontentref_/12)            # Vite configuration
└── [tailwind.config.js](http://_vscodecontentref_/13)        # Tailwind CSS configuration


### API Integration
The application integrates with an AI image enhancement API. The API workflow includes:

Uploading the image: The image is sent to the API, which returns a task ID.
Polling for results: The application periodically checks the API for the enhanced image using the task ID.
Displaying the result: Once the enhanced image is ready, it is displayed alongside the original image.

The API logic is implemented in src/utils/enhancedImageAPI.js.

### Acknowledgments
Vite for the fast development environment.
Tailwind CSS for the modern styling framework.
Axios for handling API requests.
AI API for image enhancement.

Enjoy using the **AI Image Enhancer!**
