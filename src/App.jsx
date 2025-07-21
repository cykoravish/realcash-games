import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/Games";
import WalletPage from "./pages/Wallet";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsConditionsPage from "./pages/TermsCondition";
import ReturnRefundPolicyPage from "./pages/ReturnPolicy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/return-refund-policy" element={<ReturnRefundPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
