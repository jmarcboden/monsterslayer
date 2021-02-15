function getRandomValue(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
  data(){
    return{
      monsterHealth: 100,
      playerHealth: 100,
    }
  },
  computed:{
    monsterBarStyles(){
      return{width: this.monsterHealth + '%'};
    },
    playerBarStyles(){
      return{width: this.playerHealth + '%'};
    }
  },
  methods:{
    attackMonster(){
      const attackValue = getRandomValue(8, 15);
      // this.monsterHealth = this.monsterHealth - attackValue;
      this.monsterHealth -= attackValue; //same as above
      this.attackPlayer();
    },
    attackPlayer(){
      const attackValue = getRandomValue(8, 15); 
      this.playerHealth -= attackValue; //same as above
    },
    specialAttackMonster(){
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    }
  }
});
app.mount("#game");