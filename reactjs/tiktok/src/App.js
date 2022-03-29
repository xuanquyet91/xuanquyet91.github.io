import { useState } from 'react';
import './App.css';

const courses = [
  {
    id: 2,
    title: "HTML, CSS từ Zero đến Hero",
    slug: "html-css",
    description:
      "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
    thumbnail: "courses/2.png",
    content: null,
    preview_origin: "youtube",
    preview_youtube_id: "R6plN3FvzFY",
    preview_path: null,
    language: "html",
    syntax_highligh: "language-html",
    level: "Trình độ cơ bản",
    priority: 10,
    students_count: 72592,
    deleted_at: null,
    created_at: "2020-04-10T14:23:13.000000Z",
    updated_at: "2021-11-08T06:46:23.000000Z",
    thumbnail_cdn: "https://cdn.fullstack.edu.vn/f8-learning/courses/2.png"
  },
  {
    id: 1,
    title: "JavaScript Cơ Bản",
    slug: "javascript-co-ban",
    description:
      "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
    thumbnail: "courses/1.png",
    content: null,
    preview_origin: "youtube",
    preview_youtube_id: "0SJE9dYdpps",
    preview_path: null,
    language: "javascript",
    syntax_highligh: "language-javascript",
    level: "Trình độ cơ bản",
    priority: 30,
    students_count: 46697,
    deleted_at: null,
    created_at: "2020-06-10T14:23:13.000000Z",
    updated_at: "2021-11-08T06:57:49.000000Z",
    thumbnail_cdn: "https://cdn.fullstack.edu.vn/f8-learning/courses/1.png"
  },
  {
    id: 7,
    title: "Kiến Thức Nhập Môn",
    slug: "lessons-for-newbie",
    description:
      "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
    thumbnail: "courses/7.png",
    content: null,
    preview_origin: "youtube",
    preview_youtube_id: "M62l1xA5Eu8",
    preview_path: null,
    language: null,
    syntax_highligh: null,
    level: "Trình độ cơ bản",
    priority: 0,
    students_count: 36265,
    deleted_at: null,
    created_at: "2020-02-10T14:23:13.000000Z",
    updated_at: "2021-11-08T06:48:24.000000Z",
    thumbnail_cdn: "https://cdn.fullstack.edu.vn/f8-learning/courses/7.png"
  },
  {
    id: 3,
    title: "Responsive Với Grid System",
    slug: "responsive-web-design",
    description:
      "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
    thumbnail: "courses/3.png",
    content: null,
    preview_origin: "youtube",
    preview_youtube_id: "uz5LIP85J5Y",
    preview_path: null,
    language: "html",
    syntax_highligh: "language-html",
    level: "Trình độ cơ bản",
    priority: 20,
    students_count: 14897,
    deleted_at: null,
    created_at: "2020-05-10T14:23:13.000000Z",
    updated_at: "2021-11-08T06:33:41.000000Z",
    thumbnail_cdn: "https://cdn.fullstack.edu.vn/f8-learning/courses/3.png"
  }
]

function App() {

  function coursesChange() {
    for (var courseItem of courses) {
      console.log(
        courseItem.id,
        courseItem.thumbnail,
        courseItem.thumbnail_cdn,
        courseItem.students_count
        );
    }
    // console.log(courseItem);
  }
  coursesChange();
  return (
    <div className="App">
      <div>
        
        </div>
    </div>
  );
}

export default App;
