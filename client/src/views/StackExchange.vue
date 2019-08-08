<template>
    <div id="stackExchange">
        <div class="col-md-12">
            <div class="panelBody">
                <h1 class="panelTitle">
                    Latest Items Placed
                </h1>
                <ul class="list-unstyled row" id="latestItemsList">
                    <li v-for="index in 10">
                        <span>Zlotte</span><br>
                        <img class="latestItemImg" src="../assets/items/strength/sword1.png">
                        &nbsp;<span class="latestItemTitle">Loyalty</span>
                        <p class="latestItemInfo">
                            <img src="../assets/gold.png" style="height: 25px">
                            1000
                        </p>
                    </li>        
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
#stackExchange {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 30px;
    padding-bottom: 8px;
    color: #D5C8FF;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    position: relative;
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
    border-radius: 3px !important;
    border: 1px solid #1d1d1d;
}
#latestItemsList {
    padding: 15px;
}
#latestItemsList li{
    text-align: center;
}
.latestItemInfo {
    padding: 5px;
}
.latestItemTitle {
    background: red;
    padding: 13px;
    vertical-align: middle;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-left: -11px;
}
.latestItemImg {
    background: black;
    padding: 6px;
    border-radius: 5px;
    margin-left: 5px;
}
</style>
