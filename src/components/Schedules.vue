<template>
  <div class="schedulesContainer">
    <div v-for="item of schedules" :key="item.id">
      <Card
        :title="item.title"
        :description="item.description"
        :start="item.start"
        :end="item.end"
        :closed="item.closed"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  name: "Schedules",
  props: {
    schedules: [],
  },
};
</script>

<style scoped>
.schedulesContainer {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
}
</style>
