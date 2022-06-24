<template>
  <div class="container-fluid">
    <div>
      <a-button type="primary" @click="showModal" size="large" class="mt-4">
        Adicionar
      </a-button>
    </div>

    <a-modal
      v-model="visible"
      title="Novo cliente"
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

<style scoped>
/* .ant-btn {
  background-color: #04ae4c;
  color: black;
  border: transparent;
   background-image: linear-gradient(
    0deg,
    rgba(83.93749594688416, 186.899294257164, 255, 1) 0%,
    rgba(141.31250202655792, 255, 200.4300034046173, 1) 100%
  );
} */

/* :hover .ant-btn {
  background-color: #04ae4c;
  color: black;
  border: transparent;
  background-image: linear-gradient(
    0deg,
    rgba(83.93749594688416, 186.899294257164, 255, 1) 0%,
    rgba(141.31250202655792, 255, 200.4300034046173, 1) 100%
  );
} */
</style>
