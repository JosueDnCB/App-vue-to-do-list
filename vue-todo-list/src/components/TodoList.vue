<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import type { Ref } from 'vue'
import ListItem from './ListItem.vue'

type Item = {
  id: number
  title: string
  checked: boolean
}

const storageItems: Ref<Item[]> = ref([])

const fetchListItems = async (): Promise<void> => {
  const res = await fetch('http://localhost:3001/listItems')
  const data = await res.json()
  storageItems.value = data
}

const updateItem = async (item: Item): Promise<void> => {
  const updatedItem = { ...item, checked: !item.checked }

  const res = await fetch(`http://localhost:3001/listItems/${item.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ checked: updatedItem.checked }),
  })

  if (res.ok) {
    const index = storageItems.value.findIndex((i) => i.id === item.id)
    if (index !== -1) {
      storageItems.value[index] = updatedItem
    }
  } else {
    console.error('Error updating item:', await res.text())
  }
}

const sortedList = computed(() =>
  [...storageItems.value].sort((a, b) => Number(a.checked) - Number(b.checked))
)

onMounted(fetchListItems)
</script>

<template>
  <ul>
    <li
      v-for="item in sortedList"
      :key="item.id"
    >
      <ListItem
        :is-checked="item.checked"
        @click.prevent="updateItem(item)"
      >
        {{ item.title }}
      </ListItem>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
}
li {
  margin: 0.4rem 0;
}
</style>




    

   
