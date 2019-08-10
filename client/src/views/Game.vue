<template>
    <div class="game">
        <div id="gameScreen" class="row">
        <div class="d-flex flex-wrap" style="width: 100%">
        <app-arena-panel></app-arena-panel>
        <app-market-panel></app-market-panel>
        <app-opponent-panel></app-opponent-panel>
        </div>
        </div>
    </div>
</template>

<script>
import ArenaPanel from '../components/arena/ArenaPanel';
import MarketPanel from '../components/market/MarketPanel';
import OpponentPanel from '../components/arena/OpponentPanel';
export default {
    components: {
        appArenaPanel: ArenaPanel,
        appMarketPanel: MarketPanel,
        appOpponentPanel: OpponentPanel
    }
}
</script>

<style scoped>
#gameScreen {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 30px;
    padding-bottom: 8px;
    color: #D5C8FF;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    position: relative;
}
</style>
