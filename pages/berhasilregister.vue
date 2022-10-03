<template>
  <div>
    <div class="body-login">
      <div class="d-flex justify-content-center">
        <div class="card-login col-md-4 col-12 mt-5 ">
         
          <center>
            <img src="~/assets/image/jaja-.png" alt="Logo Brand" />
            <b-alert show variant="success">
              <br>
              <a href="#" class="alert-link">Behasil Registrasi silahkan login!</a>
              <br>
              <br>
            </b-alert>
           
            <h3 class="mt-3 text-left">Login Admin</h3>
          </center>
          
          <form>
            <label>Email</label>
            <input type="email" class="form_login" placeholder="Masukkan Email Anda" />

            <div class="grid-1-show-password">
              <div>
                <label>Password</label>
                <input id="password" type="password" autocomplete="off" class="form_login"
                  placeholder="Masukkan Password Anda" />
              </div>
            </div>

            <!-- <div class="text_lupaPassword">
              <NuxtLink
                to="/Halaman/Lupa_Password"
                style="text-decoration: none"
                >Lupa Password ?</NuxtLink
              >
            </div> -->

            <!-- <button type="button" class="btn-login">
              LOGIN
            </button>

            <a
              href="https://ebooks.eurekabookhouse.co.id/auth/choose"
              target="_blank"
              style="text-decoration: none"
              ><div class="daftar-btn">Register</div></a
            > -->
          </form>

          <div class="login-anggota">
            <div class="grid-3">
              <nuxt-link to="/Dashboard" style="text-color: #21ff21" class="btn-anggota">
                <div>Login</div>
              </nuxt-link>

              <NuxtLink to="/register" style="text-decoration: none" class="btn-bantuan">
                <div>Register</div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- <div class="card-right">
          <div class="katalog-ebook">
            <div class="head-katalog">
              <div class="grid-2">
                <div><h2>Katalog eBook</h2></div>
                <div class="align-right">
                  <NuxtLink to="/Halaman/Katalog" class="all-view"
                    >Lihat Semua</NuxtLink
                  >
                </div>
              </div>
            </div>

            <div class="grid-2-book">
              <div class="lihat-semua">
                <NuxtLink to="/Halaman/Katalog"
                  ><img
                    src="~/assets/image/banner-katalog.png"
                    alt="Banner Katalog E-book"
                /></NuxtLink>
              </div>
              <div class="card-ebook">
                <div
                  class="card-buku"
                  v-for="(book, index) in books"
                  :key="index"
                >
                  <div
                    @click="detailBooks(book.productId)"
                    style="text-decoration: none; cursor: pointer"
                  >
                    <img
                      :src="
                        'https://cdn.eurekabookhouse.co.id/ebh/product/all/' +
                        book.image
                      "
                      alt="Gambar Buku E-book"
                    />
                    <p>Detail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab3">
            <div class="grid-3">
              <div class="card-tab">
                <a
                  href="https://erlanggaonline.com/survey"
                  target="_blank"
                  style="text-decoration: none"
                >
                  <h2>Survei Kepuasan Pelanggan</h2>
                  <img
                    src="~/assets/image/survei-kepuasan.png"
                    alt="Survei Kepuasan"
                  />
                  <p>Klik Disini</p>
                </a>
              </div>
              <div class="card-tab">
                <NuxtLink
                  to="/Halaman/Buku_Kunjungan/"
                  style="text-decoration: none"
                >
                  <h2>
                    Buku Kunjungan <br />
                    e-Library
                  </h2>
                  <img
                    src="~/assets/image/buku-kunjungan.png"
                    alt="Buku Kunjungan"
                  />
                  <p>Klik Disini</p>
                </NuxtLink>
              </div>
              <div class="card-tab">
                <NuxtLink
                  to="/Halaman/Video_Tutorial"
                  style="text-decoration: none"
                >
                  <h2>
                    Video Tutorial <br />
                    e-Library
                  </h2>
                  <img
                    src="~/assets/image/video-tutorial.png"
                    alt="Video Tutorial"
                  />
                  <p>Klik Disini</p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="garis-atas"></div>
  </div>
</template>
<script>
export default {
  auth: 'guest',
};
</script>

<style scoped>
@import "boxicons";
@import "@/assets/css/home.css";
</style>