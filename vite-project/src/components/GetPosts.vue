<!--投稿の表示-->
<template>
    <!--カード型の親要素-->
    <div class="card-container">
        <button class="btn btn--blue" @click="showCreatePost">投稿する</button>
        <CreatePost @execute-method="executeMethod" v-show="createPost"></CreatePost>
        <!--カード型の投稿-->
        <div v-for="post in posts" :key="post.id" class="card">
            <!--ユーザーID、名前-->
            <div class="card__user-id">
                <router-link :to="/users/ + post.user_id">{{post.user_id}}</router-link>
            </div>
            <!--投稿内容-->
            <div class="card__content">
                {{post.content}}
            </div>
        </div>
    </div>
</template>

<script>
import CreatePost from "./CreatePost.vue";

export default {
    components: {
        CreatePost,
    },
    data(){
        return{
            posts: null,
            createPost: false,
        }
    },
    methods: {
        //すべての投稿を取得する
        getPosts(){
            axios.get('http://localhost:3030/posts')
            .then((response) => {this.posts = response.data;
            })
        },
        showCreatePost() {
            // モーダルCreatePostmodal = true;
            this.createPost = true;
        },
        executeMethod(yes) {
            // モーダルを非表示にして、モーダルでの選択結果によって処理を変える
            this.createPost = false;
            if (yes) {
                alert("はい が押されました。");
            } else {
                alert("いいえ が押されました。");
            }
        }
    },
    //ページがロードされたときに実行する
    beforeMount(){
        this.getPosts()
    },
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 125px;
  left: 100px;
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align:left;
  border: solid 1px #eff8fffc;
  background-color: #eff8fffc;
  padding: 10px;
  justify-content: space-between;
  width: 60%;
}

.card__user-id {
  text-align: left;
  font-size: 25px;
}

.card__content {
  text-align: left;
  font-size: 20px;
}

.btn--blue {
  color: #fff;
  background-color: #1da1f2;
  width: 15%;
  margin-bottom: 20px;
}
</style>