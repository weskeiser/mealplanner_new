export interface Product {
  id: number;
  name: string;
  description: string;
  serving: number;
  nutrients: {
    calories: number | null;
    protein: number | null;
    carbs: {
      total: number | null;
      sugar: number | null;
      added_sugar: number | null;
    };
    fat: {
      total: number | null;
      saturated: number | null;
      trans: number | null;
      monounsaturated: number | null;
      polyunsaturated: number | null;
      cholesterol: number | null;
    };
    fiber: number | null;
    salt: number | null;
  };
  vitamins: {
    omega3: number | null;
    omega6: number | null;
    vitaminA: number | null;
    retinol: number | null;
    betacarotene: number | null;
    vitaminD: number | null;
    vitaminE: number | null;
    thiamine: number | null;
    riboflavin: number | null;
    niacin: number | null;
    vitaminB6: number | null;
    folate: number | null;
    vitaminB12: number | null;
    vitaminC: number | null;
    calcium: number | null;
    iron: number | null;
    sodium: number | null;
    potassium: number | null;
    magnesium: number | null;
    zinc: number | null;
    selenium: number | null;
    copper: number | null;
    phosphorus: number | null;
    iodine: number | null;
  };
  source: string;
  updated: string;
}
