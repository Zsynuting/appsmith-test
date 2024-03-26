export default {
	addUserId () {
		let currentParams = { user_id: 0, ...appsmith.URL.queryParams }
	  currentParams.user_id++;
		navigateTo('Page1', currentParams, '_blank');
	},
	openPage2 () {
		navigateTo('Page2', { test: 1 }, 'blank');
	},
	openGoogle() {
		navigateTo('www.google.com', { test: 1 }, 'NEW_WINDOW');
	}
}