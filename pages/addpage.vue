<template>
    <div>
      <h4>Detail Produk</h4>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="General">
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
    <!-- <b-col sm="4">
        <b-text>Supplier</b-text>
   <b-form-select v-model="selected" :options="options" :select-size="1"></b-form-select>
      </b-col> -->
      <b-col sm="6">
          <b-text>Merk</b-text>
  <b-form-select v-model="selected" :options="options1" :select-size="1"></b-form-select>
      </b-col>
      <b-col sm="6">
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
    

  <b-modal id="modal-2" title="Tambah Data">
     <b-alert variant="success" show>Data berhasil disimpan</b-alert>
     </b-modal>
        </b-col>
        <br>
      </b-tab>
      
        <b-tab title="Gambar " active >
            <label for="input-large"><b>Cover Utama</b></label>
              <b-row>
   <b-avatar square size="9rem">
         <b-avatar square v-if="url" :src="url" class="foto-profil" size="10rem" />
        
</b-avatar>

    <b-col mt="1">
    <input
                id="idInputImage"
                type="file"
                name="image"
                @change="onChange"
                class="form_input mt-5"
              />
                <!-- <b-button   class=" mt-1" squared variant="info"> Tambah Gambar</b-button> -->
            
</b-col>
              <!-- <b-col>
      <label for="input-large"><b>Cover Tambahan</b></label>
    </b-col>
 <div >
   <b-avatar square size="9rem">
         <b-avatar square v-if="url" :src="url" class="foto-profil" size="10rem" />
        
</b-avatar>
    </div>
     -->
    <!-- <b-col mt="1">
    <input
                id="idInputImage"
                type="file"
                name="image"
                @change="onChange"
                class="form_input mt-5"
              />   -->
                 <!-- <b-button   class=" mt-1" squared variant="info"> Tambah Gambar</b-button> -->
        <!-- </b-col> -->
      <br>
        <br>
        </b-row>
      </b-tab>
        <!-- <b-tab title="Links">
        <b-text><b>Links :</b></b-text>
          <b-form-select v-model="selected" :options="options3"></b-form-select>
<b-table class="mt-4" responsive :items="items1" :fields="fields">
  <template v-slot:cell(Aksi)="{ item }">
    <span>
      <b-btn v-b-modal.modal-3 variant="danger">Delete</b-btn>
    </span>

  </template>
  </b-table>
        </b-tab> -->
          <b-tab title="Promo Tambahan">
            <b-text><b>Promo Tambahan: </b></b-text>
