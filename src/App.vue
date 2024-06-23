<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header section -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <!-- Title in the toolbar -->
        <q-toolbar-title class="font-title">
          Fatih Masrukhan
        </q-toolbar-title>

        <!-- Spacer -->
        <q-space />

        <!-- Button group for navigation -->
        <q-btn-group flat>
          <q-btn
            v-for="(title, index) in titles"
            :key="index"
            :label="title.text"
            :href="title.link"
            target="_blank"
            class="font-nav-btn"
          />
        </q-btn-group>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <!-- Your page content goes here -->
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        { text: 'judul 1', link: 'https://fatih-project-cv.netlify.app/' },
        { text: 'judul 2', link: 'https://fatih-project-tugas2.netlify.app/' },
        { text: 'judul 3', link: 'https://tugas3-pbk-2420640.netlify.app/' },
        { text: 'judul 4', link: 'https://github.com/pathannnn/tugas4-pbk-2420640' },
        { text: 'judul 5', link: 'https://tugas5-2420640-fatihmasrukhan.netlify.app/' },
        { text: 'judul 6', link: 'https://tugas6-2420640-fatihmasrukhan.netlify.app/' },
        { text: 'judul 7', link: 'https://tugas7-pbk-2420640.netlify.app' }
      ]
    };
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

/* Global styles */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

/* Header styles */
.bg-primary {
  background-color: #ffd700; /* Gold background color */
}

.text-white {
  color: #ffffff; /* White text color */
}

.font-title {
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.font-nav-btn {
  font-size: 0.875rem; /* 14px */
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #ffffff; /* White text color */
}

/* Button group styles */
.q-btn-group.flat {
  margin-left: 20px; /* Space between buttons */
}

/* Page container styles (if needed) */
.q-page-container {
  padding: 20px; /* Padding around content */
}

/* Optional: Add more styles as per your design */
</style>

