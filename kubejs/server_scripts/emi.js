// Visit the wiki for more info - https://kubejs.com/
console.info('Loaded JEI adjustments')

RecipeViewerEvents.removeEntries('item', event => {
// Enchanted Books
    event.remove('minecraft:enchanted_book')
})
// Fluids
RecipeViewerEvents.removeEntries('fluid', event => {
    event.remove('createbigcannons:molten_steel')
    event.remove('createbigcannons:molten_nethersteel')
    event.remove('createpropulsion:turpentine')

})
// GuideME
RecipeViewerEvents.addEntries('item', event => {
    event.add('guideme:guide[guideme:guide_id="breakingnewground:guide"]')
    event.add('supplementaries:cartographers_quill[supplementaries:quill_structure="malum:weeping_well",custom_name=\'"Sub-terranian Arcane Anomaly"\',supplementaries:quill_search_radius=1000,supplementaries:quill_decoration="supplementaries:waystone",supplementaries:quill_color=-1634752001]')
})
