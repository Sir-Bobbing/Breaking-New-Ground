console.info('Recipe Tweaks Loaded')

ServerEvents.recipes(event => {

// Ingredient Flattening
    event.replaceInput(
        { input: 'scguns:pebbles' },
        'scguns:pebbles',
        Ingredient.of('spelunkery:stone_pebble')
    )
    event.replaceInput(
        { input: 'tfmg:sulfur_dust' },
        'tfmg:sulfur_dust',
        Ingredient.of('spelunkery:sulfur')
    )
    event.replaceInput(
        { input: '#c:nuggets/copper' },
        '#c:nuggets/copper',
        Ingredient.of('create:copper_nugget')
    )
    event.replaceInput(
        { input: '#c:dusts/niter' },
        '#c:dusts/niter',
        Ingredient.of('spelunkery:saltpeter')
    )
    event.replaceInput(
    { input: '#c:dusts/saltpeter' },
    '#c:dusts/saltpeter',
    Ingredient.of('spelunkery:saltpeter')
    )
    event.replaceInput(
        { input: 'scguns:niter_block' },
        'scguns:niter_block',
        Ingredient.of('spelunkery:saltpeter_block')
    )
    event.replaceInput(
        { input: 'createbigcannons:gunpowder_pinch' },
        'createbigcannons:gunpowder_pinch',
        Ingredient.of('scguns:gunpowder_dust')
    )
    event.replaceInput(
        { input: 'createbigcannons:recoil_spring' },
        'createbigcannons:recoil_spring',
        Ingredient.of('simulated:spring')
    )

   // Cast Iron
    event.replaceInput(
        { input: 'createbigcannons:cast_iron_ingot' },
        'createbigcannons:cast_iron_ingot',
        Ingredient.of('tfmg:cast_iron_ingot')
    )
    event.replaceInput(
        { input: 'createbigcannons:cast_iron_nugget' },
        'createbigcannons:cast_iron_nugget',
        Ingredient.of('tfmg:cast_iron_nugget')
    )
    event.replaceInput(
        { input: 'createbigcannons:cast_iron_block' },
        'createbigcannons:cast_iron_block',
        Ingredient.of('tfmg:cast_iron_block')
    )
    event.remove({ id: 'createbigcannons:cast_iron_nugget' })
    event.remove({ id: 'createbigcannons:cast_iron_block' })
    event.remove({ id: 'createbigcannons:compacting/iron_to_cast_iron_block' })
    event.remove({ id: 'createbigcannons:compacting/iron_to_cast_iron_ingot' })
    event.remove({ id: 'createbigcannons:compacting/forge_cast_iron_block' })
    event.remove({ id: 'createbigcannons:compacting/forge_cast_iron_nugget' })
    event.remove({ id: 'createbigcannons:cast_iron_ingot_from_block' })
    event.remove({ id: 'createbigcannons:cast_iron_ingot_from_nuggets' })
    event.remove({ id: 'createbigcannons:melting/melt_cast_iron_block' })
    event.remove({ id: 'createbigcannons:melting/cast_iron_ingot' })
    event.remove({ id: 'createbigcannons:compacting/compacting/iron_to_cast_iron_ingot' })
    event.remove({ id: 'createbigcannons:compacting/forge_cast_iron_ingot' })

    // Steel
    event.replaceInput(
        { input: 'createbigcannons:steel_block' },
        'createbigcannons:steel_block',
        Ingredient.of('tfmg:steel_block')
    )
    event.replaceInput(
        { input: 'createbigcannons:steel_ingot' },
        'createbigcannons:steel_ingot',
        Ingredient.of('tfmg:steel_ingot')
    )
    event.replaceInput(
        { input: 'createbigcannons:steel_scrap' },
        'createbigcannons:steel_scrap',
        Ingredient.of('tfmg:steel_nugget')
    )
    event.remove({ id: 'createbigcannons:compacting/forge_steel_ingot' })
    event.remove({ id: 'createbigcannons:compacting/forge_steel_nugget' })
    event.remove({ id: 'createbigcannons:compacting/forge_steel_block' })
    event.remove({ id: 'createbigcannons:steel_ingot_from_nuggets' })
    event.remove({ id: 'createbigcannons:steel_scrap' })
    event.remove({ id: 'createbigcannons:steel_ingot_from_block' })
    event.remove({ id: 'createbigcannons:steel_block' })
    event.remove({ id: 'createbigcannons:mixing/alloy_steel' })


    event.remove({ id: 'scguns:gravel_to_pebbles' })
    event.remove({ id: 'scguns:pebbles_from_gravel' })
    event.remove({ id: 'create:crushing/dirt' })
    event.remove({ id: 'scguns:niter_block' })
    event.remove({ id: 'scguns:niter_from_niter_block' })
    event.remove({ id: 'createbigcannons:gunpowder_pinch' })
    event.remove({ id: 'createbigcannons:gunpowder_from_pinches' })

//Incubation Fried Egg
    event.remove({ id: 'incubation:fried_egg' })
    event.remove({ id: 'incubation:fried_egg_from_smoking' })
    event.remove({ id: 'incubation:fried_egg_from_campfire_cooking' })

// Big Cannons Simplification
    event.remove({ type: 'createbigcannons:melting' })
    event.remove({ mod: 'createbigcannons', type: 'create:cutting' })
    event.remove({ id: 'createbigcannons:cannon_drill' })
    event.remove({ id: 'createbigcannons:casting_sand' })
    event.remove({ id: 'createbigcannons:cannon_builder' })
    event.remove({ id: 'createbigcannons:basin_foundry_lid' })
    event.remove({ id: 'createbigcannons:sequenced_assembly/recoil_spring' })
    event.remove({ input: '#c:ingots/nethersteel' })
    event.remove({ input: '#c:nuggets/nethersteel' })

    // Create Deco Mod Removals]
    event.remove({ output: '#createdeco:shipping_containers' })
    event.remove({ output: '#createdeco:supports' })
})
