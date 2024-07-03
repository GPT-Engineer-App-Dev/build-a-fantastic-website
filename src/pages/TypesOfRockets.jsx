import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TypesOfRockets = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Types of Rockets</h1>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Orbital Rockets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-40"></div>
            <p className="mt-2">Rockets designed to reach and stay in orbit around Earth.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Suborbital Rockets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-40"></div>
            <p className="mt-2">Rockets that reach space but do not complete an orbit around Earth.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Interplanetary Rockets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-40"></div>
            <p className="mt-2">Rockets designed for missions to other planets.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TypesOfRockets;