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
       // $this->load->model('categoryProduct','',TRUE);
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
            $this->response($product, 200);
        }
        else
        {
            $this->response(array('error' => 'no se encontro el producto'), 404);
        }
    }
    function produt_put()
    {
     $this->response("no hay nada",200);
    }
    function product_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $id_producto=$input['ID_ITEM'];
        $descripcion = $input['DESCRIPCION'];
            $id_categoria = $input['ID_CATEGORIA_ITEM'];
            $precio = $input['PRECIO'];
            $fecha = $input['FECHA_COMPRA'];
            $stock = $input['STOCK'];
        if($id_producto>0){
            

            $this->products->update($id_producto,$descripcion,$id_categoria,$precio,$fecha,$stock);
            $this->response($id_producto, 200);

        }else{
            $product=$this->products->save($descripcion,$id_categoria,$precio,$fecha,$stock);
            $this->response($product, 200);
        }
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
	var_dump($this->put('ID_ITEM'));
	}
}
