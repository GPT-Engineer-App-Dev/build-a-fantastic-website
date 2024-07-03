import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const RocketHistory = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Rocket History</h1>
      <Separator />
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>1926 - First Liquid-Fueled Rocket</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-40"></div>
            <p className="mt-2">Dr. Robert H. Goddard launches the world's first liquid-fueled rocket.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>1957 - Sputnik 1</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-40"></div>
            <p className="mt-2">The Soviet Union launches Sputnik 1, the first artificial satellite.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>1969 - Apollo 11</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-40"></div>
            <p className="mt-2">NASA's Apollo 11 mission successfully lands the first humans on the Moon.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RocketHistory;