package com.company.drink.alcoholic;

public class Vodka extends AlcoholicDrink {
    private String baseIngredient;

    public Vodka(int id, String name, int volume, double alcoholPercentage, String baseIngredient) {
        super(id, name, volume, alcoholPercentage);
        this.baseIngredient = baseIngredient;
    }

    public void setBaseIngredient(String baseIngredient) {
        this.baseIngredient = baseIngredient;
    }

    public String getBaseIngredient() {
        return baseIngredient;
    }

    @Override
    public String getBestShakeNameForDrink() {
        return "Old Glory";
    }

    @Override
    public String toString() {
        return "Vodka { id: " + this.getId()
                + ", name: " + this.getName()
                + ", volume: " + this.getVolume()
                + ", alcoholPercentage: " + getAlcoholPercentage()
                + ", baseIngredient: " + this.getBaseIngredient()
                + ", }";
    }
}
