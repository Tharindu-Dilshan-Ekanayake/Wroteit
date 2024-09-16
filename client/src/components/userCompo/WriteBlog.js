import React, { useState, useCallback, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
    ['superscript', 'subscript'],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link', 'image',
  'superscript', 'subscript',
];

export default function WriteBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [quill, setQuill] = useState(null);

  // Load the saved draft from local storage on component mount
  useEffect(() => {
    const savedTitle = localStorage.getItem('draftTitle');
    const savedContent = localStorage.getItem('draftContent');

    if (savedTitle) setTitle(savedTitle);
    if (savedContent) setContent(savedContent);
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handlePost = () => {
    console.log('Posting blog:', { title, content });
    // Add your post logic here
    // Clear the saved draft after posting
    localStorage.removeItem('draftTitle');
    localStorage.removeItem('draftContent');
  };

  const handleClear = () => {
    setTitle('');
    setContent('');
    // Clear local storage when clearing the content
    localStorage.removeItem('draftTitle');
    localStorage.removeItem('draftContent');
  };

  const handleSaveDraft = () => {
    // Save the draft title and content to local storage
    localStorage.setItem('draftTitle', title);
    localStorage.setItem('draftContent', content);
    alert('Draft saved successfully!');
  };

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64 = e.target.result;
        console.log('Image added as base64:', base64);

        if (quill) {
          const range = quill.getSelection(true);
          quill.insertEmbed(range.index, 'image', base64, 'user');
          quill.setSelection(range.index + 1); // Move the cursor after the image
        }
      };

      reader.readAsDataURL(file);
    };
  }, [quill]);

  useEffect(() => {
    if (quill) {
      const toolbar = quill.getModule('toolbar');
      toolbar.addHandler('image', imageHandler);
    }
  }, [quill, imageHandler]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter your blog title"
            className="w-full mb-4 text-3xl font-bold text-gray-800 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            className="h-[calc(100vh-350px)] mb-12"
            ref={(el) => {
              if (el) {
                setQuill(el.getEditor());
              }
            }}
          />
        </div>
        <div className="flex justify-end px-6 py-4 space-x-4 bg-gray-50">
          <button
            onClick={handlePost}
            className="px-4 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
          >
            Post
          </button>
          <button
            onClick={handleSaveDraft}
            className="px-4 py-2 font-bold text-white transition duration-300 bg-yellow-500 rounded hover:bg-yellow-600"
          >
            Save Draft
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 font-bold text-white transition duration-300 bg-red-500 rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
