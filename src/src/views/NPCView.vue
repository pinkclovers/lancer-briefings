<template>
	<section id="events-logs" :class="{ animate: animate }" class="section-container">
		<div style="height: 52px; overflow: hidden">
			<div class="section-header clipped-medium-backward-pilot">
				<img src="/icons/npc.svg" />
				<h1>Persons of Interest</h1>
			</div>
			<div class="rhombus-back">&nbsp;</div>
		</div>
		<div class="section-content-container">
			<div class="npc-list-container">
				<!-- TODO: Create new EventsLog.vue for a new layout on this view -->
				<Npc
				  v-for="item in npcs"
				  :key="item.title"
				  :npc="item"
				  :animate="animate" />
			</div>
		</div>
	</section>
</template>

<script>
import Markdown from "vue3-markdown-it";
import Npc from "@/components/Npcs.vue";

export default {
	components: {
		Markdown,
		Npc,
	},
	props: {
		animate: {
			type: Boolean,
			required: true,
		},
		npcs: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {};
	},
};
</script>
