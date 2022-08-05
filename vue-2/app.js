Vue.createApp({
    data() {
      return {
        listOfThings: [],
        inputValue: '',
        link: 'http://localhost'
      };
    },
    methods: {
      addStuff() {
        this.listOfThings.push(this.inputValue);
        this.inputValue = "";
      }
    }
  }).mount('#app');