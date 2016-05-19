package camt.se331.shoppingcart.config;
<<<<<<< HEAD

=======
  
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127

import camt.se331.shoppingcart.common.SerializableResourceBundleMessageSource;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.*;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.UrlBasedViewResolver;

import java.util.Locale;

@EnableWebMvc
<<<<<<< HEAD
@Configuration
=======
@Configuration 
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
@ComponentScan(basePackages = {"camt.se331.shoppingcart"})
@EnableAspectJAutoProxy
@Import({PersistenceContext.class})
public class AppConfig extends WebMvcConfigurerAdapter {
<<<<<<< HEAD
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowCredentials(false)
//                .allowedOrigins("*")
//                .allowedMethods("PUT", "POST", "GET", "OPTIONS", "DELETE")
//                .exposedHeaders("Authorization", "Content-Type");
//    }
=======
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").addResourceLocations("/views/").setCachePeriod(31556926);
        registry.addResourceHandler("/js/**").addResourceLocations("/views/js/").setCachePeriod(31556926);
        registry.addResourceHandler("/bower_components/**").addResourceLocations("/views/bower_components/");
    }

>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }
<<<<<<< HEAD

    // The localization here
    @Bean
    public LocaleResolver localeResolver() {
=======
	@Bean  
    public UrlBasedViewResolver setupViewResolver() {  
        UrlBasedViewResolver resolver = new UrlBasedViewResolver();  
        resolver.setPrefix("/views/");  
        resolver.setSuffix(".jsp");  
        resolver.setViewClass(JstlView.class);  
        return resolver;  
    }

    // The localization here
    @Bean
    public LocaleResolver localeResolver(){
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
        final SessionLocaleResolver ret = new SessionLocaleResolver();
        ret.setDefaultLocale(new Locale("en"));
        return ret;
    }

    @Bean
<<<<<<< HEAD
    public MessageSource messageSource() {
=======
    public MessageSource messageSource(){
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
        final SerializableResourceBundleMessageSource ret = new SerializableResourceBundleMessageSource();
        ret.setBasename("classpath:message");
        ret.setDefaultEncoding("UTF-8");
        return ret;
    }

    @Override
<<<<<<< HEAD
    public void addInterceptors(InterceptorRegistry registry) {
=======
    public void addInterceptors(InterceptorRegistry registry){
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
        registry.addInterceptor(localeChangeInterceptor());
    }

    @Bean
    public HandlerInterceptor localeChangeInterceptor() {
        LocaleChangeInterceptor localChangeInterceptor = new LocaleChangeInterceptor();
        localChangeInterceptor.setParamName("lang");
        return localChangeInterceptor;
    }

<<<<<<< HEAD
//    @Bean
//    public MultipartResolver filterMultipartResolver() {
//        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
//        multipartResolver.setMaxUploadSize(1000000);
//        return multipartResolver;
//    }
=======
    @Bean
    public MultipartResolver multipartResolver(){
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
        multipartResolver.setMaxUploadSize(20000000);
        return multipartResolver;
    }
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127

}
