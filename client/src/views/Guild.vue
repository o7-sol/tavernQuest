<template>
    <div id="guild">
            <div class="panelBody">
                <h1 class="panelTitle">
                    <img src="../assets/board.png" class="board"> Guild
                </h1>
                <div class="col-md-12">
                    <div id="guildInfo">
                        <img src="../assets/altor.png" style="vertical-align: bottom;"> Saint Taverners
                        <img src="../assets/gold.png" style="height: 30px; margin-top: -3px;"> 185400
                        &nbsp;<strong style="color: red">EXPERIENCE</strong> 485000 <br>
                        <img src="../assets/hero/necromancer.png" id="leaderImg"> 
                        &nbsp;<strong>Zlotte</strong> (<span style="color: red">LEADER</span>)
                        <br><br>
                        <span id="announcement">ANNOUNCEMENT:</span>
                        <span id="announcementText">
                        <small style="vertical-align: text-bottom;">2019-08-04 20:16</small>
                        Some text flying in from leader of the guild
                        Some text flying in from leader of the guild
                        </span>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <p><img src="../assets/board.png" style="margin-top: -4px;"> Statistic</p>
                            <p>
                                Wins: <span id="wins">30</span>
                                Loses: <span id="loses">54</span>
                                Rank: <span id="rank">#13</span>
                                Members: <span id="members">38 / 50</span>
                            </p>   
                            <p><img src="../assets/board.png" style="margin-top: -4px;"> Items Exchange</p>
                            
                            <div>
                                <span class="item">
                                <img src="../assets/items/strength/W_Mace005.png">
                                <span>Light Mace</span>
                                </span>
                                <span class="forItem">
                                <img src="../assets/items/strength/W_Sword017.png">
                                <span>OR</span>&nbsp;
                                <img src="../assets/gold.png" class="itemGold">&nbsp;84000                                
                                </span>
                                <span class="userExchange">
                                    <strong>Zlotte</strong>
                                </span>                             
                            </div>
                            <br>
                            <div>
                                <span class="item">
                                <img src="../assets/items/strength/W_Mace005.png">
                                <span>Light Mace</span>
                                </span>
                                <span class="forItem">
                                <img src="../assets/items/strength/W_Sword017.png">
                                <span>OR</span>&nbsp;
                                <img src="../assets/gold.png" class="itemGold">&nbsp;84000                                
                                </span>
                                <span class="userExchange">
                                    <strong>Songohan</strong>
                                </span>                             
                            </div>
                            <br>
                            <div>
                                <span class="item">
                                <img src="../assets/items/strength/W_Mace005.png">
                                <span>Light Mace</span>
                                </span>
                                <span class="forItem">
                                <img src="../assets/items/strength/W_Sword017.png">
                                <span>OR</span>&nbsp;
                                <img src="../assets/gold.png" class="itemGold">&nbsp;84000                                
                                </span>
                                <span class="userExchange">
                                    <strong>Botukas84</strong>
                                </span>                             
                            </div>
                            <br>
                            <div>
                                <span class="item">
                                <img src="../assets/items/strength/W_Mace005.png">
                                <span>Light Mace</span>
                                </span>
                                <span class="forItem">
                                <img src="../assets/items/strength/W_Sword017.png">
                                <span>OR</span>&nbsp;
                                <img src="../assets/gold.png" class="itemGold">&nbsp;84000                                
                                </span>
                                <span class="userExchange">
                                    <strong>Feknaz</strong>
                                </span>                             
                            </div> 
                            <br>  
                            <div>
                                <span class="item">
                                <img src="../assets/items/strength/W_Mace005.png">
                                <span>Light Mace</span>
                                </span>
                                <span class="forItem">
                                <img src="../assets/items/strength/W_Sword017.png">
                                <span>OR</span>&nbsp;
                                <img src="../assets/gold.png" class="itemGold">&nbsp;84000                                
                                </span>
                                <span class="userExchange">
                                    <strong>Songohan</strong>
                                </span>                             
                            </div>
                            <br>
                            <div>
                                <span class="item">
                                <img src="../assets/items/strength/W_Mace005.png">
                                <span>Light Mace</span>
                                </span>
                                <span class="forItem">
                                <img src="../assets/items/strength/W_Sword017.png">
                                <span>OR</span>&nbsp;
                                <img src="../assets/gold.png" class="itemGold">&nbsp;84000                                
                                </span>
                                <span class="userExchange">
                                    <strong>Songohan</strong>
                                </span>                             
                            </div>
                            <br>                                                                                                                                                                   
                        </div>                      
                        <div class="col-md-4">
                            <p><img src="../assets/board.png" style="margin-top: -4px;"> Actions</p>
                            <b-button variant="danger" style="background: #ff0000;"> 
                                Fill The Bank
                            </b-button>&nbsp;
                            <b-button variant="warning"> 
                                Borrow Gold
                            </b-button>&nbsp;
                            <b-button variant="info"> 
                                Exchange Item
                            </b-button>  
                            <br>
                            <p style="margin-top: 1px;">
                            <img src="../assets/board.png" style="margin-top: -4px;"> Latest Activity</p>
                            <ul class="list-unstyled" style="margin-top: -7px;">
                                <li class="bankFill">
                                    <small class="actDateBank">2019-08-04</small>&nbsp;
                                    <img src="../assets/hero/pirate.png" class="activityHero">
                                    &nbsp;<span class="actText">Zlotte <strong>filled the bank with</strong>
                                    &nbsp;<img src="../assets/gold.png" class="actGold">
                                    305</span>
                                </li>
                                <li class="borrowGold">
                                    <small class="actDateBorrow">2019-08-04</small>&nbsp;
                                    <img src="../assets/hero/pirate.png" class="activityHero">
                                    &nbsp;<span class="actText">Zlotte <strong>borrowed</strong>
                                    &nbsp;<img src="../assets/gold.png" class="actGold">
                                    305</span>
                                </li>
                                <li class="exchangeItem">
                                    <small class="actDateExchange">2019-08-04</small>&nbsp;
                                    <img src="../assets/hero/pirate.png" class="activityHero">
                                    &nbsp;<span class="actText">Zlotte <strong>posted exchange</strong>
                                    </span>
                                </li>
                                <li class="bankFill">
                                    <small class="actDateBank">2019-08-04</small>&nbsp;
                                    <img src="../assets/hero/pirate.png" class="activityHero">
                                    &nbsp;<span class="actText">Zlotte <strong>filled the bank with</strong>
                                    &nbsp;<img src="../assets/gold.png" class="actGold">
                                    305</span>
                                </li>
                                <li class="borrowGold">
                                    <small class="actDateBorrow">2019-08-04</small>&nbsp;
                                    <img src="../assets/hero/pirate.png" class="activityHero">
                                    &nbsp;<span class="actText">Zlotte <strong>borrowed</strong>
                                    &nbsp;<img src="../assets/gold.png" class="actGold">
                                    305</span>
                                </li>
                                <li class="exchangeItem">
                                    <small class="actDateExchange">2019-08-04</small>&nbsp;
                                    <img src="../assets/hero/pirate.png" class="activityHero">
                                    &nbsp;<span class="actText">Zlotte <strong>posted exchange</strong>
                                    </span>
                                </li>
                                <li class="bankFill">
                                    <small class="actDateBank">2019-08-04</small>&nbsp;
                                    <img src="../assets/hero/pirate.png" class="activityHero">
                                    &nbsp;<span class="actText">Zlotte <strong>filled the bank with</strong>
                                    &nbsp;<img src="../assets/gold.png" class="actGold">
                                    305</span>
                                </li>
                                <li class="borrowGold">
                                    <small class="actDateBorrow">2019-08-04</small>&nbsp;
                                    <img src="../assets/hero/pirate.png" class="activityHero">
                                    &nbsp;<span class="actText">Zlotte <strong>borrowed</strong>
                                    &nbsp;<img src="../assets/gold.png" class="actGold">
                                    305</span>
                                </li>                                                                                                                               
                            </ul>                                                        
                        </div>
                        <div class="col-md-4">
                            <p><img src="../assets/board.png" style="margin-top: -4px;"> Chatroom</p>
                            <ul class="list-unstyled">
                                <li>
                                    <small class="msgDate">2019-08-04 20:06 Zlotte</small><br>
                                    <small class="msgText">
                                        Some lorem ipsum text coming home
                                        Some lorem ipsum text coming home
                                    </small>
                                </li>
                                <li>
                                    <small class="msgDate">2019-08-04 20:06 Zlotte</small><br>
                                    <small class="msgText">
                                        Some lorem ipsum text coming home
                                        Some lorem ipsum text coming home
                                    </small>
                                </li>
                                <li>
                                    <small class="msgDate">2019-08-04 20:06 Zlotte</small><br>
                                    <small class="msgText">
                                        Some lorem ipsum text coming home
                                        Some lorem ipsum text coming home
                                    </small>
                                </li>
                                <li>
                                    <small class="msgDate">2019-08-04 20:06 Zlotte</small><br>
                                    <small class="msgText">
                                        Some lorem ipsum text coming home
                                        Some lorem ipsum text coming home
                                    </small>
                                </li>                                 
                                <li>
                                    <small class="msgDate">2019-08-04 20:06 Zlotte</small><br>
                                    <small class="msgText">
                                        Some lorem ipsum text coming home
                                        Some lorem ipsum text coming home
                                    </small>
                                </li>
                                <li>
                                    <small class="msgDate">2019-08-04 20:06 Zlotte</small><br>
                                    <small class="msgText">
                                        Some lorem ipsum text coming home
                                        Some lorem ipsum text coming home
                                    </small>
                                </li>                                 
                                <li>
                                    <small class="msgDate">2019-08-04 20:06 Zlotte</small><br>
                                    <small class="msgText">
                                        Some lorem ipsum text coming home
                                        Some lorem ipsum text coming home
                                    </small>
                                </li>
                                <br>                                                            
                            <div class="input-group" style="margin-top: 5px;">
                                <div class="input-group-prepend">
                                <div style="font-size: 15px;" class="input-group-text" id="sendBtn">Send</div>
                                </div>
                                <input style="font-size: 15px;" type="text" class="form-control"
                                id="inlineFormInputGroupMessage" placeholder="Type message...">
                            </div>                                                                                                
                            </ul>
                        </div>
                    </div>
                </div>
                <br>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#guild {
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
    color: black;
    background-color: #37d24a;
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
#guildInfo {
    text-align: center;
    padding: 18px;
}
#leaderImg {
    height: 30px;
    image-rendering: pixelated;
    vertical-align: bottom;
}
#wins {
    background: #37d24a;
    padding: 5px;
    border-radius: 12px;
    color: black;
}
#loses {
    background: #37d24a;
    padding: 5px;
    border-radius: 12px;
    color: black;
}
#rank {
    background: #37d24a;
    padding: 5px;
    border-radius: 12px;
    color: black;
}
#members {
    background: #37d24a;
    padding: 5px;
    border-radius: 12px;
    color: black;
}
#announcement {
    color: white;
    background: red;
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
#sendBtn {
    background: #04d004;
    color: black;
}
.item {
    background: #a900ff;
    border-radius: 5px;
    padding: 10px 20px 10px 10px;    
}
.forItem {
    background: #37d24a;
    padding: 10px;
    border-radius: 5px;
    margin-left: -5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.itemGold {
    height: 25px;
    image-rendering: pixelated;
    margin-top: -2px;
}
.userImg {
    height: 42px;
    padding-bottom: 6px;
    image-rendering: pixelated;
}
.userExchange {
    background: black;
    padding: 12px;
    border-radius: 5px;
    margin-left: -5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.bankFill {
    background: black;
    padding: 5px;
}
.borrowGold {
    background: black;
    padding: 5px;
}
.exchangeItem {
    background: black;
    padding: 5px;
}
.activityHero {
    height: 32px;
    image-rendering: pixelated;
}
.actDateBank {
    background: #bf1515;
    padding: 14px;
    margin-left: -6px;
    padding-top: 13px;
}
.actDateBorrow {
    background: #c5c01f;
    padding: 14px;
    margin-left: -6px;
    padding-top: 13px;
}
.actDateExchange {
    background: #17a2b8;
    padding: 14px;
    margin-left: -6px;
    padding-top: 13px;
}
.actGold {
    height: 25px;
    margin-top: -3px;
    image-rendering: pixelated;
}
.actText {
    vertical-align: middle;
}
.msgDate {
    padding: 5px;
    background: #840000;
}
.msgText {
    padding: 5px;
    background: black;
}
</style>
