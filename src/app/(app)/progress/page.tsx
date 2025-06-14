import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react"; // Example Icon

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Your Progress</CardTitle>
          <CardDescription>Visualize your fitness journey and track improvements over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
            <BarChart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Progress charts will be displayed here.</p>
            <p className="text-sm text-muted-foreground">Log more workouts to see your progress!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
