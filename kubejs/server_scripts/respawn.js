console.info('Respawn Blindness Loaded')

PlayerEvents.respawned(event => {
    const {entity} = event;
    entity.potionEffects.add('scguns:blinded', 3*20, 0, true, false);
    //event.player.playNotifySound('nomansland:block.monster_anchor.monster_spawns', 'neutral', 1, 1);
    event.player.playNotifySound('malum:a_soul_shatters', 'neutral', 1, 0.5);
    })
