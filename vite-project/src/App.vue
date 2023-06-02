<template>
  <div>
    <div>
      <ul>
        <li><h1>簡易SNSアプリ</h1></li>
        <li class="tab"><router-link to="/">Home</router-link></li>
        <li class="tab"><router-link to="/users">Users</router-link></li>
        <li class="tab"><router-link to="/posts">Posts</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
//他のファイルから参照できるようにする
export default {

}
</script>
<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }

  li {
    float: left;
  }

  .tab{
    margin-top: 15px;
  }
  
  h1 {
    font-size: 40px;
    font-weight: bold;
    margin-left: 30px;
    margin-bottom: 30px;
    margin-right: 30px;
    color: black;
  }

  li a {
    display: block;
    color: black;
    text-align: center;
    padding: 20px 24px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #93ccd0;
  }

  .active {
    background-color: #4CAF50;
  }

  .router-link-active {
    color: blue;
  }
</style>
