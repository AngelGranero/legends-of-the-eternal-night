import { SystemActor, SystemItem } from "./module/documents.mjs";
import { CharacterDataModel, WeaponDataModel } from "./module/data-models.mjs";
import { CharacterSheet } from "./module/character-sheet.js";

Hooks.once('init', async function() {

    console.log('Legends of the Eternal Night | Initializing system');

    // Configure custom Document implementations.
    CONFIG.Actor.documentClass = SystemActor;
    CONFIG.Item.documentClass = SystemItem;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("legends-of-the-eternal-night", CharacterSheet, {
        types: ["character"],
        label: "Personaje",
        makeDefault: true
    });

    // Configure System Data Models.
    CONFIG.Actor.dataModels = {
      character: CharacterDataModel
    };
    CONFIG.Item.dataModels = {
      weapon: WeaponDataModel
    };

    // Configure trackable attributes.
    CONFIG.Actor.trackableAttributes = {
        character: {
            bar: ["resources.health", "resources.power", "goodness"],
            value: ["level"]
        }
    };

});