// Shields feel a bit OP against mobs, equip zombies with axes occasionally

const axes = [
    'minecraft:wooden_axe',
    'minecraft:golden_axe',
    'scguns:anthralite_axe',
    'minecraft:stone_axe',
    'copper_tools_armor_backport:copper_axe',
    'minecraft:iron_axe',
]

EntityEvents.spawned(event => {
    event.level
    let id = event.entity.type
    if (id == "minecraft:zombie" || id == "minecraft:husk") {
        let mob = event.entity
        if (Math.random() < (mob.isBaby() ? 0.5 : 0.25) && mob.getItemBySlot('mainhand').isEmpty()) {
            let index = Math.floor(Math.random() * (mob.isBaby() ? 2 : axes.length))
            console.log(index)
            mob.setItemSlot('mainhand', axes[index])
        }
    }
})