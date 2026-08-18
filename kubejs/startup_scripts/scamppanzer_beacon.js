StartupEvents.registry('item', event => {

  let $DataComponents = Java.loadClass('net.minecraft.core.component.DataComponents')
  let $CustomData = Java.loadClass('net.minecraft.world.item.component.CustomData')
  let $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')

  const playSound = 'playSound(net.minecraft.world.entity.player.Player,net.minecraft.core.BlockPos,net.minecraft.sounds.SoundEvent,net.minecraft.sounds.SoundSource,float,float)'

  let defaultTag = new $CompoundTag()
  defaultTag.putInt("kubejs:scamppanzer_beacon_charge", 0) 
  defaultTag.putInt("kubejs:scamppanzer_beacon_x", 0)
  defaultTag.putInt("kubejs:scamppanzer_beacon_y", 0)
  defaultTag.putInt("kubejs:scamppanzer_beacon_z", 0)

  function assignDefaultProperties(item) {
    item.tooltip('§7Charge near a beacon to summon the Scamppanzer.')
    .tooltip('§7Requires sufficient clearance to spawn.')
    .unstackable()
    .useAnimation('bow')
    .useDuration(itemstack => 30)

    //.component($DataComponents.CUSTOM_DATA, $CustomData.of(defaultTag.copy()))
    // For some reason makes it so that the item can't accept further modification of customdata
    // Does not add the base customdata either...
  }

  function useLogic(level, player, hand, arcane) {
    level[playSound](null, player.blockPosition(), "malum:ritual_forms", "master", 1, Math.random()*0.1 + 0.2 )
    return true
  }

  function finishUsingLogic(itemstack, level, entity, arcane) {
    const effects = entity.potionEffects
    effects.add('minecraft:nausea', 60)

    let data = itemstack.has($DataComponents.CUSTOM_DATA) ? itemstack.get($DataComponents.CUSTOM_DATA).copyTag() : defaultTag.copy()
    let charge = data.getInt("kubejs:scamppanzer_beacon_charge") + 1
    
    if (charge >= 5) {
      level[playSound](null, entity.blockPosition(), "malum:ritual_completed", "master", 1, Math.random()*0.1 + 0.7 )

      itemstack.shrink(1)
    }
    else {

      if (arcane) {
        level[playSound](null, entity.blockPosition(), "malum:ritual_begins", "master", 1, charge*0.1 + 0.6 )
      }
      else {
        level[playSound](null, entity.blockPosition(), "malum:spirit_diode_open", "master", 1, charge*0.15 + 0.4 )
      }

      data.putInt("kubejs:scamppanzer_beacon_charge", charge)

      $CustomData.set($DataComponents.CUSTOM_DATA, itemstack, data)
    }

    return itemstack
  }

  function releaseUsingLogic(itemstack, level, entity, tick, arcane) {
    level[playSound](null, entity.blockPosition(), arcane ? "malum:ritual_evolves" : "malum:spirit_diode_close", "master", 1, Math.random()*0.1 + 0.4 )
    entity.addItemCooldown("kubejs:arcane_scamppanzer_beacon", 60);
    entity.addItemCooldown("kubejs:scamppanzer_beacon", 60);
    $CustomData.set($DataComponents.CUSTOM_DATA, itemstack, defaultTag.copy())
  }

  function registerUseLogic(itembuilder, arcane) {
    itembuilder.use((level, player, hand) => {
      return useLogic(level, player, hand, arcane)
    })
    .finishUsing((itemstack, level, entity) => {
      return finishUsingLogic( itemstack, level, entity, arcane )
    })
    .releaseUsing((itemstack, level, entity, tick) => {
      return releaseUsingLogic( itemstack, level, entity, tick, arcane )
    })
  }

  let arcaneBeacon = event.create('arcane_scamppanzer_beacon')
  assignDefaultProperties(arcaneBeacon)
  arcaneBeacon.tooltip('§5§oInfused arcana subtly empowers the Scamppanzer...')
  arcaneBeacon.texture('scguns:item/beacon_grenade')
  registerUseLogic(arcaneBeacon, true)

  let beacon = event.create('scamppanzer_beacon')
  assignDefaultProperties(beacon)
  beacon.texture('scguns:item/cog_locator')
  registerUseLogic(beacon, false)
  
})