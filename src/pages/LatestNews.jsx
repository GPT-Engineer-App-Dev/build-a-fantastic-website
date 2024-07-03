import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LatestNews = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Latest News</h1>
      <Separator />
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>SpaceX Launches New Rocket</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-40"></div>
            <p className="mt-2">SpaceX successfully launches its latest rocket, setting a new milestone in space exploration.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>NASA Announces Mars Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-40"></div>
            <p className="mt-2">NASA announces a new mission to explore Mars, aiming to uncover more about the Red Planet.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Blue Origin's New Shepard Flight</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-40"></div>
            <p className="mt-2">Blue Origin's New Shepard rocket completes another successful suborbital flight.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LatestNews;