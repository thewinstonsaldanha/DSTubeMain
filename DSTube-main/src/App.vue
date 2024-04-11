  <template>
    <div id="app">
      <Header  @show-profile-body="showProfileBody" @show-main-body="showMainBody" />
      <ImageCard v-if="showmainbodyCardComponent"  @show-card-body="showcardBody"/>
      <View v-if="viewcomponent" :datafromcard="carddata"/>
      <Footer />
      <Profile @show-main-body="showMainBody" v-if="showprofile"/>
    </div>
  </template>

  <script setup>
  import Header from "./components/Home/Header.vue";
  import Footer from "./components/Home/Footer.vue";
  import ImageCard from "./components/Home/ImageCard.vue";
  import View from "./components/View/View.vue";
  import Profile from "./components/ProfilePage/ProfilePage.vue";
 


  import {ref} from "vue"
  const showmainbodyCardComponent= ref(true);
  const showprofile= ref(false)
  const viewcomponent=ref(false);
  const carddata= ref({})
function showMainBody(){
  console.log("on app.vue")
  showmainbodyCardComponent.value = true;
    showprofile.value = false;

    viewcomponent.value = false;
  
}
function showcardBody(card)
{
  console.log(card.title)
  carddata.value=card;
  showmainbodyCardComponent.value = false;
  viewcomponent.value = true;

}
function showProfileBody(){
  
  showmainbodyCardComponent.value = false;
    showprofile.value = true;
   
  
}



  </script>

  <style></style>
