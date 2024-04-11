<template>
  <div class="wrapper">
    <div class="main-wrapper">
      <div class="left"></div>
      <main>
        <div class="main__video">
          <div class="main__video-container">
  <iframe width="890" height="460" :src="datafromcard.videoSrc"   allowfullscreen autoplay></iframe>
</div>
          <div class="main__description">
            <div class="video-title">
              <p>
                {{ datafromcard.title }}
              </p>
            </div>

            <div class="controls-outer">
              <div class="view-count">
                <p>{{ datafromcard.views }} views</p>
              </div>

              <div class="video-controls">
                <!-- Like button -->

                <button class="header__button" @click="incrementLikes">
                  <div>
                    <img src="../../assets/like.svg" alt="like" />
                  </div>
                  <div>{{ likeCount }}</div>
                </button>

                <!-- Dislike button -->
                <button class="header__button" @click="decrementLikes">
                  <div>
                    <img src="../../assets/dislike.svg" alt="dislike" />
                  </div>
                </button>

                <!-- Share button -->
                <button class="header__button">
                  <div>
                    <img src="../../assets/share.svg" alt="share" />
                  </div>
                  <div>Share</div>
                </button>
              </div>
            </div>
            <!-- <p>Like Count: {{ likeCount }}</p> -->
            <div class="tags">
              <div v-if="likeCount > 10">
                <span class="popular"># Popular</span>
              </div>

              <div v-if="likeCount > 15">
                <span class="trending"> # Trending </span>
              </div>
            </div>
          </div>

          <div class="main__sub-description">
            <div class="channel-line">
              <div>
                <div class="channel-button">
                  <img
                    src="https://yt3.googleusercontent.com/rPoRRDAbbFQpeqCZFdndLgMRCm6KGS90QD0x7PlYaHoSXVG74ASmPwY8n3I1GVqD1lr8cIhKfA=s900-c-k-c0x00ffffff-no-rj"
                    alt="WB Kids logo"
                    class="channel-logo"
                  />

                  <div class="channel-name">{{ datafromcard.creator.firstname + " "+datafromcard.creator.lastname}}</div>
                </div>
                <div class="subscriber-count">27.3M subscribers</div>
              </div>
              <div>
                <!-- <span class="subscribe-icon"></span> -->
                <!-- <span class="subscribe-text">Subscribe</span> -->
                <button
                  id="subscribe-btn"
                  class="glow-on-hover subscription-button"
                  @click="clickOnSubscribe"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div class="video-description">
              <p>
                {{datafromcard.desc }} <br />
              </p>

              <p id="textarea" style="display: none">
                <br />Catch up with Tom & Jerry as they chase each other, avoid
                Spike, and play with friends like Little Quacker and Butch the
                cat.<br />
                <br />WB Kids is the home of all of your favorite clips
                featuring characters from the Looney Tunes, Scooby-Doo, Tom and
                Jerry and More! <br />

                <br />
                <span class="hashtag" id="hashtag-textarea">#WBKids</span>
                <span class="hashtag" id="hashtag-textarea">#KidsCartoons</span>
                <span class="hashtag" id="hashtag-textarea">#TomandJerry</span>
                <br />
              </p>

              <a id="seeMore" @click="toggleSeeMore">...more</a>
              <p></p>
            </div>
          </div>
        </div>

        <section>
          <div>
            <div class="comments-header">
              <div class="section__comments">
                <p>6,806 Comments</p>
              </div>
              <div>
                <div class="sort-container">
                  <button class="menu-icon">
                    <img src="../../assets/sort.svg" alt="" />
                    <span class="sort-text">Sort by</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="section__profile">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinW-gUzDBsMaDp7BcQ6E6aurHGTgm-KR2rzP-jkC-wZ6GJfYt5h2gH1dHTzftmxXLP6SY1B0uJXtf2QTn2oWaqlgv0A_9l4lS01Tmbgn2DaVX8CKHS5DxOgjeEnPLgPBWmzFMs2D4FJkc/s320/BlueHead.jpg"
                alt="profile_icon"
              />
            </div>
            <div class="input__container">
              <form>
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="Add a public comment..."
                />
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props= defineProps({
  datafromcard: {
    type: Object,
    default: () => ({}),
  },
});
console.log(props.datafromcard)
const comment = ref("");
const likeCount = ref(0);
// const isLiked = false;
let isSubscribed = false;

const submitComment = () => {
  if (comment.value.trim() !== "") {
    alert("Comment Added");
    console.log("Comment submitted:", comment.value);
    comment.value = "";
  } else {
    console.error("Comment cannot be empty");
  }
};

const incrementLikes = () => {
  likeCount.value++;
};

const decrementLikes = () => {
  if (likeCount.value > 0) {
    likeCount.value--;
  }
};

