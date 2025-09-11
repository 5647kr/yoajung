import MenuLink from "./components/MenuLink";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CommunityPage from "./pages/CommunityPage";
import MemberShipPage from "./pages/MemberShipPage";
import FranchisePage from "./pages/FranchisePage";
import MenuPage from "./pages/MenuPage";
import CommunityDetailPage from "./pages/CommunityDetailPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/brand" element={<MainPage />} />
          <Route path="/menustore" element={<MenuPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/membership" element={<MemberShipPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/detail/:id" element={<CommunityDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
