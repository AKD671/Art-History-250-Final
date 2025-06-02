import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './questionform.css';

export default function QuestionForm() {
  const [state, handleSubmit] = useForm("xovdblka"); 
  const text = "We'll get back to you soon"
  if (state.succeeded) {
    return (
      <div className="question-form-container">
        <h2>Thank you!</h2>
        <p className="thank-you-message">{text}</p>
      </div>
    );
  }

  return (
    <div className="question-form-container">
      <h2>Have a question or wanna give us some feedback?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label>
          Question or Feedback
          <textarea name="message" required />
        </label>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>Submit</button>
      </form>
    </div>
  );
}
