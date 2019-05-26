<template>
  <div>
    <h3>{{ stream }}</h3>
    <div id="player"></div>
    <button v-on:click="play">Play</button>
    <button v-on:click="pause">Pause</button>
    <pre>{{ player }}</pre>
  </div>
</template>

<script>
export default {
  name: "TwitchPlayer",
  props: {
    stream: String,
    player: null
  },

  mounted() {
    let twitchScript = document.createElement("script");
    twitchScript.addEventListener("load", this.scriptLoaded);

    twitchScript.setAttribute("src", "https://player.twitch.tv/js/embed/v1.js");
    document.head.appendChild(twitchScript);
  },
  methods: {
    scriptLoaded() {
      var options = {
        width: 640,
        height: 480,
        channel: this.stream
      };
      
      this.player = new window.Twitch.Player("player", options);
    },
    play() {
      this.player.play();
    },
    pause() {
      this.player.pause();
    },
    setChannel(chanel) {
      this.stream = chanel;
      this.player.setChannel(chanel);
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


