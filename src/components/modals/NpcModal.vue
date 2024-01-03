<template>
	<div class="npc-modal">
		<div class="npc-header-container">
			<div class="section-header clipped-medium-backward-bio">
				<img src="/icons/npc.svg" />
				<h1>NPCs</h1>
			</div>
			<div class="rhombus-back">&nbsp;</div>
		</div>
		<div class="npc">
			<div class="name">
				<h1>{{ npc.location }} // {{ npc.time }} </h1>
				<h2>{{ npc.title }}</h2>
			</div>
			<Markdown :source="npc.content" class="markdown" />
		</div>
	</div>
</template>

<script>
import Markdown from "vue3-markdown-it";

export default {
	name: "NpcModal",
	components: {
		Markdown,
	},
	props: {
		npc: {
			type: Object,
			required: true,
		},
	},
};
</script>
