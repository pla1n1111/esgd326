import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { DynamicFormBuilder } from '../DynamicFormBuilder/DynamicFormBuilder';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<DynamicFormBuilder />} />
    </Routes>
  );
}

export default App;