<template>
  <div class="cardContainer" :style="status === 'closed' ? 'background-color:red' : 'background-color:blue'">
    <span id="title" @click="handleShowDescrition">{{ title }}</span>
    <span class="description" v-if="showDescription">{{ description }}</span>
    <div>
      <span>From {{ dateStart }}</span>
      <span>to {{ dateEnd }}</span>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Card",
  props: {
    title: String,
    description: String,
    start: Date,
    end: Date
  },
  data() {
    return {
      showDescription: (Boolean = false),
      dateStart: moment(this.start).format("YYYY-MM-DD H:mm:ss"),
      dateEnd: moment(this.end).format("YYYY-MM-DD H:mm:ss"),
    };
  },
  methods: {
    handleShowDescrition() {
      this.showDescription = !this.showDescription;
    },
  },
  mounted() {
    console.log(this.showDescription);
  },
};
</script>

<style scoped>
.cardContainer {
  width: 20vw;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  margin: 10px 0 0 10px;
  padding: 20px 0;
  font-size: 0.9rem;
}

.cardContainer:hover {
  -webkit-box-shadow: -5px 5px 15px green, -5px -5px 5px blue, 5px -5px 5px red;

  -moz-box-shadow: -5px 5px 15px green, -5px -5px 5px blue, 5px -5px 5px red;

  box-shadow: 0 0 5px #333 inset, 5px 5px 5px red, -5px 5px 5px green,
    -5px -5px 5px blue, 5px -5px 5px red;
  transition: 1s;
}

.description {
  padding: 10px;
  display: flex;
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.5);
}

.cardContainer #title {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 0;
  cursor: pointer;
  font-weight: bold;
}

.cardContainer div {
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.5);
}
</style>
