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
  // add new product
  function save($product){
    $this->db->insert($this->tbl_product, $product);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update product by id
  function update($id, $product){
    $this->db->where('id', $id);
    $this->db->update($this->tbl_product, $product);
  }
  // delete product by id
  function delete($id){
    $this->db->where('id', $id);
    $this->db->delete($this->tbl_product);
  }
  function get_by_id($id){
    $this->db->where('id', $id);
    return $this->db->get($this->tbl_product);
  }
}