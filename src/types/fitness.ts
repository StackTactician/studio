export interface Exercise {
  id: string;
  name: string;
  muscleGroup?: string;
}

export interface ExerciseSet {
  id: string;
  reps: number;
  weight: number;
}

export interface LoggedExercise {
  id: string; // Unique ID for this instance of logging an exercise
  exerciseId: string; // Foreign key to Exercise interface
  sets: ExerciseSet[];
  notes?: string;
}

export interface WorkoutLog {
  id: string; // Unique ID for the workout log
  date: string; // ISO string representation of the date
  name?: string; // Optional user-defined name for the workout session
  loggedExercises: LoggedExercise[];
  duration?: number; // Duration in minutes
  notes?: string; // General notes for the workout
}

export interface SavedWorkout {
  id: string; // Unique ID for the saved workout template
  name: string; // User-defined name for the workout template
  // Array of exercises included in this template, potentially with target sets/reps
  exercises: Array<{ exerciseId: string; targetSets?: number; targetReps?: number }>;
}

export type UserExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

// FormData for the AI Workout Analysis feature
export interface WorkoutAnalysisFormData {
  workoutType: string;
  exercises: string; // A textual description of exercises, sets, reps, weight
  userExperienceLevel: UserExperienceLevel;
  userGoals: string;
}
