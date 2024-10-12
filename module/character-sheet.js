// modules/character-sheet.js

export class CharacterSheet extends ActorSheet {
    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["legends-of-the-eternal-night", "sheet", "character"],
            template: "./systems/legends-of-the-eternal-night/templates/sheets/character-sheet.html",
            width: 800,
            height: 600,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
        });
    }

    /** @override */
    getData() {
        const data = super.getData();
        // Aquí puedes añadir datos personalizados a la hoja de personaje
        data.config = CONFIG.legendsOfTheEternalNight;
        return data;
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        // Verifica que html es un objeto jQuery
        if (!(html instanceof jQuery)) {
            html = $(html);
        }

        // Aquí puedes añadir eventos personalizados para los elementos de la hoja
        
    }
}
