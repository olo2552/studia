package com.company;

import com.company.drink.alcoholic.Vodka;
import com.company.drink.nonAlcoholic.NonAlcoholicDrink;

public class Main {

    public static void main(String[] args) {
        final IOControl ioControl = new IOControl();
        final MiniBar miniBar = new MiniBar();

        miniBar.addProduct(new NonAlcoholicDrink(1, "adfs", 123, true));
        miniBar.addProduct(new Vodka(2,"asdfasdfa", 12455, 44.4, "sdafas"));

        int methodIndex;
        do {
            methodIndex = ioControl.getMethodIndex();

            if (methodIndex == 1) {
                try {
                    miniBar.addProduct(ioControl.handleAddNewDrinkCommand());
                } catch (Exception error) {
                    System.out.println(error);
                }
            }

            if (methodIndex == 2) {
                miniBar.removeProductById(ioControl.handleRemoveDrinkById());
            }

            if (methodIndex == 3) {
                ioControl.handleListAllDrinks(miniBar.logAllProducts());
            }

            if (methodIndex == 4) {
                ioControl.handleListAllSubType(miniBar);
            }

            if (methodIndex == 5) {
                ioControl.handleThinAllMixableDrinks(miniBar);
            }

            if (methodIndex == 6) {
                ioControl.handleGiveTip();
            }
        } while(methodIndex != 0);


    }
}
