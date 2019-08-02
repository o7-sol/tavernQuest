<template>
    <div id="guilds" class="row">
        <div class="col-md-4">
            <div class="panelBody">
                <h1 class="panelTitle">
                    Guild Name
                </h1>
                <h5 class="title">Drunk Taverners</h5>
                <div class="row">
                <p class="col-md-4 text-center">
                    <img src="../assets/hero/necromancer.png">
                    <br>
                    <span class="leader" style="margin-left: -9px;">
                    <img src="../assets/crown.png" style="vertical-align: text-top;"> 
                    Zlotte<br>
                    Level: 25
                    </span>
                </p>
                <p class="col-md-4" style="padding-top: 25px">
                    Level: 20<br>
                    Members: 38 / 50<br>
                </p>
                <div class="col-md-4" style="padding-top: 30px">
                    <b-button variant="danger">
                        Apply Now
                    </b-button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#guilds {
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
.title {
    color: #fbc405;
    background: #0c0d0e;
    padding: 5px;
    text-align: center;
}
</style>
