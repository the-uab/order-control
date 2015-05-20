<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Example
 *
 * This is an example of a few basic product interaction methods you could use
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

class ProductController extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('products','',TRUE);
        $this->load->model('categoryProduct','',TRUE);
        // Configure limits on our controller methods. Ensure
        // you have created the 'limits' table and enabled 'limits'
        // within application/config/rest.php
        /*$this->methods['product_get']['limit'] = 500; //500 requests per hour per product/key
        $this->methods['product_post']['limit'] = 100; //100 requests per hour per product/key
        $this->methods['product_delete']['limit'] = 50; //50 requests per hour per product/key
        */

    }

    function product_get()
    {
        
        $product = $this->products->get_with_category()->result();
        if($product)
        {
            $this->response($product, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'product could not be found'), 404);
        }
        
    }

    function product_post()
    {
        //$this->some_model->updateproduct( $this->get('id') );
        $message = array('id' => $this->get('id'), 'name' => $this->post('name'), 'email' => $this->post('email'), 'message' => 'ADDED!');

        $this->response($message, 200); // 200 being the HTTP response code
    }

    function product_delete()
    {
    	//$this->some_model->deletesomething( $this->get('id') );
        /*$message = array('id' => $this->get('id'), 'message' => 'DELETED!');

        $this->response($message, 200); // 200 being the HTTP response code
        */
    }

    function products_get()
    {
        //$products = $this->some_model->getSomething( $this->get('limit') );
        /*$products = array(
			array('id' => 1, 'name' => 'Some Guy', 'email' => 'example1@example.com'),
			array('id' => 2, 'name' => 'Person Face', 'email' => 'example2@example.com'),
			3 => array('id' => 3, 'name' => 'Scotty', 'email' => 'example3@example.com', 'fact' => array('hobbies' => array('fartings', 'bikes'))),
		);

        if($products)
        {
            $this->response($products, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Couldn\'t find any products!'), 404);
        }*/
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
