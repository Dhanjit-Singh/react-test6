import './App.css';
import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Testimonial from './pages/Testimonial';
import Blog from './pages/Blog';
import Header from './pages/Header';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import TermsCondition from './pages/TermsCondition';
import Practice from './pages/Practice';
import Todos from './pages/Todos';



function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
