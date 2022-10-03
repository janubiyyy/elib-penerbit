<template>
 <div class="row mt-3">
       <h4>Author</h4>
         <b-col sm="11">
       <b-button v-b-modal.modal-1 class="float-right ml-5" variant="outline-primary">Tambah  </b-button>
     
    
  <b-modal id="modal-1" title="Author Detail">
   <b-container fluid>
     <b-col sm="6">
      <label for="input-large"><b>Photo Author</b></label>
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
      <label for="input-large">Author</label>
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
      <label for="input-small">Birthday Author</label>
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
      <label for="input-small">Deskripsi Author</label>
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
  <b-modal id="modal-2" title="Delete Author">
       <b-alert show variant="danger">Anda yakin ingin menghapus Author? </b-alert>
  </b-modal>
        </b-col>
<b-table class="mt-4" responsive :items="items" :fields="fields">
    <template v-slot:cell(actions)="{ item }">
      
      <span>
        <b-btn v-b-modal.modal-1 variant="warning">Edit</b-btn></span>
       
      <!-- <span><b-btn v-b-modal.modal-2 variant="danger">Delete</b-btn> </span>
       -->
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
    <template v-slot:cell(Foto)="{ item }">
      
      <span>
         <div>
  <b-img src="https://cdn-icons-png.flaticon.com/512/168/168726.png" fluid alt="Fluid image"  width="100" height="80"></b-img>
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
        items: [{No:'1' , Author:'John M. Echols & Hasan Shadily'}, 
        {No:'2' , Author:'	Ballon Media'},
       {No:'3' ,Author:'DR. LAURA MARAKHAM, Dr. Laura Marakham'},
       {No:'4' ,Author:'	Ahmad Zubair'},
      {No:'5', Author:'STEFAN STERN & CARY COOPER, Stefan Stern & Cary Cooper'},
     {No:'6' ,Author:'Marcella Viona Legoh'}],
     
       
        
    fields: ["No","Foto", "Author","actions"], 
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