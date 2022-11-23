<template>
  <div class="home">
    <!-- 列表渲染 books -->
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
// 引入 axios
import axios from "axios"; // 😊

export default {
  name: "home",
  data() {
    return {
      books: [], // 创建接收容器
    };
  },
  mounted() {
    // 请求接口
    axios.get("http://localhost:3001/books").then((res) => {
      this.books = res.data;
    });
  },
};
</script>

<style scoped></style>
