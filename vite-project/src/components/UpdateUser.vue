<template>
    <!--カード型の親要素-->
    <div class="card-container">
        <div class="card">
            <!--ユーザーID、名前-->
            <div class="card__user-id">
                {{user.id}}
            </div>
            <div class="card__user-name">
                {{user.name}}
            </div>
            <div class="card__email">
                {{user.email}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user: null
        }
    },
    methods: {
        //任意のuserのデータをとってくる
        getUser(){
            axios.get('http://localhost:3030/users/' + this.$route.params.id)
            .then((response) => {this.user = response.data;
            })
        }
    },
    //ページがロードされたときに実行する
    beforeMount(){
        this.getUser()
    }
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
  padding: 10px;
  border: solid 1px #eff8fffc;
  background-color:#eff8fffc;
  justify-content: space-between;
  width: 60%;
}

.card__user-id {
  text-align: left;
  font-size: 15px;
}

.card__user-name{
    text-align: left;
    font-size: 25px;
}

.card__email {
  text-align: left;
  font-size: 20px;
}
</style>