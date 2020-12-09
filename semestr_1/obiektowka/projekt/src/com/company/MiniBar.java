package com.company;

import com.company.drink.Drink;
import com.company.drink.nonAlcoholic.IMixable;
import com.company.drink.nonAlcoholic.NonAlcoholicDrink;

import java.util.ArrayList;
import java.util.List;

public class MiniBar {
    private static double tips;
    private final List<Drink> barProducts;

    public MiniBar() {
        this.barProducts = new ArrayList<>();
    }

    public static void giveTip(double tip) {
        MiniBar.tips += tip;
    }

    public static double getTips() {
        return MiniBar.tips;
    }

    public void addProduct(Drink product) {
        this.barProducts.add(product);
    }

    public void removeProductById(int drinkId) {
        this.barProducts.removeIf(product -> product.getId() == drinkId);
    }

    public List<Drink> logAllProducts() {
        return this.barProducts;
    }

    public void logAllProductsOfSubType(Class<? extends Drink> productType) {
        this.barProducts.stream()
                .filter(drink -> drink.getClass() == productType)
                .forEach(drink -> System.out.print(drink.toString()));
    }

    public void thinAllMixabeDrinks() {
        final NonAlcoholicDrink water = new NonAlcoholicDrink(-1, "Water", 100, false);
        this.barProducts.stream()
                .filter(drink -> drink instanceof IMixable)
                .map(drink -> (IMixable)drink)
                .forEach(drink -> drink.mixWith(water));
    }
}
