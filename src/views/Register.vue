<template>
  <a-layout>
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout class="mt-5">
      <a-layout-sider>
        <Sider />
      </a-layout-sider>
      <a-layout-content>
        <div>
          <AddInformation class="d-flex justify-content-end mb-2" />
          <div class="mx-auto w-50">
            <a-input-search
              placeholder="Pesquisar"
              size="large"
              class="mx-auto mb-4"
            />
          </div>
          <div class="d-flex justify-content-center">
            <a-table :columns="columns" :data-source="data" class="w-75">
              <template #bodyCell="{ column }">
                <template v-if="column.key === 'operation'">
                  <a>action</a>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import Header from "@/components/Header.vue";
import Sider from "@/components/Sider.vue";
import AddInformation from "@/components/AddInformation.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Sider,
    AddInformation,
  },

  setup() {
    const columns = [
      {
        dataIndex: "name",
        title: "Nome",
        key: "name",
        slots: { customRender: "name" },
        width: "25%",
        sorter: true,
      },
      {
        dataIndex: "address",
        title: "Endereço",
        key: "address",
        width: "20%",
      },
      {
        dataIndex: "cpf",
        title: "CPF",
        key: "cpf",
        width: "15%",
      },
      {
        dataIndex: "phone",
        title: "Telefone",
        key: "phone",
        width: "15%",
      },
      {
        dataIndex: "email",
        title: "E-mail",
        key: "email",
        width: "15%",
      },
      {
        title: "Ação",
        key: "operation",
        width: "10%",
      },
    ];

    const data = [
      {
        key: "1",
        name: "Aysha",
        address: "Rua João Dourado Filho",
        cpf: "45454545454",
        phone: "81 99524525",
        email: "aysha@gmail.com",
      },
      {
        key: "2",
        name: "João",
        address: "Rua João Dourado Filho",
        cpf: "05256598456",
        phone: "81 30254563",
        email: "joao@gmail.com",
      },
    ];

    return { columns, data };
  },
});
</script>


<style scoped>
.ant-menu.ant-menu-dark {
  background-color: black;
}

/* verificar depois */
.ant-menu.ant-menu-dark .ant-menu-item-selected {
  background-color: red !important;
}

.ant-layout-header {
  height: 2rem;
  padding: 0;
}
.ant-layout {
  background-color: transparent;
}

.ant-layout-sider {
  background: transparent;
}
</style>