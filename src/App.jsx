import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CardioWarmups from "./pages/cardio-warmups";
import StretchingWarmups from "./pages/stretching-warmups";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/navbar";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <div className="min-h-screen bg-green-100 w-screen">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cardio-warmups" element={<CardioWarmups />} />
              <Route
                path="/stretching-warmups"
                element={<StretchingWarmups />}
              />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
