export interface DeckModel {
  id: string; 
  title: string; 
  description: string; 
  questions?: string[];
  questionsQuantity?: number;
  buttonVariant?: string; 
  // TODO: remove this variant should be in component
}
