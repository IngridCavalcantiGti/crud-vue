<template>
<div class="container-fluid"> 
 <form class="mt-5 ">
  <div class="row">
    <div class="col-5">
      <input type="text" class="form-control" placeholder="Nome">
    </div>
    <div class="col-4">
      <input type="text" class="form-control" placeholder="E-mail">
    </div>
     <div class="col-2">
      <input type="text" class="form-control" placeholder="Telefone">
    </div>
    <div class="col-1">
      <button type="submit" class="btn btn-primary" @click="add">Adicionar</button>
    </div>
  </div>
</form>
</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const add = () => {
            alert('Add')
        }

        return { add }
    },
})
</script>
