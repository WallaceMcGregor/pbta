import { createItemResources } from "../shared.js";
import { ItemTemplateData } from "./templates/item.js";

export default class EquipmentData extends ItemTemplateData {
	static defineSchema() {
		const superFields = super.defineSchema();
		return {
			...superFields,
			...createItemResources(),
			quantity: new foundry.data.fields.NumberField({
				initial: 1,
				integer: true
			}),
			weight: new foundry.data.fields.NumberField({
				initial: 0,
				integer: true
			}),
			tags: new foundry.data.fields.StringField({ initial: "" }),
			itemType: new foundry.data.fields.StringField({ initial: "" }),
			equipmentType: new foundry.data.fields.StringField({ initial: "" }),
			actorType: new foundry.data.fields.StringField({ initial: "" })
		};
	}
}
