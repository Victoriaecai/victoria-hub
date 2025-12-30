import AboutMe from './components/AboutMe/AboutMe.tsx';
import Projects from './components/Projects/Projects.tsx';
import ArtGallery from './components/ArtGallery/ArtGallery.tsx';
import Layout from "./components/Layout/Layout.tsx";
import './App.css'; 
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path = "/" element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<ArtGallery />} />
         </Route>
    </Routes>
  );
}

export default App;