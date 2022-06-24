import { v4 as uuidv4 } from "uuid";
import { persist } from "./helpers";

export default class SchedulesSerice {
    static get() {
        const schedules = JSON.parse(localStorage.getItem("schedules"));
        return schedules ? schedules : [];
    }
    static save(item) {
        const schedules = this.get();
        persist("schedules", schedules, {...item, id: uuidv4() });
    }
}