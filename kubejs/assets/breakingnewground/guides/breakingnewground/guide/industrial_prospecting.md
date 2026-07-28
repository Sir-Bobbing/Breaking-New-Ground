---
navigation:
  title: Prospecting
  icon: prospectingpicks:iron_prospector_pick
  parent: industrial.md
  position: 1
---
It is important to note that the Overworld's resources are more elusive than you last recall. This chapter is all about locating and extracting those resources.

---

## The Core Concept

Many of the resources you'd normally find peppered everywhere underground no longer form in this manner. Rather, large veins of ore are found underground in the landscape (With a few exceptions). Sometimes you can spot these veins exposed in the side of geologic formations but generally you're going to need a specialized tool to locate ores. This is where prospecting comes into play.

## The Instrument

The prospecting pick can be made of many materials but generally has to be a substantial metal or gemstone. You will likely start with either copper or iron. Refer to EMI for other variants.
<Row>
<Recipe id="prospectingpicks:copper_prospector_pick" /> 
<Recipe id="prospectingpicks:iron_prospector_pick" />
</Row>
#### Standard Search
To use your new found tool dig up any soil or stone with it. This will reveal to you the rough amount of nearby ores in a 8 block radius from the block you broke. Useful for locating the rough location of ores you're already close to.

#### Column Search
If you __*crouch*__ and dig up a block you will search in a column downwards from the block you broke. The column has a radius of 16 blocks and can reach down as far as 192 blocks. This will reveal to you the rough number of ores below you and their vague depth. Useful for locating veins from the surface.

---

## Maximizing Efficiency

__If you manage to find something you have never marked down before, mark it in your map!__ You will thank yourself greatly when you need to find something more obscure like lead or nickel and you already have found it when looking for iron. This is a massive time saver.

Finding veins from the surface is one of the first things you'll want to do. Prospect around with the column search by crouching. When you hit something you're interested in search around and locate the point with the highest richness. From there keep on searching around for the edge of the highest richness and then find the rough center point of this. That will be the best point to dig down and will certainly put you right into the middle of the vein if done right.

<GameScene zoom="1" interactive={true}>  
<ImportStructure src="prospecting_visualizer.nbt" />
</GameScene>
*Green area would be your highest richness, find the rough edge of that and aim to dig in the center. (Not to scale of actual radius)*

Once you've found the vein on the surface you can dig down to extract it. If you column search as you're going down you can determine how close you are. Once the depth is shallow it'll be worthwhile doing a standard search to figure out where the vein is exactly. Column search will also tell you if you happened to go beneath the vein without hitting it.

---

## "Standard" Veins
These may seem familiar to you. Generally these veins are winding and travel in multiple directions. Usually consist of a outer shell material and a core that is much richer.

#### Copper
Granite outer shell with a veridium and copper core.
<GameScene>
	<Block id="minecraft:granite" y="1" /> 	<Block id="spelunkery:granite_copper_ore" y= "1" x="-1" />
	<Block id="create:veridium" /> 	<Block id="spelunkery:tuff_copper_ore" x="-1" />
	<Block id="minecraft:granite" y="-1"/>  	<Block id="spelunkery:granite_copper_ore" y="-1" x="-1" />
</GameScene>

#### Iron
Andesite or dripstone outer shell with a tuff and iron core. *Sometimes has magnetic properties*
<GameScene>
	<Block id="minecraft:andesite" y="1" /> 	<Block id="spelunkery:andesite_iron_ore" y= "1" x="-1" />
	<Block id="minecraft:tuff" /> 	<Block id="spelunkery:tuff_iron_ore" x="-1" />
	<Block id="minecraft:dripstone_block" y="-1"/>  	<Block id="minecraft:deepslate_iron_ore" y="-1" x="-1" />
</GameScene>

