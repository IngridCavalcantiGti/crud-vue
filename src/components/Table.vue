 <template>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'"><a>action</a></template>
    </template>
  </a-table>
</template>
