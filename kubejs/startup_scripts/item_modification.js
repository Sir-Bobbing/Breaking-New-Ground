console.info('Item modifications load.')

let $ArmorItem = Java.loadClass('net.minecraft.world.item.ArmorItem')

ItemEvents.modification(event => {

  event.modify("*", item => {
    if (item.item() instanceof $ArmorItem) {
      item.maxDamage = item.get('minecraft:max_damage') * 3
    }
  })

  event.modify('architects_palette:entrails', item => {
    item.modifyFood(food => {
        food.alwaysEdible(true)
        food.nutrition(4)
        food.saturation(0.5)
        food.eatSeconds(0.2)
        food.effect("minecraft:hunger",300,79,1)
        food.effect("minecraft:slowness",100,0,1)
        food.effect("minecraft:nausea",80,0,0.2)
        food.effect("minecraft:blindness",80,0,0.2)
    })
  })

  event.modify('architects_palette:rotten_flesh_block', item => {
    item.modifyFood(food => {
        food.alwaysEdible(true)
        food.nutrition(2)
        food.saturation(0.5)
        food.eatSeconds(0.25)
        food.effect("minecraft:hunger",200,79,1)
        food.effect("minecraft:nausea",80,0,0.2)
    })
  })

  event.modify('scguns:metal_detector', item => {
    item.setMaxDamage(512)
  })
  
})