import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, History, Rocket, News } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index";
import RocketHistory from "./pages/RocketHistory";
import TypesOfRockets from "./pages/TypesOfRockets";
import LatestNews from "./pages/LatestNews";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Rocket History",
    to: "/rocket-history",
    icon: <History className="h-4 w-4" />,
  },
  {
    title: "Types of Rockets",
    to: "/types-of-rockets",
    icon: <Rocket className="h-4 w-4" />,
  },
  {
    title: "Latest News",
    to: "/latest-news",
    icon: <News className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="rocket-history" element={<RocketHistory />} />
              <Route path="types-of-rockets" element={<TypesOfRockets />} />
              <Route path="latest-news" element={<LatestNews />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;