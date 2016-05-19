package camt.se331.shoppingcart.service;

<<<<<<< HEAD
import camt.se331.shoppingcart.entity.Product;
=======
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
import camt.se331.shoppingcart.entity.ShoppingCart;

import java.util.Date;
import java.util.List;

/**
 * Created by Dto on 2/7/2015.
 */
public interface ShoppingCartService {
    ShoppingCart findById(Long id);
    List<ShoppingCart> getShoppingCarts();
    List<ShoppingCart> getShoppingCartBetween(Date stateDate, Date stopDate);
    ShoppingCart addShoppingCart(ShoppingCart shoppingCart);
    ShoppingCart deleteShoppingCart(ShoppingCart shoppingCart);
<<<<<<< HEAD
    ShoppingCart addSelectedProduct(ShoppingCart shoppingCart, Product product);

=======
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
}
