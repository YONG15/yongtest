<template>
  <div>
    <h1>나</h1>
    {{ halData }}
    <button @click="changeHalData">부모의 데이터 바꾸자</button>

  </div>
</template>

<script>
export default{
  props:["halData"],
  methods: {
    changeHalData() {
      this.$emit("changeHalData", "랄랄라");
    },
  },
}
</script>
