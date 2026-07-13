package com.cognizant.microserviceswithapigatewayloan.controller;



import com.cognizant.microserviceswithapigatewayloan.model.Loan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {

    @GetMapping("/loan")
    public Loan getLoan() {

        return new Loan(
                501,
                "Home Loan",
                2500000
        );
    }
}
