package camt.se331.shoppingcart.service;

import camt.se331.shoppingcart.entity.Image;
import camt.se331.shoppingcart.entity.Product;

import java.util.List;

/**
 * Created by Dto on 2/7/2015.
 */
public interface ProductService {
    List<Product> getProducts();
    Product getProduct(Long id);
    Product addProduct(Product product);
    Product deleteProduct(Long id);
    Product updateProduct(Product product);
    List<Product> getProductsByName(String name);
<<<<<<< HEAD
    Product addImage (Product product,Image image);
=======
    Product addImage (Product product, Image image);
    Product deleteImage(Product product, Long imageid);

>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
}
