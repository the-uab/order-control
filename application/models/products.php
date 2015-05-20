<?php

class Products extends CI_Model {
	  // table name
  private $tbl_product= 't_item';

  function Products(){
    //parent::Model();
    parent::__construct();
  }

  // get products with paging
  function getAll(){
    
    return $this->db->get($this->tbl_product);
  }
    function get_with_category(){
      $this->db->select('t_item.ID_ITEM,t_item.DESCRIPCION as NOMBRE_PRODUCTO, tpar_categoria_item.ID_CATEGORIA_ITEM,tpar_categoria_item.DESCRIPCION AS CATEGORIA, PRECIO, FECHA_COMPRA,STOCK');    
        $this->db->from('t_item');
        $this->db->join('tpar_categoria_item', 't_item.ID_CATEGORIA_ITEM = tpar_categoria_item.ID_CATEGORIA_ITEM');
        
        return $this->db->get();
    
    //return $this->db->get($this->tbl_categoryProduct);
  }
  // add new product
  function save($product){
    $this->db->insert($this->tbl_product, $product);
    //para mostrar en el postman
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update product by id
  function update($id, $product){
    $this->db->where('ID_ITEM', $id);
    $this->db->update($this->tbl_product, $product);
  }
  // delete product by id
  function delete($id)
  {
    $this->db->where('ID_ITEM', $id);
    $this->db->delete($this->tbl_product);
  }
  function get_by_id($id){
    $this->db->where('ID_ITEM', $id);
    return $this->db->get($this->tbl_product);
  }
}
