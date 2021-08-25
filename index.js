const v3 = require("node-hue-api").v3;
const LightState = v3.lightStates.LightState;

v3.discovery
	.nupnpSearch()
	.then((searchResults) => {
		const host = searchResults[0].ipaddress;
		return v3.api.createLocal(host).connect(USERNAME);
	})
	.then((api) => {
		// Using a LightState object to build the desired state
		const state = new LightState().on().brightness(100);
		return api.lights.setLightState(LIGHT_ID, state);
	})
	.then((result) => {
		console.log(`Light state change was successful? ${result}`);
	});
