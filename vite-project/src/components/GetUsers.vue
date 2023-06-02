<template>
    <!--カード型の親要素-->
    <div class="card-container">
        <div v-for="user in users" :key="user.id" class="card">
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
            <!--<button @click="deleteBtn(user.id)">削除</button>-->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            users: null
        }
    },
    methods: {
        getUsers(){
            axios.get('http://localhost:3030/users')
            .then((response) => {this.users = response.data;
            })
        },
        deleteBtn(id){
            axios.delete('http://localhost:3030/users/' + id)
            this.$router.go({path: this.$router.currentRoute.path, force: true})
        }
    },
    beforeMount(){
        this.getUsers()
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