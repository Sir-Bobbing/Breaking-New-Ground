console.info('GuideME Tweaks Loaded')

ItemEvents.modification(event => {
    event.modify('guideme:guide', item => {
        item.maxStackSize = 1
        item.rarity = 'UNCOMMON'
    })
    event.modify('immersiveenchanting:ancient_book', item => {
        item.maxStackSize = 1
    })
})
StartupEvents.registry('sound_event', event => {
    event.create('breakingnewground:ui_channel_news_04')


})