#### Coal
Siltstone outer shell with a lignite and coal core.
<GameScene>
	<Block id="nomansland:siltstone" y="1" /> 	<Block id="nomansland:siltstone" y= "1" x="-1" />
	<Block id="tfmg:lignite" /> 	<Block id="minecraft:coal_ore" x="-1" />
	<Block id="nomansland:siltstone" y="-1"/>  	<Block id="nomansland:siltstone" y="-1" x="-1" />
</GameScene>

#### Gold
Quartzite outer shell with a ochrum and gold core. *Sometimes has arcane properties*
<GameScene>
	<Block id="nomansland:quartzite" y="1" /> 	<Block id="spelunkery:diorite_gold_ore" y= "1" x="-1" />
	<Block id="create:ochrum" /> 	<Block id="minecraft:deepslate_gold_ore" x="-1" />
	<Block id="nomansland:quartzite" y="-1"/>  	<Block id="spelunkery:diorite_gold_ore" y="-1" x="-1" />
</GameScene>

#### Anthralite & Nickel
Andesite or blackstone outer shell with a tuff, anthralite, and nickel core.
<GameScene>
	<Block id="minecraft:andesite" y="1" />
		<Block id="scguns:anthralite_ore" y= "1" x="-1" />
		<Block id="tfmg:nickel_ore" y= "1" z="1" />
	<Block id="minecraft:tuff" /> 
		<Block id="scguns:anthralite_ore" x="-1" />
		<Block id="tfmg:nickel_ore" z="1" />
	<Block id="minecraft:blackstone" y="-1"/>  
		<Block id="scguns:deepslate_anthralite_ore" y="-1" x="-1" />
		<Block id="tfmg:deepslate_nickel_ore" y="-1" z="1" />
</GameScene>

#### Emerald
__Only generates in mountainous regions.__ Diorite shell with a quartzite and emerald core.
<GameScene>
	<Block id="minecraft:diorite" y="1" /> 	<Block id="spelunkery:diorite_emerald_ore" y= "1" x="-1" />
	<Block id="nomansland:quartzite" /> 	<Block id="spelunkery:diorite_emerald_ore" x="-1" />
	<Block id="minecraft:diorite" y="-1"/>  	<Block id="spelunkery:diorite_emerald_ore" y="-1" x="-1" />
</GameScene>

---

## Striated Veins
These veins will generate in banded layers, usually spread out horizontally in slices. You can typically find another slice below or above you if you hollow out the one you're on.

#### Iron
Crimsite and iron slices.
<GameScene>
	<Block id="minecraft:stone" y="1" /> 	<Block id="minecraft:stone" y= "1" x="-1" />
	<Block id="create:crimsite" /> 	<Block id="spelunkery:granite_iron_ore" x="-1" />
	<Block id="minecraft:stone" y="-1"/>  	<Block id="minecraft:stone" y="-1" x="-1" />
</GameScene>

#### Lapis
Calcite and lapis slices. Very wavy
<GameScene>
	<Block id="minecraft:stone" y="1" /> 	<Block id="minecraft:stone" y= "1" x="-1" />
	<Block id="minecraft:calcite" /> 	<Block id="spelunkery:diorite_lapis_ore" x="-1" />
	<Block id="minecraft:stone" y="-1"/>  	<Block id="minecraft:stone" y="-1" x="-1" />
</GameScene>

#### Zinc & Lead
Individual asurine/zinc & galena/lead slices.
<GameScene>
	<Block id="minecraft:stone" y="2" /> 	<Block id="minecraft:stone" y= "2" x="-1" />
	<Block id="create:asurine" y="1" /> 	<Block id="create:zinc_ore" y= "1" x="-1" />
	<Block id="minecraft:stone" /> 	<Block id="minecraft:stone" x="-1" />
	<Block id="tfmg:galena" y="-1"/>  	<Block id="tfmg:lead_ore" y="-1" x="-1" />
	<Block id="minecraft:stone" y="-2" /> 	<Block id="minecraft:stone" y= "-2" x="-1" />
</GameScene>

