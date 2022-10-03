<!-- Please remove this file from your project -->
<template>
  <div class="body">
    <input type="checkbox" name="" id="sidebar-toggle" />
    <div class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-flex">
          <NuxtLink to="/Pengelola/Dashboard"
            ><img src="~/assets/image/jaja-.png"  width="4" alt="Logo Brand"
          /></NuxtLink>
        </div>
      </div>

      <div class="sidebar-main">
        <div class="sidebar-menu">
          <ul>
            <li>
              <NuxtLink to="/Dashboard" class="link-a">
                <i class="bx bx-home"></i>Dashboard
              </NuxtLink>
            </li>
          </ul>
            <!-- <ul>
            <li>
              <NuxtLink to="/buku" class="link-a">
                <i class="bx bx-blanket"></i>Buku
              </NuxtLink>
            </li>
          </ul> -->
           <!-- <ul>
            <li>
              <NuxtLink to="/produk" class="link-a">
                <i class='bx bxs-backpack'></i>Produk
              </NuxtLink>
            </li>
          </ul> -->
          <ul>
            <li>
              <NuxtLink to="/transaksi" class="link-a">
                <i class='bx bx-line-chart'></i> Transaksi
              </NuxtLink>
            </li>
          </ul>
          <div class="dropdown ">
            <div class="dropbtn">
              <i class='bx bx-book-alt icon-side'></i> Katalog

              <i class="bx bx-chevron-down icon-chevron"></i>
            </div>
            <div class="dropdown-content">
              <!-- <NuxtLink to="/kategoriutama" class="list-dropdown">
                <i class="bx bx-chevron-right"></i> Kategori (menu)
              </NuxtLink> -->

              <NuxtLink
                to="/katalogproduk"
                class="list-dropdown"
              >
                <i class="bx bx-chevron-right"></i> Produk
              </NuxtLink>
               <NuxtLink
                to="/author"
                class="list-dropdown"
              >
                <i class="bx bx-chevron-right"></i> Author
              </NuxtLink>
              

            </div>
             
          </div>
          

          <!-- <ul>
            <li>
              <NuxtLink to="/Dashboard" class="link-a">
                <i class="bx bx-home"></i>Shopping
              </NuxtLink>
            </li>
          </ul> -->

          <!-- ====== -->
        </div>
      </div>
    </div>
    <div class="main-content">
      <header>
        <div class="menu-toggle">
          <label for="sidebar-toggle"
            ><i class="bx bx-menu-alt-left"></i
          ></label>
        </div>

        <div class="img-header">
          <NuxtLink to="/Pengelola/Dashboard"
            ><img src="~/assets/image/logo-pustakawan.png" alt="Logo Brand"
          /></NuxtLink>
        </div>

        <div class="dropdown-notif">
          <div class="icon-notif" >
            <i class="bx bx-bell bx-tada"></i>
          </div>
          <div class="dropdown-pesan">
            <div class="grid-2">
              <div><h3>Informasi</h3></div>
              <div class="align-right">
                <NuxtLink to="/Pengelola/Info" class="status-notif-primary">
                  <span>Lihat Semua</span></NuxtLink
                >
              </div>
            </div>
            <div >
              <div class="mb-2">
                <p style="font-size: 13px">
                   Meminjam Buku
                  <b
                    ><span style="color: #396aff"></span></b
                  >
                  Selama 
                </p>
                <small style="color: #7380ec; font-size: 11px">ddawd</small>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown-user">
          <div class="profile" @click="menuToggleProfil">
            <img src="https://i.pravatar.cc/300" alt="Foto Profil" />
          </div>
          <div class="dropdown-profil">
            <h3>
             <br /><br /><span></span>
            </h3>
            <ul>
              <li>
                <i class="bx bx-user"></i
                ><NuxtLink to="/editprofile"
                  >Edit Profile <span class="beta-success">Beta</span></NuxtLink
                >
              </li>
              <li>
                <i class="bx bx-log-out"></i><NuxtLink to="/login">Logout</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <Nuxt />
        <a href="#" class="ignielToTop"></a>
      </main>

      <footer>
        <div>
          <i class="bx bx-copyright"></i> 2021 Copyright by
          <NuxtLink to="/Dashboard">Elibu Backend</NuxtLink>
        </div>
      </footer>
    </div>
    <label for="sidebar-toggle" class="body-label"></label>
  </div>
</template>

<script src="~/assets/js/Menu.js"></script>

<style scoped>
@import "boxicons";
@import "@/assets/css/menu.css";
</style>