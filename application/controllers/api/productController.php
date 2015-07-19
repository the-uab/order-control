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
        parent::__construct();
        $this->load->model('products','',TRUE);
    }
    function product_get()
    {
        $products = $this->products->get_with_category()->result();
        if($products){
            $this->response($products, 200);
        }
        else{
            $this->response(array('error' => 'producto no encontrado'), 404);
        }
    }

    function product_put()
  {
    try {
       $ID_ITEM=$this->get('ID_ITEM');
       $input_values = $this->put();
       $item = $this->products->update($ID_ITEM, $input_values);
       $this->response($item, 200);
    } catch (Exception $e) {
      // $this->response(array("error" => $e->getMessage()), 404);
    }
  }
    function product_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $product=$this->products->save($input);
        $this->response($product, 200);
    }
    function product_delete()
    {
        $userId = $this->get('ID_ITEM');
        $this->products->delete($userId);
        $this->response(array('param'=>$userId), 200);
    }

	public function send_post()
	{
		var_dump($this->request->body);
	}

	public function send_put()
	{
		var_dump($this->put('foo'));
	}
}
