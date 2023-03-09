<template>
  <div>
    <h1>아빠</h1>
    {{ halData }}
    <div></div>
    {{ halData2 }}
    <ParentChild :halData="halData" @changeHalData="changeHalData"></ParentChild>
  </div>
</template>

<script>
import ParentChild from "@/components/ParentChild.vue";
export default {
  components: {
    ParentChild,
  },
  props: ["halData", "halData2"],
  methods: {
    changeHalData(text) {
      this.$emit("changeHalData", text);
    },
  },
};
</script>
