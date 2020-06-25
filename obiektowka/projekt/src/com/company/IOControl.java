package com.company;

import com.company.drink.Drink;
import com.company.drink.alcoholic.AlcoholicDrink;
import com.company.drink.alcoholic.Gin;
import com.company.drink.alcoholic.Vodka;
import com.company.drink.nonAlcoholic.NonAlcoholicDrink;

import java.util.List;
import java.util.Scanner;

public class IOControl {
    Scanner inputScanner = new Scanner(System.in);
    DrinkBuilder drinkBuilder = new DrinkBuilder();
    public int getMethodIndex() {
        System.out.println("Type number of the command you want to enter:");
        System.out.println("1. Add new drink.");
        System.out.println("2. Remove a drink.");
        System.out.println("3. List all drinks.");
        System.out.println("4. List all drinks of subtype.");
        System.out.println("5. Thin all mixabe drinks.");
        System.out.println("6. Give tip!");
        System.out.println("0. Exit.");

        final String input = inputScanner.nextLine();
        return Integer.parseInt(input);
    }

    public Drink handleAddNewDrinkCommand() throws Exception {
        System.out.println("Type index number of the drink you want to add:");
        System.out.println("1. Add Non Alcoholic Drink.");
        System.out.println("2. Add Gin.");
        System.out.println("3. Add Vodka.");

        final String input = inputScanner.nextLine();
        final int drinkTypeIndex = Integer.parseInt(input);

        if (drinkTypeIndex == 1) {
            return this.drinkBuilder.buildNonAlcoholicDrinkViaUserInput();
        }

        if (drinkTypeIndex == 2) {
            return this.drinkBuilder.buildGinDrinkViaUserInput();
        }

        if (drinkTypeIndex == 3) {
            return this.drinkBuilder.buildVodkaDrinkViaUserInput();
        }

        throw new Exception("Enter correct index of drink");
    }

    public int handleRemoveDrinkById() {
        System.out.println("Type id of the product to remove:");
        final String input = inputScanner.nextLine();
        return Integer.parseInt(input);
    }

    public void handleListAllDrinks(List<Drink> drinks) {
        System.out.println("These are products in the miniBar:");
        drinks.forEach(drink -> System.out.println(drink.toString()));
    }

    public void handleListAllSubType(MiniBar miniBar) {
        System.out.println("Type index of the subtype you want to display:");
        System.out.println("1. Alcoholic Drinks.");
        System.out.println("2. Gins.");
        System.out.println("3. Vodkas.");
        System.out.println("4. Non Alcoholic Drinks.");

        final String input = inputScanner.nextLine();
        final int subtypeIndex = Integer.parseInt(input);

        System.out.println("These are products in the frigde:");

        if (subtypeIndex == 1) {
            miniBar.logAllProductsOfSubType(AlcoholicDrink.class);
        }

        if (subtypeIndex == 2) {
            miniBar.logAllProductsOfSubType(Gin.class);
        }

        if (subtypeIndex == 3) {
            miniBar.logAllProductsOfSubType(Vodka.class);
        }

        if (subtypeIndex == 4) {
            miniBar.logAllProductsOfSubType(NonAlcoholicDrink.class);
        }
    }

    public void handleThinAllMixableDrinks(MiniBar miniBar) {
        miniBar.thinAllMixabeDrinks();
    }

    public void handleGiveTip() {
        System.out.println("What amount do you want to tip?");
        final String input = inputScanner.nextLine();
        final double tip = Double.parseDouble(input);


        MiniBar.giveTip(tip);
        System.out.println("WOW! Now jar of tips has: " + MiniBar.getTips());
    }
}
