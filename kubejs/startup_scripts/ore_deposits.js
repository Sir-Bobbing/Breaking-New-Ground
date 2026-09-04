const oreBlocks = [
    {
        id: 'coal',
        stone:'lignite',
        vein:true
    },
    {
        id: 'copper',
        stone:'veridium',
        vein:true
    },
    {
        id: 'iron',
        stone:'crimsite',
        vein:true
    },
    {
        id: 'iron',
        stone:'tuff',
        vein:true
    },
    {
        id: 'iron',
        stone:'dripstone',
    },
    {
        id: 'gold',
        stone:'ochrum',
        vein:true
    },
    {
        id: 'gold',
        stone:'quartzite'
    },
    {
        id: 'lapis',
        stone:'calcite',
        vein:true
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
    .tagBlock((block.vein ? 'c:ores/deposits/' : 'c:ores/') + block.id)
    
}

StartupEvents.registry('block', event => {
    for (let block of oreBlocks) {
        addOreBlock(event, block)
    }
})