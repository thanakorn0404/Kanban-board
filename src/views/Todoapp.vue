<template>
  <div class="contrainer">
    <h1>Todo App</h1>
    <div class="td-div">
      <input placeholder="Enter a Task here" v-model="valuedata" />
      <button class="sv-button" @click="save()">Save</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Todo items</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, index) in data1" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ items.title }}</td>
          <td>{{ items.status }}</td>
          <td>
            <button class="dl-button" @click="del(items.id)">Delete</button>
            <button class="fn-button" @click="fn_button(items.id)">
              Finish
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.contrainer {
  display: grid;
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 750px;
  margin-top: 100px;
  margin-bottom: 100px;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-template-columns: repeat(1, 1fr);
}
.sv-button {
  background: blue;
  border: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 20px;
  border-radius: 5px;
  color: white;
}
.dl-button {
  background: red;
  color: white;
  border: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
}
.fn-button {
  background: rgb(2, 199, 2);
  color: white;
  border: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  margin-left: 10px;
}
input {
  padding-top: 7px;
  padding-bottom: 7px;
  border: 1px solid grey;
  border-radius: 3px;
  padding-left: 30px;
}
table {
  border-collapse: collapse;
  margin-top: 20px;
  text-align: left;
}
th,
td {
  border-bottom: 1px solid gray;
  padding-top: 15px;
  padding-bottom: 15px;
}
.td-div {
  margin-top: 15px;
}
</style>

<script>
export default {
  data() {
    return {
      data1: [],
      valuedata: "",
      id: 0,
      status: "In progress",
    };
  },
  methods: {
    save() {
      this.data1.push({
        id: this.id++,
        title: this.valuedata,
        status: this.status,
      });
    },
    del(id) {
      this.data1 = this.data1.filter((e) => {
        if (e.id != id) return e;
      });
    },
    fn_button(id) {
      this.data1.map((e) => {
        if (e.id == id) e.status = "Finishd";
      });
    },
  },
};
</script>
