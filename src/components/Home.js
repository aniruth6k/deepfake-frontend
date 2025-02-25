import React, { useState } from 'react';

const Home = () => {
    const [file, setFile] = useState(null);
    const [text, setText] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="container text-center mt-5">
            <h1>Deepfake & Fake News Detection</h1>
            
            {/* File Upload Input */}
            <input type="file" className="form-control my-3" onChange={handleFileChange} />

            {/* Text Input Field */}
            <input type="text" className="form-control my-3" placeholder="Enter news text..." onChange={handleTextChange} />
            
            {/* Submit Button */}
            <button className="btn btn-primary mt-3">Submit</button>
        </div>
    );
};

export default Home;
