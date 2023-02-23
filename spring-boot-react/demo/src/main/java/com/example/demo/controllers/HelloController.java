package com.example.demo.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
public class HelloController {
	Logger logger = LoggerFactory.getLogger(HelloController.class);
	
//    @RequestMapping(value = "/index")
//    public String index() {
//       return "index";
//    }
    
    //Its index.html is under src/main/resources/templates
}


//By default Spring-Boot serves static content in src/main/resources:
	/*
	 * /META-INF/resources/ 
	 * /resources/ 
	 * /static/ 
	 * /public/
	 */


/*
 * ================ Template Engines ================ 
 * As well as REST web
 * services, you can also use Spring MVC to serve dynamic HTML content. Spring
 * MVC supports a variety of templating technologies, including Thymeleaf,
 * FreeMarker, and JSPs. Also, many other templating engines include their own
 * Spring MVC integrations.
 * 
 * Spring Boot includes auto-configuration support for the following templating
 * engines:
 * 
 * FreeMarker 
 * Groovy 
 * Thymeleaf 
 * Mustache
 * 
 * If possible, JSPs should be avoided. There are several known limitations when
 * using them with embedded servlet containers.
 * 
 * When you use one of these templating engines with the default configuration,
 * your templates are picked up automatically from src/main/resources/templates.
 */

//https://docs.spring.io/spring-boot/docs/2.0.3.RELEASE/reference/html/boot-features-developing-web-applications.html