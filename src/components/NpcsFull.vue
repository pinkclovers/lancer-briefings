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
         					<h2>{{ npc.title }}</h2>
        				</div>
					</div>
					<h1>{{ npc.location }}</h1> 
						<h1>// {{ npc.time }}</h1>
					<div class="preview">
						<a>{{ getPreview }}</a>
					</div>
					<a @click.prevent="npcModal"> Read More... </a>
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
			return this.removeMd(this.npc.content).substring(0, 100) + "...";
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
