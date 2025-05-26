import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { About } from "./sections/About";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <About />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
