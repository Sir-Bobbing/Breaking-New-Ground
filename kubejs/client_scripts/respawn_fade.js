const $RenderSystem = Java.loadClass("com.mojang.blaze3d.systems.RenderSystem");
const $RegisterGuiLayersEvent = Java.loadClass("net.neoforged.neoforge.client.event.RegisterGuiLayersEvent");
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const VIGNETTE_LOCATION = new $ResourceLocation("minecraft", "textures/misc/vignette.png");

let respawnTime = 0

NetworkEvents.dataReceived("respawn_fade", event => {
    Client.player.mergeNbt({"neoforge:attachments":{"malum:touch_of_darkness":{touchOfDarkness:60}}})
    respawnTime = Client.level.getTime()
})

function respawnFadeGuiLayer(guiGraphics, deltaTracker) {
    let deltaTime = (Client.level.getTime() - respawnTime) + deltaTracker.getGameTimeDeltaTicks()

    if (deltaTime <= 80) {
        $RenderSystem.disableDepthTest();
        $RenderSystem.depthMask(false);
        $RenderSystem.enableBlend();
        $RenderSystem.defaultBlendFunc();

        guiGraphics.setColor(0.0, 0.0, 0.0, 1 - deltaTime / 80);
        guiGraphics.blitSprite(VIGNETTE_LOCATION, 0, 0, guiGraphics.guiWidth(), guiGraphics.guiHeight())
        guiGraphics.setColor(1.0, 1.0, 1.0, 1.0);

        $RenderSystem.enableDepthTest();
        $RenderSystem.depthMask(true);
    }
}

// renders an acacia boat the size of an item in the inventory to the right slightly below the crosshair

NativeEvents.onEvent($RegisterGuiLayersEvent, event => {
    event.registerAboveAll(ID.kjs("respawn_fade_effect"), (gui, delta) => respawnFadeGuiLayer(gui, delta))
})