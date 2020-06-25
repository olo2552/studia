package com.company.drink.alcoholic;



public class Gin extends AlcoholicDrink {
    private GinType type;

    public Gin(int id, String name, int volume, double alcoholPercentage, GinType type) {
        super(id, name, volume, alcoholPercentage);
        this.type = type;
    }

    public void setType(GinType type) {
        this.type = type;
    }

    public GinType getType() {
        return type;
    }

    @Override
    public String getBestShakeNameForDrink() {
        return "Gin'n'Tonic";
    }

    @Override
    public String toString() {
        return "Gin { id: " + this.getId()
                + ", name: " + this.getName()
                + ", volume: " + this.getVolume()
                + ", alcoholPercentage: " + getAlcoholPercentage()
                + ", type: " + this.getType()
                + ", }";
    }
}
