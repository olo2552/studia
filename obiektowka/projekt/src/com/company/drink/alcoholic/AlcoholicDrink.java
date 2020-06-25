package com.company.drink.alcoholic;

import com.company.drink.Drink;

public abstract class AlcoholicDrink extends Drink {
    private double alcoholPercentage;

    public AlcoholicDrink(int id, String name, int volume, double alcoholPercentage) {
        super(id, name, volume);
        this.alcoholPercentage = alcoholPercentage;
    }

    public void setAlcoholPercentage(double alcoholPercentage) {
        this.alcoholPercentage = alcoholPercentage;
    }

    public double getAlcoholPercentage() {
        return alcoholPercentage;
    }

    public abstract String getBestShakeNameForDrink();
}
