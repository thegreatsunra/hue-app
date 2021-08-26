import { v3 } from "node-hue-api";
import dotenv from "dotenv";
import { CronJob } from "cron";

const app = () => {
	const USERNAME = process.env["USERNAME"] || "";
	// The name of the light we wish to retrieve by name
	const LIGHT_ID = process.env["LIGHT_ID"] || "";

	dotenv.config();

	const { LightState } = v3.lightStates;

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

	const job = new CronJob(
		"*/5 * * * * *",
		() => {
			console.log("You will see this message every 5 seconds");
		},
		null,
		true,
		"America/Chicago"
	);
	job.start();
};

app();
