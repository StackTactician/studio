import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Log Your Workout</CardTitle>
          <CardDescription>Start by adding an exercise to your current workout session.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            {/* Future WorkoutLogger component will go here */}
            <p className="text-muted-foreground mb-4">Your current workout is empty.</p>
            <Button>
              <PlusCircle className="mr-2 h-5 w-5" /> Add Exercise
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <Button variant="outline" className="w-full justify-start text-left p-4 h-auto">
            <div>
              <h3 className="font-semibold">Start Empty Workout</h3>
              <p className="text-sm text-muted-foreground">Begin a new session from scratch.</p>
            </div>
          </Button>
          <Button variant="outline" className="w-full justify-start text-left p-4 h-auto">
             <div>
              <h3 className="font-semibold">Load Saved Workout</h3>
              <p className="text-sm text-muted-foreground">Choose from your pre-defined templates.</p>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
