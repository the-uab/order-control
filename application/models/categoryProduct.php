<?php

class CategoryProduct extends CI_Model {
	private $tbl_categoryProduct= 'tpar_categoria_item';

  function CategoryProduct(){
    parent::__construct();
  }

  // get categoryProducts with paging
  function getAll(){
    
    return $this->db->get($this->tbl_categoryProduct);
  }

  // add new categoryProduct
  function save($categoryProduct){
    $this->db->insert($this->tbl_categoryProduct, $categoryProduct);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update categoryProduct by id
  function update($id, $categoryProduct){
    $this->db->where('ID_CATEGORIA_ITEM', $id);
    $this->db->update($this->tbl_categoryProduct, $categoryProduct);
    return $this->get_by_id($id);
  }
  // delete categoryProduct by id
  function delete($id){
    $this->db->where('ID_CATEGORIA_ITEM', $id);
    $this->db->delete($this->tbl_categoryProduct);
  }
  function get_by_id($id){
    $this->db->where('ID_CATEGORIA_ITEM', $id);
    return $this->db->get($this->tbl_categoryProduct);
  }
}
