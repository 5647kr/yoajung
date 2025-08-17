import MenuLink from "./components/MenuLink";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/brand" element={<MainPage />} />
        <Route path="/menustore" element={<MainPage />} />
        <Route path="/franchise" element={<MainPage />} />
        <Route path="/membership" element={<MainPage />} />
        <Route path="/community" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
