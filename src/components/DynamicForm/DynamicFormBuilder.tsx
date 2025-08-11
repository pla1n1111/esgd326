import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DynamicForm } from './DynamicForm';
import { FormConfig } from './types';

export const DynamicFormBuilder: React.FC = () => {
  const [config, setConfig] = useState<FormConfig>({
    input: 0,
    textarea: 0,
    checkbox: 0,
  });
  const [isBuilt, setIsBuilt] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field: keyof FormConfig, value: number) => {
    setConfig((prev) => ({
      ...prev,
      [field]: Math.max(0, value), // Ensure non-negative values
    }));
  };

  const handleBuild = () => {
    setIsBuilt(true);
  };

  const handleReset = () => {
    setIsBuilt(false);
    setConfig({ input: 0, textarea: 0, checkbox: 0 });
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="form-builder">
      {!isBuilt ? (
        <>
          <h2>Form Builder</h2>
          <div className="form-control">
            <label>
              Input fields:
              <input
                type="number"
                min="0"
                value={config.input}
                onChange={(e) => handleChange('input', parseInt(e.target.value) || 0)}
              />
            </label>
          </div>
          <div className="form-control">
            <label>
              Textarea fields:
              <input
                type="number"
                min="0"
                value={config.textarea}
                onChange={(e) => handleChange('textarea', parseInt(e.target.value) || 0)}
              />
            </label>
          </div>
          <div className="form-control">
            <label>
              Checkbox fields:
              <input
                type="number"
                min="0"
                value={config.checkbox}
                onChange={(e) => handleChange('checkbox', parseInt(e.target.value) || 0)}
              />
            </label>
          </div>
          <button onClick={handleBuild}>Build Form</button>
          <button onClick={handleBack} className="back-button">
            Back to Home
          </button>
        </>
      ) : (
        <>
          <DynamicForm config={config} />
          <button onClick={handleReset} className="reset-button">
            Build Another Form
          </button>
        </>
      )}
    </div>
  );
};