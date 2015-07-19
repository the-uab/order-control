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
    }
    function categoryProduct_get()
    {
        $categoryProduct = $this->categoryProduct->getAll()->result();
        if($categoryProduct){
            $this->response($categoryProduct, 200); // 200 being the HTTP response code
        }
        else{
            $this->response(array('error' => 'categoria de producto no encontrada'), 404);
        }
    }
    function categoryProduct_post()
    {
        $input = (array)json_decode(file_get_contents("php://input"));
        $product=$this->categoryProduct->save($input);
        $this->response($product, 200); // 200 being the HTTP response code
    }
    function categoryProduct_delete()
    {
        $id_categoria = $this->get('ID_CATEGORIA_ITEM');
        $this->categoryProduct->delete($id_categoria);
        $this->response(array('param'=>$id_categoria), 200);
    }
    function categoryProduct_update()
    {
        $this->response($categoryProduct,200);
    }
    function categoryProduct_put()
    {
        try {
           $id_categoria=$this->get('ID_CATEGORIA_ITEM');
           $input_values = $this->put();
           $item = $this->categoryProduct->update($ID_CATEGORIA_ITEM, $input_values);
           $this->response($item, 200);
        } catch (Exception $e) {
          // $this->response(array("error" => $e->getMessage()), 404);
        }
        $userId = $this->get('ID_CATEGORIA_ITEM');
        $this->categoryProduct->delete($userId);
        $this->response(array('param'=>$userId), 200);
    }
	public function send_post()
	{
		var_dump($this->request->body);
	}

}
