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

})
