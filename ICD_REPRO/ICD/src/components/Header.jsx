import React, { useState } from 'react';
import {
  ArrowLeftOutlined, 
} from '@ant-design/icons'


const Header = () => {
  return (
    <div>
        <h2 icon={<ArrowLeftOutlined/>}>Lista de unidades de distribuição</h2>
        <h1 className='h1-h'>ICD ECOMMERCE</h1>
        <h3>informações detalhadas</h3>
        <button>Salvar</button>
    </div>
  )
}

export default Header