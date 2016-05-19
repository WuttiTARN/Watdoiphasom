package camt.se331.shoppingcart.config;

import camt.se331.shoppingcart.dao.ShoppingCartDao;
import camt.se331.shoppingcart.entity.*;
import camt.se331.shoppingcart.repository.ProductRepository;
import camt.se331.shoppingcart.repository.ShoppingCartRepository;
import camt.se331.shoppingcart.repository.UserRepository;
import camt.se331.shoppingcart.service.ImageUtil;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.*;

/**
 * Created by Dto on 2/11/2015.
 */
@Component
@Profile("db.init")
public class DatabaseInitializationBean implements InitializingBean {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    ShoppingCartRepository shoppingCartRepository;

    @Autowired
    UserRepository userRepository;
    @Override
    public void afterPropertiesSet() throws Exception {
        Product[] initProduct = {
                new Product(1l, "Brown rice", "XXXXXXXXXXXXXXXX","", 6900.00, ImageUtil.resizeImage(ImageUtil.getImage("pic/x1.png"), 500)),
                new Product(2l, "GABA rice", "XXXXXXXXXXXXXXXX","", 34000.00, ImageUtil.resizeImage(ImageUtil.getImage("pic/x2.png"), 200)),
                new Product(3l, "White rice", "XXXXXXXXXXXXXXXX","", 44000.00, ImageUtil.resizeImage(ImageUtil.getImage("pic/x3.png"), 200)),
                new Product(4l, "Stevia tea", "XXXXXXXXXXXXXXXX","", 10.00, ImageUtil.resizeImage(ImageUtil.getImage("pic/x4.png"), 200)),
                new Product(5l, "White chrysanthemum tea", "XXXXXXXXXXXXXXXX","", 200.00, ImageUtil.resizeImage(ImageUtil.getImage("pic/x5.png"), 200)),
                new Product(6l, "Red banana ship", "XXXXXXXXXXXXXXXX","", 150.00, ImageUtil.resizeImage(ImageUtil.getImage("pic/x6.png"), 200)),
                new Product(7l, "Yellow banana ship", "XXXXXXXXXXXXXXXX","", 26000.00, ImageUtil.resizeImage(ImageUtil.getImage("pic/x7.png"), 200)),
                new Product(8l, "Hugpa coffee", "XXXXXXXXXXXXXXXX","", 24000.00, ImageUtil.resizeImage(ImageUtil.getImage("pic/x8.png"), 200)),
                new Product(9l, "Haai-Sap Haai-Soy", "XXXXXXXXXXXXXXXX","", 2000.00, ImageUtil.resizeImage(ImageUtil.getImage("pic/x9.png"), 200)),
                new Product(10l, "Champoo", "XXXXXXXXXXXXXXXX","", 300000.00, ImageUtil.resizeImage(ImageUtil.getImage("pic/x10.png"), 200)),

        };
        productRepository.save(Arrays.asList(initProduct));


        ShoppingCart shoppingCart = new ShoppingCart();
        List<SelectedProduct> selectedProducts = new ArrayList<>();
        SelectedProduct[] initSelectedProduct = {
                //new SelectedProduct(initProduct[2], 5),
                //new SelectedProduct(initProduct[4], 2),
                //new SelectedProduct(initProduct[1], 1),
        };
        selectedProducts.addAll(Arrays.asList(initSelectedProduct));
        Calendar calendar = new GregorianCalendar(2015, 4, 7);
        shoppingCart.setSelectedProducts(selectedProducts);
        shoppingCart.setPurchaseDate(calendar.getTime());
        shoppingCart.setId(1L);
        shoppingCartRepository.save(shoppingCart);

        // add user
        Role adminRole = new Role("admin");
        Role retailsRole = new Role("retails");
        Role wholesaleRole = new Role("wholesale");


        User admin = new User();
        admin.setName("admin");
        admin.setUsername("admin");
        admin.setEmail("admin@gmail.com");
        admin.setPassword("88888888");
        Set<Role> roles = new HashSet<>();
        roles.add(adminRole);
        admin.setRoles(roles);

        User retails = new User();
        retails.setName("retails");
        retails.setUsername("retails");
        retails.setEmail("retails@gmail.com");
        retails.setPassword("88888888");
        Set<Role> roles2 = new HashSet<>();
        roles2.add(retailsRole);
        retails.setRoles(roles2);

        User wholesale = new User();
        wholesale.setName("wholesale");
        wholesale.setUsername("wholesale");
        wholesale.setEmail("wholesale@gmail.com");
        wholesale.setPassword("88888888");
        Set<Role> roles3 = new HashSet<>();
        roles3.add(wholesaleRole);
        wholesale.setRoles(roles3);

        userRepository.save(admin);
        userRepository.save(retails);
        userRepository.save(wholesale);
        admin.setRoles(roles);
        retails.setRoles(roles2);
        wholesale.setRoles(roles3);
    }
}
