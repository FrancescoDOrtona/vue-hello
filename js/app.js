const createApp = Vue.createApp
createApp({
    data() {
        return {
            message: 'Start with Vue!',
            image: 'https://www.civitatis.com/blog/wp-content/uploads/2022/11/calle-akihabara-tokio.jpg',
            guessText: '',
            counter: 0
        }
    },
    methods: {
        onClick: function (){
            this.counter++;
            console.log(this.counter);
        },
        onClickReset: function (){
            this.counter = 0;
        }
    }
}).mount('#app')
