<template>
    <div>
      <h4>Detail Produk</h4>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="General" active>
        <b-row class="mt-2 ">
    <b-col sm="2">
      <label for="input-large">Nama Produk</label>
    </b-col>
    <b-col sm="10">
      <b-form-input
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
   <b-row class="mt-2 ">
    <b-col sm="2">
      <label for="input-large">Tag Produk</label>
    </b-col>
    <b-col sm="10">
      <b-form-input
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
   <b-row class="mt-2 ">
    <b-col sm="2">
      <label for="input-large">SEO</label>
    </b-col>
    <b-col sm="10">
      <b-form-input
        id="input-small"
        size="sm"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2 ">
    <b-col sm="2">
      <label for="input-large">Deskription Tag Meta </label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="input-small"
        size="sm"
      ></b-form-textarea>
    </b-col>
  </b-row>
  <b-row class="mt-2 ">
    <b-col sm="2">
      <label for="input-large">Deskription </label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
       id="textarea-no-resize"
    rows="15"
    no-resize
      ></b-form-textarea>
    </b-col>
  </b-row>
      </b-tab>
       <b-col sm="12">    
  <b-modal id="modal-1" title="Tambah General">
     <b-alert variant="success" show>Berhasil disimpan</b-alert>
     </b-modal>
        </b-col>
        <br>
      <b-tab title="Data">
       <b-row sm="6">

      <b-col sm="6">
          <b-text>Merk</b-text>
  <b-form-select v-model="selected" :options="options1" :select-size="1"></b-form-select>
      </b-col>
      <b-col sm="5">
       <b-text>Model</b-text>
   <b-form-input vid="input-small"
    placeholder="Masukan model">
    
      </b-form-input>
      </b-col>
    </b-row>
    <br>
     <b-row sm="6">
    <b-col sm="4">
       <b-text>Author</b-text>
   <b-form-input 
   vid="input-small"
   placeholder="Masukan nama author">
      </b-form-input>
      </b-col>
        <b-col sm="4">
       <b-text>SKU</b-text>
   <b-form-input vid="input-small"
    placeholder="Masukan nomor SKU">
      </b-form-input>
      </b-col>
        <b-col sm="4">
       <b-text>ISBN</b-text>
   <b-form-input vid="input-small"
    placeholder="Masukan nomor ISBN"     
   >
      </b-form-input>
      </b-col>
      </b-row>
      <br>
      <b-row sm="8">
    <b-col sm="3">
       <b-text>Lokasi</b-text>
   <b-form-input 
   vid="input-small"
   placeholder="Masukan Lokasi">
      </b-form-input>
      </b-col>
        <b-col sm="3">
       <b-text>Minimum</b-text>
   <b-form-input vid="input-small"
    placeholder="Masukan minimum">
      </b-form-input>
      </b-col>
        <b-col sm="3">
       <b-text>Layout</b-text>
   <b-form-select v-model="selected" :options="options1" :select-size="1"></b-form-select>
      </b-col>
      <b-col sm="3">
       <b-text>Harga</b-text>
   <b-form-input vid="input-small"
    placeholder="Masukan Harga"     
   >
      </b-form-input>
      </b-col>
      </b-row>
      <br>
        <b-row sm="8">
    <b-col sm="3">
       <b-text>Point</b-text>
   <b-form-input 
   vid="input-small"
   placeholder="Masukan Point">
      </b-form-input>
      </b-col>
        <b-col sm="3">
       <b-text>Diskon (%)</b-text>
   <b-form-input vid="input-small"
    placeholder="Masukan Diskon">
      </b-form-input>
      </b-col>
       
      <b-col sm="3">
       <b-text>Berat (kg) </b-text>
   <b-form-input vid="input-small"
    placeholder="Masukan Berat"     
   >
      </b-form-input>
      </b-col>
      </b-row>
