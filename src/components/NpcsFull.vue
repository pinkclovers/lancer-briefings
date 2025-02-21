<template>
	<div class="pilot-wrapper">
		<div class="" @click="pilotModal">
			<img class="portrait" :src="npc.thumbnail" />
			</div>
	<div>
			<div>
				<div class="gear-column">
      				<div class="gear-row">
						<div class="name">
          					<!--<h1>Name or Legal Alias</h1>-->
         					<h1>{{ npc.title }} // {{ npc.location }} </h1>
						<h2>{{ npc.name }}</h2> 
						<h1>{{ npc.pronoun }}</h1>
        				</div>
					</div>
					<div class="npc">
						<div class="preview">
							{{ getPreview }}
						</div>
						<a @click.prevent="npcModal"> Read More... </a>
					</div>	
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
import NpcModal from "@/components/modals/NpcModal.vue";

import Markdown from "vue3-markdown-it";
import removeMd from "remove-markdown";

export default {
	name: "Npc",
	components: {
		Markdown,
		NpcModal,
	},
	props: {
		npc: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			removeMd,
		};
	},
	computed: {
		getPreview() {
			return this.removeMd(this.npc.content).substring(0, 200) + "...";
		},
	},
	methods: {
		npcModal() {
			this.$oruga.modal.open({
				component: NpcModal,
				custom: true,
				trapFocus: true,
				props: {
					npc: this.npc,
				},
				class: "custom-modal",
				width: 1920,
			});
		},
	},
};
</script>
