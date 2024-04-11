// import { defineStore } from 'pinia';

// export const useGlobalStore = defineStore({
//   id: 'global', // This could be changed to 'globals' or whatever you prefer
//   state: () => ({
//     globals: [],
//   }),
//   actions: {
//     addToMyRecentlyViewed(item) {
//       this.globals.unshift(item);
//     },
//     removeFromMyRecentlyViewed(index) {
//       this.globals.splice(index, 1);
//     },
//   },
// });


import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    recentlyView: [], // Initialize recentlyView as an empty array
  }),
  actions: {
    addToMyRecentlyViewed(item) {
      this.recentlyView.unshift(item);
    },
    removeFromMyRecentlyViewed(index) {
      this.recentlyView.splice(index, 1);
    },
  },
});

