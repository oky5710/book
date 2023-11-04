import React, {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [searchWord, setSearchWord] = useState<string>("개발");
  const [bookList, setBookList] = useState<any[]>([]);
  console.log(bookList);
  return (
    <div className="App">

      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value)
        }}/>
      <button type={"button"} onClick={async () => {
        const list = await axios.get(`/ttb/api/ItemSearch.aspx?ttbkey=ttboky57100838001&Query=${searchWord}&SearchTarget=Book&output=js&maxResults=10`);
        setBookList(JSON.parse(list.data.replace(/[\\;]/g, '')).item);
      }}>검색
      </button>
      <ul>
        {
          bookList.map((book) => {
            return <li>
              <img src={book.cover} alt=""/>
              {book.title}
            </li>;
          })
        }
      </ul>
    </div>
  );
}

export default App;
