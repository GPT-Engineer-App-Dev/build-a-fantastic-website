import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Rocket Explorer</h1>
      <p className="text-lg">Your ultimate guide to the world of rockets.</p>
      <div className="space-x-4">
        <Link to="/rocket-history">
          <Button variant="outline">Rocket History</Button>
        </Link>
        <Link to="/types-of-rockets">
          <Button variant="outline">Types of Rockets</Button>
        </Link>
        <Link to="/latest-news">
          <Button variant="outline">Latest News</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
