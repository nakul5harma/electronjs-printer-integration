import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
  return <div>ElectronJS Printer Integration</div>;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
