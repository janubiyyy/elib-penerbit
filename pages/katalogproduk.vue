<template>
 <div class="row mt-3">
       <h4>Katalog List Produk</h4>
         <b-col sm="12">

    <b-col sm="8">
    </b-col>
    
   <b-row sm="6">
    <b-col sm="4">
   <b-form-input vid="input-small"
        placeholder="Pencarian">
      </b-form-input>
      </b-col>
      <b-col sm="4">
   <b-form-select v-model="selected" :options="options" >
      </b-form-select>
      </b-col>
      <b-col sm="4">
    <b-form-select v-model="selected" :options="options1" :select-size="1"></b-form-select>
      </b-col>
     </b-row>
     <br>
     <b-row sm="6">
    <b-col sm="3">
        <NuxtLink to="/add" class="link-a">
    <b-button variant="info">Add Product</b-button>
</NuxtLink>


      </b-col>
      <b-col sm="7">
   
      </b-col>
       <b-col sm="2">
 
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
      
        <NuxtLink to="/addpage" class="link-a">
      <span>
        <b-btn variant="warning">Edit</b-btn></span></NuxtLink>
       
      <span><b-btn v-b-modal.modal-4 variant="danger">Delete</b-btn> 
 
    </span>
      
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
    <template v-slot:cell(Gambar)="{ item }">
      
      <span>
         <div>
  <img :src='item.gambar == "" ? "https://lpm.ulm.ac.id/image/desain/empty.jpg" : item.gambar ' fluid alt="Fluid image"  width="100" height="80">
         </div>
       
</span>
      
    </template>
  </b-table>
      <b-modal id="modal-4" title="Delete Produk">
        <b-alert show variant="danger">Yakin ingin menghapus</b-alert>
      </b-modal>

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
      selected: null  ,
      options: [
        { value: null, text: 'Judul Buku' },
        { value: 'a', text: 'Kode Buku' },
        { value: 'b', text: 'Penerbit B' }
      ],
       selected: null,
      options1: [
        { value: null, text: 'Pilih Kategori' },
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
 
      
      //  pages1: ['?page=1', '?page=2', '?page=3'],
      items: [{ No: '1', gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabv65ybJT3SFxXyS1Egu5-VQV4U0UAAKoIF_XGMmVaKyRaZ0s22R3yw9pUnlOY4BRo18&usqp=CAU', Produk:'17 Produk', NamaProduk:'Sepanjang Tahun', Model:"KB-1196110300069",Penerbit:"Gramedia ", Harga:"15.000 ", Points:"0 ",Stok:'5',Diskon:'50%'}, 
        { No: '2', gambar: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80', Produk:'5 Produk ', NamaProduk:'Rintangan Jalan', Model:"KB-1196110300069",Penerbit:"Gramedia ",Harga:"10.000 ", Points:"0 ",Stok:'10',Diskon:'10%'},
        { No: '3', gambar: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', Produk:'107 Produk', NamaProduk:'Kamus Indonesia', Model:"KB-1196110300069", Penerbit:"Gramedia ",Harga:"5.000 ", Points:"0 ",Stok:'8',Diskon:'30%'},
        { No: '4', gambar: 'https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',NamaProduk:'Boardbook Pertamaku: Hewan', Model:"KB-1196110300069", Penerbit:"Gramedia ",Harga:"55.000 ",Points:"0 ",Stok:'3',Diskon:'20%'},
        { No: '5', gambar: 'https://images.unsplash.com/photo-1558901357-ca41e027e43a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', Produk:'18 Produk', NamaProduk:'Boardbook Pertamaku: Hewan', Model:"KB-1196110300069", Penerbit:"Gramedia ",Harga:"51.000 ",Points:"0 ",Stok:'5',Diskon:'15%'},
        { No: '6', gambar: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',Produk:'12 Produk', NamaProduk:'	365 Aktivitas ', Model:"KB-1196110300069", Penerbit:"Gramedia ",Harga:"25.000 ",Points:"0 ", Stok:'2',Diskon:'60%'}],
   
     
      
  fields: ["No","Gambar", "NamaProduk", "Model", "Penerbit", "Harga","Points",  "Produk", "Stok","Diskon","status","actions"], 
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