<template>
  <div class="container">

    <div class="slider">
  <img id="img-1" src="https://i0.wp.com/www.heyuguys.com/images/2021/03/Tom-Jerry-The-Movie-1.jpg?resize=768%2C432&ssl=1" alt="Image 1"/>
  <img id="img-2" src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="Image 2"/>
  <img id="img-3" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Image 3"/>
</div>
<div class="navigation-button">
  <span class="dot active" onclick="changeSlide(0)"></span>
  <span class="dot" onclick="changeSlide(1)"></span>
  <span class="dot" onclick="changeSlide(2)"></span>
</div>
    <div class="card" v-for="(index) in videos" :key="index" @click="onclickcardhandler(index)">
      <img
        :src="index.imgSrc"
        :alt="'Card Image ' + index"
        class="card-image"
      />
      <div class="card-details">
        <button>
        <h3 class="card-title">{{ index.title }}</h3>  </button>
        <p class="card-views">Views: {{ index.views }}</p> 
        <p class="card-info">{{ index.desc }}</p>
        <p class="card-info">Creator: {{ index.creator.firstname }} {{ index.creator.lastname }}</p> 
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Data from "../../assets/config/data.json";
  const videos = ref(Data);


const emits = defineEmits('show-card-body');

  function  onclickcardhandler(prop) {
    
    emits('show-card-body',prop);
  }
</script>

<style scoped>

.slider {
  width: 100%;
  height: 510px;
  position: relative;
}

.slider img {
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
}



.slider img:first-child {
  z-index: 1;
}

.slider img:nth-child(2) {
  z-index: 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 78px;
}

.card {
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: auto;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  transition: transform 0.3s ease-in-out;
  aspect-ratio: 16/9;
}

.card:hover .card-image {
  transform: scale(1.05);
}

.card-details {
  flex: 1;
  padding: 20px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1.3;
}

.card-views {
  font-size: 14px;
  color: black;
  margin-bottom: 5px;
}

.card-info {
  font-size: 14px;
  line-height: 1.4;
}

.card-details:hover {
  background-color: #f0f0f0;
}
</style>
