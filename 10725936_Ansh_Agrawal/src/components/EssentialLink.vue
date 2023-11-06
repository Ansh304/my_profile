<template>
  <q-item clickable :href="link"
  to="/ansh/AboutMe"
  exact
  >
    <q-item-section avatar>
        <q-avatar>
          <img src = "../assets/profile_icon.png">
        </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>My Profile</q-item-label>
    </q-item-section>
  </q-item>

  <q-item clickable :href="link"
  to="/ansh/education"
  exact
  >
    <q-item-section avatar>
        <q-avatar>
          <img src = "../assets/graduated.png">
        </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>My Education</q-item-label>
    </q-item-section>
  </q-item>

  <q-item clickable :href="link"
  to="/ansh/Technology"
  exact
  >
  
    <q-item-section avatar>
        <q-avatar>
          <img src = "../assets/avatar.png">
        </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>Technology I know</q-item-label>
    </q-item-section>
  </q-item>

  <q-item clickable :href="link"
  to="/ansh/extracurricular"
  >
    <q-item-section avatar>
        <q-avatar>
          <img src = "../assets/extracurricular.png">
        </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>Extra Curricular</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
})
</script>
