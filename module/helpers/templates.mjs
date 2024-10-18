/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/legends-of-the-eternal-night/templates/actor/parts/actor-items.hbs',
    'systems/legends-of-the-eternal-night/templates/actor/parts/actor-spells.hbs',
    // Item partials
    'systems/legends-of-the-eternal-night/templates/item/parts/item-skills.hbs'
  ]);
};
