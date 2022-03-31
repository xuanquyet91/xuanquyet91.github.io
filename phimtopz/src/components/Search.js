import React from 'react'
// import {RiArrowRightSFill} from 'react-icons/ri'

const Search = () => {
  const listFilter= ['Sắp xếp','Loại', 'Thể Loại', 'Quốc Gia', 'Năm']
  const listItem= ['Mới Cập Nhật','Năm xuất bản', 'Phổ Biến', 'Năm']

  return (
    <div className='search'>
      <div className='search__top'>
        <div className='search__top__arrow'>
          <p>Trang Chủ </p>
          <span className="right"></span>
        </div>
        <div className='search__top__arrow'>
          <p>Thể loại </p>
          <span className="right"></span>
        </div>
        <div className='search__top__arrow'>
          <p>Cập nhật </p>
          <span className="right"></span>
        </div>
        {/* <p>Danh Sách</p>
        <p>Phim Âm Nhạc</p> */}
      </div>
      <div className='search__bottom'>
        <div className='search__bottom__filter'>
          {listFilter.map((item,index)=>(
            <select name={item} key={index}>
              {listItem.map((elm, index)=> (
               <option key={index}>{elm}</option>
              )
              )}
            </select>
          ))}
          {/* <select>
            <option>1</option>
            <option>2</option>
          </select> */}
        </div>
        <div className='search__bottom__button'>
          <button>Lọc Phim</button>
        </div>
      </div>
    </div>
  )
}

export default Search