<br>
  <br>
    <b-col sm="13">
      <b-text>Keterangan</b-text>
      <b-form-input vid="input-small" placeholder="Masukan Keterangan">
  
      </b-form-input>
    </b-col>

  <br>
  <b-row sm="6">
    <b-col sm="4">
      <b-text>Diskon (%)</b-text>
      <b-form-input vid="input-small" placeholder="Masukan Diskon">
      </b-form-input>
    </b-col>
    <b-col sm="4">
      <b-text>Harga Awal :</b-text>
      <b-form-input vid="input-small" placeholder="Masukan Harga Awal">
      </b-form-input>
    </b-col>
    <b-col sm="4">
      <b-text>Harga Setelah Diskon :</b-text>
      <b-form-input vid="input-small" placeholder="Masukan Harga Setelah Diskon">
      </b-form-input>
    </b-col>
  </b-row>
  <br>
  <b-row sm="10">
    <b-col sm="6">
      <b-text>Tanggal Mulai :</b-text>
      <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
    </b-col>
    <b-col sm="6">
      <b-text>Tanggal Akhir :</b-text>
        <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
    </b-col>
  </b-row>
  <br>
  <b-button variant="secondary">Clear</b-button>
  <b-button variant="success">Save</b-button>
  <b-table class="mt-4" responsive :items="items2" :fields="fields2">
    <template v-slot:cell(Operasi)="{ item }">
      <span>
        <b-btn v-b-modal.modal-2 variant="primary">Detail</b-btn>
      </span>
      <span>
        <b-btn v-b-modal.modal-3 variant="danger">Delete</b-btn>
      </span>
  
    </template>
  </b-table>


          </b-tab>
              <b-tab title="Flash Sale">
                <b-text><b>Promo Tambahan: </b></b-text>
              <br>
                <br>
      
              
                <br>
                <b-row sm="6">
                  <b-col sm="4">
                    <b-text>Diskon (%)</b-text>
                    <b-form-input vid="input-small" placeholder="Masukan Diskon">
                    </b-form-input>
                  </b-col>
                  <b-col sm="4">
                    <b-text>Harga Awal :</b-text>
                    <b-form-input vid="input-small" placeholder="Masukan Harga Awal">
                    </b-form-input>
                  </b-col>
                  <b-col sm="4">
                    <b-text>Harga Setelah Diskon :</b-text>
                    <b-form-input vid="input-small" placeholder="Masukan Harga Setelah Diskon">
                    </b-form-input>
                  </b-col>
                </b-row>
                <br>
                <b-row sm="10">
                  <b-col sm="4">
                    <b-text>Tanggal Mulai :</b-text>
                    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                  </b-col>
                  <b-col sm="4">
                    <b-text>Tanggal Akhir :</b-text>
                    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                  </b-col>
                  <b-col sm="4">
                    <b-text>Kuantitas :</b-text>
                    <b-form-input vid="input-small" placeholder="Masukan Kuantitas">
                    </b-form-input>
                  </b-col>
                </b-row>
                <br>
                <b-button variant="secondary">Clear</b-button>
                <b-button variant="success">Save</b-button>
                <b-table class="mt-4" responsive :items="items3" :fields="fields1">
                  <template v-slot:cell(Operasi)="{ item }">
                    <span>
                      <b-btn v-b-modal.modal-2 variant="primary">Detail</b-btn>
                    </span>
                    <span>
                      <b-btn v-b-modal.modal-3 variant="danger">Delete</b-btn>
                    </span>
              
                  </template>
                </b-table>
              
              
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
      items1: [{ Category: 'Buku Agama'},
        { Category: 'Buku Soal'},
        { Category: 'Buku Umum' },
        { Category: 'Perguruan Tinggi'},
        { Category: 'Buku Pelajaran'},
        { Category: 'MIPA'},
      ],
      fields: ["Aksi", "Category"], 
      items2: [{ No: '1', Keterangan: 'Edit tanggal', Discon: '15%', Harga: '5000', TanggalMulai: '15/09/2022', TanggalAkhir: '15/10/2022' },
        { No: '2', Keterangan: 'Tambahkan catatan', Discon: '10%', Harga: '10000', TanggalMulai: '29/09/2022', TanggalAkhir: '10/10/2022' },
        { No: '3', Keterangan: 'Tambahkan tanggal', Discon: '10%', Harga: '75000', TanggalMulai: '27/09/2022', TanggalAkhir: '25/10/2022' },
        { No: '4', Keterangan: 'Tambahkan discount', Discon: '25%', Harga: '5000', TanggalMulai: '25/09/2022', TanggalAkhir: '12/10/2022' },
      ],

      fields2: ["No", "Keterangan", "Discon", "Harga", "TanggalMulai", "TanggalAkhir" , "Operasi" ], 

      items3: [{ No: '1', Keterangan: 'Edit tanggal', Discon: '15%', Harga: '5000', TanggalMulai: '15/09/2022', TanggalAkhir: '15/10/2022', Stok: '1' },
        { No: '2', Keterangan: 'Tambahkan catatan', Discon: '10%', Harga: '10000', TanggalMulai: '29/09/2022', TanggalAkhir: '10/10/2022', Stok: '5' },
        { No: '3', Keterangan: 'Tambahkan tanggal', Discon: '10%', Harga: '75000', TanggalMulai: '27/09/2022', TanggalAkhir: '25/10/2022', Stok: '5' },
        { No: '4', Keterangan: 'Tambahkan discount', Discon: '25%', Harga: '5000', TanggalMulai: '25/09/2022', TanggalAkhir: '12/10/2022', Stok: '3' },
      ],

      fields1: ["No", "Keterangan", "Discon", "Harga", "TanggalMulai", "TanggalAkhir", "Stok", "Operasi"], 
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
      options3: [
        { value: null, text: 'Pilih Kategori' },
        { value: 'a', text: 'Buku Agama' },
        { value: 'b', text: 'Buku Pelajaran' },
        { value: 'c', text: 'Perguruan Tinggi' },
        { value: 'd', text: 'MIPA'},
        { value: 'e', text: 'Buku Umum' },
        { value: 'f', text: 'Buku Soal' },
        { value: 'g', text: 'Buku Seri' },
        { value: 'h', text: 'Buku SMP' },
      ],
       url: "",
imagesArray: null, 
    }
  },
  methods: {
      onChange(e) {
      this.imagesArray = e.target.files[0]
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
  } 
}
}
</script>