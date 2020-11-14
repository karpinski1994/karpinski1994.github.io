import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuestionForm () {
  const [value, setValue] = useState('');

  const divStyle = {
    backgroundColor: 'white',
    color: 'black'
  };
  const  toolbarOptions = ['bold', 'italic', 'underline', 'strike', 'image'];
  return (
    <div style={divStyle}>
      <ReactQuill modules={{toolbar: toolbarOptions}} theme="snow" value={value} onChange={setValue}/>
    </div>
  );
}

export default QuestionForm;