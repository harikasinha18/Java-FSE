package com.cognizant.countryservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @GetMapping("/country")
    public Country getCountry() {
        return new Country("IN", "India");
    }

    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {

        if (code.equalsIgnoreCase("IN")) {
            return new Country("IN", "India");
        } else if (code.equalsIgnoreCase("US")) {
            return new Country("US", "United States");
        } else if (code.equalsIgnoreCase("JP")) {
            return new Country("JP", "Japan");
        }

        return null;
    }
}