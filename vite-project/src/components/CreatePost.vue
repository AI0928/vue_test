<template>
    <div class="overlay">
        <div class="content">
            <button class="btn--blue" @click="returnFalse()">キャンセル</button>
            <form @submit.prevent="createPost">
                <textarea class="textarea-content" v-model="post.content" placeholder="content"></textarea>
                <input class="btn-submit" type="submit">
            </form>
            
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            post: {
                content: null,
                user_id: 1,
            }
        }
    },
    methods: {
        returnFalse() {
            this.$emit("execute-method", false);
        },
        createPost(){
            var json = JSON.stringify(this.post);
            axios.post('http://localhost:3030/posts', json,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            this.$emit("execute-method", true);
        }
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
  width:60%;
  height:50%;
  padding: 1em;
  background:#fff;
}

.btn--blue {
  color: #fff;
  background-color: #1da1f2;
  width: 20%;
  margin-bottom: 20px;
}

.btn-submit{
  display: block;
  padding: 7px 25px;
  border-radius: 7px;
  border: none;
  border-bottom: 4px solid #1d7dcc;
  background-color: #2196f3;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  appearance: none;
}
.btn-submit:active {
  margin-top: 3px;
  background-color: #309bf2;
  border-bottom: 2px solid #006366;
}

.textarea-content{
  width:70%;
  height:300px;
}
</style>