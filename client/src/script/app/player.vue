<template>
  <h2>ストリーミング</h2>

  <div class="columnWrap columnWrap-mTop" v-class="{ 'columnWrap-mDisabled': isDrawerVisible || isColumnDisabled }">
    <div class="columnWrap-item columnWrap-item-mShort">
      <artist-list-view></artist-list-view>
    </div>
    <div class="columnWrap-item columnWrap-item-mShort">
      <album-list-view></album-list-view>
    </div>
    <div class="columnWrap-item columnWrap-item-mWide">
      <track-list-view></track-list-view>
    </div>
  </div>

  <div class="columnWrap columnWrap-mBtm content">
    <button v-on="click: onClickToggler">Toggle PlayList</button>
  </div>

  <div class="drawer" v-class="{ 'drawer-mActive': isDrawerVisible }">
    <h2>プレイリスト</h2>
    <play-list-view></play-list-view>
    <player-view></player-view>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {
      isDrawerVisible:  false,
      isColumnDisabled: false
    };
  },
  methods: {
    onClickToggler: function() {
      this.isDrawerVisible = !this.isDrawerVisible;
    },
    handleEvent: function(ev) {
      var action = ev.data.action,
          data   = ev.data.data;
      if (action === 'PRE_AJAX') {
        this.isColumnDisabled = true;
      }
      if (action === 'POST_AJAX') {
        this.isColumnDisabled = false;
      }
    }
  },
  components: {
    artistListView: require('../components/artist-list.vue'),
    albumListView:  require('../components/album-list.vue'),
    trackListView:  require('../components/track-list.vue'),
    playListView:   require('../components/play-list.vue'),
    playerView:     require('../components/player.vue'),
  },
  created: function() {
    window.addEventListener('message', this, false);
  }
};
</script>
