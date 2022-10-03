<template>
 <div class="row mt-3">
       <h4>Kategori Utama</h4>
         <b-col sm="12">
       <b-button v-b-modal.modal-1 class="float-right ml-2" variant="outline-primary">Tambah  </b-button>
         <b-row sm="6">
    <b-col sm="8">
    </b-col>
    <b-col sm="4">
      <b-form-input
        id="input-small"
        size="sm"
        placeholder="Pencarian"
      ></b-form-input>
    </b-col>
  </b-row>
     
    
  <b-modal id="modal-1" title="Form Menu">
   <b-container fluid>
     <b-col sm="6">
      <label for="input-large"><b>Photo Menu</b></label>
    </b-col>
    <b-row class="mt-4">
        <div class="center">
   <b-avatar size="8rem">
         <b-avatar v-if="url" :src="url" class="foto-profil" size="8rem" />
</b-avatar>
    <input
                id="idInputImage"
                type="file"
                name="image"
                @change="onChange"
                class="form_input mt-2"
              />
    </div>
    </b-row>

  <b-row class="mt-4">
    <b-col sm="6">
      <label for="input-large">Judul Menu</label>
    </b-col>
    <b-col sm="6">
      <b-form-input
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
   <b-row class="mt-2">
    <b-col sm="6">
      <label for="input-small">Seo</label>
    </b-col>
    <b-col sm="6">
      <b-form-input
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="6">
      <label for="input-small">Deskripsi</label>
    </b-col>
    <b-col sm="6">
      <b-form-input
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
    <b-row class="mt-2">
    <b-col sm="6">
      <label for="input-small">Keyword</label>
    </b-col>
    <b-col sm="6">
      <b-form-input
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
  
 
  
  <b-row class="mt-3">
        <b-col cols="6"></b-col>
        <b-col cols="6">
        </b-col>
    </b-row>
</b-container> 
  </b-modal>
        </b-col>
<b-table class="mt-4" responsive :items="items" :fields="fields">
    <template v-slot:cell(actions)="{ item }">
      
      <span>
        <b-btn v-b-modal.modal-2 variant="warning">Edit</b-btn></span>
       
      <span><b-btn v-b-modal.modal-3 variant="danger">Delete</b-btn> </span>
      
    </template>
  <template v-slot:cell(status)="{ item }">
    <span>
        <b-form-select v-model="selected" class="mb-3">
      <b-form-select-option :value="null">Pilih Status</b-form-select-option>
      <b-form-select-option value="a">Aktif</b-form-select-option>
      <b-form-select-option value="b" disabled>Tidak Aktif</b-form-select-option>
    </b-form-select>
    </span>
    </template>
    <template v-slot:cell(Cover)="{ item }">
      
      <span>
         <div>
  <b-img src="https://www.duniadosen.com/wp-content/uploads/2021/04/resensi-buku.jpg" fluid alt="Fluid image"  width="150" height="80"></b-img>
         </div>
       
</span>
      
    </template>
  </b-table>

    <!-- <div class="center">
    <b-pagination-nav :pages="pages1" use-router ></b-pagination-nav>
    </div> -->
    </div>
</template>
<script>
  export default {
     auth: 'guest',
      
      layout: "Menu",
     data() {
      return {
        //  pages1: ['?page=1', '?page=2', '?page=3'],
         selected: null,
        items: [{No:'1' , Produk:'17 Produk',Kategori:'Buku Flat',Seo:'buku-murah'}, 
        {No:'2' , Produk:'5 Produk ',Kategori:'ebook-elib',Seo:'ebook-elib'},
       {No:'3' , Produk:'107 Produk',Kategori:'eureka-mart',Seo:'ebook'},
       {No:'4' , Produk:' 10 Produk',Kategori:'ebook',Seo:'eureka mart'},
      {No:'5', Produk:'18 Produk',Kategori:'atk',Seo:'atk'},
     {No:'6' ,Produk:'12 Produk',Kategori:'buku-murah',Seo:'buku-murah'}],
     
       
        
    fields: ["No","Cover", "Kategori","Produk", "Seo","status"], 
     url: "",
imagesArray: null, 
      }
    },
    methods: {
        onChange(e) {
        this.imagesArray = e.target.files[0]
        const file = e.target.files[0];
        this.url = URL.createObjectURL(file);
    } ,
    
    computed: {
       editItem(item) { console.log(item); },
      btnStates() {
        return this.buttons.map(btn => btn.state)
      }
    }
}

  };
  </script>