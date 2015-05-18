<?php

class Persons extends CI_Model {

  // table name
  private $tbl= 'person';

  // get persons with paging
  function getAll()
  {
    return $this->db->get($this->tbl);
  }

  // add new person
  function save($person)
  {
    $this->db->insert($this->tbl, $person);
  }

  function delete($id)
  {
    $this->db->where('id_person', $id);
    $this->db->delete($this->tbl);
  }

}
