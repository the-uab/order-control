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
        $this->db->select('t_item.ID_ITEM,t_item.DESCRIPCION, tpar_categoria_item.ID_CATEGORIA_ITEM,tpar_categoria_item.DESCRIPCION AS CATEGORIA, PRECIO, FECHA_COMPRA,STOCK');    
        $this->db->from('t_item');
        $this->db->join('tpar_categoria_item','t_item.ID_CATEGORIA_ITEM = tpar_categoria_item.ID_CATEGORIA_ITEM');
        return $this->db->get();
    
    //return $this->db->get($this->tbl_categoryProduct);
  }
  // add new product
  function save( $descripcion,$id_categoria,$precio,$fecha,$stock){
    $data = array(
               'DESCRIPCION' => $descripcion,
               'ID_CATEGORIA_ITEM' => $id_categoria,
               'PRECIO' => $precio,
               'FECHA_COMPRA' => $fecha,
               'STOCK' => $stock
            );
    $this->db->insert($this->tbl_product, $data);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update product by id
  function update($id, $descripcion,$id_categoria,$precio,$fecha,$stock){
    $data = array(
               'DESCRIPCION' => $descripcion,
               'ID_CATEGORIA_ITEM' => $id_categoria,
               'PRECIO' => $precio,
               'FECHA_COMPRA' => $fecha,
               'STOCK' => $stock
            );
    $this->db->where('ID_ITEM', $id);
    $this->db->update($this->tbl_product, $data);
  }
  // delete product by id
  function delete($id){
    $this->db->where('ID_ITEM', $id);
    $this->db->delete($this->tbl_product);
  }
  function get_by_id($id){
    $this->db->where('ID_ITEM', $id);
    return $this->db->get($this->tbl_product);
  }
}