<br>
          <b-row sm="6">
    <b-col sm="4">
       <b-text>Jumlah Stok</b-text>
   <b-form-input 
   vid="input-small"
   placeholder="0">
  </b-form-input>
      </b-col>
        <b-col sm="4">
          <b-text>Tanggal Tersedia</b-text>
       <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
      </b-col>
        <b-col sm="4">
           <b-text>Status</b-text>
  <b-form-select v-model="selected" :options="options1" :select-size="1"></b-form-select>
      </b-col>
      </b-row>
<br>
<b-text>Dimensi (cm)</b-text>
     <b-row sm="6">
    <b-col sm="4">
   <b-form-input 
   vid="input-small"
   placeholder="Panjang">
      </b-form-input>
      </b-col>
        <b-col sm="4">
   <b-form-input vid="input-small"
    placeholder="Lebar">
      </b-form-input>
      </b-col>
        <b-col sm="4">
   <b-form-input vid="input-small"
    placeholder="Tinggi"     
   >
      </b-form-input>
      </b-col>
      </b-row>
      <br>
       <b-col sm="15">
          <NuxtLink to="/addpage" class="link-a">
       <b-button class="float-right ml-2" variant="success">Save Data</b-button>
</NuxtLink>
        </b-col>
        <br>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>
<script>
  export default {
     auth: 'guest',
      
      layout: "Menu",
       data() {
      return {
        selected: null  ,
        options: [
          { value: null, text: 'Pilih Supplier' },
        { value: 'a', text: 'Buku Pelajaran' },
          { value: 'b', text: 'Buku Umum' },
          { value: 'c', text: 'Buku Soal' },
          { value: 'd', text: 'Buku Import'},
          { value: 'e', text: 'Gaya Hidup' },
          { value: 'f', text: 'Mainan & Hobi' },
          { value: 'g', text: 'Buku Anak' },
          { value: 'h', text: 'Novel' },
          { value: 'i', text: 'Buku Murah' },
          { value: 'j', text: 'Perguran Tinggi'},
          { value: 'k', text: 'Olahraga dan Outdoor' },
          { value: 'l', text: 'ATK' },
           { value: 'm', text: 'Sayuran Organik' },
          { value: 'n', text: 'Paket Push' },
          { value: 'o', text: 'Buku Flat' },
          { value: 'p', text: 'Tour and Travel'},
          { value: 'q', text: 'Off. Merchandise' },
          { value: 'r', text: 'Eureka Mart' },
          { value: 's', text: 'Action Figure'},
          { value: 't', text: 'Ebook' },
          { value: 'u', text: 'DIY' },
          { value: 'V', text: 'ebook-elib' }
        ],
         selected: null  ,
        options1: [
          { value: null, text: 'Pilih Merk' },
         { value: 'a', text: 'Buku Pelajaran' },
          { value: 'b', text: 'Buku Umum' },
          { value: 'c', text: 'Buku Soal' },
          { value: 'd', text: 'Buku Import'},
          { value: 'e', text: 'Gaya Hidup' },
          { value: 'f', text: 'Mainan & Hobi' },
          { value: 'g', text: 'Buku Anak' },
          { value: 'h', text: 'Novel' },
          { value: 'i', text: 'Buku Murah' },
          { value: 'j', text: 'Perguran Tinggi'},
          { value: 'k', text: 'Olahraga dan Outdoor' },
          { value: 'l', text: 'ATK' },
           { value: 'm', text: 'Sayuran Organik' },
          { value: 'n', text: 'Paket Push' },
          { value: 'o', text: 'Buku Flat' },
          { value: 'p', text: 'Tour and Travel'},
          { value: 'q', text: 'Off. Merchandise' },
          { value: 'r', text: 'Eureka Mart' },
          { value: 's', text: 'Action Figure'},
          { value: 't', text: 'Ebook' },
          { value: 'u', text: 'DIY' },
          { value: 'V', text: 'ebook-elib' }
        ],
  }
}
  }
  </script>