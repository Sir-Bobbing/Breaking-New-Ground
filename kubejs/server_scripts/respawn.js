console.info('Respawn Blindness Loaded')

PlayerEvents.respawned(event => {
    const {entity} = event;
    entity.potionEffects.add('scguns:blinded', 3*20, 0, true, false);
    })
