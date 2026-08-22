// event.add('tag', 'item')
// event.remove('tag', 'item')

console.info('Tags Loaded')
ServerEvents.tags('item', event => {

//Ingredient Flattening
    event.add('c:dusts/sulfur', 'spelunkery:sulfur')
    event.remove('c:dusts/sulfur', 'tfmg:sulfur_dust')
    event.remove('c:dusts/sulfur', 'scguns:sulfur_dust')
    event.add('c:dusts/niter', 'spelunkery:saltpeter')
    event.add('c:dusts/saltpeter', 'spelunkery:saltpeter')
    event.remove('c:nuggets/copper', 'copper_tools_armor_backport:copper_nugget')
    event.remove('c:nuggets/copper', 'spelunkery:copper_nugget')
    event.remove('c:dusts/saltpeter', 'tfmg:nitrate_dust')
    event.remove('c:dusts/saltpeter', 'scguns:niter_dust')
    event.remove('c:dusts/niter', 'tfmg:nitrate_dust')
    event.remove('c:dusts/niter', 'scguns:niter_dust')
    event.remove('c:gems/quartz', 'malum:natural_quartz')
    event.remove('c:ingots/cast_iron', 'createbigcannons:cast_iron_ingot')
    event.remove('c:nuggets/cast_iron', 'createbigcannons:cast_iron_nugget')
    event.remove('malum:void_soulstone_material', 'createpropulsion:raw_platinum')
    event.add('c:fuel', 'nomansland:resin_oil')
    event.add('c:fuel', 'nomansland:resin_oil_bottle')

// Bookshelf
    event.add('minecraft:bookshelf_books', 'guideme:guide')

// Malum Soul Shattering
    event.add('malum:soul_shatter_capable_weapon', '#scguns:deep_dark_gun_tier')

// Enchanting Fuel
    event.add('neoforge:enchanting_fuels', 'tfmg:copper_sulfate')

// Spirit Catalysts
    event.add('breakingnewground:wicked_spirit_catalyst', 'minecraft:flint')
    event.add('breakingnewground:wicked_spirit_catalyst', 'tfmg:copper_sulfate')
    event.add('breakingnewground:sacred_spirit_catalyst', 'minecraft:quartz')
    event.add('breakingnewground:sacred_spirit_catalyst', 'tfmg:copper_sulfate')
    event.add('breakingnewground:arcane_spirit_catalyst', 'minecraft:amethyst_shard')
    event.add('breakingnewground:arcane_spirit_catalyst', 'tfmg:copper_sulfate')

// Scorched Guns Bullet Materials
    event.add('scguns:advanced_bullet_material', 'scguns:treated_iron_ingot')
    event.add('scguns:advanced_bullet_material', '#c:ingots/steel')
    event.add('scguns:advanced_bullet_tips', 'scguns:hardened_bullet')
    event.add('scguns:advanced_bullet_tips', 'scguns:treated_iron_ingot')
    event.add('scguns:advanced_bullet_tips', '#c:nuggets/steel')
    event.add('scguns:stan_bullet_tips', '#c:nuggets/lead')
    event.add('scguns:stan_bullet_tips', 'scguns:standard_bullet')
    event.add('scguns:standard_bullet_material', '#c:ingots/lead')
})

