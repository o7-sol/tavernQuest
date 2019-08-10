<template>
  <div class="col-md-4">
    <div class="panelBody">
      <h1 class="panelTitle"><img src="../../assets/board.png" class="board">  Opponents</h1>
      <ul class="list-unstyled opponentsList">
        <li>
          <p>
            <img src="../../assets/hero/pirate.png">
            Zlotte (Pirate)
            <b-button variant="danger">FIGHT</b-button>
            <span class="float-right">
              Level: 15
            </span>
            <table>
              <tbody>
                <td>
                  <tr>
                    <img src="../../assets/fist.png" class="opponentImg">
                    Strength
                  </tr>
                  <tr style="margin-right: 19px; float: right;">15</tr>
                </td>
                &nbsp;&nbsp;
                <td>
                  <tr>
                    <img src="../../assets/shoes.png" class="opponentImg">
                    Agility
                  </tr>
                  <tr style="margin-right: 11px; float: right;">25</tr>
                </td>
                &nbsp;&nbsp;
                <td>
                  <tr>
                    <img src="../../assets/heart.png" class="opponentImg">
                    Vitality
                  </tr>
                  <tr style="margin-right: 12px; float: right;">25</tr>
                </td>
                &nbsp;&nbsp;
                <td>
                  <tr>
                    <img src="../../assets/book.png" class="opponentImg">
                    Intellect
                  </tr>
                  <tr style="margin-right: 17px; float: right;">25</tr>
                </td>
              </tbody>
            </table>
            <img src="../../assets/items/health/potion.png" alt="">
          </p>
        </li>
        <li>
          <p>
            <img src="../../assets/hero/pirate.png">
            Zlotte (Pirate)
            <b-button variant="danger">FIGHT</b-button>
            <span class="float-right">
              Level: 15
            </span>
            <table>
              <tbody>
                <td>
                  <tr>
                    <img src="../../assets/fist.png" class="opponentImg">
                    Strength
                  </tr>
                  <tr style="margin-right: 19px; float: right;">15</tr>
                </td>
                &nbsp;&nbsp;
                <td>
                  <tr>
                    <img src="../../assets/shoes.png" class="opponentImg">
                    Agility
                  </tr>
                  <tr style="margin-right: 11px; float: right;">25</tr>
                </td>
                &nbsp;&nbsp;
                <td>
                  <tr>
                    <img src="../../assets/heart.png" class="opponentImg">
                    Vitality
                  </tr>
                  <tr style="margin-right: 12px; float: right;">25</tr>
                </td>
                &nbsp;&nbsp;
                <td>
                  <tr>
                    <img src="../../assets/book.png" class="opponentImg">
                    Intellect
                  </tr>
                  <tr style="margin-right: 17px; float: right;">25</tr>
                </td>
              </tbody>
            </table>
            <img src="../../assets/items/health/potion.png" alt="">
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}

</script>

<style scoped>
.opponentImg {
    height: 20px;
    image-rendering: pixelated;
    vertical-align: bottom;
}
.opponentsList {
    font-size: 13px;
}
.opponentsList li {
    padding: 5px;
}
.panelTitle {
    color: #fff;
    background-color: #7337d2;
    height: 40px;
    margin-bottom: 0;
    padding: 13px;
    border: 1px solid #474747;
    border-radius: 2px;
    font-size: 13px;    
}
.panelBody {
    background-color: #050c29;
    color: #fff;
    border-radius: 3px!important;
    border: 1px solid #1d1d1d;
}

ul li:nth-child(2n+2) {  
  background: #06103c;
}
</style>
