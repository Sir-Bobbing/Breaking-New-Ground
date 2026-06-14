const moltenMetals = [
    ["iron", "create", "minecraft"],
    ["gold", "create", "minecraft"],
    ["copper", "create", "minecraft"],
    ["zinc", "create", "create"],
    ["lead", "create", "tfmg"],
    ["nickel", "create", "tfmg"],
    ["anthralite", "scguns", "scguns"]
    // Name, Crushed Item Mod, Ingot Item Mod
]

function getMoltenID( metalInfo ) {
    return "kubejs:molten_" + metalInfo[0]
}

function getSlurryID( metalInfo ) {
    return "kubejs:slurry_" + metalInfo[0]
}

function getCrushedID( metalInfo ) {
    return metalInfo[1] + ":crushed_raw_" + metalInfo[0]
}

function getIngotID( metalInfo ) {
    return metalInfo[2] + ":" + metalInfo[0] + "_ingot"
}

function getNodeID( metalInfo ) {
    return "malum:" + metalInfo[0] + "_node"
}

function registerCasting( event, metalInfo ) {
    event.custom({
        type: 'tfmg:casting',
        ingredients: [{
            "type": "neoforge:single",
            "amount": 144,
            "fluid": getMoltenID( metalInfo )
        }],
        "processing_time": 50,
        "results": [{
            "id": getIngotID(metalInfo)
        }]
    })
}

function registerBlasting( event, metalInfo ) {
    event.custom({
        type: 'tfmg:industrial_blasting',
        ingredients: [
            { item:getIngotID(metalInfo) },
            { tag:"tfmg:flux" }
        ],
        "processing_time": 100,
        "results": [
            {
                "amount": 288,
                "id": getMoltenID(metalInfo)
            },
            {
                "amount": 288,
                "id": "tfmg:molten_slag"
            },
            {
                "amount": 200,
                "id": "tfmg:furnace_gas"
            }
        ]
    })
}

function registerVatLow( event, metalInfo ) {
    event.custom({
        type: "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:steel_vat",
            "tfmg:firebrick_lined_vat"
        ],
        "heat_requirement": "heated",
        "machines": [
            "tfmg:electrode",
            "tfmg:electrode",
            "tfmg:mixing"
        ],
        "min_size": 8,
        "processing_time": 40,
        "ingredients": [
            {
                "item": getCrushedID(metalInfo)
            },
            {
                "tag": "tfmg:flux"
            }
        ],
        "results": [
            {
                "amount": 432,
                "id": getMoltenID(metalInfo)
            },
            {
                "amount": 144,
                "id": "tfmg:molten_slag"
            }
        ]
    })
}

function registerVatHigh( event, metalInfo ) {
    event.custom({
        type: "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:firebrick_lined_vat"
        ],
        "heat_requirement": "superheated",
        "machines": [
            "tfmg:graphite_electrode",
            "tfmg:graphite_electrode",
            "tfmg:graphite_electrode",
            "tfmg:mixing"
        ],
        "min_size": 9,
        "processing_time": 20,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 144,
                "fluid": getSlurryID( metalInfo )
            }
        ],
        "results": [
            {
                "amount": 720,
                "id": getMoltenID(metalInfo)
            }
        ]
    })
}

function registerSlurry(event, metalInfo) {
    event.custom({
        type: "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:steel_vat",
            "tfmg:firebrick_lined_vat"
        ],
        "heat_requirement": "heated",
        "machines": [
            "tfmg:mixing"
        ],
        "min_size": 1,
        "processing_time": 20,
        "ingredients": [
            {
                "item": getCrushedID(metalInfo)
            },
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "tfmg:sulfuric_acid"
            }
        ],
        "results": [
            {
                "amount": 144,
                "id": getSlurryID(metalInfo)
            }
        ]
    })
}

function registerNodeConversion(event, metalInfo) {
    event.custom({
        type: "malum:spirit_infusion",
        "extraInputs": [{
            "count": 1,
            "item": "minecraft:clay_ball"
        }],
        "input": {
            "count": 2,
            "item": getNodeID(metalInfo)
        },
        "result": {
            "count": 1,
            "id": getCrushedID(metalInfo)
        },
        "spirits": [
            {
            "type": "malum:aqueous",
            "count": 2
            }
        ]
    })
}

ServerEvents.recipes(event => {
    let len = moltenMetals.length
    for (let i = 0; i < len; i++) {
        let metalInfo = moltenMetals[i]
        registerCasting(event, metalInfo)
        registerBlasting(event, metalInfo)
        registerVatLow(event, metalInfo)
        registerVatHigh(event, metalInfo)
        registerSlurry(event, metalInfo)
        if (metalInfo[0] != "anthralite") {
            registerNodeConversion(event, metalInfo)
        }
    }
})

PlayerEvents.tick(event=>{
    let player = event.player;
    if(isNaN(player.health)) player.setHealth(0)
    if([player.block, player.block.up].some(b => b.hasTag("kubejs:molten_metals"))){
        event.entity.attack(player.damageSources().lava(), 10 ) // Damage amount
    }
})
