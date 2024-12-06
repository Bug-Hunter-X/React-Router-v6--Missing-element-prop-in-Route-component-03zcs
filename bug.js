import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... more routes */}
      </Routes>
    </BrowserRouter>
  );
}

// Home.js
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

// About.js
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

//This code will work fine but there is a potential issue if you forget to add the `element` prop in a `Route` component.  If you do not add the `element` prop in a Route it will throw an error such as `TypeError: Cannot read properties of undefined (reading 'type')`.