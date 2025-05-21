// src/App.tsx
import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";
import { Footer } from "./components/Footer"; // Import Footer

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavigationBar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;
