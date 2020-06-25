package com.company;

import com.company.drink.alcoholic.Gin;
import com.company.drink.alcoholic.GinType;
import com.company.drink.alcoholic.Vodka;
import com.company.drink.nonAlcoholic.NonAlcoholicDrink;

import java.util.Scanner;

public class DrinkBuilder {
    Scanner inputScanner = new Scanner(System.in);

    public NonAlcoholicDrink buildNonAlcoholicDrinkViaUserInput() {
        System.out.println("Enter ID:");
        final int id = Integer.parseInt(inputScanner.nextLine());

        System.out.println("Enter Name:");
        final String name = inputScanner.nextLine();

        System.out.println("Enter Volume in mililiters:");
        final int volume = Integer.parseInt(inputScanner.nextLine());

        System.out.println("Is drink soda?");
        final boolean isSoda = inputScanner.nextBoolean();

        return new NonAlcoholicDrink(id, name, volume, isSoda);
    }

    public Gin buildGinDrinkViaUserInput() {
        System.out.println("Enter ID:");
        final int id = Integer.parseInt(inputScanner.nextLine());

        System.out.println("Enter Name:");
        final String name = inputScanner.nextLine();

        System.out.println("Enter Volume in mililiters:");
        final int volume = Integer.parseInt(inputScanner.nextLine());

        System.out.println("Enter alcohol percentage:");
        final double alcoholPercentage = Double.parseDouble(inputScanner.nextLine());

        System.out.println("Enter Gin Type:");
        System.out.println("1. Juniper Favored");
        System.out.println("2. Traditional");
        System.out.println("3. Distilled");
        System.out.println("4. London");
        System.out.println("5. Flavored");
        final GinType gitType = GinType.values()[Integer.parseInt(inputScanner.nextLine()) - 1];

        return new Gin(id, name, volume, alcoholPercentage, gitType);
    }

    public Vodka buildVodkaDrinkViaUserInput() {
        System.out.println("Enter ID:");
        final int id = Integer.parseInt(inputScanner.nextLine());

        System.out.println("Enter Name:");
        final String name = inputScanner.nextLine();

        System.out.println("Enter Volume in mililiters:");
        final int volume = Integer.parseInt(inputScanner.nextLine());

        System.out.println("Enter alcohol percentage:");
        final double alcoholPercentage = Double.parseDouble(inputScanner.nextLine());

        System.out.println("Enter Base Ingredient:");
        final String baseIngredient = inputScanner.nextLine();

        return new Vodka(id, name, volume, alcoholPercentage, baseIngredient);
    }

}
