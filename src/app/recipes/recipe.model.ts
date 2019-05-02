import { Ingredient } from '../shared/ingedient.model';

export class Recipe {
 public name: string;
 public description: string;
 public imagePath: string;
 public ingridents: Ingredient[];
 constructor(name: string, description: string, imagePath: string,ingridents: Ingredient[]) {
   this.name = name;
   this.description = description;
   this.imagePath = imagePath;
   this.ingridents = ingridents;
 }
}
