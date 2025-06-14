import type { Exercise } from '@/types/fitness';

export const exerciseDatabase: Exercise[] = [
  { id: 'bench-press', name: 'Bench Press', muscleGroup: 'Chest' },
  { id: 'squat', name: 'Squat', muscleGroup: 'Legs' },
  { id: 'deadlift', name: 'Deadlift', muscleGroup: 'Back' },
  { id: 'overhead-press', name: 'Overhead Press', muscleGroup: 'Shoulders' },
  { id: 'barbell-row', name: 'Barbell Row', muscleGroup: 'Back' },
  { id: 'pull-ups', name: 'Pull Ups', muscleGroup: 'Back' },
  { id: 'dips', name: 'Dips', muscleGroup: 'Triceps' }, // Corrected from Chest to Triceps for primary mover, though chest is involved
  { id: 'bicep-curl', name: 'Bicep Curl', muscleGroup: 'Biceps' },
  { id: 'tricep-pushdown', name: 'Tricep Pushdown', muscleGroup: 'Triceps' },
  { id: 'leg-press', name: 'Leg Press', muscleGroup: 'Legs' },
  { id: 'lat-pulldown', name: 'Lat Pulldown', muscleGroup: 'Back' },
  { id: 'dumbbell-flyes', name: 'Dumbbell Flyes', muscleGroup: 'Chest' },
  { id: 'leg-curls', name: 'Leg Curls', muscleGroup: 'Hamstrings' },
  { id: 'leg-extensions', name: 'Leg Extensions', muscleGroup: 'Quads' },
  { id: 'calf-raises', name: 'Calf Raises', muscleGroup: 'Calves' },
  { id: 'plank', name: 'Plank', muscleGroup: 'Core' },
  { id: 'crunches', name: 'Crunches', muscleGroup: 'Core' },
  { id: 'running', name: 'Running', muscleGroup: 'Cardio' },
  { id: 'cycling', name: 'Cycling', muscleGroup: 'Cardio' },
  { id: 'burpees', name: 'Burpees', muscleGroup: 'Full Body' },
  { id: 'push-ups', name: 'Push Ups', muscleGroup: 'Chest' },
  { id: 'lunges', name: 'Lunges', muscleGroup: 'Legs' },
  { id: 'russian-twists', name: 'Russian Twists', muscleGroup: 'Core' },
  { id: 'mountain-climbers', name: 'Mountain Climbers', muscleGroup: 'Full Body' },
  { id: 'jumping-jacks', name: 'Jumping Jacks', muscleGroup: 'Cardio' },
];
