<template>
  <button @click="onClick">MyButton</button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class MyButton extends Vue {
  @Prop()
  public greet?: string;

  @Emit()
  public click() {
      
  }

  public onClick() {
    alert(this.greet);
    this.click();
  }
}
</script>

