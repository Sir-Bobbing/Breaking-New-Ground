ItemEvents.modifyTooltips(event => {

    event.add("tfmg:asphalt", Text.gray('Increases movement speed'))

    event.add("minecraft:budding_amethyst", Text.darkPurple('Can be removed with a hammer and chisel'))

    event.add('nomansland:budding_quartzite', Text.darkPurple('Can be removed with a hammer and chisel'))

    event.add(['scguns:whispers', 'scguns:echoes_2', 'scguns:sculk_resonator', 'scguns:forlorn_hope'], Text.aqua('Capable of soul shattering'))

})
