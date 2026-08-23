import { AccommodationPage } from "./components/domain/accommodation/page";
import { Footer } from "./components/chrome/footer";
import { Header } from "./components/chrome/header";
import { HomePage } from "./pages/home";
import { getAccommodationByPath } from "./shared/accommodations";
import { Router, useRouter } from "./shared/router";

export function App() {
  return (
    <Router>
    <Shell />
    </Router>
  );
}

function Shell() {
  const { path } = useRouter();
  const accommodation = getAccommodationByPath(path);

  return (
    <div>
    <Header />
    {accommodation ? <AccommodationPage accommodation={accommodation} /> : <HomePage />}
    <Footer />
    </div>
  );
}

export default App;
