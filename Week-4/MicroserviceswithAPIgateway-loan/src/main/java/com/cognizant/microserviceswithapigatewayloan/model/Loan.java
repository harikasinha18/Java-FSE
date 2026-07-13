package com.cognizant.microserviceswithapigatewayloan.model;



public class Loan {

    private int loanNumber;
    private String loanType;
    private double amount;

    public Loan() {
    }

    public Loan(int loanNumber, String loanType, double amount) {
        this.loanNumber = loanNumber;
        this.loanType = loanType;
        this.amount = amount;
    }

    public int getLoanNumber() {
        return loanNumber;
    }

    public void setLoanNumber(int loanNumber) {
        this.loanNumber = loanNumber;
    }

    public String getLoanType() {
        return loanType;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
