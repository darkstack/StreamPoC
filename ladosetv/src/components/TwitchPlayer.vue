<template>
  <div>
    <h3>{{ channel }}</h3>
    <div id="player"></div>
    <button v-on:click="play">Play</button>
    <button v-on:click="pause">Pause</button>
    <button v-on:click="getServerChannel">Server Channel</button>
  </div>
</template>

<script>
export default {
  name: "TwitchPlayer",

  props: {
    stream: String
  },

  mounted() {
    this.channel = this.stream;
    let twitchScript = document.createElement("script");
    twitchScript.addEventListener("load", this.scriptLoaded);

    twitchScript.setAttribute("src", "https://player.twitch.tv/js/embed/v1.js");
    document.head.appendChild(twitchScript);

    this.$socket.onmessage = this.message;
  },
  data: function() {
    return {
      player: null,
      options: null,
      channel: ''
    };
  },
  methods: {
    message(msg) {
      window.console.log(msg);
      if (msg) {
        this.setChannel(msg.data);
      }
    },
    scriptLoaded() {
      this.options = {
        width: 640,
        height: 480,
        channel: this.channel,
        allowfullscreen: true
      };

      this.player = new window.Twitch.Player("player", this.options);
    },
    play() {
      this.player.play();
    },
    pause() {
      this.player.pause();
    },
    setChannel(chanel) {
      this.channel = chanel;
      window.console.log("Set channel " + chanel);
      this.player.setChannel(chanel);
    },
    getServerChannel() {
      this.$socket.send("getChannel");
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


