'use server';

/**
 * @fileOverview Workout analysis AI agent.
 *
 * - workoutAnalyzer - A function that handles the workout analysis process.
 * - WorkoutAnalyzerInput - The input type for the workoutAnalyzer function.
 * - WorkoutAnalyzerOutput - The return type for the workoutAnalyzer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WorkoutAnalyzerInputSchema = z.object({
  workoutType: z.string().describe('The type of workout performed (e.g., strength training, cardio, HIIT).'),
  exercises: z.string().describe('A list of exercises performed during the workout, with sets, reps, and weight used.'),
  userExperienceLevel: z.string().describe('The experience level of the user (e.g., beginner, intermediate, advanced).'),
  userGoals: z.string().describe('The fitness goals of the user (e.g., muscle gain, weight loss, improved endurance).'),
});
export type WorkoutAnalyzerInput = z.infer<typeof WorkoutAnalyzerInputSchema>;

const WorkoutAnalyzerOutputSchema = z.object({
  summary: z.string().describe('A summary of how the user workout compares to the average workout of similar users.'),
});
export type WorkoutAnalyzerOutput = z.infer<typeof WorkoutAnalyzerOutputSchema>;

export async function workoutAnalyzer(input: WorkoutAnalyzerInput): Promise<WorkoutAnalyzerOutput> {
  return workoutAnalyzerFlow(input);
}

const workoutAnalyzerPrompt = ai.definePrompt({
  name: 'workoutAnalyzerPrompt',
  input: {schema: WorkoutAnalyzerInputSchema},
  output: {schema: WorkoutAnalyzerOutputSchema},
  prompt: `You are a fitness expert providing analysis on user workouts.

You will compare the user's workout to the average workout of similar users, considering their experience level and goals.

Workout Type: {{{workoutType}}}
Exercises: {{{exercises}}}
User Experience Level: {{{userExperienceLevel}}}
User Goals: {{{userGoals}}}

Provide a summary that offers motivation and identifies areas for improvement.
`,
});

const workoutAnalyzerFlow = ai.defineFlow(
  {
    name: 'workoutAnalyzerFlow',
    inputSchema: WorkoutAnalyzerInputSchema,
    outputSchema: WorkoutAnalyzerOutputSchema,
  },
  async input => {
    const {output} = await workoutAnalyzerPrompt(input);
    return output!;
  }
);
