<template>
<div class="d-flex justify-content-center mt-5">
  <Header/>
  </div>
</template>

<script>
import  {  defineComponent } from  '@vue/composition-api'
import Header from '@/components/Header.vue'

export  default  defineComponent ( { 
  name: 'Home',
  components: {
    Header
  },
})
</script>