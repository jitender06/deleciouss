import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopHeader />
        <Search />
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
