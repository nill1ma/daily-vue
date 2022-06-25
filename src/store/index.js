import { createStore } from "vuex";
import SchedulesSerice from "../services/schedules";

const store = createStore({
	state: {
		schedules: SchedulesSerice.get(),
	},
	getters: {},
	mutations: {
		SAVE_SCHEDULE(state, schedule) {
			state.schedules.push(schedule);
		},
	},
	actions: {
		saveSchedule({ commit }, schedule) {
			commit("SAVE_SCHEDULE", schedule);
		},
	},
});

export default store;
