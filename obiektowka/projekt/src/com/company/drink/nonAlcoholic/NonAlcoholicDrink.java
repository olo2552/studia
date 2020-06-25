package com.company.drink.nonAlcoholic;

import com.company.drink.Drink;

public class NonAlcoholicDrink extends Drink implements IMixable {
    private boolean isSoda;

    public NonAlcoholicDrink(int id, String name, int volume, boolean isSoda) {
        super(id, name, volume);
        this.isSoda = isSoda;
    }

    public boolean getIsSoda() {
        return isSoda;
    }

    public void setSoda(boolean soda) {
        isSoda = soda;
    }

    @Override
    public void mixWith(NonAlcoholicDrink nonAlcoholicDrink) {
        System.out.println("SHAKE IT!");
        System.out.format("Here's your %s & %s drink!\n", this.getName(), nonAlcoholicDrink.getName());
    }

    @Override
    public String toString() {
        return "Non AlcoholicDrink { id: " + this.getId()
                + ", name: " + this.getName()
                + ", volume: " + this.getVolume()
                + ", isSoda: " + this.getIsSoda()
                + ", }";
    }
}
