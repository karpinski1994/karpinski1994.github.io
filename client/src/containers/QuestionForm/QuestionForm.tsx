import React, { useState, useEffect } from "react";
import {useQuill} from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import Paper from '@material-ui/core/Paper';

function QuestionForm (props: any) {
  const { quill, quillRef } = useQuill();
  const [state, setState] = useState('<div></div>')
   useEffect(() => {
    if(props.value) {
      console.log('NEW VALUE: ', props.value)
      quill?.setContents(props.value)
      setState(props.value)
    }
      
  }, [props.value]);
  useEffect(() => {
    if(quill) {
      quill.on('editor-change', () => {
        console.log('Text change!', quill.getContents());
        // setstate(quill.getContents());
        if(props.setValue)
        props?.setValue(quill.getContents())
      })
    }
      
  }, [quill]);

  return (
    <div style={{backgroundColor: 'white', color: 'black'}}>
      <Paper style={{backgroundColor: 'white', color: 'black'}}>
        Question:
        <div ref={quillRef} />
      </Paper>
    </div>
  );
};

export default QuestionForm;