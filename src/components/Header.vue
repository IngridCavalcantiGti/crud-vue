<template>
  <div>
    <a-menu mode="horizontal" class="p-2">
      <a-menu-item class="mx-2 pe-none">
        <img
          src="@/assets/logo-icertainty.jpg"
          alt="logo-icertainty"
          class="logo-size"
        />
        <strong class="logo-name">ICERTAINTY</strong>
      </a-menu-item>
      <a-menu-item class="type-icident-traking pe-none">
        <i class="bi bi-grid-3x3-gap"></i>
        <strong class="title-icident-traking ms-3">INCIDENT TRACKING</strong>
        <a-divider type="vertical" class="divider ms-5" />
      </a-menu-item>
      <a-menu-item class="title-others">
        <strong>ADMINSTRATION</strong>
      </a-menu-item>
      <a-sub-menu key="sub1" class="title-others">
        <template #title>
          <strong>MODULES</strong><i class="bi bi-chevron-down ms-1"></i>
        </template>
        <a-menu-item key="1">option1</a-menu-item>
        <a-menu-item key="2">option2</a-menu-item>
        <a-menu-item key="3">option3</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2" class="title-others">
        <template #title>
          <strong>ENTRIES</strong><i class="bi bi-chevron-down ms-1"></i>
        </template>
        <a-menu-item key="4">option4</a-menu-item>
        <a-menu-item key="5">option5</a-menu-item>
        <a-menu-item key="6">option6</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3" class="title-others">
        <template #title>
          <strong>DOCUMENTS</strong><i class="bi bi-chevron-down ms-1"></i>
        </template>
        <a-menu-item key="7">option7</a-menu-item>
        <a-menu-item key="8">option8</a-menu-item>
        <a-menu-item key="9">option9</a-menu-item>
      </a-sub-menu>
      <a-menu-item class="title-others">
        <strong> DOWNLOAD </strong>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<style scoped>
.logo-name {
  color: rgb(49, 88, 160);
  font-size: 1.1rem;
}
.logo-size {
  height: 2rem;
}
.title-icident-traking {
  color: rgb(116, 117, 119);
}
.title-others:hover {
  color: rgb(40, 94, 202);
}
.title-others {
  color: rgb(188, 189, 190);
  font-size: 0.8rem;
}
.bi-grid-3x3-gap {
  font-size: 1.5rem;
  color: rgb(195, 197, 199);
}
.bi-chevron-down {
  font-size: 0.7rem;
}
.divider {
  height: 1.8rem;
}
</style>


