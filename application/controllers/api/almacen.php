<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Almacen extends REST_Controller
{
  function __construct()
  {
    // Construct our parent class
    parent::__construct();

    // load model
    $this->load->model('demoModel','',TRUE);
    // $this->load->model('personModel','',TRUE);
    // $this->load->model('categoriaModel','',TRUE);
    // $person = $this->personModel->getbyId('10');
    // $this->userModel->getbyId($person['id']);
  }

  function producto_get()
  {
    $persons = array(
      array('nombre'=>'boli', 'cantidad'=>100),
      array('nombre'=>'boli', 'cantidad'=>100)
    );

    $this->response($persons, 200);

  }

  function producto_post()
  {
    $input = (array)json_decode(file_get_contents("php://input"));
    $this->demoModel->save($input);
    $this->response($input, 200);
  }


  function session_post()
  {
    $input = (array)json_decode(file_get_contents("php://input"));
    print_r($input);
    session_start();
    $_SESSION['user'] = $input;
    $this->response($input, 200);
  }

  function session_get()
  {
    session_start();
    $this->response($_SESSION['user'], 200);
  }













  function login_post()
  {
    $user = array(array('email'=>'qwe@qwe.com', 'password'=>'123'));
    print_r($user);
    $input = (array)json_decode(file_get_contents("php://input"));
    print_r($input);
    // print_r($this->session);

    $newdata = array(
      'username'  => 'johndoe',
      'email'     => 'johndoe@some-site.com',
      'logged_in' => TRUE
    );

    $this->session->set_userdata($newdata);

    // $persons = $this->personModel->get_paged_list(100)->result();
    $persons = array('sss', 'sss');
    $this->response($persons, 200);
  }
  //
  // function person_post()
  // {
  //   $input = (array)json_decode(file_get_contents("php://input"));
  //   // save
  //   $person = $this->personModel->save($input);
  //   $this->response($person, 200); // 200 being the HTTP response code
  // }
}