function clickOnSubscribe() {
  const subscribeBtn = document.getElementById("subscribe-btn");
  if (isSubscribed) {
    isSubscribed = false;
    subscribeBtn.innerText = "Subscribe";
    console.log("Unsubscribed");
    subscribeBtn.style.backgroundColor = "red";
  } else {
    isSubscribed = true;
    subscribeBtn.innerText = "Subscribed";
    console.log("Subscribed");
    subscribeBtn.style.backgroundColor = "white";
  }
}

function toggleSeeMore() {
  if (document.getElementById("textarea").style.display == "none") {
    document.getElementById("textarea").style.display = "block";
    document.getElementById("seeMore").innerHTML = "<b>Show less</b>";
  } else {
    document.getElementById("textarea").style.display = "none";
    document.getElementById("seeMore").innerHTML = "<b>...more</b>";
  }
}
</script>

<style scoped>
/* CSS from the first file */

header {
  grid-area: header;
  height: 55px;
  border-bottom: 2px solid rgb(236, 236, 236);
  display: grid;
  grid-template-: last baseline 50px 1fr 250px;
  padding: 0 10px 0 10px;
  margin-bottom: 10px;
  position: fixed;
  top: -0.2em;
  width: 100%;
  z-index: 1;
  background: white;
}
.video-title {
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 1.4rem;
  /* line-height: 1.5rem; */
  font-weight: 700;
}
.view-count {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

.channel-info {
  display: flex; /* Use flexbox layout */
  align-items: center; /* Align items vertically */
}

.verified-icon {
  margin-left: 5px; /* Add some space between the channel name and the verified icon */
}
.menu-icon {
  background-color: #ffffff; /* Set background color to white or any other solid color */
  border: none;
  cursor: pointer;
}
.controls-outer {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}
.header__logo {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.header__icons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.search form {
  width: 60%;
  margin: 0 auto;
}

#search__input {
  font-size: 103%;
  width: 100%;
  position: relative;
  top: 12px;
  padding: 4px;
}

.search__icon {
  float: right;
  position: relative;
  top: -17px;
  height: 28px;
  width: 40px;
  left: 10px;
}

.header__hamburger-logo {
  position: relative;
  top: 10px;
}
.video-controls {
  display: flex;
}
.video-controls > * {
  margin-left: 6px;
}

.header__yt-logo {
  position: relative;
  top: 7px;
}

.c {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.header__icons--grid {
  position: relative;
  top: 17px;
  left: 20px;
}

.header__icons--upload {
  position: relative;
  top: 13px;
  left: 17px;
}

.header__icons--bell {
  position: relative;
  top: 18px;
  left: 20px;
}

.header__icons--profile {
  width: 45px;
  position: relative;
  top: 5px;
  left: 5px;
}

.main-wrapper {
  display: grid;
  margin-top: 1.5em;
  grid-template-columns: 1fr minmax(200px, 90em) 1fr;
  margin-top: 5em;
}

main {
  margin: 0 1.8em 0 1.8em;
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1fr;
  grid-template-areas: "video video aside" "section section aside";
}

section {
  grid-area: section;
  display: grid;
  grid-gap: 1em;
  grid-template-rows: auto 1fr;
}

.comments-header {
  display: flex;
}
.section__comments {
  width: 26.4%;

  top: 1em;
  display: flex;
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 20px;
}

.section__sort-container {
  position: relative;
  left: 10em;
  bottom: 0.3em;
  width: 20%;
}

.section__sort-container p {
  position: relative;
  left: 2.5em;
  bottom: 1.5em;
  color: gray;
  font-size: 0.9em;
}

.section__sort-container a {
  text-decoration: none;
}

.section__profile {
  width: 8%;
}

.section__profile img {
  width: 3.3em;
  border-radius: 30px;
}

.input__container {
  position: relative;
  left: 5em;
  bottom: 3em;
  margin-right: 5em;
}

.input__container input {
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgray;
  color: gray;
  font-size: 1em;
}

.comments p,
.comments a {
  margin-left: 4.5em;
  position: relative;
}

.comments__name {
  position: relative;
  bottom: 3em;
  font-size: 0.86em;
  font-weight: 700;
}

.tags {
  display: flex;
  margin-top: 4px;
}

.popular {
  background: #ffb900
    url(/wp-content/themes/indianexpress/images/ie-premium.svg) no-repeat 4px
    3px;
  padding: 4px;
  padding-right: 4px;
  border-radius: 4.5px;
  line-height: 18px;
  color: #000;
  margin-right: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

.trending {
  margin-top: 2px;
  background: #56e7ff
    url(/wp-content/themes/indianexpress/images/ie-premium.svg) no-repeat 4px
    3px;
  padding: 2px;

  padding-right: 4px;
  border-radius: 4.5px;
  line-height: 18px;
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

/* Resetting default button styles */
.main__sub-description {
  padding: 6px;
}

.channel-line {
  display: flex;
  justify-content: space-between;
}

/* Styles for channel button */
.channel-button {
  display: flex;
  align-items: center;
  border-radius: 5px;
}

/* Styles for channel logo */
.channel-logo {
  width: 50px;
  height: auto;
  margin-right: 2px;
  border-radius: 50%;
}

/* Styles for channel name */
.channel-name {
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 16.5px;
  font-weight: bold;
  /* color: #f1f1f1; Font color */
  margin-bottom: 10px;
  overflow: visible;
  min-height: 23px;
}
.subscriber-count {
  /* padding-bottom: 62px; */
  /* margin-bottom:152px; */
  margin-top: -18px;
  margin-left: 53px;
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 14px;
  color: #aaaaaa;
}

.subscription-button {
  font-family: "Roboto", sans-serif;
  font-size: 16.5px;
  padding: 4px 8px;
  border-radius: 40px;
  background-color: #d52929;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.subscription-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  mix-blend-mode: screen;
  border-radius: 40px;
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.subscription-button:hover::before {
  opacity: 1;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.video-description {
  padding-top: 16px;
  padding-left: 11px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

#seeMore {
  cursor: pointer;
}

.sort-text {
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 16px;
  height: 20px;
  overflow: hidden;
  min-width: 55px;
  max-width: 12px;
  min-height: 2px;

  display: inline-block;
}
.comments__name a {
  text-decoration: none;
  color: gray;
  position: relative;
  right: 4em;
  font-weight: 700;
}

.comments__comment {
  position: relative;
  bottom: 2em;
  line-height: 1.3em;
}
#hashtag-textarea {
  color: #405de6; /* Words in blue color */
  margin-right: 5px;
}

.likes {
  display: grid;
  grid-template-columns: repeat(4, 3em);
  width: 20em;
  font-size: 0.86em;
  position: relative;
  bottom: 2em;
}

.comments__text {
  position: relative;
  top: 0.5em;
  text-decoration: none;
  color: gray;
}

.comments__replies {
  text-decoration: none;
  color: #4885ed;
  position: relative;
  bottom: 0.9em;
}

.main__video {
  grid-area: video;
  border-bottom: 1px solid lightgray;
  padding-bottom: 2em;
}

.main__video,
section {
  font-size: 0.9em;
}

.main__description {
  border-bottom: 1px solid lightgray;
  /* margin-bottom: 1em; */
  padding-bottom: 10px;
  margin-top: 1em;
  padding-left: 6px;
}

.main__name {
  float: left;
}

.main__subscriptions {
  float: right;
}

/* .main__sub-description p {
  margin-top: 2em;
  float: left;
  line-height: 2em;
} */

/* .main__sub-description p:first-of-type {
  margin-right: 6em;
} */

.main__more {
  margin-top: 14em;
  font-size: 0.85em;
}

.main__more a {
  text-decoration: none;
  color: gray;
}

.main__video-container {
  position: relative;
  padding-bottom: 52.4%;
  /*16:9*/
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.main__video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

aside {
  grid-area: aside;
}

.first-img-aside img {
  margin-bottom: 1em;
  border-bottom: 1px solid lightgray;
  padding-bottom: 1em;
}

.aside__top-container {
  margin: 0.4em 0 2em 0;
}

.aside__top-container a {
  float: right;
  text-decoration: none;
  color: gray;
  font-size: 0.75em;
  font-weight: bold;
}

.aside__top-container p {
  float: left;
  font-size: 0.97em;
}

.aside__video {
  padding-bottom: 0.3em;
}

.aside__more {
  min-width: 38em;
  width: 100%;
  background: #d3d3d3;
  color: #808080;
  font-size: 0.75em;
  font-weight: bold;
  padding: 1em;
  text-align: center;
}

.aside__more a {
  text-decoration: none;
  color: gray;
}

@media only screen and (max-width: 1002px) {
  main {
    margin: 0 1.8em 0 1.8em;
    display: grid;
    grid-gap: 1.5em;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr 0.55fr;
    grid-template-areas: "video" "aside" "section";
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  aside {
    width: 50%;
  }
  .aside__top-container {
    width: 200%;
  }
}

@media only screen and (max-width: 560px) {
  body {
    min-width: 475px;
  }
}

/* CSS from the second file */
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
channel-buttion {
  border-radius: 50%;
}

.header__button {
  display: flex;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  font-size: medium;
  background: none;
  border: none;
  outline: none;
  padding: 5px;
  padding-left: 16px; /* Add left padding */
  overflow: visible; /* Set overflow to visible */
  min-height: 29px;
}

.header__button img {
  height: 20px;
  margin-right: 5px;
}

.header__button:hover {
  background-color: #f0f0f0;
}

.video-screen {
  border-radius: 18px;
}
</style>
