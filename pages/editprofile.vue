<template>
<div>
    <div>
     <div class="text-center">
   <b-avatar size="10rem">
         <b-avatar v-if="url" :src="url" class="foto-profil" size="10rem" />
        
</b-avatar>
  <input
                id="idInputImage"
                type="file"
                name="image"
                @change="onChange"
                class="form_input mt-2"
              />
    </div>
    <div class=" m-5">
 <h4>Profile Settings</h4>
 <br>
 <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Nama Depan</label>
    </b-col>
    <b-col sm="8">
      <b-form-input
        id="input-small"
        size="sm"
        placeholder="Masukan nama depan"
      ></b-form-input>
    </b-col>
  </b-row>

  <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Nama Belakang</label>
    </b-col>
    <b-col sm="8">
      <b-form-input
        id="input-small"
        size="sm"
         placeholder="Masukan nama belakang"
      ></b-form-input>
    </b-col>
  </b-row>
   <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Phone Number</label>
    </b-col>
    <b-col sm="8">
      <b-form-input
      type="number"
        id="input-small"
        size="sm"
         placeholder="Masukan nomor handphone"
      ></b-form-input>
    </b-col>
  </b-row>
   <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Email</label>
    </b-col>
    <b-col sm="8">
      <b-form-input
        id="input-small"
        size="sm"
         placeholder="Masukan e-mail"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Tentang Anda</label>
    </b-col>
    <b-col sm="8">
      <b-form-textarea
        id="input-small"
        size="sm"
         placeholder="My Bio"
      ></b-form-textarea>
    </b-col>
  </b-row>
   <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Password</label>
    </b-col>
    <b-col sm="8">
      <b-form-input
        type="password"
        id="input-small"
        size="sm"
         placeholder="Masukan Password"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Password Baru</label>
    </b-col>
    <b-col sm="8">
      <b-form-input
        type="password"
        id="input-small"
        size="sm"
         placeholder="Masukan Password Baru Anda"
      ></b-form-input>
    </b-col>
  </b-row>
  
   <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Konfirmasi Password</label>
    </b-col>
    <b-col sm="8">
      <b-form-input
        type="password"
        id="input-small"
        size="sm"
         placeholder="Masukan Password Baru Anda"
      ></b-form-input>
    </b-col>
  </b-row>
   <b-row class="mt-2">
    <b-col sm="2">
      <label for="input-small">Jenis Kelamin</label>
    </b-col>
    
    <b-col sm="8">
      <b-form-select v-model="selected" :options="options">
      </b-form-select>
    </b-col>
  </b-row>
  <b-row class="mt-3">
        <b-col cols="6"></b-col>
        <b-col cols="6">
       <div>
    <b-col sm="10">
          <NuxtLink to="/Dashboard" class="link-a">
       <b-button  class="float-right ml-2" variant="success">Simpan Profile</b-button></NuxtLink>
        </b-col>
     </div>
          </b-col>
    </b-row>
    </div>
    
    </div>

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
          { value: null, text: 'Pilih jenis kelamin' },
          { value: 'a', text: 'Perempuan' },
          { value: 'b', text: 'Laki-laki' }
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