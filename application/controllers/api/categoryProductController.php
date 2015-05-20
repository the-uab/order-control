<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Example
 *
 * This is an example of a few basic categoryProduct interaction methods you could use
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

class categoryProductController extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('categoryProduct','',TRUE);
        // Configure limits on our controller methods. Ensure
        // you have created the 'limits' table and enabled 'limits'
        // within application/config/rest.php
        /*$this->methods['categoryProduct_get']['limit'] = 500; //500 requests per hour per categoryProduct/key
        $this->methods['categoryProduct_post']['limit'] = 100; //100 requests per hour per categoryProduct/key
        $this->methods['categoryProduct_delete']['limit'] = 50; //50 requests per hour per categoryProduct/key
        */

    }

    function categoryProduct_get()
    {
        $categoryProduct = $this->categoryProduct->getAll()->result();
        if($categoryProduct)
        {
            $this->response($categoryProduct, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'categoryProduct could not be found'), 404);
        }
        
    }

    function categoryProduct_post()
    {
        //$this->some_model->updatecategoryProduct( $this->get('id') );
        $message = array('id' => $this->get('id'), 'name' => $this->post('name'), 'email' => $this->post('email'), 'message' => 'ADDED!');

        $this->response($message, 200); // 200 being the HTTP response code
    }

    function categoryProduct_delete()
    {
    	//$this->some_model->deletesomething( $this->get('id') );
        /*$message = array('id' => $this->get('id'), 'message' => 'DELETED!');

        $this->response($message, 200); // 200 being the HTTP response code
        */
    }


	public function send_post()
	{
		//var_dump($this->request->body);
	}


	public function send_put()
	{
		//var_dump($this->put('foo'));
	}
}