#### Phosphorite
Phosphorite sandwiched between limestone slices.
<GameScene>
	<Block id="minecraft:deepslate" y="2" /> <Block id="minecraft:deepslate" y= "2" x="-1" />
	<Block id="create:limestone" y="1" /> <Block id="create:limestone" y= "1" x="-1" />
	<Block id="scguns:phosphorite" /> 	<Block id="scguns:rich_phosphorite" x="-1" />
	<Block id="create:limestone" y="-1"/>  <Block id="create:limestone" y="-1" x="-1" />
	<Block id="minecraft:deepslate" y="-2" /> <Block id="minecraft:deepslate" y= "-2" x="-1" />
</GameScene>

#### Bauxite
Bauxite & scoria sandwiched between fireclay slices.
<GameScene>
	<Block id="minecraft:deepslate" y="2" /> <Block id="minecraft:deepslate" y= "2" x="-1" />
	<Block id="tfmg:fireclay" y="1" /> <Block id="tfmg:fireclay" y= "1" x="-1" />
	<Block id="create:scoria" /> 	<Block id="tfmg:bauxite" x="-1" />
	<Block id="tfmg:fireclay" y="-1"/>  <Block id="tfmg:fireclay" y="-1" x="-1" />
	<Block id="minecraft:deepslate" y="-2" /> <Block id="minecraft:deepslate" y= "-2" x="-1" />
</GameScene>

#### Salt
Massive thin slice right below sea level. Doesn't show up on prospecting pick. Rock salt and limestone.
<GameScene>
	<Block id="minecraft:stone" y="2" /> <Block id="minecraft:stone" y= "2" x="-1" />
	<Block id="spelunkery:rock_salt_block" y="1" /> <Block id="create:limestone" y= "1" x="-1" />
	<Block id="create:limestone" /> 	<Block id="spelunkery:rock_salt_block" x="-1" />
	<Block id="minecraft:stone" y="-1"/>  <Block id="minecraft:stone" y="-1" x="-1" />
</GameScene>

---

## Special Veins
Veins that break the mold.

#### Redstone
Along the obsidian floor of the world patchy lines form consisting of calcite, redstone, and cinnabar. 
<GameScene>
	<Block id="minecraft:deepslate" y="1" x="1" /> 
		<Block id="minecraft:deepslate" y= "1" />
		<Block id="spelunkery:calcite_redstone_ore" y= "1" x="-1" />
	<Block id="spelunkery:calcite_redstone_ore" x="1" /> 
		<Block id="spelunkery:rough_cinnabar_block" />
		<Block id="minecraft:calcite" x="-1" />
	<Block id="minecraft:deepslate" y="-1" x="1" /> 
		<Block id="minecraft:calcite" y= "-1" />
		<Block id="minecraft:deepslate_redstone_ore" y= "-1" x="-1" />
</GameScene>

#### Diamond
Tubes that come up out of the obsidian floor of the world. Consist of an obsidian shell with basalt & diamond core. You'll have to find a breech in the obsidian shell to extract the diamonds if you cant mine obsidian yet. They are quite rare.
<GameScene>
	<Block id="minecraft:obsidian" y="1" x="1" /> 
		<Block id="minecraft:obsidian" y= "1" />
		<Block id="minecraft:obsidian" y= "1" x="-1" />
	<Block id="minecraft:obsidian" x="1" /> 
		<Block id="minecraft:smooth_basalt" />
		<Block id="minecraft:obsidian" x="-1" />
	<Block id="minecraft:obsidian" y="-1" x="1" /> 
		<Block id="spelunkery:smooth_basalt_diamond_ore" y= "-1" />
		<Block id="minecraft:obsidian" y= "-1" x="-1" />
</GameScene>

#### Soulstone
An combination of arcane and geologic processes fester at the bottom of the earth powered by the spirits of the nether underneath. It's thin tendrils reach across the base of the overworld consuming it's entirety.
