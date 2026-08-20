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
    item.tooltip('§7Charge near an active beacon to summon the Scamppanzer.')
    .tooltip('§7Requires sufficient clearance to spawn.')
    .unstackable()
    .useAnimation('bow')
    .useDuration(itemstack => 30)

    //.component($DataComponents.CUSTOM_DATA, $CustomData.of(defaultTag.copy()))
    // For some reason makes it so that the item can't accept further modification of customdata
    // Does not add the base customdata either...
  }

  function useSound(level, entity) {
    level[playSound](null, entity.blockPosition(), "malum:ritual_forms", "master", 1, Math.random()*0.1 + 0.2 )
  }

  function chargeSound(level, entity, arcane, charge) {
    if (arcane) {
      level[playSound](null, entity.blockPosition(), "malum:ritual_begins", "master", 1, charge*0.1 + 0.6 )
    }
    else {
      level[playSound](null, entity.blockPosition(), "malum:spirit_diode_open", "master", 1, charge*0.15 + 0.4 )
    }
  }

  function finishSound(level, entity) {
    level[playSound](null, entity.blockPosition(), "malum:ritual_completed", "master", 1, Math.random()*0.1 + 0.7 )
  }

  function failSound(level, entity, arcane) {
    level[playSound](null, entity.blockPosition(), arcane ? "malum:ritual_evolves" : "malum:spirit_diode_close", "master", 1, Math.random()*0.1 + 0.4 )
  }

  function searchArea(level, pos, radius, callback) {
    let area = BlockPos.betweenClosed(pos.offset(-radius, -radius, -radius), pos.offset(radius, radius, radius))
    for (let bp of area) {
      let val = callback(level.getBlock(bp))
      if (val) {
        return val
      }
    }
    return false
  }

  function validateBeacon(b) {
    return b.id == "minecraft:beacon" && b.getEntityData().getInt("Levels") > 0
  }

  function locateBeacon(level, pos) {
    let beacon = null
    searchArea(level, pos, 5, function(block) {
      if (validateBeacon(block)) {
        beacon = block
        return true
      }
    })
    return beacon
  }

  function cooldown(player, time) {
    player.addItemCooldown("kubejs:arcane_scamppanzer_beacon", time);
    player.addItemCooldown("kubejs:scamppanzer_beacon", time);
  }

  function useLogic(level, player, hand, arcane) {
    useSound(level, player)
    return true
  }

  function finishUsingLogic(itemstack, level, entity, arcane) {
    let data = itemstack.has($DataComponents.CUSTOM_DATA) ? itemstack.get($DataComponents.CUSTOM_DATA).copyTag() : defaultTag.copy()
    let charge = data.getInt("kubejs:scamppanzer_beacon_charge") + 1
    data.putInt("kubejs:scamppanzer_beacon_charge", charge)

    if (charge == 1) {
      let beacon = locateBeacon(level, entity.blockPosition())
      if (beacon) {
        data.putInt("kubejs:scamppanzer_beacon_x",beacon.x)
        data.putInt("kubejs:scamppanzer_beacon_y",beacon.y)
        data.putInt("kubejs:scamppanzer_beacon_z",beacon.z)
      }
      else {
        failSound(level, entity, arcane)
        cooldown(entity, 20)
        $CustomData.set($DataComponents.CUSTOM_DATA, itemstack, defaultTag.copy())
        return itemstack
      }
    }

    let pos = new BlockPos(data.getInt("kubejs:scamppanzer_beacon_x"),data.getInt("kubejs:scamppanzer_beacon_y"),data.getInt("kubejs:scamppanzer_beacon_z"))
    if (pos.distSqr(entity.blockPosition()) > 100) {
      failSound(level, entity, arcane)
      cooldown(entity, 20)
      $CustomData.set($DataComponents.CUSTOM_DATA, itemstack, defaultTag.copy())
      return itemstack
    }

    if (!validateBeacon(level.getBlock(pos))) {
      failSound(level, entity, arcane)
      cooldown(entity, 20)
      $CustomData.set($DataComponents.CUSTOM_DATA, itemstack, defaultTag.copy())
      return itemstack
    }

    if (charge == 3 || charge == 4) {
      const effects = entity.potionEffects
      effects.add("minecraft:levitation", 40)
    }

    if (charge >= 5) {
      finishSound(level, entity)
      itemstack.shrink(1)
    }
    else {
      chargeSound(level, entity, arcane, charge)
    }

    $CustomData.set($DataComponents.CUSTOM_DATA, itemstack, data)
    return itemstack
  }

  function releaseUsingLogic(itemstack, level, entity, tick, arcane) {
    failSound(level, entity, arcane)
    cooldown(entity, 20)
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
  //.use((level, player, hand) => {
  //})
  assignDefaultProperties(arcaneBeacon)
  arcaneBeacon.tooltip('§5§oInfused arcana subtly empowers the Scamppanzer...')
  arcaneBeacon.texture('scguns:item/beacon_grenade')
  registerUseLogic(arcaneBeacon, true)

  let beacon = event.create('scamppanzer_beacon')
  assignDefaultProperties(beacon)
  beacon.texture('scguns:item/cog_locator')
  registerUseLogic(beacon, false)
  
})