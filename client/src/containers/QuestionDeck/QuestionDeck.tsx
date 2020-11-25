import React, { useEffect, useState } from 'react'
import QuestionForm from 'containers/QuestionForm/QuestionForm'
export default () => {
  const [value, setValue] = useState('')
  useEffect(() => {
    console.log('value: ', value)
  }, [value])
  return (
    <div>
      <QuestionForm setValue={setValue}/>
      <QuestionForm value={value}/>
    </div>
  )
}