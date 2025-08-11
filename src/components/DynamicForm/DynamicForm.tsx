import React from 'react';
import { FormConfig } from './types';
import { useState } from 'react';

interface DynamicFormProps {
  config: FormConfig;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ config }) => {
  const [formData, setFormData] = useState<Record<string, string | boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value, type } = e.target;
  const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;

  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} className="dynamic-form">
      <h2>Your Dynamic Form</h2>
      
      {Array.from({ length: config.input }).map((_, i) => (
        <div key={`input-${i}`} className="form-field">
          <label>
            Input {i + 1}:
            <input
              type="text"
              name={`input-${i}`}
              value={(formData[`input-${i}`] as string) || ''}
              onChange={handleChange}
            />
          </label>
        </div>
      ))}

      {Array.from({ length: config.textarea }).map((_, i) => (
        <div key={`textarea-${i}`} className="form-field">
          <label>
            Textarea {i + 1}:
            <textarea
              name={`textarea-${i}`}
              value={(formData[`textarea-${i}`] as string) || ''}
              onChange={handleChange}
            />
          </label>
        </div>
      ))}

      {Array.from({ length: config.checkbox }).map((_, i) => (
        <div key={`checkbox-${i}`} className="form-field">
          <label>
            <input
              type="checkbox"
              name={`checkbox-${i}`}
              checked={!!formData[`checkbox-${i}`]}
              onChange={handleChange}
            />
            Checkbox {i + 1}
          </label>
        </div>
      ))}

      <button type="submit">Submit Form</button>
    </form>
  );
};