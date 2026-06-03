---
navigation: 
  title: '"Simple" Storage'
  icon: toms_storage:crafting_terminal
  parent: industrial.md
  position: 5
---
# "Simple" Storage
The Simple™ Storage Network, developed by Tom Business Machines was an innovative development for its time. Allowing for the ease of accessing one's entire warehouse inventory from a single terminal.

The only flaw of the Simple™ System's is the often missing or cryptic documentation on how to use the network itself. Lending to its nickname of the "Simple" Storage System.

---
## Core Features
##### Storage Terminal
Connects to the Inventory behind it.
<RecipeFor id="toms_storage:storage_terminal" /> 
##### Crafting Terminal
Same as the Storage Terminal, but allows for crafting within the terminal and pulls from the storage network.
<Recipe id="toms_storage:crafting_terminal" /> 
##### Inventory Connector
Merges all connected inventories within 16 Blocks (either touching inventory blocks or with **Trims**)
*Tip: use the Inventory Configurator to see connected Inventories*
<Recipe id="toms_storage:inventory_connector" /> 
Acts as a secondary access point to the storage network. (Think Hopper or Chute input)
##### Inventory Interface
<Recipe id="toms_storage:inventory_interface" /> 
##### Inventory Trim
Used to bridge gaps in the range of the Inventory Connector.

Can also be painted used the **Paint Kit** <ItemImage id="toms_storage:paint_kit" scale="0.5"/>
<Recipe id="toms_storage:trim" /> 

##### Inventory Cable
Used to connect inventories over long distances. One Storage Connector needs to be present in the network.

<Recipe id="toms_storage:inventory_cable" /> 
##### Inventory Cable Connector
Use The Cable Connectors to connect inventories outside of connector range.

An inventory cable can connect to a separate Inventory connector. expanding Network size
<Recipe id="toms_storage:inventory_cable_connector" /> 

---
## Special Utilities
##### Open Crate
Drops all items put into it and Turns the air infront of it into an 'inventory' that can be seen from the Storage Terminal.

Useful as an item disposal. or sideways item input for chutes or hoppers
<Recipe id="toms_storage:open_crate" /> 
##### Filing Cabinet
Stores multiples of the same unstackable item. Like armor or books.
<Recipe id="toms_storage:filing_cabinet" /> 
##### Level Emitter
Emits a redstone signal if a filtered item is above or below the configured limit in connected inventories
<Recipe id="toms_storage:level_emitter" /> 
##### Basic Inventory Hopper
Imports and Exports items into the Network. Filters can be applied to the export
<Recipe id="toms_storage:basic_inventory_hopper" /> 
##### Inventory Proxy
Extends the face of the inventory it points at. 

Can also be painted used the **Paint Kit** <ItemImage id="toms_storage:paint_kit" scale="0.5"/>

<Row>
<Recipe id="toms_storage:inventory_proxy" /> 
<GameScene zoom="2.5" interactive={true}>  
<ImportStructure src="inventory_proxy_example.nbt" />
</GameScene>
</Row>
Shown is an example on how to use the Inventory Proxy
##### Framed Inventory Cable
Acts the same as the Inventory Cable, but can be painted using the **Paint Kit** <ItemImage id="toms_storage:paint_kit" scale="0.5"/>
<Recipe id="toms_storage:inventory_cable_framed" /> 
##### Framed Inventory Cable Connector
Acts the same as the Inventory Cable Connector, but can be painted using the **Paint Kit** <ItemImage id="toms_storage:paint_kit" scale="0.5"/>
<Recipe id="toms_storage:inventory_cable_connector_framed" /> 

---
## Filters
##### Item Filter
Filters via blacklist or whitelist of a set number of items.
<Recipe id="toms_storage:item_filter" /> 
##### Tag Item Filter
Filters via blacklist or whitelist of a set number of items.
<Recipe id="toms_storage:tag_item_filter" /> 
##### Polymorphic Item Filter
Only allows items that were already in the Network.
<Recipe id="toms_storage:poly_item_filter" /> 

---
## Tools
##### Wireless Terminal
Has a range of 16 blocks to any terminal within line of sight.
<Recipe id="toms_storage:wireless_terminal" /> 
##### Advanced Wireless Terminal
Can be bound to a Terminal and has a range of 64 blocks.
<Recipe id="toms_storage:adv_wireless_terminal" /> 
##### Inventory Configurator
Used to apply filter items to applicable blocks and configure Network blocks.
<Recipe id="toms_storage:inventory_configurator" /> 
##### Paint Kit
Can be used to 'Paint' **Inventory Trims, Proxies, Framed Cables & Cable Connectors**
Use <KeyBind id="key.sneak"/> + <KeyBind id="key.use"/> to configure what block it will use to mask paintable blocks
<Recipe id="toms_storage:paint_kit" /> 