ServerEvents.tags('fluid', event => {
    event.add('c:fuel', 'nomansland:resin_oil')
    event.add('c:fuel', 'nomansland:resin_oil_bottle')
})

    ServerEvents.tags('block', event => {
// Weeping
        event.add('c:ores', 'malum:primordial_soup')
        event.add('c:ores/weeping', 'malum:primordial_soup')

// Rubbery
        event.add('stoat:rubbery', 'tfmg:asphalt')
        event.add('stoat:rubbery', 'tfmg:asphalt_slab')
        event.add('stoat:rubbery', 'tfmg:asphalt_stairs')
        event.add('stoat:rubbery', 'clutternomore:tfmg/vertical_asphalt_slab')
        event.add('stoat:rubbery', 'clutternomore:tfmg/asphalt_step')

// Enderman pickup blacklist
    event.removeAll('minecraft:enderman_holdable')

// Chisel Tags
    event.add('spelunkery:chisel_immune', 'nomansland:moon_carving')
    event.remove('spelunkery:chisel_immune', 'minecraft:budding_amethyst')

// Logs
    event.add('minecraft:logs', 'malum:runewood_log')
    event.add('minecraft:logs', 'malum:runewood')
    event.add('minecraft:logs', 'malum:exposed_runewood_log')
    event.add('minecraft:logs', 'malum:revealed_runewood_log')

// Molten Metals
    event.add('kubejs:molten_metals', 'kubejs:molten_iron')
    event.add('kubejs:molten_metals', 'kubejs:molten_gold')
    event.add('kubejs:molten_metals', 'kubejs:molten_copper')
    event.add('kubejs:molten_metals', 'kubejs:molten_zinc')
    event.add('kubejs:molten_metals', 'kubejs:molten_lead')
    event.add('kubejs:molten_metals', 'kubejs:molten_nickel')
    event.add('kubejs:molten_metals', 'kubejs:molten_anthralite')

// Carver Tweaks
    event.remove('minecraft:overworld_carver_replaceables', 'minecraft:obsidian')
    event.remove('minecraft:overworld_carver_replaceables', 'minecraft:crying_obsidian')

// No Spring Break
    event.remove('spelunkery:spring_geyser_breakable', '#minecraft:overworld_carver_replaceables')
    event.remove('spelunkery:spring_geyser_breakable', 'spelunkery:rock_salt_block')
    event.remove('spelunkery:spring_geyser_breakable', '#minecraft:snow')
    event.remove('spelunkery:spring_geyser_breakable', 'minecraft:smooth_basalt')
    event.remove('spelunkery:spring_geyser_breakable', 'minecraft:blue_ice')


// Tom's Simple Storage
    event.remove('minecraft:mineable/axe', 'toms_storage:crafting_terminal')
    event.remove('minecraft:mineable/axe', 'toms_storage:storage_terminal')
    event.remove('minecraft:mineable/axe', 'toms_storage:trim')
    event.remove('minecraft:mineable/axe', 'toms_storage:inventory_connector')
    event.remove('minecraft:mineable/axe', 'toms_storage:inventory_cable')
    event.remove('minecraft:mineable/axe', 'toms_storage:inventory_cable_framed')
    event.remove('minecraft:mineable/axe', 'toms_storage:inventory_cable_connector')
    event.remove('minecraft:mineable/axe', 'toms_storage:inventory_cable_connector_framed')
    event.remove('minecraft:mineable/axe', 'toms_storage:inventory_interface')
    event.remove('minecraft:mineable/axe', 'toms_storage:level_emitter')
    event.remove('minecraft:mineable/axe', 'toms_storage:inventory_proxy')
    event.remove('minecraft:mineable/axe', 'toms_storage:basic_inventory_hopper')

    event.add('minecraft:mineable/pickaxe', 'toms_storage:crafting_terminal')
    event.add('minecraft:mineable/pickaxe', 'toms_storage:storage_terminal')
    event.add('minecraft:mineable/pickaxe', 'toms_storage:trim')
    event.add('minecraft:mineable/pickaxe', 'toms_storage:inventory_connector')
    event.add('minecraft:mineable/pickaxe', 'toms_storage:inventory_cable')
    event.add('minecraft:mineable/pickaxe', 'toms_storage:inventory_cable_framed')
    event.add('minecraft:mineable/pickaxe', 'toms_storage:inventory_cable_connector')
    event.add('minecraft:mineable/pickaxe', 'toms_storage:inventory_cable_connector_framed')
    event.add('minecraft:mineable/pickaxe', 'toms_storage:inventory_interface')
    event.add('minecraft:mineable/pickaxe', 'toms_storage:level_emitter')
    event.add('minecraft:mineable/pickaxe', 'toms_storage:inventory_proxy')
    event.add('minecraft:mineable/pickaxe', 'toms_storage:basic_inventory_hopper')

    event.add('create:wrench_pickup', 'toms_storage:crafting_terminal')
    event.add('create:wrench_pickup', 'toms_storage:storage_terminal')
    event.add('create:wrench_pickup', 'toms_storage:trim')
    event.add('create:wrench_pickup', 'toms_storage:inventory_connector')
    event.add('create:wrench_pickup', 'toms_storage:inventory_cable')
    event.add('create:wrench_pickup', 'toms_storage:inventory_cable_framed')
    event.add('create:wrench_pickup', 'toms_storage:inventory_cable_connector')
    event.add('create:wrench_pickup', 'toms_storage:inventory_cable_connector_framed')
    event.add('create:wrench_pickup', 'toms_storage:inventory_interface')
    event.add('create:wrench_pickup', 'toms_storage:level_emitter')
    event.add('create:wrench_pickup', 'toms_storage:inventory_proxy')
    event.add('create:wrench_pickup', 'toms_storage:basic_inventory_hopper')
    event.add('create:wrench_pickup', 'toms_storage:open_crate')
    event.add('create:wrench_pickup', 'toms_storage:filing_cabinet')

    // Fix break
    event.remove('minecraft:mineable/pickaxe', 'drivebysable:advanced_cable_hub')

    // Lootr Blacklist
    event.removeAll('lootr:convert/sands')
    event.removeAll('lootr:convert/gravels')


})
    ServerEvents.tags('entity_type', event => {
// Cage and Jar Entities
        event.add('supplementaries:jar_catchable', 'minecraft:silverfish')
        event.add('supplementaries:jar_catchable', 'endermanoverhaul:spirit')
        event.add('supplementaries:jar_catchable', 'endermanoverhaul:scarab')
        event.add('supplementaries:jar_catchable', 'minecraft:endermite')
        event.add('supplementaries:jar_catchable', 'scguns:swarm')
        event.add('supplementaries:jar_baby_catchable', 'minecraft:turtle')
        event.add('supplementaries:jar_baby_catchable', 'minecraft:chicken')
        event.add('supplementaries:jar_baby_catchable', 'nomansland:goose')
        event.add('supplementaries:cage_catchable', 'scguns:scampler')
        event.add('supplementaries:cage_catchable', 'minecraft:silverfish')
        event.add('supplementaries:cage_catchable', 'endermanoverhaul:spirit')
        event.add('supplementaries:cage_catchable', 'endermanoverhaul:scarab')
        event.add('supplementaries:cage_catchable', 'minecraft:wolf')
        event.add('supplementaries:cage_catchable', 'nomansland:goose')
        event.add('supplementaries:cage_catchable', 'envelope:pigeon')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:camel')
        event.add('supplementaries:cage_baby_catchable', 'nomansland:deer')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:panda')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:llama')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:trader_llama')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:drowned')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:mooshroom')
        event.add('supplementaries:cage_baby_catchable', 'nomansland:tortoise')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:strider')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:villager')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:zombie')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:zombie_villager')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:turtle')
        event.add('supplementaries:cage_baby_catchable', 'kobolds:kobold_child')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:husk')
        event.add('supplementaries:cage_baby_catchable', 'minecraft:zombified_piglin')

