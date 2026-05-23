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

    event.add('create:seats', '#handcrafted:dining_bench')
    event.add('create:seats', '#handcrafted:cushions')
    event.add('create:seats', '#handcrafted:chairs')
    event.add('create:seats', '#handcrafted:benches')
    event.add('create:seats', '#handcrafted:couches')
})

    ServerEvents.tags('block', event => {
// Carver Tweaks
    event.remove('minecraft:overworld_carver_replaceables', 'minecraft:obsidian')
    event.remove('minecraft:overworld_carver_replaceables', 'minecraft:crying_obsidian')

// Handcrafted Adjustments
    event.add('create:seats', '#handcrafted:dining_bench')
    event.add('create:seats', '#handcrafted:cushions')
    event.add('create:seats', '#handcrafted:chairs')
    event.add('create:seats', '#handcrafted:benches')
    event.add('create:seats', '#handcrafted:couches')

})


    ServerEvents.tags('entity_type', event => {
        event.add('redomesticate:command_blacklist', 'scguns:supply_scamp')
        event.add('redomesticate:command_blacklist', 'scguns:viventrum')


})
