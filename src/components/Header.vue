<template>
  <div class="header-container">
    <div class="formGroup">
      <input
        placeholder="Type a schedule tltle"
        @keyup="$emit('setSchedule', 'title', $event.target.value)"
        type="text"
      />
      <input
        @change="$emit('setSchedule', 'start', $event.target.value)"
        type="datetime-local"
      />
      <input
        @change="$emit('setSchedule', 'end', $event.target.value)"
        type="datetime-local"
      />
    </div>
    <div class="formGroup">
      <textarea
        placeholder="Type a schedule description"
        @keyup="$emit('setSchedule', 'description', $event.target.value)"
      ></textarea>
    </div>
    <button @click="$emit('saveSchedule')">Save action</button>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  width: calc(100vw - 20px);
  justify-content: space-between;
  flex-wrap: wrap;
}
input,
textarea {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: none;
}
input[type="datetime-local"]{
  width: 22vw;
}
button {
  margin-top: 10px;
  width: 100px;
  padding: 10px;
  cursor: pointer;
  border: none;
  justify-self: flex-end;
}

.formGroup {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(50vw - 20px);
}
</style>
