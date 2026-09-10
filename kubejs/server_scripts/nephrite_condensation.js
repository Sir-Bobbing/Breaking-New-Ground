console.info('Respawn Blindness Loaded')

const playSound = 'playSound(net.minecraft.world.entity.player.Player,net.minecraft.core.BlockPos,net.minecraft.sounds.SoundEvent,net.minecraft.sounds.SoundSource,float,float)'

function positionString( pos ) {
    return pos.x + ' ' + pos.y + ' ' + pos.z
}

function checkNephriteValidity(event, blockData, bpos) {
    if (event.level.getBlock(bpos.offset(0, -1 ,0)).id != "minecraft:sculk_catalyst") {
        return false
    }
    return blockData.getInt('Charge') >= 10
}

BlockEvents.rightClicked("spelunkery:carved_nephrite", event => {
    const { block, player, hand} = event
    
    if (hand != "MAIN_HAND") return

    const stack = player.getMainHandItem()

    if (stack.id == "spelunkery:nephrite_chunk") {
        console.log('Yay')
        
        let bpos = block.pos
        let blockData = block.getEntityData()

        if ( checkNephriteValidity(event, blockData, bpos) ) {
            event.level[playSound](null, bpos, "minecraft:block.sculk.charge", "blocks", 1, 1 )
            event.level.level.runCommandSilent('particle minecraft:sculk_charge_pop ' + positionString(Vec3d(bpos.x + 0.5, bpos.y + 0.5, bpos.z + 0.5)) + ' 0.25 0.25 0.25 0.02 40')
            event.level.level.runCommandSilent('particle minecraft:sculk_soul ' + positionString(bpos) + ' 0.3 0 0.3 0.005 5')
            blockData.putInt('Charge',blockData.getInt('Charge') - 10)
            block.mergeEntityData(blockData)
            stack.shrink(1)
            player.addItem('malum:refined_brilliance')
        }
        else {
            event.level[playSound](null, bpos, "malum:brilliance_ore_hit", "blocks", 1, 1 )
        }
        
    }
})