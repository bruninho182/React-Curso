import React from 'react';

const Fragment = ({propFragments}) => {
  return ( 
  <>
        <h2>Primeiro Título</h2>
        <h3>Segundo Título</h3>
        <h4>{propFragments}</h4>
    </>
  );
};  

export default Fragment