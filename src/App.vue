<template>
  <suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      Loading....
    </template>
  </suspense>
</template>

