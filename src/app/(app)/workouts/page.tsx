import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListChecks, PlusCircle } from "lucide-react"; // Example Icon

export default function SavedWorkoutsPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="font-headline text-2xl">Saved Workouts</CardTitle>
            <CardDescription>Manage your workout templates for quick logging.</CardDescription>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-5 w-5" /> Create New Template
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
            <ListChecks className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Your saved workout templates will appear here.</p>
            <p className="text-sm text-muted-foreground">Create templates for your favorite routines!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
