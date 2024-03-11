//we define the desired end result and data to the end app

//this vue app will take and object 
Vue.createApp({
  data:function(){
    return{
     goals: [],
     inputValue:"", 
    }
  },
  methods:{
    addGoals(){
      this.goals.push(this.inputValue)
      this.inputValue = ""
    }
  }
}).mount("#app")



//JavaScript uses the imparative approach
/*
  we define every step 
  "get acces to the button, handler, append, clear, add the text content"
  we define every step
*/
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);