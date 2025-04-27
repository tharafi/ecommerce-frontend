import React from 'react'
import Card from '../card/Card';
import useFetch from '../../hooks/useFetch';

const List = ({ subCats, maxPrice, sort, catId }) => {

  // تحضير فلاتر الـ sub-categories لو كانت موجودة
  const subCatFilter = subCats.map(
    (subCat) => `&[filters][sub_categories][id][$in]=${subCat}`
  ).join("");

  // رابط الـ API كامل
  const { data, loading, error } = useFetch(
    `/products?populate=*` +
    `&[filters][categories][id][$eq]=${catId}` +
    `&[filters][price][$lte]=${maxPrice}` +
    `${subCatFilter}` +
    `${sort ? `&sort=price:${sort}` : ""}`
  );
  

  return (
    <div className='flex items-center gap-[32px] justify-between flex-wrap'>
      {loading ? "loading" : data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List;
