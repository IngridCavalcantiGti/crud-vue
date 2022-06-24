<template>
  <a-menu style="width: 256px" mode="inline" theme="light">
    <a-menu-item class="bg-light work-font ms-3">
      My workspace
      <i class="bi bi-chevron-down ms-2"></i>
      <!-- <i class="bi bi-grip-horizontal ms-5"></i> -->
    </a-menu-item>
    <a-sub-menu key="sub1" @click="clickAllSmartForms">
      <template #title>
        <i class="bi bi-card-list me-2"></i>
        Report
      </template>
      <a-menu-item key="1"> All Smart Forms</a-menu-item>
      <a-menu-item key="3">Accident Investigation Checklists</a-menu-item>
      <a-menu-item key="4">Activeities Report</a-menu-item>
      <a-menu-item key="5">Add investigator</a-menu-item>
      <a-menu-item key="6">Epa Forms</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #title>
        <i class="bi bi-collection me-2"></i>
        Analysis
      </template>
      <a-menu-item key="7">option 1</a-menu-item>
      <a-menu-item key="8">Option 2</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <template #title>
        <i class="bi bi-file-earmark-slides me-2"></i>
        Records
      </template>
      <a-menu-item key="9">Option 1</a-menu-item>
      <a-menu-item key="10">Option 2</a-menu-item>
      <a-menu-item key="11">Option 3</a-menu-item>
      <a-menu-item key="12">Option 4</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import router from "@/router";
export default {
  setup() {
    const clickAllSmartForms = (item, key) => {
      console.log(item, key);
      if (item.key === "1") {
        router.push("/Register");
      }
    };

    return { clickAllSmartForms };
  },
};
</script>


<style scoped>
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: rgb(18, 131, 197);
}
.ant-menu-item-selected {
  color: white;
}

.ant-menu-item-active:hover {
  color: white;
  background-color: rgb(18, 131, 197);
}

.work-font {
  color: black;
}

/* verificar depois as classes do ant */

.work-font {
  color: black !important;
  width: 10rem !important;
  font-size: 0.8rem !important;
}

.ant-layout-sider {
  background: white;
}

/* .ant-menu-inline .ant-menu-item::after {
  border-right: 3px solid #04ae4c;
  border-right: 3px solid black;
} */

/* .ant-menu {
  border: 0.5px solid rgb(238, 238, 238);
  color: black;
  background-image: linear-gradient(
    0deg,
    rgba(83.93749594688416, 186.899294257164, 255, 1) 0%,
    rgba(141.31250202655792, 255, 200.4300034046173, 1) 100%
  );
} */
</style>