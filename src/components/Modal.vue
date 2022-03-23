<template>
	<div class="modal-wrapper">
		<div class="modal">
			<div class="modal-head">
				<a href="#">
					<i class modal-close-icon>close</i>
				</a>
			</div>
			<div class="modal-content">

			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: "Modal",
  props: {
		show:{
			type: Boolean,
			default: false,
		}
	},

};
</script>