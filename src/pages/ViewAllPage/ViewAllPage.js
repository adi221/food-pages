import React, { useEffect } from 'react';
import './ViewAllPage.scss';
import { useParams } from 'react-router-dom';
import { SingleItemPreview } from '../../components';
import { useAppContext } from '../../context/app_context';

const ViewAllPage = () => {
  const { filterData, filteredData } = useAppContext();
  const { type } = useParams();

  useEffect(() => {
    filterData(type);
  }, [type]);

  return (
    <div className='view-all-page page'>
      <h1>{type.split('%20').join(' ')}</h1>
      {filteredData.length > 0 ? (
        <div className='view-all-page__main'>
          {filteredData.map(card => {
            return <SingleItemPreview key={card.id} {...card} />;
          })}
        </div>
      ) : (
        <h2>
          Your Seach Query Didn't Much Our Items, Please Try Different Search
        </h2>
      )}
    </div>
  );
};

export default ViewAllPage;
