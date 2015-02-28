/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.iteratec.raspberrylight;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * This is the entry point for the service application.
 * <p>
 * @author Michael Haas
 */
@EnableAutoConfiguration
@Configuration
@ComponentScan("de.iteratec.raspberrylight")
public class RaspberryLight {

    public static void main(String[] args) {
        SpringApplication.run(RaspberryLight.class, args);
    }
}
