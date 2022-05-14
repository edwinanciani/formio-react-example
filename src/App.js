import { Form } from '@formio/react';
import { useState } from 'react';
import './App.css';
function App() {
  const [result, setResult] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const form = {
    title: 'My Example Form',
    display: 'form',
    components: [
      {
        label: 'Name',
        key: 'name',
        type: 'textfield'
      },
      {
        label: 'Email',
        key: 'email',
        type: 'email'
      },
      {
        label: 'Send Information',
        key: 'submit',
        type: 'button',
        action: 'submit'
      }
    ]
  }

  const onSubmitHandler = (submission) => {
    setResult(submission);
    setSubmitted(true);
  }

  return (
    <div className="App">
      <h2>{form.title}</h2>
      {
        !submitted ?
          <>
          <Form form={form} onSubmit={onSubmitHandler} /> 
          </>
        :
        <>
          <div className="card">
            <div className="card-body">
              <h4 className="bg-success text-white">Thank you!</h4>
              <h5>{result?.data.name}</h5>
              <h5>{result?.data.email}</h5>
            </div>
          </div>
        </>
      }
   </div>
  );
}

export default App;
