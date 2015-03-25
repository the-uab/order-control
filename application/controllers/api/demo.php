<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
* Example
*
* This is an example of a few basic user interaction methods you could use
* all done with a hardcoded array.
*
* @package		CodeIgniter
* @subpackage	Rest Server
* @category	Controller
* @author		Phil Sturgeon
* @link		http://philsturgeon.co.uk/code/
*/

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH.'/libraries/REST_Controller.php';

class Demo extends REST_Controller
{
  function __construct()
  {
    // Construct our parent class
    parent::__construct();

    // load model
    $this->load->model('personModel','',TRUE);
  }

  function person_get()
  {
    $persons = $this->personModel->get_paged_list(100)->result();
    $this->response($persons, 200);
  }

  function person_post()
  {
    $input = (array)json_decode(file_get_contents("php://input"));
    // save
    $person = $this->personModel->save($input);
    $this->response($person, 200); // 200 being the HTTP response code
  }

  function user_delete()
  {
  }

  function users_get()
  {
  }


  public function send_post()
  {
  }


  public function send_put()
  {
  }
}
