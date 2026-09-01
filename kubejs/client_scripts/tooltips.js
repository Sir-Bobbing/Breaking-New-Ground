ItemEvents.modifyTooltips(event => {

    event.add("tfmg:asphalt", Text.gray('Increases movement speed'))

    event.add('tfmg:circuit_board', Text.gray('Dropped by the Scamppanzer boss'))
    event.add('tfmg:steel_mechanism', Text.gray('Rarely dropped by hostile Cog enemies'))
    event.add('powergrid:electrical_gizmo', Text.gray('Rarely dropped by Cog mobs'))

    event.add("minecraft:budding_amethyst", Text.darkPurple('Can be removed with a hammer and chisel'))
    event.add('nomansland:budding_quartzite', Text.darkPurple('Can be removed with a hammer and chisel'))

    event.add(['scguns:whispers', 'scguns:echoes_2', 'scguns:sculk_resonator', 'scguns:forlorn_hope'], Text.aqua('Capable of soul shattering'))

})
