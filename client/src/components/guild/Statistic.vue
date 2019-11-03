<template>
  <div>
    <p><img src="../../assets/board.png" style="margin-top: -4px;"> Statistic</p>
    <p>
      Wins:
      <span id="wins">
        <span v-if="!guild.wins">0</span>
        <span v-else>{{guild.wins}}</span>
      </span>
      Loses:
      <span id="loses">
        <span v-if="!guild.loses">0</span>
        <span v-else>{{guild.loses}}</span>
      </span>
      Rank: <span id="rank">#{{guild.rank}}</span>
      Members: <span id="members" v-if="guild">{{guild.members.length}} / 50</span>
    </p>
  </div>
</template>

<script>
export default {
    props: ['guild']
}

</script>

<style scoped>
#wins {
    background: #7337d2;
    padding: 5px;
    border-radius: 12px;
}
#loses {
    background: #7337d2;
    padding: 5px;
    border-radius: 12px;
}
#rank {
    background: #7337d2;
    padding: 5px;
    border-radius: 12px;
}
#members {
    background: #7337d2;
    padding: 5px;
    border-radius: 12px;
}
</style>
