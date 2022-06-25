<script>
import Card from "./Card.vue";
import { useStore } from 'vuex'
import { reactive, computed } from 'vue'
export default {

  components: { Card },
  name: "Schedules",
  setup() {
    const store = useStore();
    const schedules = computed(() => store.state.schedules);
    console.log(schedules)
    return {
      schedules
    }
  }
}
</script>
<template>
  <div class="schedulesContainer">
    <div v-for="(item, index ) in schedules" :key="index">
      <Card :title="item.title" :description="item.description" :start="item.start" :end="item.end" />
    </div>
  </div>
</template>


<style scoped>
.schedulesContainer {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
}
</style>
