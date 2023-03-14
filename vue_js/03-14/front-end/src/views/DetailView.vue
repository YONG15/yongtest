<template>
  <div>
    <h1>디테일</h1>
    <div v-if="!isLoading">
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
    <div>{{ menuId }}번 메뉴 디테일 페이지 입니다</div>
    <div>{{ menu.name }}</div>
    <div>{{ menu.description }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      menu: {},
      isLoading: false,
      menuId:-1
    }
  },
  async created(){
    this.isLoading = true;
    this.menuId = this.$route.params.id;
    try{
      const response = await axios.get(`http://localhost:8080/api/menus/${this.menuId}`);
      this.menu = response.data;
    }catch(error){
      console.log(error)
    }
  }
}
</script>
