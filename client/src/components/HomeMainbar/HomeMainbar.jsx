import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomeMainbar.css';
import QuestionList from './QuestionList';
import Loading from './Loading';

import search from '../../assets/search-solid.svg'

const HomeMainbar = () => {
  const location = useLocation();
  const user = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const questionsList = useSelector((state) => state.questionsReducer);

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [tagCollection, setTagCollection] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");


  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage, ] = useState(10);

  


  const [, setLoading] = useState(true);
// ...
useEffect(() => {
  if (questionsList.data) {
    const allTags = questionsList.data.map((item) => item.questionTags).flat();
    const filteredTags = [...new Set(allTags)].filter((tag) =>
      ["python", "java", "C++", "HTML", "CSS", "datascience"].includes(tag)
    );
    const tagCollection = [...new Set(allTags)].includes("other")
      ? filteredTags
      : [...filteredTags, "other"];
    const filteredDataBySearch = questionsList.data.filter(
      (item) =>
        item.questionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.questionTags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setAllData(questionsList.data);
    setFilteredData(filteredDataBySearch);
    setTagCollection(tagCollection);
    setLoading(false);
  }
}, [questionsList, searchQuery]);




const handleFilter = (tag) => {
  if (tag === "other") {
    setFilteredData(
      allData.filter(
        (item) =>
          !["python", "java", "C++", "html", "HTML", "CSS", "css", "datascience", "PYTHON"].some((t) =>
            item.questionTags.includes(t)
          )
      )
    );
  } else {
    setFilteredData(
      allData.filter(
        (item) =>
          item.questionTags.some((t) => t.toLowerCase() === tag.toLowerCase()) &&
          (item.questionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.questionTags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())))
      )
    );
  }
  setCurrentPage(1);
};


  const paginate = (array, currentPage, questionsPerPage) => {
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  return array.slice(startIndex, endIndex);
};
  const paginatedData = paginate(filteredData, currentPage, questionsPerPage);




  const handleShowAll = () => {
    setFilteredData(allData);
    setCurrentPage(1);
  };

  const checkAuth = () => {
    if (user === null) {
      alert('login or signup to ask a question');
      navigate('/Auth');
    } else {
      navigate('/AskQuestion');
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === '/TopQuestions' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <form className='searchForm'>
        <input type="text" placeholder="Search by title or tag...." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <img src={search} alt="search" width="18" className='search-icon'/>
      </form>
      <div>
        <ul>
          <li>
            <button className='button' onClick={handleShowAll}>All</button>
          </li>
          {tagCollection.map((tag) => (
            <li key={tag}>
              <button className='button' onClick={() => handleFilter(tag)}>{tag}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {questionsList.data === null ? (
          <Loading />
        ) : (
          <>
            <p>{filteredData.length} questions</p>
            <QuestionList questionsList={paginatedData} />
          </>
        )}
      </div>
      
      <div className="pagination">
  {(() => {
    const totalPages = Math.ceil(filteredData.length / questionsPerPage);
    const buttonsToShow = 7; // Adjust this value to change how many buttons to show
    const midPoint = Math.floor(buttonsToShow / 2)+1;
    let startPage, endPage;

    if (totalPages <= buttonsToShow) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage - midPoint <= 1) {
      startPage = 1;
      endPage = buttonsToShow;
    } else if (currentPage + midPoint >= totalPages) {
      startPage = totalPages - buttonsToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - midPoint;
      endPage = currentPage + midPoint;
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pages;
  })()}
</div>


      {/* <div className="pagination">
  {(() => {
    const totalPages = Math.ceil(filteredData.length / questionsPerPage);
    const buttonsToShow = 10; // Adjust this value to change how many buttons to show
    const midPoint = Math.floor(buttonsToShow / 2);
    let startPage, endPage;

    if (totalPages <= buttonsToShow) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage - midPoint <= 1) {
      startPage = 1;
      endPage = buttonsToShow;
    } else if (currentPage + midPoint >= totalPages) {
      startPage = totalPages - buttonsToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - midPoint;
      endPage = currentPage + midPoint;
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pages;
  })()}
</div> */}




  </div>
  );
};

export default HomeMainbar;
