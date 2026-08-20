console.info('Item modifications load.')

let $ArmorItem = Java.loadClass('net.minecraft.world.item.ArmorItem')

ItemEvents.modification(event => {

  event.modify("*", item => {
    if (item.item() instanceof $ArmorItem) {
      item.maxDamage = item.get('minecraft:max_damage') * 3
    }
  })
  
})