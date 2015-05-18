<?php

class DemoModel extends CI_Model {
  // table name
  // private $demo= 'demo';

  // table name
  private $tbl_person= 'demo';

  function Person(){
    parent::Model();
  }
  // get number of persons in database
  function count_all(){
    return $this->db->count_all($this->tbl_person);
  }
  // get persons with paging
  function get_paged_list($limit = 10, $offset = 0){
    $this->db->order_by('id','asc');
    return $this->db->get($this->tbl_person, $limit, $offset);
  }
  // get person by id
  function get_by_id($id){
    $this->db->where('id', $id);
    $this->db->order_by('id', $id);
    return $this->db->get($this->tbl_person);
  }
  // add new person
  function save($person){
    $this->db->insert($this->tbl_person, $person);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update person by id
  function update($id, $person){
    $this->db->where('id', $id);
    $this->db->update($this->tbl_person, $person);
  }
  // delete person by id
  function delete($id){
    $this->db->where('id', $id);
    $this->db->delete($this->tbl_person);
  }
}
