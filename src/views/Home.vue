<template>
  <div>
    <div class="d-flex justify-content-center mt-5">
      <Header/>
  </div>
   <AddInformation/>
  </div>
</template>

<script>
import  {  defineComponent } from  '@vue/composition-api'
import Header from '@/components/Header.vue'
import AddInformation from '@/components/AddInformation.vue'

export  default  defineComponent ( { 
  name: 'Home',
  components: {
    Header,
    AddInformation
  },
})
</script>