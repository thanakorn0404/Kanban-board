<template>
  <div class="contrainer">
    <div class="yellow">
      <div class="blackspace">
        <div class="black">
          <h2>KanbanBoard</h2>
          <div>
            <h6>Preview</h6>
          </div>
          <div>
            <p>Member</p>
          </div>
        </div>
        <div class="black-workspace">
          <div class="workspace">
            <p>workspace</p>
            <button>+</button>
          </div>
          <div>
            <p>In Design</p>
          </div>
          <div>
            <p>Team Design</p>
          </div>
          <div>
            <p>Personal Project</p>
          </div>
        </div>
      </div>
      <div class="black-user">
        <div>
          <p>Amanda</p>
        </div>
      </div>
    </div>
    <div class="Yellow-Indesign">
      <div class="In-Design">
        <h2>In Design</h2>
      </div>

      <div class="yellow-todo">
        <div class="todo-list">
          <div class="tocat">
            <p>todo</p>
            <button>+</button>
          </div>
          <div class="to-con">
            <p>หัวข้อ</p>
            <div class="con">
              <p>เนื้อหา</p>
            </div>
          </div>
        </div>

        <div class="todo-list">
          <div class="tocat">
            <p>In Progress</p>
            <button>+</button>
          </div>
          <div class="to-con">
            <p>หัวข้อ</p>
            <div class="con">
              <p>เนื้อหา</p>
            </div>
          </div>
        </div>

        <div class="todo-list">
          <div class="tocat">
            <p>complete</p>
            <button>+</button>
          </div>
          <div class="to-con">
            <p>หัวข้อ</p>
            <div class="con">
              <p>เนื้อหา</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contrainer {
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  height: 100vh;
}
.blackspace {
  display: grid;
  justify-content: space-between;
}
.black {
  margin-right: 50px;
  margin-bottom: 50px;
}
.workspace {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
}
.yellow {
  display: flex;
  flex-direction: column;
  border-right: 1px solid gray;
  justify-content: space-between;
}
.black-workspace {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.black-todo {
  display: flex;
}
.Yellow-Indesign {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
}
.yellow-todo {
  display: flex;
}
.todo-list {
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 10px 10px gray;
}
.tocat {
  display: flex;
  justify-content: space-between;
}
.to-con {
  margin-top: 15px;
}
</style>
