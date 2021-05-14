<template>
	<div>
		<g-link to="/">Index</g-link>&nbsp;
		<g-link to="/other-page">Other</g-link>

		<slot />
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>
