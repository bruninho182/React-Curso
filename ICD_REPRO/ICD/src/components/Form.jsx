import React from 'react';
import { Button, Form, Input, Radio, Tabs } from 'antd';


const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Informações cadastrais',
    children: <div className='formulario'>
      <Form.Item label="">
        <Input placeholder="Nome" />
      </Form.Item>
      <Form.Item label="">
        <Input placeholder="CNPJ" />
      </Form.Item>
      <Form.Item label="">
        <Input placeholder="Razão Social" />
      </Form.Item>
      <Form.Item label="">
        <Input placeholder="Número de Telefone" />
      </Form.Item>
      <Form.Item label="">
        <Input placeholder="Website" />
      </Form.Item>
    </div>
  },

  {
    key: '2',
    label: 'Endereço',
    children: 
    <div className='formulario'>
      <Form.Item label="Endereço">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Complemento">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Bairro">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="CEP">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Cidade">
        <Input placeholder="input placeholder" />
      </Form.Item>
    </div>
  },

  {
    key: '3',
    label: 'Contatos',
    children: 'Content of Tab Pane 3',
  },

  {
    key: '4',
    label: 'Contas Bancárias',
    children: 'Content of Tab Pane 3',
  },

  {
    key: '5',
    label: 'Logo',
    children: 'Content of Tab Pane 3',
  },
];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;


export default App;