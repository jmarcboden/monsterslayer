function getRandomValue(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
  data(){
    return{
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
    }
  },
  computed:{
    monsterBarStyles(){
      return{width: this.monsterHealth + '%'};
    },
    playerBarStyles(){
      return{width: this.playerHealth + '%'};
    },
    mayUseSpecialAttack(){
      return this.currentRound === 0 || this.currentRound % 3 !== 0;
    }
  },
  methods:{
    attackMonster(){
      this.currentRound++;
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
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    }
  }
});
app.mount("#game");