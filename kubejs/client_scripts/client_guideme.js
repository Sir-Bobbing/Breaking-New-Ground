console.info('GuideME sounds Loaded')

ItemEvents.rightClicked('guideme:guide',event => {
    event.player.playNotifySound('breakingnewground:ui_channel_news_04', 'PLAYERS', 0.65, 1);
})

