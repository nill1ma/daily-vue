<script setup>
import { onUpdated, reactive, ref } from "vue";
import Header from "../components/Header.vue";
import Schedules from "../components/Schedules.vue";
import SchedulesSerice from "../services/schedules";
import { checkStatus } from "../util";

components: {
  Header, Schedules;
}
const showHeader = ref(false);

function handleShowHeader() {
  showHeader.value = !this.showHeader;
}
// function setSchedule(key, value) {
//   data.schedule[key] = value;
// }
// function saveSchedule() {
//   data.schedule.status = checkStatus(data.schedule.start, data.schedule.end);
//   SchedulesSerice.save(data.schedule);
// }
// function applyStatus() {
//   const state = data.schedules;
//   return state?.map((d) => {
//     if (d.status === 'closed') return d;
//     d.status = checkStatus(d.start, d.end);
//     const index = data.schedules.findIndex((s) => s.id === d.id);
//     data.schedules[index] = d;
//     return d;
//   });
//   console.log('Passing here')
// }
</script>
<template>
  <div class="container">
    <header>
      <h1>Daily</h1>
      <button @click="showHeader = !showHeader">
        {{ showHeader ? "Hide" : "Show" }} header
      </button>
    </header>
    <div class="header" v-show="showHeader">
      <Header />
    </div>
    <Schedules />
  </div>
</template>

<style scoped>
.container {
  width: calc(100vw - 20px);
  display: flex;
  flex-direction: column;
}

header {
  width: calc(100vw - 20px);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 0.6);
}

button {
  cursor: pointer;
  width: 150px;
  padding: 10px;
  border: none;
  margin-left: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
}
</style>
