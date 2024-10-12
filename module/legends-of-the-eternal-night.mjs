// Import document classes
import { LotenActor } from "./documents/actor.mjs";
import { LotenItem } from "./documents/item.mjs";

// Import sheet classes
import { LotenActorSheet } from "./sheets/actor-sheet.mjs";
import { LotenItemSheet } from "./sheets/item-sheet.mjs";

// Import helper/utility classes and constants
import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
import { LOTEN } from "./helpers/config.mjs";

Hooks.once('init', async function() {

  console.log('Legends of the Eternal Night | Initializing system');

  // Add utility classes to the global game object so that they're more easily
  // accessible in global contexts.
  game.loten = {
    LotenActor,
    LotenItem
//    rollItemMacro
  };

  // Add custom constants for configuration.
  CONFIG.LOTEN = LOTEN;

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: '3d6 + @abilities.dex.mod',
    decimals: 2
  };

  // Define custom Document classes
  CONFIG.Actor.documentClass = LotenActor;
  CONFIG.Item.documentClass = LotenItem;

  // Active Effects are never copied to the Actor,
  // but will still apply to the Actor from within the Item
  // if the transfer property on the Active Effect is true.
  CONFIG.ActiveEffect.legacyTransferral = false;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("legends-of-the-eternal-night", LotenActorSheet, {
    makeDefault: true,
    label: "LOTEN.SheetLabels.Actor"
  });
  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('legends-of-the-eternal-night', LotenItemSheet, {
    makeDefault: true,
    label: 'LOTEN.SheetLabels.Item',
  });

  // Preload Handlebars templates.
  return preloadHandlebarsTemplates();

});