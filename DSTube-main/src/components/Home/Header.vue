<template>
  <nav>
    <div class="navbar">
      <button class="logo" @click="showHomeBody"><a href="#">DS Tube</a></button>
      <ul class="menu">
        <!-- Other menu items -->
        <form class="searchtab" style="padding-right: 388px">
          <div class="search-container">
            <input type="text" placeholder="Search..." class="search-input" />
            <button type="submit" class="search-button">Search</button>
          </div>
        </form>
        
        <button class="profile-button" @click="showProfile">Profile</button>
        <button class="profile-button" @click="showRecentlyOpened">Recently Opened</button>
      </ul>
    </div>
  </nav>
  
  <div v-if="showRecent" class="recently-viewed">
    <h2>Recently Accessed</h2>
    <div v-if="recentlyAccessed">
      <img :src="recentlyAccessed.imgSrc" :alt="recentlyAccessed.title" />
      <h3>{{ recentlyAccessed.title }}</h3>
      <p>{{ recentlyAccessed.desc }}</p>
    </div>
  </div>
</template>

<script setup>

import { defineEmits } from 'vue';
import { useGlobalStore } from '../../stores/counter'; // Import your store

const emits = defineEmits('show-profile-body', 'show-card-body', 'show-main-body');
const globalStore = useGlobalStore(); // Access the global store

let showRecent = false;

function showProfile() {
  emits('show-profile-body');
}

function showHomeBody() {
  emits('show-main-body');
}

function showRecentlyOpened() {
  showRecent = true;
  // Get the most recently accessed item from the global store
  if (globalStore.recentlyView.length > 0) {
    recentlyAccessed = globalStore.recentlyView[0];
  } else {
    recentlyAccessed = null; // Set recentlyAccessed to null if the array is empty
  }
}

function hideRecentlyOpened() {
  showRecent = false;
  recentlyAccessed = null; // Clear the recently accessed item when hiding the view
}
// Access the recently viewed items from the global store
const recentlyViewed = globalStore.recentlyView;
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 75px;
  background: #282828;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  
}
nav .navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 90%;
  background: #282828;
  margin: auto;
}
nav .navbar .logo a {
  background-color: red;
  font-size: 29px;
  border-radius: 8px;
}
nav .navbar .menu {
  display: flex;
}
.navbar .menu li {
  list-style: none;
  margin: 0 15px;
}
.navbar .menu li a {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
}
section {
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* color: #96c7e8; */
  font-size: 70px;
}

#Home {
  /* background: #f2f2f2; */
}
#Profile {
  /* background: #e6e6e6; */
}

.search-container {
  height: 40px;
  width: 360px;
  background-color: yellow;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 8fr 2fr;
  border-radius: 40px;
  overflow: hidden;
}

.profile-button{
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;

}

.search-container > * {
  display: inline;
}
.search-input {
  /* padding: 10px; */
  padding-left: 9px;
  font-size: 20px;

  /* width: 300px; */
  /* margin-right: 10px; */
  /* border-radius: 20px; */
  /* box-shadow: none; */
  /* outline: none; */
  border: none;
}

.search-button {
  /* padding: 10px 15px; */
  font-size: 14px;
  /* border-radius: 5px; */
  cursor: pointer;
  border: none;

  /* border-radius: 24px; */
}

.recently-viewed {
  margin-top: 20px;
}

.recently-viewed ul {
  list-style: none;
  padding: 0;
}

.recently-viewed li {
  margin-bottom: 5px;
  font-size: 16px;
}
</style>