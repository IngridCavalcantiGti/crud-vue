<template>
  <div class="container-fluid">
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal
      v-model="visible"
      title="Adicionar novo cliente"
      @ok="handleOk"
      cancelText="Cancelar"
      okText="Confirmar"
    >
      <a-input @change="inputName" v-model="name" addonBefore="Nome" />
      <div class="d-flex mt-2">
        <a-input class="me-2" addonBefore="CPF" />
        <a-input addonBefore="Telefone" />
      </div>
      <a-input class="mt-2 mb-2" addonBefore="Endereço" />
      <a-input addonBefore="E-mail" />
    </a-modal>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const visible = ref(false);
    const name = ref("");

    const showModal = () => {
      visible.value = true;
      name.value = "";
    };

    const handleOk = () => {
      console.log("ok");
      visible.value = false;
    };

    const inputName = () => {
      console.log(name.value);
    };

    return { visible, showModal, handleOk, inputName, name };
  },
});
</script>
