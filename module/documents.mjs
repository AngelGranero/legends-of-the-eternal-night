export class SystemActor extends Actor {
    async applyDamage(damage) {
      // Always take a minimum of 1 damage, and round to the nearest integer.
      damage = Math.round(Math.max(1, damage));
  
      // Update the health.
      const { value } = this.system.resources.health;
      await this.update({ "system.resources.health.value": value - damage });
  
      // Log a message.
      await ChatMessage.implementation.create({
        content: `${this.name} took ${damage} damage!`
      });
    }
    
    prepareDerivedData() {
      super.prepareDerivedData();
  
      // Clamp health within the appropriate range.
      const { health } = this.system.resources;
      health.value = Math.clamp(health.value, health.min, health.max);
    }
}

export class SystemItem extends Item {
    get isFree() {
        return this.price < 1;
    }
}