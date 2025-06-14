"use client";

import { useState, type FormEvent } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { workoutAnalyzer, type WorkoutAnalyzerInput, type WorkoutAnalyzerOutput } from "@/ai/flows/workout-analyzer";
import type { UserExperienceLevel } from '@/types/fitness';
import { Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  workoutType: z.string().min(3, { message: "Workout type must be at least 3 characters." }),
  exercises: z.string().min(10, { message: "Exercise description must be at least 10 characters." }),
  userExperienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  userGoals: z.string().min(5, { message: "Goals must be at least 5 characters." }),
});

type AnalysisFormValues = z.infer<typeof formSchema>;

export function AnalysisForm() {
  const [analysisResult, setAnalysisResult] = useState<WorkoutAnalyzerOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<AnalysisFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workoutType: "",
      exercises: "",
      userExperienceLevel: "beginner",
      userGoals: "",
    },
  });

  async function onSubmit(values: AnalysisFormValues) {
    setIsLoading(true);
    setAnalysisResult(null);
    try {
      const input: WorkoutAnalyzerInput = {
        workoutType: values.workoutType,
        exercises: values.exercises,
        userExperienceLevel: values.userExperienceLevel,
        userGoals: values.userGoals,
      };
      const result = await workoutAnalyzer(input);
      setAnalysisResult(result);
    } catch (error) {
      console.error("AI Analysis Error:", error);
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center">
            <Sparkles className="mr-2 h-6 w-6 text-primary" /> AI Workout Analysis
          </CardTitle>
          <CardDescription>
            Get AI-powered insights into your workout. Describe your session, experience level, and goals to receive a motivational summary and identify areas for improvement.
          </CardDescription>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="workoutType" className="font-semibold">Workout Type</Label>
              <Input 
                id="workoutType" 
                placeholder="e.g., Strength Training, Cardio, HIIT" 
                {...form.register("workoutType")}
              />
              {form.formState.errors.workoutType && <p className="text-sm text-destructive">{form.formState.errors.workoutType.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="exercises" className="font-semibold">Exercises Performed</Label>
              <Textarea
                id="exercises"
                placeholder="e.g., Bench Press: 3 sets of 5 reps at 100kg. Squats: 3 sets of 8 reps at 80kg. Running: 30 minutes at 10km/h."
                className="min-h-[100px]"
                {...form.register("exercises")}
              />
               {form.formState.errors.exercises && <p className="text-sm text-destructive">{form.formState.errors.exercises.message}</p>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="userExperienceLevel" className="font-semibold">Your Experience Level</Label>
                <Select 
                  onValueChange={(value) => form.setValue("userExperienceLevel", value as UserExperienceLevel)}
                  defaultValue={form.getValues("userExperienceLevel")}
                >
                  <SelectTrigger id="userExperienceLevel">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.userExperienceLevel && <p className="text-sm text-destructive">{form.formState.errors.userExperienceLevel.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="userGoals" className="font-semibold">Your Fitness Goals</Label>
                <Input 
                  id="userGoals" 
                  placeholder="e.g., Muscle gain, Weight loss, Improve endurance" 
                  {...form.register("userGoals")}
                />
                {form.formState.errors.userGoals && <p className="text-sm text-destructive">{form.formState.errors.userGoals.message}</p>}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Analyze Workout
            </Button>
          </CardFooter>
        </form>
      </Card>

      {isLoading && (
        <Card className="shadow-lg">
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-[150px]">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-lg font-medium text-muted-foreground">Analyzing your workout...</p>
            <p className="text-sm text-muted-foreground">This may take a moment.</p>
          </CardContent>
        </Card>
      )}

      {analysisResult && !isLoading && (
        <Card className="shadow-lg bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-primary" />
              AI Analysis Result
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground whitespace-pre-wrap leading-relaxed">{analysisResult.summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
