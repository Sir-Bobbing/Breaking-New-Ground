ServerEvents.recipes(event => {

    const spiritCatalysts = {
        "malum:sacred": 'minecraft:quartz',
        "malum:wicked": 'minecraft:flint',
        "malum:arcane": 'minecraft:amethyst_shard',
        "malum:eldritch": 'architects_palette:unobtanium',
        "malum:aerial": 'minecraft:pointed_dripstone',
        "malum:aqueous": 'minecraft:clay_ball',
        "malum:earthen": 'spelunkery:stone_pebble',
        "malum:infernal": 'minecraft:glowstone_dust'
    }

    const spawnableCreatures = {
        "minecraft:enderman":{"item": 'minecraft:ender_pearl', "hostile":true},
        "endermanoverhaul:badlands_enderman":{"item": 'minecraft:ender_pearl', "hostile":true},
        "endermanoverhaul:cave_enderman":{"item": 'minecraft:ender_pearl', "hostile":true},
        "endermanoverhaul:crimson_forest_enderman":{"item": 'endermanoverhaul:crimson_pearl', "hostile":true},
        "endermanoverhaul:dark_oak_enderman":{"item": 'minecraft:ender_pearl', "hostile":true},
        "endermanoverhaul:desert_enderman":{"item": 'minecraft:ender_pearl', "hostile":true},
        "endermanoverhaul:end_enderman":{"item": 'endermanoverhaul:corrupted_pearl', "hostile":true},
        "endermanoverhaul:end_islands_enderman":{"item": 'endermanoverhaul:ancient_pearl', "hostile":true},
        "endermanoverhaul:flower_fields_enderman":{"item": 'minecraft:ender_pearl', "hostile":true},
        "endermanoverhaul:ice_spikes_enderman":{"item": 'endermanoverhaul:icy_pearl', "hostile":true},
        "endermanoverhaul:mushroom_fields_enderman":{"item": 'minecraft:ender_pearl', "hostile":true},
        "endermanoverhaul:nether_wastes_enderman":{"item": 'minecraft:ender_pearl', "hostile":true},
        "endermanoverhaul:coral_enderman":{"item": 'endermanoverhaul:bubble_pearl', "hostile":true},
        "endermanoverhaul:savanna_enderman":{"item": 'minecraft:ender_pearl', "hostile":true},
        "endermanoverhaul:snowy_enderman":{"item": 'endermanoverhaul:icy_pearl', "hostile":true},
        "endermanoverhaul:soulsand_valley_enderman":{"item": 'endermanoverhaul:soul_pearl', "hostile":true},
        "endermanoverhaul:swamp_enderman":{"item": 'endermanoverhaul:summoner_pearl', "hostile":true},
        "endermanoverhaul:warped_forest_enderman":{"item": 'endermanoverhaul:warped_pearl', "hostile":true},
        "endermanoverhaul:windswept_hills_enderman":{"item": 'endermanoverhaul:summoner_pearl', "hostile":true},

        "minecraft:cow":{"item": 'minecraft:beef'},
        "minecraft:horse":{"item": 'nomansland:raw_horse'},
        "minecraft:pig":{"item": 'minecraft:porkchop'},
        "minecraft:sheep":{"item": 'minecraft:mutton'},
        "minecraft:chicken":{"item": 'minecraft:chicken'},
        "minecraft:parrot":{"item": 'minecraft:feather'},
        "minecraft:rabbit":{"item": 'minecraft:rabbit'},
        "minecraft:rabbit":{"item": 'minecraft:rabbit'},
        "minecraft:cod":{"item": 'minecraft:cod'},
        "minecraft:salmon":{"item": 'minecraft:salmon'},
        "minecraft:pufferfish":{"item": 'minecraft:pufferfish'},
        "minecraft:tropical_fish":{"item": 'minecraft:tropical_fish'},
        "minecraft:glow_squid":{"item": 'minecraft:glow_ink_sac'},
        "minecraft:strider":{"item": 'minecraft:string'},
        "minecraft:villager":{"item": 'spelunkery:rough_emerald_block'},
        "minecraft:wandering_trader":{"item": 'spelunkery:rough_emerald_block'},
        "nomansland:deer":{"item": 'nomansland:raw_venison'},
        "nomansland:billhook_bass":{"item": 'nomansland:billhook_bass'},

        "minecraft:wither_skeleton":{"item": 'architects_palette:withered_bone', "hostile":true},
        "minecraft:spider":{"item": 'minecraft:string', "hostile":true},
        "minecraft:cave_spider":{"item": 'minecraft:spider_eye', "hostile":true},
        "minecraft:phantom":{"item": 'minecraft:phantom_membrane', "hostile":true},
        "minecraft:blaze":{"item": 'minecraft:blaze_rod', "hostile":true},
        "minecraft:ghast":{"item": 'minecraft:ghast_tear', "hostile":true},
        "minecraft:shulker":{"item": 'minecraft:shulker_shell', "hostile":true},
        "minecraft:skeleton":{"item": 'minecraft:bone', "hostile":true},
        "minecraft:slime":{"item": 'minecraft:slime_ball', "hostile":true},
        "minecraft:zombie":{"item": 'minecraft:rotten_flesh', "hostile":true},
        "minecraft:zombified_piglin":{"item": 'minecraft:rotten_flesh', "hostile":true},
        "minecraft:breeze":{"item": 'minecraft:breeze_rod', "hostile":true},
        "minecraft:creeper":{"item": 'minecraft:gunpowder', "hostile":true},
        "minecraft:endermite":{"item": 'aeronautics:end_stone_powder', "hostile":true},
        "minecraft:guardian":{"item": 'minecraft:prismarine_shard', "hostile":true},
        "minecraft:magma_cube":{"item": 'minecraft:magma_cream', "hostile":true},
        "minecraft:vindicator":{"item": 'minecraft:emerald', "hostile":true},
        "minecraft:witch":{"item": 'minecraft:redstone', "hostile":true},
        "minecraft:hoglin":{"item": 'minecraft:porkchop', "hostile":true},
    }

    function getCatalysts(info, spirits) {
        const catalysts = [info.extra]
        spirits.forEach((spirit) => {
            catalysts.push({
                "count": spirit["count"],
                "item": spiritCatalysts[spirit["spirit"]]
            })
        })
        return catalysts
    }

    function getSpawnEgg(id, info) {
        let result = info.result
        if (result == null) {
            let idInfo = id.split(":")
            result = {
                "count": 1,
                "id": idInfo[0] + ":" + idInfo[1] + "_spawn_egg"
            }
        }
        result.components = {
            "minecraft:custom_data": {"creature_conjuration": 1},
            "entity_data": {"id": id}
        }
        return result
    }

    function getEntitySpirits(id) {
        const idInfo = id.split(":")
        let spirits;
        if (idInfo[0] == "minecraft") {
            spirits = JSON.parse(KJSTweaks.readJsonFromMod("malum", "spirit_data/entity/" + idInfo[1]).toString())["spirits"]
        }
        else {
            spirits = JSON.parse(KJSTweaks.readJsonFromMod("malum", "spirit_data/entity/" + idInfo[0] + "/" + idInfo[1]).toString())["spirits"]
        }
        spirits.forEach((spirit) => {
            spirit["type"] = spirit["spirit"]
        })
        return spirits
    }

    function registerRecipe(event, id, info) {
        let spirits = getEntitySpirits(id)

        if (!info.input) {
            info.input = {
                "count": 1,
                "item": info.item
            }
        }

        if (!info.extra) {
            if (info.hostile) {
                info.extra = {
                    "count": 1,
                    "item": 'malum:mnemonic_fragment'
                }
            }
            else {
                info.extra = {
                    "count": 1,
                    "item": 'malum:refined_brilliance'
                }
            }
            info.hostile = null
        }
        event.custom({
            type: "malum:spirit_infusion",
            "extraInputs": getCatalysts(info, spirits),
            "input": info.input,
            "result": getSpawnEgg(id, info),
            "spirits": spirits
        })
    }
    
    for ( let id in spawnableCreatures ) {
        let info = spawnableCreatures[id]
        registerRecipe( event, id, info )
    }
})

function positionString( entity ) {
    return entity.getX() + ' ' + entity.getY() + ' ' + entity.getZ()
}

EntityEvents.spawned(event => {
    if (event.entity.isItem()) {
        let i = event.entity.getItem()
        let c = i.getComponentMap()
        let customData = c.get("custom_data")
        if (customData != null && customData.contains("creature_conjuration")) {
            let entityData = c.get("entity_data").copyTag()
            console.log(event.entity.position.toString())
            event.level.runCommandSilent('summon '+entityData.getString("id")+' '+positionString(event.entity))
            event.cancel()
        }
    }
})