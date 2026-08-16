console.info('GuideME Tweaks Loaded')

ItemEvents.modification(event => {
    event.modify('guideme:guide', item => {
        item.maxStackSize = 1
        item.rarity = 'UNCOMMON'
    })
    event.modify('immersiveenchanting:ancient_book', item => {
        item.maxStackSize = 1
    })
    event.modify('tfmg:lignite', item => {
        item.burnTime = 400
    })
})
StartupEvents.registry('sound_event', event => {
    event.create('breakingnewground:ui_channel_news_04')


})
