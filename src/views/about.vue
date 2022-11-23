<template>
  <div class="about">
    <h1>这是一个关于页面</h1>
    <button @click="getBooks">获取图书</button>
    <ul>
      <li v-for="book in books" :key="book.bookName">
        <h2>{{ book.bookName }}</h2>
        <p>作者：{{ book.author }}</p>
        <p>价格：{{ book.price }}</p>
        <p>出版日期：{{ book.publishDate }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  data() {
    return {
      books: [],
    };
  },
  methods: {
    getBooks() {
      axios.get("http://localhost:3001/books").then((res) => {
        this.books = res.data;
      });
    },
  },
};
</script>

<style scoped></style>
