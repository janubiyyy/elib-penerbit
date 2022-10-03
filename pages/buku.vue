<template>
  <div class="row mt-3=">
       <h4>Produk Buku</h4>
         <b-col sm="10">
       <b-button v-b-modal.modal-1 class="float-right ml-2" variant="primary">Tambah</b-button>

  <b-modal id="modal-1" title="Tambah Produk">
   <b-container fluid>
  <b-row>
    <b-col sm="6">
      <label for="textarea-small">ID</label>
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
      <label for="input-large">Kode Aktivasi</label>
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
      <label for="input-large">Produk id</label>
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
      <label for="input-small">Title</label>
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
      <label for="input-small">ISBN</label>
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
      <label for="input-small">Model</label>
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
      <label for="input-small">Brand</label>
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
      <label for="input-small">Tahun Terbit</label>
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
      <label for="input-small">Jumlah Halaman</label>
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
      <label for="input-small">Jenjang</label>
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
      <label for="input-small">Koleksi</label>
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
      <label for="input-small">Tipe Buku</label>
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
      <label for="input-small">Type Koleksi</label>
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
      <label for="input-small">Kategori ID</label>
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
      <label for="input-small">Variasi ID</label>
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
      <label for="input-small">Type isi</label>
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
      <label for="input-small">Stok</label>
    </b-col>
    <b-col sm="6">
      <b-form-input
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="6">
      <label for="input-small">Duration</label>
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
      <label for="input-small">Cover</label>
    </b-col>
    <b-col sm="6">
      <b-form-input
        id="textarea-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="6">
      <label for="textarea-small">Status</label>
    </b-col>
    <b-col sm="6">
<b-dropdown id="dropdown" text="Pilihan Status" variant="outline-secondary" class="m-2">
    <b-dropdown-item href="#">Aktif</b-dropdown-item>
    <b-dropdown-item href="#">Tidak Aktif</b-dropdown-item>
  </b-dropdown>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="6">
      <label for="textarea-small">Date</label>
    </b-col>
    <b-col sm="6">
      <div>
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
    <p>{{ value }}</p>
  </div>
    </b-col>
  </b-row>
  <b-row class="mt-3">
        <b-col cols="6"></b-col>
        <b-col cols="6">
        </b-col>
    </b-row>
</b-container> 
  </b-modal>
  <b-modal id="modal-2" title="Edit Produk">
   <b-container fluid>
  <b-row>
    <b-col sm="6">
      <label for="textarea-small">ID</label>
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
      <label for="input-large">Kode Aktivasi</label>
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
      <label for="input-large">Produk id</label>
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
      <label for="input-small">Title</label>
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
      <label for="input-small">ISBN</label>
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
      <label for="input-small">Model</label>
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
      <label for="input-small">Brand</label>
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
      <label for="input-small">Tahun Terbit</label>
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
      <label for="input-small">Jumlah Halaman</label>
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
      <label for="input-small">Jenjang</label>
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
      <label for="input-small">Koleksi</label>
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
      <label for="input-small">Tipe Buku</label>
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
      <label for="input-small">Type Koleksi</label>
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
      <label for="input-small">Kategori ID</label>
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
      <label for="input-small">Variasi ID</label>
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
      <label for="input-small">Type isi</label>
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
      <label for="input-small">Stok</label>
    </b-col>
    <b-col sm="6">
      <b-form-input
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="6">
      <label for="input-small">Duration</label>
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
      <label for="input-small">Cover</label>
    </b-col>
    <b-col sm="6">
      <b-form-input
        id="textarea-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="6">
      <label for="textarea-small">Status</label>
    </b-col>
    <b-col sm="6">
<b-dropdown id="dropdown" text="Pilihan Status" variant="outline-secondary" class="m-2">
    <b-dropdown-item href="#">Aktif</b-dropdown-item>
    <b-dropdown-item href="#">Tidak Aktif</b-dropdown-item>
  </b-dropdown>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="6">
      <label for="textarea-small">Date</label>
    </b-col>
    <b-col sm="6">
      <div>
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
    <p>{{ value }}</p>
  </div>
    </b-col>
  </b-row>
  <b-row class="mt-3">
        <b-col cols="6"></b-col>
        <b-col cols="6">
        </b-col>
    </b-row>
</b-container> 
  </b-modal>
<b-modal id="modal-3" title="Delete Produk">
       <b-alert show variant="danger">Produk Berhasil dihapus! </b-alert>
  </b-modal>
<b-modal id="modal-4" title="Simpan Produk">
      <b-alert show variant="success">Produk Berhasil disimpan!</b-alert>
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
  </b-table>
<b-row class="mt-3">
        <b-col cols="12">
            <b-button v-b-modal.modal-4 class="float-right ml-2" variant="success">Simpan dan tampilkan</b-button>
            <b-button v-b-modal.modal-4 class="float-right " variant="outline-secondary">Edit dan Simpan</b-button>
        </b-col>
    </b-row>
    </div>
    
</template>
<script>
  export default {
     auth: 'guest',
      
      layout: "Menu",
     data() {
      return {
         selected: null,
        items: [{No:'1', ProdukID:'700125325', Judul:'Pacor Story; Seberapa Berat Sih Hidup Lo?',Beban:'4 kg',Kategori:'Novel',Stok:'5'}, 
        {No:'2', ProdukID:'990125325', Judul:'Bumi Manusia – Pramoedya Ananta Toer',Beban:'1 Kg',Kategori:'Novel',Stok:'4'},
       {No:'3', ProdukID:'0771253254', Judul:'Cantik Itu Luka – Eka Kurniawan',Beban:'2 Kg',Kategori:'Novel',Stok:'3'},
       {No:'4', ProdukID:'511125325', Judul:' Lelaki Harimau – Eka Kurniawan',Beban:'3 Kg',Kategori:'Novel',Stok:'9'},
      {No:'5', ProdukID:'990125325', Judul:'Bumi Manusia – Pramoedya Ananta Toer',Beban:'1 Kg',Kategori:'Novel',Stok:'4'},
     {No:'6', ProdukID:'511125325', Judul:' Lelaki Harimau – Eka Kurniawan',Beban:'3 Kg',Kategori:'Novel',Stok:'9'}],
       
        
    fields: ["No","ProdukID", "Judul","Beban", "Kategori","Stok","status","actions"]
      }
    },
    computed: {
       editItem(item) { console.log(item); },
      btnStates() {
        return this.buttons.map(btn => btn.state)
      }
    }
  };
  </script>