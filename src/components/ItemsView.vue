<template>
  <div class="uk-container">
    <h1>Items</h1>

    <!-- Form to create or update an Item -->
    <form @submit.prevent="saveItem">
      <div class="uk-margin">
        <input class="uk-input" type="text" v-model="item.name" placeholder="Item Name" required />
      </div>
      <div class="uk-margin">
        <select class="uk-select" v-model="item.typeId" required>
          <option value="" disabled>Select Item Type</option>
          <option v-for="type in itemTypes" :key="type.id" :value="type.id">
            {{ type.name }}
          </option>
        </select>
      </div>
      <button class="uk-button uk-button-primary" type="submit">
        {{ isEditing ? 'Update' : 'Add' }} Item
      </button>
      <button v-if="isEditing" class="uk-button uk-button-default" @click="cancelEdit">
        Cancel
      </button>
    </form>
    <hr />

    <!-- List of Items -->
    <ul class="uk-list uk-list-divider">
      <li v-for="item in items" :key="item.id">
        {{ item.name }} (Type: {{ getItemTypeName(item.typeId) }})
        <button class="uk-button uk-button-small uk-button-primary" @click="editItem(item)">
          Edit
        </button>
        <button class="uk-button uk-button-small uk-button-danger" @click="deleteItem(item.id)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const item = ref({
  id: null,
  name: '',
  typeId: '',
});
const items = ref([]);
const itemTypes = ref([]);
const isEditing = ref(false);
const apiEndpoint = "http://" + window.location.hostname + ":8079/api"; 
const itemsEndpoint = `${apiEndpoint}/items`;
const itemTypesEndpoint = `${apiEndpoint}/itemTypes`;

// Fetch all item types and items on component mount
async function fetchItemTypes() {
  try {
    const response = await axios.get(itemTypesEndpoint);
    itemTypes.value = response.data;
  } catch (error) {
    console.error('Failed to fetch item types:', error);
  }
}

async function fetchItems() {
  try {
    const response = await axios.get(itemsEndpoint);
    items.value = response.data;
  } catch (error) {
    console.error('Failed to fetch items:', error);
  }
}

// Save item (create or update)
async function saveItem() {
  try {
    if (isEditing.value) {
      await axios.put(`${itemsEndpoint}/${item.value.id}`, item.value);
    } else {
      await axios.post(itemsEndpoint, item.value);
    }
    fetchItems();
    resetForm();
  } catch (error) {
    console.error('Failed to save item:', error);
  }
}

// Edit item
function editItem(selectedItem) {
  item.value = { ...selectedItem };
  isEditing.value = true;
}

// Cancel edit
function cancelEdit() {
  resetForm();
}

// Delete item
async function deleteItem(id) {
  try {
    await axios.delete(`${itemsEndpoint}/${id}`);
    fetchItems();
  } catch (error) {
    console.error('Failed to delete item:', error);
  }
}

// Get item type name by ID
function getItemTypeName(typeId) {
  const type = itemTypes.value.find((type) => type.id === typeId);
  return type ? type.name : 'Unknown';
}

// Reset form to initial state
function resetForm() {
  item.value = {
    id: null,
    name: '',
    typeId: '',
  };
  isEditing.value = false;
}

onMounted(() => {
  fetchItemTypes();
  fetchItems();
});
</script>

<style scoped>
.uk-container {
  margin-top: 20px;
}

button {
  margin-left: 10px;
}
</style>
