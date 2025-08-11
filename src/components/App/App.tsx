import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Home } from '../Home/Home';
import { DynamicFormBuilder } from '../DynamicForm/DynamicFormBuilder';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<DynamicFormBuilder />} />
      </Routes>
    </Layout>
  );
}

export default App;