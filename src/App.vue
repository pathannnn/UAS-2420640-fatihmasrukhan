<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="bg-dark q-pa-md">
      <!-- Bagian kiri header -->
      <q-toolbar>
        <q-toolbar-title class="text-white">FATIH MASRUKHAN</q-toolbar-title>
        
        <!-- Bagian kanan header -->
        <div class="flex-grow-1 text-right">
          <q-btn v-for="item in tugasItems" :key="item.to" flat dense class="text-white q-ml-sm" :to="item.to" exact>
            Tugas {{ item.id }}
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tugasItems: [
        { id: 1, to: "/tugas1" },
        { id: 2, to: "/tugas2" },
        { id: 3, to: "/tugas3" },
        { id: 4, to: "/tugas4" },
        { id: 5, to: "/tugas5" },
        { id: 6, to: "/tugas6" },
        { id: 7, to: "/tugas7" },
      ],
    };
  },
};
</script>

<style scoped>
header{
  padding-left: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 1rem;
}
.bg-dark {
  background-color: #333;
}

.text-white {
  color: white;
}

.q-toolbar-title {
  font-size: 10rem;
  font-weight: bold;
}

.q-btn {
  margin-left: 10px;
}

.q-ml-sm {
  margin-left: 15px;
}

.flex-grow-1 {
  flex-grow: 1;
}

.text-right {
  text-align: right;
}
</style>
