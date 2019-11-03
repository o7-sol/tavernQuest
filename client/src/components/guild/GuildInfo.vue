<template>
  <div id="guildInfo">
    <img src="../../assets/altor.png" style="vertical-align: bottom;"> {{guild.title}}
    <img src="../../assets/gold.png" style="height: 30px; margin-top: -3px;"> {{guild.gold}}
    &nbsp;<strong style="color: red">EXPERIENCE</strong> {{guild.experience}} <br>
    <img :src="require('../../assets/hero/'+guild.leaderImg)" id="leaderImg">
    &nbsp;<strong>{{guild.leader}}</strong> (<span style="color: red">LEADER</span>)
    <br><br>
    <span id="announcement">
      <img src="../../assets/msgboard.png" style="margin-top: -4px">
      ANNOUNCEMENT
    </span>
    <span id="announcementText">
      <small style="vertical-align: text-bottom;">{{guild.announcement_createdAt}}</small>
      {{guild.announcement}}
    </span>
  </div>
</template>

<script>
export default {
    props: ['guild']
}

</script>

<style scoped>
#guildInfo {
    text-align: center;
    padding: 18px;
}
#leaderImg {
    height: 30px;
    image-rendering: pixelated;
    vertical-align: bottom;
}
#announcement {
    background: #7337d2;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #232323;
}
#announcementText {
    background: #050806;
    padding: 5px;
    border-radius: 5px;
    margin-left: -4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 1px solid #232323;
    border-left: none;
}
</style>
