import Head from "./components/Header/Head";
import Navbars from "./components/Header/Navbars";
import Details from "./pages/Details/Details";
import Relatedproduct from "./pages/Relatedproduct/Relatedproduct";
import Faq from "./pages/FAQ/Faq";
import Review from "./pages/Review/Review";
import Recipies from "./pages/Recipies/Recipies";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./fonts/Sagona-Bold.woff";

function App() {
  return (
    <div className="App">
      <Head />
      <Navbars />
      <Details />
      <Relatedproduct />
      <Faq />
      <Review />
      <Recipies />
    </div>
  );
}

export default App;
