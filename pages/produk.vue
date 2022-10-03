<template>

    <div class="row ">
      
        <h4>Tambah Produk</h4>
         <b-col sm="10">
           <NuxtLink to="/Dashboard" >
         <b-button class="float-right ml-2" variant="outline-secondary">  Kembali </b-button>
           </NuxtLink>
        </b-col>
        
        <br>
        <br>
        <br>
<b-container fluid >
  <b-row class="mt-2 ">
    <b-col sm="2">
      <label for="input-large">Kode Aktivasi</label>
    </b-col>
    <b-col sm="5">
      <b-form-input
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-large">Produk id</label>
    </b-col>
    <b-col sm="5">
      <b-form-select v-model="selected" :options="options">
      </b-form-select>
    </b-col>
  </b-row>
   <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Title</label>
    </b-col>
    <b-col sm="5">
      <b-form-input
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Deskripsi</label>
    </b-col>
    <b-col sm="5">
      <b-form-textarea
        id="input-small"
        size="sm"
      ></b-form-textarea>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">ISBN</label>
    </b-col>
    <b-col sm="5">
      <b-form-input
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
    <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Author</label>
    </b-col>
    <b-col sm="5">
      <b-form-select v-model="selected" :options="options">
      </b-form-select>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Tahun Terbit</label>
    </b-col>
    <b-col sm="5">
      <b-form-input
      type="number"
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
    <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Jumlah Halaman</label>
    </b-col>
    <b-col sm="5">
      <b-form-input
       type="number"
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
    <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Jenjang</label>
    </b-col>
    <b-col sm="5">
      <b-form-select v-model="selected" :options="options">
      </b-form-select>
    </b-col>
  </b-row>
    <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Koleksi</label>
    </b-col>
    <b-col sm="5">
      <b-form-select v-model="selected" :options="options">
      </b-form-select>
    </b-col>
  </b-row>
   <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Tipe Buku</label>
    </b-col>
    <b-col sm="5">
    <b-form-select v-model="selected" :options="options">
      </b-form-select>
    </b-col>
  </b-row>
   <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Type Koleksi</label>
    </b-col>
    <b-col sm="5">
     <b-form-select v-model="selected" :options="options">
      </b-form-select>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Kategori ID</label>
    </b-col>
    <b-col sm="5">
      <b-form-select v-model="selected" :options="options">
      </b-form-select>
    </b-col>
  </b-row>
   <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Variasi ID</label>
    </b-col>
    <b-col sm="5">
      <b-form-select v-model="selected" :options="options">
      </b-form-select>
    </b-col>
  </b-row>
   <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Type isi</label>
    </b-col>
    <b-col sm="5">
      <b-form-select v-model="selected" :options="options">
      </b-form-select>
    </b-col>
  </b-row>
   <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Stok</label>
    </b-col>
    <b-col sm="5">
      <b-form-input
       type="number"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Duration</label>
    </b-col>
    <b-col sm="5">
      <b-form-input
       type="number"
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Cover</label>
    </b-col>
    <b-col sm="5">
      <b-form-file
        id="textarea-small"
        size="sm"
      ></b-form-file>
    </b-col>
  </b-row>
  <!-- <b-row class="mt-2">
    <b-col sm="2">
      <label for="textarea-small">Status</label>
    </b-col>
    <b-col sm="5">
<b-dropdown id="dropdown" text="Pilihan Status" variant="outline-secondary" class="m-2">
    <b-dropdown-item href="#">Aktif</b-dropdown-item>
    <b-dropdown-item href="#">Tidak Aktif</b-dropdown-item>
  </b-dropdown>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="2">
      <label for="textarea-small">Date</label>
    </b-col>
    <b-col sm="3">
      <div>
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
    <p>{{ value }}</p>
  </div>
    </b-col>
  </b-row> -->
  <b-row class="mt-3">
        <b-col cols="6"></b-col>
        <b-col cols="6">
               <div>
    <b-col sm="10">
       <b-button v-b-modal.modal-1 class="float-right ml-2" variant="success">Tambah</b-button>

  <b-modal id="" title="Tambah Produk">
     <b-alert variant="success" show>Produk berhasil disimpan!</b-alert>
     </b-modal>
        </b-col>
     </div>
       <div>
    <b-col sm="10">
       <b-button v-b-modal.modal-1 class="float-right ml-2" variant="outline-secondary">Edit</b-button>

  <b-modal id="modal-1" title="Edit Produk">
     <b-alert variant="success" show>Produk berhasil diedit!</b-alert>
     </b-modal>
        </b-col>
     </div>
          </b-col>
    </b-row>
</b-container> 
    
    
    </div>
</template>
<script>
  export default {
      auth: 'guest',
      
      layout: "Menu",
      data() {
      return {
        selected: null,
        options: [
          { value: null, text: '' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' }
        ]
      }
    }

  };
  </script>