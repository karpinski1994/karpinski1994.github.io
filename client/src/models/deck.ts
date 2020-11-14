export interface DeckModel {
  id: string; 
  title: string; 
  description: string; 
  questions?: string[];
  questionsQuantity?: number;
  // TODO: remove this variant should be in component
}
