import AboutMe from './components/AboutMe/AboutMe.tsx';
import Layout from "./components/Layout/Layout.tsx";
import './App.css'; // optional styling
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path = "/" element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
         </Route>
    </Routes>
  );
}

export default App;