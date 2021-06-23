import React, {useCallback, useMemo} from 'react';
import './BookList.css';
import BookListItem from './BookListItem.js';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadMoreBooks } from "../ducks/booklist"

function useQuery() {

  console.log(new URLSearchParams(useLocation().search).get("genre"))
  return new URLSearchParams(useLocation().search);
}

function BookList() {
  
  const booklistStore = useSelector((state)=>state).booklist
  const dispatch = useDispatch()

  const query = useQuery();

  const genre = query.get("genre")

  const onClick = useCallback(
  () => {
    dispatch(loadMoreBooks({amount: 10}));
  },
  [],
);

const GetAllBooksRender = React.memo(({title, img, id, author}) => {
  return <BookListItem title={title} img={img} id={id} author={author} ></BookListItem>  
}, [])

  return (
    <div className="book-list__parent">
      <div className="book-list">
        {
          booklistStore.list.filter(book=>{
            if(genre === null){
              return true
            }
            return book.types.includes(genre)
          }).map((book)=>{
            return <GetAllBooksRender title={book.title} author={book.author} id={book.id} img={book.img}/>
          })
        }
        <div className="book-list__load-more--button">
          <button type="button" onClick={onClick}>
              Load More
          </button>
        </div>
      </div>
    </div>
    );
}

export default BookList;
