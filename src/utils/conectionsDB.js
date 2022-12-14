import { Character } from "../models/Characters.js";
import { Gender } from "../models/Gender.js";
import { MovieOrSerie } from "../models/MovierOrSerie.js";

// asociations of models/tables

// gender has many movies Or series
Gender.hasMany(MovieOrSerie, {
  foreignKey: "genderId",
  sourceKey: 'id'
});

MovieOrSerie.belongsTo(Gender,{
  foreignKey: "genderId",
  targetId: 'id'

});

// many characters has many movie or serie and vice versa

Character.belongsToMany(MovieOrSerie, { through: "character_movieOrSerie" });
MovieOrSerie.belongsToMany(Character, { through: "character_movieOrSerie" });
