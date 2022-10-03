<template>
    <div>
    <b-col sm="10">
       <b-button v-b-modal.modal-1 class="float-right ml-2" variant="primary">Tambah</b-button>

  <b-modal id="modal-1" title="Tambah Produk">
     </b-modal>
        </b-col>
     </div>
</template>
<script>
  export default {
      auth: 'guest',
      
      layout: "Menu",

  };
  </script>