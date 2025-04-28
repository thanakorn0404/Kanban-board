<script setup>
import router from "@/router";
import { useLocalStorage } from "@vueuse/core";

const user_id = useLocalStorage("user_id");
const username = useLocalStorage("username");
if (user_id.value === undefined) router.push({ path: "/login" });
</script>

<template>
  <div class="contrainer">
    <div class="yellow">
      <div class="blackspace">
        <div class="black">
          <h2>KanbanBoard</h2>
        </div>
        <div class="black-workspace">
          <div class="workspace">
            <small>workspace</small>
            <span>+</span>
          </div>
          <div class="board-btn">
            <small>In Design</small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path
                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="profile-container">
        <div class="black-user">
          <div class="profile">
            <img
              src="https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"
              alt="profile"
            />
            <p>{{ username }}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </div>
      </div>
    </div>
    <div class="Yellow-Indesign">
      <div class="In-Design">
        <h2>In Design</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum laborum
          veniam, facilis dolor libero cumque enim voluptatibus!
        </p>
      </div>

      <div class="yellow-todo">
        <div class="todo-list">
          <div class="todo-box">
            <div class="to-head">
              <p>todo</p>
              <div class="todo-menu">
                <div class="drop-btn" @click="isOpen = !isOpen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path
                      d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"
                    />
                  </svg>
                </div>

                <div class="todo-dropdown" :class="!isOpen ? '' : 'hidden'">
                  <div class="drop-list">
                    <small>add</small>
                  </div>
                  <div class="drop-list">
                    <small>edit</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="content">
              <article class="to-con">
                <h5>Product Prototype</h5>
                <small
                  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                  voluptas soluta</small
                >
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style scoped>
.contrainer {
  display: flex;
  max-height: 100vh;
  overflow: hidden;
  gap: 1rem;
}

.blackspace {
  display: grid;
  justify-content: space-between;
}

.black {
  padding: 1rem;
}

.workspace {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  span {
    cursor: pointer;
  }
  span:hover {
    color: gray;
  }
}

.yellow {
  display: flex;
  flex-direction: column;
  border-right: 3px solid #1c2330;
  justify-content: space-between;
}

.black-workspace {
  padding: 1rem;

  .board-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    margin: 0;

    p {
      margin: 0;
    }
  }
  .board-btn:hover {
    background: #084868;
    border-radius: 8px;
  }
}

.black-todo {
  display: flex;
}

.Yellow-Indesign {
  padding: 1rem 1rem;
}

.In-Design {
  p {
    color: gray;
  }
}

.yellow-todo {
  display: flex;
  gap: 1rem;
}

.to-head {
  display: flex;
  justify-content: space-between;
}

.to-con {
  width: 12rem;
  border-radius: 10px;
  padding: 1rem;
}

.todo-list {
  display: flex;
  height: 80vh;
  gap: 1rem;

  .todo-box {
    overflow-y: scroll;
  }
  .hidden {
    display: none;
  }
}

.todo-menu {
  cursor: pointer;
}

.todo-dropdown {
  position: absolute;
  border: 2px solid royalblue;
}

.drop-list {
  padding: 0.5rem;
  background: #181c25;
}

.drop-list:hover {
  background-color: #232936;
}

::-webkit-scrollbar {
  width: 1px;
}

.black-user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #017fc0;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  .profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      margin: 0;
    }
    img {
      border-radius: 50%;
      width: 25px;
      height: 25px;
    }
  }
}

.profile-container {
  padding: 1rem;
}
</style>
