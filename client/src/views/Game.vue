<template>
    <div class="game">
        <div class="gameScreen row">
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
import { mapGetters } from 'vuex';

export default {
    components: {
        appArenaPanel: ArenaPanel,
        appMarketPanel: MarketPanel,
        appOpponentPanel: OpponentPanel
    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>
