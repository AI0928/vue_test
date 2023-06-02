<template>
    <div class="overlay">
        <div class="content">
            <h1>CreatePost</h1>
            <button class="modal__btn" @click="returnTrue()">はい</button>
        </div>
        
    </div>
</template>

<script>
export default {
    methods: {
    returnFalse() {
      this.$emit("execute-method", false);
    },
    returnTrue() {
      this.$emit("execute-method", true);
    },
  },
}
</script>

<style scoped>
.overlay{
    /*　要素を重ねた時の順番　*/
    z-index:1;

    /*　画面全体を覆う設定　*/
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);

    /*　画面の中央に要素を表示させる設定　*/
    display: flex;
    align-items: center;
    justify-content: center;
}

.content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}
</style>