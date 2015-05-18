<?php

class Persons extends CI_Model {
  // table name
  private $tbl_person= 'person';

  function Person(){
    parent::Model();
  }

  // get persons with paging
  function getAll(){
    
    return $this->db->get($this->tbl_person);
  }

}
