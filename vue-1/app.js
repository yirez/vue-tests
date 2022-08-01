Vue.createApp({
  data(){
    return{
      listOfThings: [],
      inputValue: ''
    };
  },
  methods: {
      addStuff(){
        this.listOfThings.push(this.inputValue);
        this.inputValue="";
      }
  }
}).mount('#app');