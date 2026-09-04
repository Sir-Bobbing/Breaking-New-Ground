const oreBlocks = [
    {
        id: 'coal',
        stone:'lignite',
        vein:true
    },
    {
        id: 'copper',
        stone:'veridium',
        vein:true,
        stoneTier:true
    },
    {
        id: 'iron',
        stone:'crimsite',
        vein:true,
        stoneTier:true
    },
    {
        id: 'iron',
        stone:'tuff',
        vein:true,
        stoneTier:true
    },
    {
        id: 'iron',
        stone:'dripstone',
        stoneTier:true
    },
    {
        id: 'gold',
        stone:'ochrum',
        vein:true,
        ironTier:true
    },
    {
        id: 'gold',
        stone:'quartzite',
        ironTier:true
    },
    {
        id: 'lapis',
        stone:'calcite',
        vein:true,
        stoneTier:true
    }
]

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function getBlockId(block) {
    let id = block.id + '_ore'
    if (block.stone) {
        id = block.stone + '_' + id
    }
    return id
}

function getBlockName(block) {
    if (block.stone) {
        return capitalizeFirstLetter(block.stone) + ' ' + capitalizeFirstLetter(block.id) + (block.vein ? ' Deposit' : ' Ore')
    }
    else {
        return capitalizeFirstLetter(block.id) + (block.vein ? ' Deposit' : ' Ore')
    }
}

function addOreBlock(event, block) {
    let builder = event.create(getBlockId(block))
    builder.displayName(getBlockName(block))
    .hardness(1)
    .resistance(4)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('c:ores')
    .tagBlock('c:ores/' + block.id)
    if (block.vein) { builder.tagBlock('c:ores/deposits/' + block.id) }
    if (block.stoneTier) { builder.tagBlock('minecraft:needs_stone_tool') }
    if (block.ironTier) { builder.tagBlock('minecraft:needs_iron_tool') }
}

StartupEvents.registry('block', event => {
    for (let block of oreBlocks) {
        addOreBlock(event, block)
    }
})