// Bullet Projectiles
        event.add('scguns:bullet', 'scguns:advanced_round_projectile')
        event.add('scguns:bullet', 'scguns:basic_bullet_projectile')
        event.add('scguns:bullet', 'scguns:bearpack_shell_projectile')
        event.add('scguns:bullet', 'scguns:beowulf_projectile')
        event.add('scguns:bullet', 'scguns:blaze_rod_projectile')
        event.add('scguns:bullet', 'scguns:buckshot_projectile')
        event.add('scguns:bullet', 'scguns:fire_round_projectile')
        event.add('scguns:bullet', 'scguns:gibbs_round_projectile')
        event.add('scguns:bullet', 'scguns:hardened_bullet_projectile')
        event.add('scguns:bullet', 'scguns:hog_round_projectile')
        event.add('scguns:bullet', 'scguns:krahg_round_projectile')
        event.add('scguns:bullet', 'scguns:osborne_slug_projectile')
        event.add('scguns:bullet', 'scguns:plasma_projectile')
        event.add('scguns:bullet', 'scguns:projectile')
        event.add('scguns:bullet', 'scguns:ramrod_projectile')
        event.add('scguns:bullet', 'scguns:shatter_round_projectile')
        event.add('scguns:bullet', 'scguns:shotball_projectile')
        event.add('scguns:bullet', 'scguns:shulkshot_projectile')
        event.add('scguns:bullet', 'scguns:syringe_projectile')
        event.add('scguns:bullet', 'scguns:fire_grenade_round')
        event.add('scguns:bullet', 'scguns:bouncy_grenade_round')
        event.add('scguns:bullet', 'scguns:gas_grenade_round')
        event.add('scguns:bullet', 'scguns:he_grenade_round')
        event.add('scguns:bullet', 'scguns:microjet')
        event.add('scguns:bullet', 'scguns:rocket')
        event.add('scguns:bullet', 'scguns:scamp_rocket')

// Gunner blacklist
        event.remove('scguns:gunner', 'minecraft:zombie')
        event.remove('scguns:gunner', 'minecraft:zombie_villager')
        event.remove('scguns:gunner', 'minecraft:zombified_piglin')
        event.remove('scguns:gunner', 'minecraft:husk')
        event.remove('scguns:gunner', 'minecraft:wither_skeleton')

})
