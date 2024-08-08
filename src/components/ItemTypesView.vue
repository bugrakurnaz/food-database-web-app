<template>
  <div class="uk-offcanvas-content">
    <div class="uk-container">
      <h1>Item Types</h1>

      <!-- Form to create or update an ItemType -->
      <form @submit.prevent="saveItemType">
        <div class="uk-margin">
          <input
            class="uk-input"
            type="text"
            v-model="itemType.name"
            placeholder="Item Type Name"
            required
          />
        </div>
        <div class="uk-margin">
          <input
            class="uk-input"
            type="text"
            v-model="itemType.unit"
            placeholder="Unit"
            required
          />
        </div>
        <button class="uk-button uk-button-primary" type="submit">
          {{ isEditing ? 'Update' : 'Add' }} Item Type
        </button>
        <button
          v-if="isEditing"
          class="uk-button uk-button-default"
          @click="cancelEdit"
        >
          Cancel
        </button>
      </form>

      <hr />

      <!-- List of ItemTypes -->
      <ul class="uk-list uk-list-divider">
        <li v-for="type in itemTypes" :key="type.id">
          {{ type.name }} ({{ type.unit }})
          <button
            class="uk-button uk-button-small uk-button-primary"
            @click="editItemType(type)"
          >
            Edit
          </button>
          <button
            class="uk-button uk-button-small uk-button-danger"
            @click="deleteItemType(type.id)"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const itemTypes = ref([]);
const itemType = ref({ id: null, name: '', unit: '' });
const isEditing = ref(false);

const apiEndpoint = "http://" + window.location.hostname + ":8079/api"; 
const itemTypesEndpoint = `${apiEndpoint}/itemTypes`;

async function fetchItemTypes() {
  try {
    const response = await axios.get(itemTypesEndpoint);
    itemTypes.value = response.data;
  } catch (error) {
    console.error('Failed to fetch item types:', error);
  }
}

async function saveItemType() {
  try {
    if (isEditing.value) {
      await axios.put(`${itemTypesEndpoint}/${itemType.value.id}`, itemType.value, 
      Headers= {
        'Content-Type': 'application/json'
      });
    } else {
      await axios.post(itemTypesEndpoint, itemType.value);
    }
    fetchItemTypes();
    resetForm();
  } catch (error) {
    console.error('Failed to save item type:', error);
  }
}

function editItemType(type) {
  itemType.value = { ...type };
  isEditing.value = true;
}

function cancelEdit() {
  resetForm();
}

async function deleteItemType(id) {
  try {
    await axios.delete(`${itemTypesEndpoint}/${id}`);
    fetchItemTypes();
  } catch (error) {
    console.error('Failed to delete item type:', error);
  }
}

function resetForm() {
  itemType.value = { id: null, name: '', unit: '' };
  isEditing.value = false;
}

onMounted(fetchItemTypes);
</script>

<style scoped>
.uk-container {
  margin-top: 20px;
}

button {
  margin-left: 10px;
}
</style>
